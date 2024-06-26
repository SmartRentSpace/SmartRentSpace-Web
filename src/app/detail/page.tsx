"use client";

import React, { useState, useEffect } from "react";
import { BaseError, useAccount } from "wagmi";
import { useSearchParams, useRouter } from "next/navigation";
import { formatEther, parseEther } from "viem";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import Link from "next/link";
import { useTheGraph } from "@/hooks/useGraph";
import { useWriteNewProject, useGetProject } from "@/hooks/useContract";
import { usePercentInfo } from "@/hooks/uesPercentInfo";

import { toLowerCaseEthereumAddress } from "@/utils/util";

import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Progress,
  message,
} from "antd";
import { DetailData } from "@/app/detail/_interface/detail";
import StepModal from "./_components/stepModal";
import ExamineModal from "./_components/examineModal";
import InvermentModal from "./_components/invermentModal";
import Inverment from "./_components/inverment";
import Examine from "./_components/examine";
import Loading from "../lodaing";

import styles from "../../styles/detail.module.scss";
import "../../styles/detail.css";

dayjs.extend(utc);

const graphApiUrl = process.env.NEXT_PUBLIC_GRAPH_API_URL;
console.log(graphApiUrl, "graphApiUrl");
const DetailPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData] = Form.useForm();
  const { address } = useAccount();
  const [percent, setPercent] = useState(0);
  const [processForm, setProcessForm] = useState({
    Step1: "",
    Step2: "",
    Step3: "",
    Step4: "",
  });
  const stepToPercent = new Map([
    [0, 0],
    [1, 30],
    [2, 50],
    [3, 70],
    [4, 100],
  ]);

  const percentToStep = new Map([
    [0, 0],
    [30, 1],
    [50, 2],
    [70, 3],
    [100, 4],
  ]);
  const percentToStepName = new Map([
    [30, "Step1"],
    [50, "Step2"],
    [70, "Step3"],
    [100, "Step4"],
  ]);
  const router = useRouter();
  const {
    postCB, data, isError, isSuccess, isPending, error: creatProError, failureReason,
  } = useWriteNewProject();
  const { getPercentInfo } = usePercentInfo();
  // loading及异常
  const [messageApi, contextHolder] = message.useMessage();
  // 编辑
  const [isEditing, setIsEditing] = useState(false);
  // 非创建人(投资人->已投资或潜在投资)
  const [isInvestors, setIsInvestors] = useState(false);
  // 项目是否已经达到众筹目标
  const [isReachGoal, setIsReachGoal] = useState(false);
  // 判断用户是否投资过
  const [hasInvest, setHasInvest] = useState(false);
  // 判断用户是否已经在此进度审核过项目
  const [hasCurrentPercentExamine, setHasCurrentPercentExamine] = useState(false);

  // 当前项目众筹金额
  const [projectAmount, setProjectAmount] = useState<bigint | undefined>(undefined);
  // 当前项目目标金额
  const [targetAmount, setTargetAmount] = useState<bigint | undefined>(undefined);

  type ProgressReviewed = {
    projectId:string;
    approved:string;
    blockTimestamp:string;
    currentProgress:string;
    comment:string;
    Investor: string;
    // 其他字段
  };

type projectFunded = {
    supporter:string
    amount:string;
    blockTimestamp:string;
}
type progressUpdated = {
  projectId:string;
    progress:string;
    details:string;
    blockTimestamp:string;
    currentProgress:string;
}
// 审核信息数组
const [progressRevieweds, setProgressRevieweds] = useState<ProgressReviewed[]>([]);

// 更新信息组
const [progressUpdateds, setProgressUpdateds] = useState<progressUpdated[]>([]);

// 投资信息组
const [projectFundeds, setprojectFundeds] = useState<projectFunded[]>([]);

const [graphLoading, setGraphLoading] = useState(false);

// 项目投资进度
const formatToTwoDecimalPlaces = (value: number): string => value.toFixed(2);
const calculateRatio = (amountETH: bigint, targetAmountETH: bigint): string => {
  const amount = Number(amountETH);
  const targetAmountInCB = Number(targetAmountETH);
  const ratio = amount / targetAmountInCB;
  return formatToTwoDecimalPlaces(ratio);
};
const amountETH = projectAmount ? formatEther(projectAmount) : 0;
const targetAmountETH = targetAmount ? formatEther(targetAmount) : 0;
const ivermentPercent = projectAmount && targetAmount ? Number(calculateRatio(projectAmount, targetAmount)) * 100 : 0;

// 审核列表弹框
const [showExamineListModal, setShowExamineListModal] = useState(false);
const showExamineList = () => {
  setShowExamineListModal(true);
};
const closeExamineListModal = () => {
  setShowExamineListModal(false);
};

