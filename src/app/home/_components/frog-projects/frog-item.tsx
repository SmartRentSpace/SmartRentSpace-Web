import React, { FC } from "react";
import Image from "next/image";
import { IFrogItem } from "../../interface/frog-project";
import SvgIconFrog from "../../../../public/images/logo-frog.svg";
import SvgIconCoin from "../../../../public/images/icon-coin.svg";

interface IProps {
  frogData: IFrogItem;
}
const FrogItem: FC<IProps> = ({ frogData }) => {
  return (
    <div className="bg-[#b8c4a7] rounded-md hover:bg-[#4caf50] cursor-pointer h-24">
      <div className="flex">
        <Image
          className="w-8 h-8 rounded-md mt-3 ml-3"
          src={SvgIconFrog}
          alt="frog"
        />
        <div className="flex flex-col flex-auto p-3 overflow-hidden">
          <div className="font-bold">{frogData._title}</div>
          <div
            className="truncate ... text-[#5B5B5B] text-sm"
            title={frogData._description}
          >
            {frogData._description}
          </div>
          <div className="flex flex-row justify-end items-center">
            <Image
              className="w-4 h-4 mr-1"
              src={SvgIconCoin}
              alt="coin"
            ></Image>
            <span>{`${frogData._gaolAmount} memecoin`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrogItem;
