(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[654],{17789:function(e,t,o){Promise.resolve().then(o.bind(o,84682))},84682:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return V}});var r=o(57437),s=o(2265),n=o(26735),l=o(16463),a=o(85053),i=o(28509),c=o(62737),d=o.n(c),p=o(8558),u=o.n(p),m=o(51685),g=o(83172);let h=e=>0===e.length?null:e.reduce((e,t)=>t.blockTimestamp>e.blockTimestamp?t:e,e[0]),j=new Map([[30,"Step1"],[50,"Step2"],[70,"Step3"],[100,"Step4"]]),x=()=>({getPercentInfo:e=>{var t,o;let{progressUpdateds:r}=e,{progressRevieweds:s}=e,n=[30,50,70,100],l={Step1:"",Step2:"",Step3:"",Step4:""},a=0,i="";if((null==s?void 0:s.length)?a=null===(t=h(s.map(e=>({blockTimestamp:Number(e.blockTimestamp),currentProgress:Number(e.currentProgress)}))))||void 0===t?void 0:t.currentProgress:(null==r?void 0:r.length)&&(a=null===(o=h(r.map(e=>({blockTimestamp:Number(e.blockTimestamp),currentProgress:Number(e.progress)}))))||void 0===o?void 0:o.currentProgress),a){n.filter(e=>e<=a).forEach(e=>{let t=j.get(e);if(t){var o;console.log(t,"key"),l[t]=(null==r?void 0:null===(o=r.find(t=>t.progress===String(e)))||void 0===o?void 0:o.details)||""}});let e=n[n.indexOf(a)+1],t=j.get(e);console.log(e,t,"nextPercent"),i=t?l[t]:""}return{currentPercent:a||0,detailObj:l,examineDeatil:i}}}),f=e=>e?e.startsWith("0x")?"0x".concat(e.substring(2).toLowerCase()):e:"";var v=o(77631),b=o(58569),S=o(79226),w=o(29108),y=o(41306),I=o(46682),Z=o(52943),P=o(27689),C=o(58555),N=o.n(C);o(4493);let k="1.what to do\n2.\n3.\n...";var T=e=>{let{isModalOpen:t,initialData:o,onOk:n,onCancel:l,isInvestors:a,percent:i,loading:c}=e,[d]=v.Z.useForm();return(0,s.useEffect)(()=>{o&&d&&d.setFieldsValue(o)},[o,d]),(0,r.jsx)(P.default,{title:"Project Steps",className:"".concat(N().container," stepModal"),open:t,width:600,onCancel:l,footer:null,children:(0,r.jsxs)(v.Z,{form:d,className:"".concat(N().formBox," detailFrom"),labelCol:{span:5},wrapperCol:{span:24},layout:"horizontal",size:"large",disabled:a,style:{width:500},onFinish:()=>{d.validateFields().then(e=>{n(e)}).catch(e=>{console.log("Validate Failed:",e)})},children:[(0,r.jsx)(v.Z.Item,{label:"Step1(30%):",name:"Step1",children:(0,r.jsx)(S.Z.TextArea,{rows:4,placeholder:k,disabled:i>=30||a})}),(0,r.jsx)(v.Z.Item,{label:"Step2(50%):",name:"Step2",children:(0,r.jsx)(S.Z.TextArea,{rows:4,placeholder:k,disabled:i>=50||i<30||a})}),(0,r.jsx)(v.Z.Item,{label:"Step3(70%):",name:"Step3",children:(0,r.jsx)(S.Z.TextArea,{rows:4,placeholder:k,disabled:i>=70||i<50||a})}),(0,r.jsx)(v.Z.Item,{label:"Step4(100%):",name:"Step4",children:(0,r.jsx)(S.Z.TextArea,{rows:4,placeholder:k,disabled:i>=100||i<70||a})}),a?"":(0,r.jsx)(v.Z.Item,{style:{textAlign:"right"},children:(0,r.jsx)(I.ZP,{type:"primary",htmlType:"submit",loading:c,size:"large",style:{backgroundColor:"#97D44A"},children:"submit"})})]})})},_=o(3650),A=o(47348);let F=e=>{let t=new Date(1e3*Number(e)),o=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0"),n=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0"),a=String(t.getSeconds()).padStart(2,"0");return"".concat(o,"-").concat(r,"-").concat(s," ").concat(n,":").concat(l,":").concat(a)};var D=e=>{let{progressRevieweds:t,showModal:o,onCancel:s}=e;console.log(t,"progressRevieweds");let n=t.map(e=>({...e,time:F(e.blockTimestamp),key:e.id}));return console.log(n,"newProgressReviewedsnewProgressRevieweds"),console.log(F("1719215421"),"convertTimestampToLocalTim"),(0,r.jsx)(P.default,{title:"Audit information",className:"".concat(N().container," stepModal"),open:o,width:900,onCancel:()=>{s()},footer:null,children:(0,r.jsx)(A.Z,{columns:[{title:"auditor",dataIndex:"Investor",width:250},{title:"progress",dataIndex:"currentProgress",width:150,render:(e,t)=>{let{currentProgress:o}=t;return(0,r.jsx)("span",{children:"".concat(o,"%")})}},{title:"comment",dataIndex:"comment",width:250},{title:"approved",dataIndex:"approved",width:150,render:(e,t)=>{let{approved:o}=t;return(0,r.jsx)(_.Z,{color:o?"green":"volcano",children:o?"Approved":"Not Approved"})}},{title:"time",dataIndex:"time",width:200}],dataSource:n,scroll:{y:240}})})};let E=e=>{let t=new Date(1e3*Number(e)),o=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0"),n=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0"),a=String(t.getSeconds()).padStart(2,"0");return"".concat(o,"-").concat(r,"-").concat(s," ").concat(n,":").concat(l,":").concat(a)};var B=e=>{let{projectFundeds:t,showModal:o,onCancel:s}=e;console.log(t,"progressRevieweds");let n=t.map(e=>({...e,time:E(e.blockTimestamp),amountETH:(0,a.d)(BigInt(e.amount)),key:e.id}));return console.log(n,"newProjectFundeds"),(0,r.jsx)(P.default,{title:"Inverment information",className:"".concat(N().container," stepModal"),open:o,width:900,onCancel:()=>{s()},footer:null,children:(0,r.jsx)(A.Z,{columns:[{title:"supporter",dataIndex:"supporter",width:250},{title:"amount(ETH)",dataIndex:"amountETH",width:250},{title:"time",dataIndex:"time",width:250}],dataSource:n,scroll:{y:240}})})},M=e=>{let{title:t,inveronOk:o,loading:s}=e,{confirm:n}=P.default,[l]=v.Z.useForm();return(0,r.jsxs)("div",{className:"flex justify-center items-center flex-col",children:[(0,r.jsx)("div",{className:N().title,style:{marginTop:20,marginBottom:0},children:t}),(0,r.jsx)(v.Z,{className:"".concat(N().formBox," detailFrom"),labelCol:{span:7},wrapperCol:{span:24},layout:"horizontal",form:l,size:"large",style:{width:640},children:(0,r.jsx)(v.Z.Item,{label:"investment amount",name:"amount",rules:[{required:!0,message:"Please input the investment amount!"}],children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"100%"},children:[(0,r.jsx)(w.Z,{style:{width:200}}),(0,r.jsx)(I.ZP,{ghost:!0,className:N().processBtn,loading:s,onClick:()=>{l.validateFields().then(e=>{console.log(e,"values");let{amount:t}=e,r=(0,i.f)(String(t));n({title:"Investment information",content:"Are you sure you want to invest in ".concat(t," ETH?"),onOk(){o(r)},onCancel(){console.log("Cancel")}})}).catch(e=>{console.log("Validate Failed:",e)})},children:"invest"})]})})})]})},O=o(44052),z=e=>{let{title:t,examineOk:o,percent:s,loading:n}=e,{confirm:l}=P.default,[a]=v.Z.useForm();return console.log(s,"percentpercent"),(0,r.jsxs)("div",{className:"flex justify-center items-center flex-col",children:[(0,r.jsx)("div",{className:N().title,style:{marginTop:20,marginBottom:0},children:t}),(0,r.jsxs)(v.Z,{className:"".concat(N().formBox," detailFrom"),labelCol:{span:7},wrapperCol:{span:24},initialValues:{approved:!0,auditOpinion:""},layout:"horizontal",form:a,size:"large",style:{width:640},children:[(0,r.jsx)(v.Z.Item,{label:"Be approved or not",name:"approved",children:(0,r.jsx)(O.ZP.Group,{options:[{label:"Yes",value:!0},{label:"No",value:!1}]})}),(0,r.jsx)(v.Z.Item,{label:"Audit opinion",name:"comment",children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"100%"},children:(0,r.jsx)(S.Z.TextArea,{rows:4})})}),(0,r.jsx)(v.Z.Item,{style:{textAlign:"right"},children:(0,r.jsx)(I.ZP,{type:"primary",onClick:()=>{l({title:"Examine",content:"Confirm submission",onOk(){a.validateFields().then(e=>{console.log("OK",e),o(e)})},onCancel(){console.log("Cancel")}})},loading:n,style:{backgroundColor:"#97D44A"},children:"submit"})})]})]})},R=o(47394),H=o(78421),q=e=>(0,r.jsx)("div",{className:"text-[#50d71e] flex justify-center items-center text-white font-bold",children:(0,r.jsx)(R.Z,{gap:"small",vertical:!0,children:(0,r.jsx)(R.Z,{gap:"small",children:(0,r.jsx)(H.Z,{tip:"Loading",size:"large",fullscreen:!0})})})});d().extend(u());let L="https://api.studio.thegraph.com/query/76625/frogfund/version/latest";console.log(L,"graphApiUrl");var V=()=>{var e,t;let[o,c]=(0,s.useState)(!1),[p]=v.Z.useForm(),{address:u}=(0,n.m)(),[h,j]=(0,s.useState)(0),[P,C]=(0,s.useState)({Step1:"",Step2:"",Step3:"",Step4:""}),k=new Map([[0,0],[1,30],[2,50],[3,70],[4,100]]),_=new Map([[0,0],[30,1],[50,2],[70,3],[100,4]]),A=new Map([[30,"Step1"],[50,"Step2"],[70,"Step3"],[100,"Step4"]]),F=(0,l.useRouter)(),{postCB:E,data:O,isError:R,isSuccess:H,isPending:V,error:Y,failureReason:U}=(0,g.xe)(),{getPercentInfo:X}=x(),[G,J]=b.ZP.useMessage(),[W,K]=(0,s.useState)(!1),[Q,$]=(0,s.useState)(!1),[ee,et]=(0,s.useState)(!1),[eo,er]=(0,s.useState)(!1),[es,en]=(0,s.useState)(!1),[el,ea]=(0,s.useState)(void 0),[ei,ec]=(0,s.useState)(void 0),[ed,ep]=(0,s.useState)([]),[eu,em]=(0,s.useState)([]),[eg,eh]=(0,s.useState)(!1),ej=e=>e.toFixed(2),ex=el?(0,a.d)(el):0,ef=ei?(0,a.d)(ei):0,ev=el&&ei?100*Number((e=el,t=ei,ej(Number(e)/Number(t)))):0,[eb,eS]=(0,s.useState)(!1),[ew,ey]=(0,s.useState)(!1),{projectId:eI}=Object.fromEntries((0,l.useSearchParams)().entries()),{data:eZ}=(0,g.YI)([Number(eI||0)]);console.log(eZ,"projectsData");let{data:eP,loading:eC,error:eN}=(0,m.F)({url:L||"",query:"{\n      projectCreateds(where:{projectId: ".concat(eI,"}) {    id    projectId    creator    goalAmount  _title  deadline    _description    _link    blockTimestamp  }\n      fundsDistributeds(where:{projectId: ").concat(eI,"}) {   id  projectId    amount  blockTimestamp  }\n      progressUpdateds (where:{projectId: ").concat(eI,"}){   id   projectId   progress    details    blockTimestamp  }\n      progressRevieweds(where:{projectId: ").concat(eI,"}) {    id    projectId    approved comment Investor  blockTimestamp currentProgress  }\n      projectFundeds(where:{projectId: ").concat(eI,"}) {  id  supporter amount blockTimestamp }\n      }")});(0,s.useEffect)(()=>{if(console.log(V),V)G.open({type:"loading",content:"Action in progress..",duration:0});else if(!V&&H)console.log(H,"isSuccess"),F.push("/home",{scroll:!1}),setTimeout(G.destroy,2500);else if(!V&&R&&(setTimeout(G.destroy,2500),R)){console.log(R,Y,U,"isError"),console.log(null==Y?void 0:Y.shortMessage,"@@@@");let e=null==Y?void 0:Y.shortMessage;G.open({type:"error",content:e})}},[V,R,H]);let ek=()=>{let e;let t="";return _.get(h),eI?Q?(e="Project Info",t=eo?"Current Project Progress Review ".concat(h,"% "):"Investment Information"):e="Progress Update":e="Project Registration",{title:e,title2:t}};return(0,s.useEffect)(()=>{if(eI&&eh(!0),eI&&eP){eh(!1),console.log(eP,"detailsRes"),K(!0);let{data:e}=eP,t=e.projectCreateds&&e.projectCreateds.find(e=>e.projectId===eI);if(t){let e=BigInt(t.goalAmount),o=Number((0,a.d)(e)),r=t._title,s=t.deadline?parseInt(t.deadline,10)/1e3:null,n=new Date().getTimezoneOffset(),l=n/60>0?-(n/60):Math.abs(n/60);console.log(l,"offsetHours");let i=null!==s?d().unix(s).utc().utcOffset(l):null,c=t.creator;console.log("creatorAddress",c,typeof c),console.log("address",u,typeof u),console.log(f(u)!==c,"address !== creatorAddress"),f(u)!==c&&$(!0);let m={projectName:r,projectDescription:t._description,projectNeedETH:o,projectLink:t._link,projectDeadline:i};p.setFieldsValue(m),console.log(p,"formData")}let{currentPercent:o,detailObj:r}=X(e);console.log(o,r,"currentPercent"),C(r),e.progressRevieweds&&e.progressRevieweds.length&&ep(e.progressRevieweds),e.projectFundeds&&e.projectFundeds.length&&(em(e.projectFundeds),e.projectFundeds.find(e=>e.supporter===f(u))&&er(!0))}eZ&&eI&&(ea(eZ[5]),ec(eZ[4]),et(eZ[8]),j(parseInt(eZ[9],10)))},[eI,eP,eZ]),(0,s.useEffect)(()=>{let e=f(u),t=ed.filter(e=>e.currentProgress===String(h));t.length&&t.find(t=>t.Investor===e)&&en(!0)},[h,ed]),(0,r.jsxs)("div",{className:"".concat(N().container," mt-10 "),children:[eI&&eg?(0,r.jsx)(q,{}):"",(0,r.jsx)("div",{className:N().title,children:ek().title}),J,(0,r.jsxs)(v.Z,{disabled:Q,className:"".concat(N().formBox," detailFrom"),labelCol:{span:9},wrapperCol:{span:24},layout:"horizontal",form:p,size:"large",style:{width:640},onFinish:e=>{let{projectName:t,projectLink:o,projectNeedETH:r,projectDescription:s,projectDeadline:n}=e,l=n?d()(n).utc().valueOf():null,a=[t,s,o,(0,i.f)(String(r)),l];console.log(a,"args"),E(a,"createProject",void 0)},children:[(0,r.jsx)(v.Z.Item,{label:"Project Name",name:"projectName",rules:[{required:!0,message:"Please input the project name!"}],children:(0,r.jsx)(S.Z,{disabled:W})}),(0,r.jsx)(v.Z.Item,{label:"Project Description",name:"projectDescription",rules:[{required:!0,message:"Please input the project description!"}],children:(0,r.jsx)(S.Z.TextArea,{rows:4,disabled:W})}),(0,r.jsx)(v.Z.Item,{label:"Project Link",name:"projectLink",rules:[{required:!0,message:"Please input the project link!"}],children:(0,r.jsx)(S.Z,{addonBefore:"https://",disabled:W})}),(0,r.jsx)(v.Z.Item,{label:"Project Need Amount (ETH)",name:"projectNeedETH",rules:[{required:!0,message:"Please input the amount of ETH needed!"}],children:(0,r.jsx)(w.Z,{disabled:W,style:{width:210}})}),(0,r.jsx)(v.Z.Item,{label:"Project Deadline",name:"projectDeadline",rules:[{required:!0,message:"Please input the project deadline!"}],children:(0,r.jsx)(y.Z,{showTime:{format:"HH:mm"},style:{width:210},disabled:W,disabledDate:e=>{let t=e?d()(e):null,o=d()().second(0).millisecond(0);return!!(t&&t.isBefore(o))}})}),Q||W?"":(0,r.jsx)(v.Z.Item,{style:{textAlign:"right"},children:(0,r.jsx)(I.ZP,{type:"primary",loading:V,htmlType:"submit",style:{backgroundColor:"#97D44A"},children:"Submit"})}),W?(0,r.jsxs)(v.Z.Item,{label:"Progress of Crowdfunding",children:[(0,r.jsx)(Z.Z,{type:"circle",percent:ev,strokeColor:"#97D44A",trailColor:"white",size:60}),(0,r.jsx)("span",{className:"ml-2",children:"".concat(ex," / ").concat(ef,"ETH")})]}):"",W?(0,r.jsx)(v.Z.Item,{label:"Inverment Information",style:{textAlign:"right"},children:(0,r.jsx)(I.ZP,{ghost:!0,disabled:!1,className:N().processBtn,onClick:()=>{ey(!0)},children:"Detail"})}):"",W?(0,r.jsx)(v.Z.Item,{label:"Audit information",style:{textAlign:"right"},children:(0,r.jsx)(I.ZP,{ghost:!0,disabled:!1,className:N().processBtn,onClick:()=>{eS(!0)},children:"Detail"})}):"",W?(0,r.jsx)(v.Z.Item,{label:"Project Progress",name:"projectProcessDetail",children:(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"100%"},children:[(0,r.jsx)(Z.Z,{percent:h,steps:4,strokeColor:"#97D44A",trailColor:"#B5C5A4",size:40,className:N().progress}),(0,r.jsx)(I.ZP,{ghost:!0,className:N().processBtn,onClick:()=>{c(!0)},disabled:!1,children:Q?"Detail":"Next Step"})]})}):""]}),(0,r.jsx)(T,{percent:h,isInvestors:Q,isModalOpen:o,loading:V,initialData:P,onOk:e=>{console.log("Updated data:",e);let t=_.get(h);if(void 0===t){G.open({type:"error",content:"Percentages are not in accordance with the rules of the contract"});return}let o=k.get(t+1);if(void 0===o)return;let r=A.get(o);if(void 0===r)return;let s=[Number(eI),o,e[r]];console.log(s,"进度args"),E(s,"updateProgress",void 0),c(!1)},onCancel:()=>{c(!1)}}),(0,r.jsx)(D,{progressRevieweds:ed,showModal:eb,onCancel:()=>{eS(!1)}}),(0,r.jsx)(B,{projectFundeds:eu,showModal:ew,onCancel:()=>{ey(!1)}}),Q&&!ee?(0,r.jsx)(M,{title:ek().title2,loading:V,inveronOk:e=>{console.log(e,typeof e,"amount"),E([eI],"supportProjectWithEth",e)}}):"",Q&&ee&&eo&&!es?(0,r.jsx)(z,{title:ek().title2,loading:V,percent:h,examineOk:e=>{console.log(e,"examineData"),E([eI,h,e.comment,e.approved],"reviewProgress",void 0)}}):""]})}},51685:function(e,t,o){"use strict";o.d(t,{F:function(){return n}});var r=o(2265);let s=e=>{let[t,o]=(0,r.useState)(null),[s,n]=(0,r.useState)(!1),[l,a]=(0,r.useState)(null);return{data:t,loading:s,error:l,postData:async t=>{n(!0),a(null);try{let r=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!r.ok)throw Error("Error: ".concat(r.status));let s=await r.json();o(s)}catch(e){a(e.message)}finally{n(!1)}}}},n=e=>{let{url:t,query:o}=e,{data:n,loading:l,error:a,postData:i}=s(t);return(0,r.useEffect)(()=>{(async()=>{try{i({query:o})}catch(e){console.error(e)}finally{console.log("finally")}})()},[]),{data:n,loading:l,error:a}}},4493:function(){},58555:function(e){e.exports={container:"detail_container__nYTAx",title:"detail_title__mxxGI",formBox:"detail_formBox__OX_qR",isInvestors:"detail_isInvestors__XzIIJ",rightBtn:"detail_rightBtn__j0shC",progress:"detail_progress__X7Cld",processBtn:"detail_processBtn__qjuhV"}}},function(e){e.O(0,[7840,76,3169,2247,9052,5888,7120,356,9551,718,7491,4979,5475,3031,3172,2971,7023,1744],function(){return e(e.s=17789)}),_N_E=e.O()}]);