// 投资列表弹框
const [showInvermentListModal, setshowInvermentListModal] = useState(false);
const showInvermentList = () => {
  setshowInvermentListModal(true);
};
const closeInvermentListModal = () => {
  setshowInvermentListModal(false);
};
  // 时间格式处理

const disabledDate = (current: any) => {
  // 将 current 转换为 dayjs 对象，如果 current 为空，则返回 true，即禁用
  const currentDayjs = current ? dayjs(current) : null;

  // 获取当前时间的 dayjs 对象，并将精度缩小到分钟
  const now = dayjs().second(0).millisecond(0);

  // 如果 currentDayjs 存在且在当前时间之前，则禁用
  return !!(currentDayjs && currentDayjs.isBefore(now));
};
const query = Object.fromEntries(useSearchParams().entries());
const {
  projectId,
} = query;

// 审核回调

  type examineDataType ={
    comment:string,
    approved:boolean
  }

  const examineOk = (examineData:examineDataType) => {
    console.log(examineData, "examineData");
    postCB([
      projectId,
      percent,
      examineData.comment,
      examineData.approved,
    ], "reviewProgress", undefined);
  };

  // 投资金额
  const inveronOk = (inverAmount:bigint) => {
    console.log(inverAmount, typeof inverAmount, "amount");
    postCB([projectId], "supportProjectWithEth", inverAmount);
  };

  // 更新进度
  const handleOk = (newData: any) => {
    console.log("Updated data:", newData);

    const updateStep = percentToStep.get(percent);

    // 百分比不符合规则
    if (updateStep === undefined) {
      messageApi.open({
        type: "error",
        content: "Percentages are not in accordance with the rules of the contract",
      });
      return;
    }
    const updatePercent = stepToPercent.get(updateStep + 1);

    if (updatePercent === undefined) return;

    const stepName = percentToStepName.get(updatePercent);

    if (stepName === undefined) return;
    const args = [
      Number(projectId),
      updatePercent,
      newData[stepName],
    ];
    console.log(args, "进度args");
    postCB(args, "updateProgress", undefined);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const {
    data: projectsData,
  } = useGetProject([Number(projectId || 0)]);
  console.log(projectsData, "projectsData");

  const {
    data: detailsRes,
    loading,
    error,
  } = useTheGraph({
    url: graphApiUrl || "",
    query: `{
      projectCreateds(where:{projectId: ${projectId}}) {    id    projectId    creator    goalAmount  _title  deadline    _description    _link    blockTimestamp  }
      fundsDistributeds(where:{projectId: ${projectId}}) {   id  projectId    amount  blockTimestamp  }
      progressUpdateds (where:{projectId: ${projectId}}){   id   projectId   progress    details    blockTimestamp  }
      progressRevieweds(where:{projectId: ${projectId}}) {    id    projectId    approved comment Investor  blockTimestamp currentProgress  }
      projectFundeds(where:{projectId: ${projectId}}) {  id  supporter amount blockTimestamp }
      }`,
    // query: `{
    //   projectCreateds {    id    projectId    creator    goalAmount    deadline _title   _description    _link    blockTimestamp  }
    //   fundsDistributeds {   id  projectId    amount  blockTimestamp  }
    //   progressUpdateds {   id   projectId   progress    details    blockTimestamp  }
    //   progressRevieweds {    id    projectId       blockTimestamp  }
    //   }`,
  });
  useEffect(() => {
    console.log(isPending);
    if (isPending) {
      messageApi.open({
        type: "loading",
        content: "Action in progress..",
        duration: 0,
      });
    } else if (!isPending && isSuccess) {
      console.log(isSuccess, "isSuccess");
      // Dismiss manually and asynchronously

      router.push("/home", { scroll: false });
      setTimeout(messageApi.destroy, 2500);
    } else if (!isPending && isError) {
      setTimeout(messageApi.destroy, 2500);
      if (isError) {
        console.log(isError, creatProError, failureReason, "isError");
        console.log((creatProError as BaseError)?.shortMessage, "@@@@");
        const content = (creatProError as BaseError)?.shortMessage;
        messageApi.open({
          type: "error",
          content,
        });
      }
    }
  }, [isPending, isError, isSuccess]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  // 信息表单
  const onFinish = (values: any) => {
    const {
      projectName, projectLink, projectNeedETH, projectDescription, projectDeadline,
    } = values;
    // 转化为UTC时间戳
    const projectDeadlineUTC = projectDeadline ? dayjs(projectDeadline).utc().valueOf() : null;

    const projectNeedETHForWei = parseEther(String(projectNeedETH));
    const args = [
      projectName,
      projectDescription,
      projectLink,
      projectNeedETHForWei,
      projectDeadlineUTC,
    ];
    console.log(args, "args");
    postCB(args, "createProject", undefined);
  };

  const comTitle = () => {
    let title;
    let title2 = "";
    const nexrPercent = percentToStep.get(percent) ?? 0; // Provide a default value of 0 if undefined
    if (projectId) {
      if (isInvestors) {
        title = "Project Info";
        if (hasInvest) {
          // 审核组件
          title2 = `Current Project Progress Review ${percent}% `;
        } else {
          // 投资组件
          title2 = "Investment Information";
        }
      } else {
        title = "Progress Update";
      }
    } else {
      title = "Project Registration";
    }

    return {
      title,
      title2,
    };
  };

  useEffect(() => {
    if (projectId) {
      setGraphLoading(true);
    }
    if (projectId && detailsRes) {
      setGraphLoading(false);
      console.log(detailsRes, "detailsRes");
      setIsEditing(true);
      // Fetch the project data by ID and populate the form (mocked here)
      const { data: detailData } = detailsRes as {data: DetailData};
      const formInfo = detailData.projectCreateds && detailData.projectCreateds.find((item) => item.projectId === projectId);
      if (formInfo) { // 表单数据
        const bigIntValue = BigInt(formInfo.goalAmount);
        const ethValue = formatEther(bigIntValue);
        const projectNeedETH = Number(ethValue);
        const projectName = formInfo._title;
        const projectDeadlineNum = formInfo.deadline ? parseInt(formInfo.deadline, 10) / 1000 : null;
        const offsetInMinutes = new Date().getTimezoneOffset();
        const offsetHours = offsetInMinutes / 60 > 0 ? -(offsetInMinutes / 60) : Math.abs(offsetInMinutes / 60);
        console.log(offsetHours, "offsetHours");
        const projectDeadline = projectDeadlineNum !== null ? dayjs.unix(projectDeadlineNum).utc().utcOffset(offsetHours) : null;
        const creatorAddress = formInfo.creator;
        console.log("creatorAddress", creatorAddress, typeof creatorAddress);
        console.log("address", address, typeof address);

        // const creatorAddress = "0x90F79bf6EB2c4f870365E785982E1f101E93b906";
        console.log(toLowerCaseEthereumAddress(address) !== creatorAddress, "address !== creatorAddress");
        if (toLowerCaseEthereumAddress(address) !== creatorAddress) setIsInvestors(true);
        const fetchedData = {
          projectName,
          projectDescription: formInfo._description,
          projectNeedETH,
          projectLink: formInfo._link,
          projectDeadline,
        };
        formData.setFieldsValue(fetchedData);
        console.log(formData, "formData");
      }

      // 审核信息
      if (detailData.progressRevieweds && detailData.progressRevieweds.length) {
        setProgressRevieweds(detailData.progressRevieweds);
      }

      // 更新信息
      if (detailData.progressUpdateds && detailData.progressUpdateds.length) {
        setProgressUpdateds(detailData.progressUpdateds);
      }

      // 投资信息
      if (detailData.projectFundeds && detailData.projectFundeds.length) {
        setprojectFundeds(detailData.projectFundeds);
        const result = detailData.projectFundeds.find((item) => item.supporter === toLowerCaseEthereumAddress(address));
        if (result) setHasInvest(true);
      }
    }
    if (projectsData && projectId) {
      setProjectAmount(projectsData[5]);
      setTargetAmount(projectsData[4]);
      setIsReachGoal(projectsData[8]);

      const currentPercent = parseInt(projectsData[9], 10);
      setPercent(currentPercent);
    }
  }, [projectId, detailsRes, projectsData]);

  useEffect(() => {
    const examineAddress = toLowerCaseEthereumAddress(address);
    const currentPercentArr = progressRevieweds.filter((item) => item.currentProgress === String(percent));
    if (currentPercentArr.length) {
      const result = currentPercentArr.find((item) => item.Investor === examineAddress && item.approved);
      console.log(result, "resultresultbug");
      if (result) setHasCurrentPercentExamine(true);
    }
  }, [percent, progressRevieweds]);

  useEffect(() => {
    // 获取进度信息
    if (percent) {
      const { detailObj } = getPercentInfo(progressUpdateds, percent);
      console.log(detailObj, "detailObjdetailObj");
      setProcessForm(detailObj);
    }
  }, [percent, progressUpdateds]);

  return (
    <div className={`${styles.container} mt-10 `}>
      {
      projectId && graphLoading
        ? (
          <Loading />
        ) : ""
    }
      <div className={styles.title}>{comTitle().title}</div>
      {contextHolder}
      <Form
        disabled={isInvestors}
        className={`${styles.formBox} detailFrom`}
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        form={formData}
        size="large"
        style={{ width: 640 }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Project Name"
          name="projectName"
          rules={[
            { required: true, message: "Please input the project name!" },
          ]}
        >
          <Input disabled={isEditing} />
        </Form.Item>
        <Form.Item
          label="Project Description"
          name="projectDescription"
          rules={[
            {
              required: true,
              message: "Please input the project description!",
            },
          ]}
        >
          <Input.TextArea rows={4} disabled={isEditing} />
        </Form.Item>

        <Form.Item
          label="Project Link"
          name="projectLink"
          rules={[
            { required: true, message: "Please input the project link!" },
          ]}
        >

          <Input addonBefore="https://" disabled={isEditing} />

        </Form.Item>
        <Form.Item
          label="Project Need Amount (ETH)"
          name="projectNeedETH"
          rules={[
            {
              required: true,
              message: "Please input the amount of ETH needed!",
            },
          ]}
        >
          <InputNumber disabled={isEditing} style={{ width: 210 }} />
        </Form.Item>
        <Form.Item
          label="Project Deadline"
          name="projectDeadline"
          rules={[
            { required: true, message: "Please input the project deadline!" },
          ]}
        >
          <DatePicker
            showTime={{ format: "HH:mm" }}
            style={{ width: 210 }}
            disabled={isEditing}
            disabledDate={disabledDate}
          />

        </Form.Item>
        {!isInvestors && !isEditing ? (
          <Form.Item style={{ textAlign: "right" }}>
            <Button
              type="primary"
              loading={isPending}
              htmlType="submit"
              style={{ backgroundColor: "#97D44A" }}
            >
              Submit
            </Button>
          </Form.Item>
        ) : (
          ""
        )}

        {
          isEditing ? (
            <Form.Item label="Progress of Crowdfunding">
              <Progress
                type="circle"
                percent={ivermentPercent}
                strokeColor="#97D44A"
                trailColor="white"
                size={60}
              />
              <span className="ml-2">
                {`${amountETH} / ${targetAmountETH}ETH`}
              </span>
            </Form.Item>
          ) : ""
        }

        {
          isEditing ? (
            <Form.Item
              label="Inverment Information"
              style={{ textAlign: "right" }}
            >
              <Button
                ghost
                disabled={false}
                className={styles.processBtn}
                onClick={showInvermentList}
              >
                Detail
              </Button>
            </Form.Item>
          ) : ""
        }

        {
          isEditing ? (
            <Form.Item
              label="Audit information"
              style={{ textAlign: "right" }}
            >
              <Button
                ghost
                disabled={false}
                className={styles.processBtn}
                onClick={showExamineList}
              >
                Detail
              </Button>
            </Form.Item>
          ) : ""
        }
        {
         isEditing ? (
           <Form.Item label="Project Progress" name="projectProcessDetail">
             <div
               style={{
                 display: "flex",
                 justifyContent: "space-between",
                 alignItems: "center",
                 height: "100%",
               }}
             >
               <Progress
                 percent={percent}
                 steps={4}
                 strokeColor="#97D44A"
                 trailColor="#B5C5A4"
                 size={40}
                 className={styles.progress}
               />
               <Button
                 ghost
                 className={styles.processBtn}
                 onClick={showModal}
                 disabled={false}
               >
                 {isInvestors || (percent === 100) ? "Detail" : "Next Step"}
               </Button>
             </div>
           </Form.Item>
         ) : ""
      }
      </Form>

      <StepModal
        isReachGoal={isReachGoal}
        percent={percent}
        isInvestors={isInvestors}
        isModalOpen={isModalOpen}
        loading={isPending}

        initialData={processForm}
        onOk={handleOk}
        onCancel={handleCancel}
      />
      <ExamineModal
        progressRevieweds={progressRevieweds}
        showModal={showExamineListModal}
        onCancel={closeExamineListModal}
      />
      <InvermentModal
        projectFundeds={projectFundeds}
        showModal={showInvermentListModal}
        onCancel={closeInvermentListModal}
      />
      {
      isInvestors && !isReachGoal
      // true ?
        ? (
          <Inverment
            title={comTitle().title2}
            loading={isPending}
            inveronOk={inveronOk}
          />
        ) : (
          ""
        )
      }

      {isInvestors && isReachGoal && hasInvest && !hasCurrentPercentExamine && !!percent ? (
        <Examine
          title={comTitle().title2}
          loading={isPending}
          percent={percent}
          examineOk={examineOk}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default DetailPage;
