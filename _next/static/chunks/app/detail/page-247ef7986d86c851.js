(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[654],{17789:function(e,t,s){Promise.resolve().then(s.bind(s,7247))},7247:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return H}});var o=s(57437),r=s(2265),l=s(26735),n=s(16463),a=s(85053),i=s(28509),c=s(62737),d=s.n(c),p=s(8558),u=s.n(p),m=s(51685),g=s(83172);let h=e=>0===e.length?null:e.reduce((e,t)=>t.blockTimestamp>e.blockTimestamp?t:e,e[0]),j=new Map([[30,"Step1"],[50,"Step2"],[70,"Step3"],[100,"Step4"]]),x=()=>({getPercentInfo:e=>{var t,s;let{progressUpdateds:o}=e,{progressRevieweds:r}=e,l=[30,50,70,100],n={Step1:"",Step2:"",Step3:"",Step4:""},a=0,i="";if((null==r?void 0:r.length)?a=null===(t=h(r.map(e=>({blockTimestamp:Number(e.blockTimestamp),currentProgress:Number(e.currentProgress)}))))||void 0===t?void 0:t.currentProgress:(null==o?void 0:o.length)&&(a=null===(s=h(o.map(e=>({blockTimestamp:Number(e.blockTimestamp),currentProgress:Number(e.progress)}))))||void 0===s?void 0:s.currentProgress),a){l.filter(e=>e<=a).forEach(e=>{let t=j.get(e);if(t){var s;console.log(t,"key"),n[t]=(null==o?void 0:null===(s=o.find(t=>t.progress===String(e)))||void 0===s?void 0:s.details)||""}});let e=l[l.indexOf(a)+1],t=j.get(e);console.log(e,t,"nextPercent"),i=t?n[t]:""}return{currentPercent:a||0,detailObj:n,examineDeatil:i}}}),f=e=>e?e.startsWith("0x")?"0x".concat(e.substring(2).toLowerCase()):e:"";var v=s(77631),b=s(58569),y=s(79226),w=s(29108),S=s(41306),I=s(46682),Z=s(52943),P=s(27689),C=s(58555),N=s.n(C);s(4493);let k="1.what to do\n2.\n3.\n...";var T=e=>{let{isModalOpen:t,initialData:s,onOk:l,onCancel:n,isInvestors:a,percent:i,loading:c}=e,[d]=v.Z.useForm();return(0,r.useEffect)(()=>{s&&d&&d.setFieldsValue(s)},[s,d]),(0,o.jsx)(P.default,{title:"Project Steps",className:"".concat(N().container," stepModal"),open:t,width:600,onCancel:n,footer:null,children:(0,o.jsxs)(v.Z,{form:d,className:"".concat(N().formBox," detailFrom"),labelCol:{span:5},wrapperCol:{span:24},layout:"horizontal",size:"large",disabled:a,style:{width:500},onFinish:()=>{d.validateFields().then(e=>{l(e)}).catch(e=>{console.log("Validate Failed:",e)})},children:[(0,o.jsx)(v.Z.Item,{label:"Step1(30%):",name:"Step1",children:(0,o.jsx)(y.Z.TextArea,{rows:4,placeholder:k,disabled:i>=30||a})}),(0,o.jsx)(v.Z.Item,{label:"Step2(50%):",name:"Step2",children:(0,o.jsx)(y.Z.TextArea,{rows:4,placeholder:k,disabled:i>=50||i<30||a})}),(0,o.jsx)(v.Z.Item,{label:"Step3(70%):",name:"Step3",children:(0,o.jsx)(y.Z.TextArea,{rows:4,placeholder:k,disabled:i>=70||i<50||a})}),(0,o.jsx)(v.Z.Item,{label:"Step4(100%):",name:"Step4",children:(0,o.jsx)(y.Z.TextArea,{rows:4,placeholder:k,disabled:i>=100||i<70||a})}),a?"":(0,o.jsx)(v.Z.Item,{style:{textAlign:"right"},children:(0,o.jsx)(I.ZP,{type:"primary",htmlType:"submit",loading:c,size:"large",style:{backgroundColor:"#97D44A"},children:"submit"})})]})})},_=s(3650),A=s(47348);let D=e=>{let t=new Date(1e3*Number(e)),s=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),l=String(t.getHours()).padStart(2,"0"),n=String(t.getMinutes()).padStart(2,"0"),a=String(t.getSeconds()).padStart(2,"0");return"".concat(s,"-").concat(o,"-").concat(r," ").concat(l,":").concat(n,":").concat(a)};var F=e=>{let{progressRevieweds:t,showModal:s,onCancel:r}=e;console.log(t,"progressRevieweds");let l=t.filter(e=>e.currentProgress===String(30)).map(e=>({...e,time:D(e.blockTimestamp),key:e.id}));return console.log(l,"newProgressReviewedsnewProgressRevieweds"),console.log(D("1719215421"),"convertTimestampToLocalTim"),(0,o.jsx)(P.default,{title:"Audit information",className:"".concat(N().container," stepModal"),open:s,width:900,onCancel:()=>{r()},footer:null,children:(0,o.jsx)(A.Z,{columns:[{title:"Investor",dataIndex:"Investor",width:250},{title:"comment",dataIndex:"comment",width:250},{title:"approved",dataIndex:"approved",width:150,render:(e,t)=>{let{approved:s}=t;return(0,o.jsx)(_.Z,{color:s?"green":"volcano",children:s?"Approved":"Not Approved"})}},{title:"time",dataIndex:"time",width:200}],dataSource:l,scroll:{y:240}})})},B=e=>{let{title:t,inveronOk:s,loading:r}=e,{confirm:l}=P.default,[n]=v.Z.useForm();return(0,o.jsxs)("div",{className:"flex justify-center items-center flex-col",children:[(0,o.jsx)("div",{className:N().title,style:{marginTop:20,marginBottom:0},children:t}),(0,o.jsx)(v.Z,{className:"".concat(N().formBox," detailFrom"),labelCol:{span:7},wrapperCol:{span:24},layout:"horizontal",form:n,size:"large",style:{width:640},children:(0,o.jsx)(v.Z.Item,{label:"investment amount",name:"amount",rules:[{required:!0,message:"Please input the investment amount!"}],children:(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"100%"},children:[(0,o.jsx)(w.Z,{style:{width:200}}),(0,o.jsx)(I.ZP,{ghost:!0,className:N().processBtn,loading:r,onClick:()=>{n.validateFields().then(e=>{console.log(e,"values");let{amount:t}=e,o=(0,i.f)(String(t));l({title:"Investment information",content:"Are you sure you want to invest in ".concat(t," ETH?"),onOk(){s(o)},onCancel(){console.log("Cancel")}})}).catch(e=>{console.log("Validate Failed:",e)})},children:"invest"})]})})})]})},E=s(44052),O=e=>{let{title:t,examineOk:s,percent:r,loading:l}=e,{confirm:n}=P.default,[a]=v.Z.useForm();return console.log(r,"percentpercent"),(0,o.jsxs)("div",{className:"flex justify-center items-center flex-col",children:[(0,o.jsx)("div",{className:N().title,style:{marginTop:20,marginBottom:0},children:t}),(0,o.jsxs)(v.Z,{className:"".concat(N().formBox," detailFrom"),labelCol:{span:7},wrapperCol:{span:24},initialValues:{approved:!0,auditOpinion:""},layout:"horizontal",form:a,size:"large",style:{width:640},children:[(0,o.jsx)(v.Z.Item,{label:"Be approved or not",name:"approved",children:(0,o.jsx)(E.ZP.Group,{options:[{label:"Yes",value:!0},{label:"No",value:!1}]})}),(0,o.jsx)(v.Z.Item,{label:"Audit opinion",name:"comment",children:(0,o.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"100%"},children:(0,o.jsx)(y.Z.TextArea,{rows:4})})}),(0,o.jsx)(v.Z.Item,{style:{textAlign:"right"},children:(0,o.jsx)(I.ZP,{type:"primary",onClick:()=>{n({title:"Examine",content:"Confirm submission",onOk(){a.validateFields().then(e=>{console.log("OK",e),s(e)})},onCancel(){console.log("Cancel")}})},loading:l,style:{backgroundColor:"#97D44A"},children:"submit"})})]})]})},z=s(47394),M=s(78421),R=e=>(0,o.jsx)("div",{className:"text-[#50d71e] flex justify-center items-center text-white font-bold",children:(0,o.jsx)(z.Z,{gap:"small",vertical:!0,children:(0,o.jsx)(z.Z,{gap:"small",children:(0,o.jsx)(M.Z,{tip:"Loading",size:"large",fullscreen:!0})})})});d().extend(u());let q="https://api.studio.thegraph.com/query/76625/frogfund/version/latest";console.log(q,"graphApiUrl");var H=()=>{var e,t;let[s,c]=(0,r.useState)(!1),[p]=v.Z.useForm(),{address:u}=(0,l.m)(),[h,j]=(0,r.useState)(0),[P,C]=(0,r.useState)({Step1:"",Step2:"",Step3:"",Step4:""}),k=new Map([[0,0],[1,30],[2,50],[3,70],[4,100]]),_=new Map([[0,0],[30,1],[50,2],[70,3],[100,4]]),A=new Map([[30,"Step1"],[50,"Step2"],[70,"Step3"],[100,"Step4"]]),D=(0,n.useRouter)(),{postCB:E,data:z,isError:M,isSuccess:H,isPending:L,error:V,failureReason:U}=(0,g.xe)(),{getPercentInfo:Y}=x(),[X,G]=b.ZP.useMessage(),[J,W]=(0,r.useState)(!1),[K,Q]=(0,r.useState)(!1),[$,ee]=(0,r.useState)(!1),[et,es]=(0,r.useState)(!1),[eo,er]=(0,r.useState)(void 0),[el,en]=(0,r.useState)(void 0),[ea,ei]=(0,r.useState)([]),[ec,ed]=(0,r.useState)(!1),ep=e=>e.toFixed(2),eu=eo?(0,a.d)(eo):0,em=el?(0,a.d)(el):0,eg=eo&&el?100*Number((e=eo,t=el,ep(Number(e)/Number(t)))):0,[eh,ej]=(0,r.useState)(!1),{projectId:ex}=Object.fromEntries((0,n.useSearchParams)().entries()),{data:ef}=(0,g.YI)([Number(ex||0)]);console.log(ef,"projectsData");let{data:ev,loading:eb,error:ey}=(0,m.F)({url:q||"",query:"{\n      projectCreateds(where:{projectId: ".concat(ex,"}) {    id    projectId    creator    goalAmount  _title  deadline    _description    _link    blockTimestamp  }\n      fundsDistributeds(where:{projectId: ").concat(ex,"}) {   id  projectId    amount  blockTimestamp  }\n      progressUpdateds (where:{projectId: ").concat(ex,"}){   id   projectId   progress    details    blockTimestamp  }\n      progressRevieweds(where:{projectId: ").concat(ex,"}) {    id    projectId    approved comment Investor  blockTimestamp currentProgress  }\n      projectFundeds(where:{projectId: ").concat(ex,"}) {    supporter  }\n      }")});(0,r.useEffect)(()=>{if(console.log(L),L)X.open({type:"loading",content:"Action in progress..",duration:0});else if(!L&&H)console.log(H,"isSuccess"),D.push("/home",{scroll:!1}),setTimeout(X.destroy,2500);else if(!L&&M&&(setTimeout(X.destroy,2500),M)){console.log(M,V,U,"isError"),console.log(null==V?void 0:V.shortMessage,"@@@@");let e=null==V?void 0:V.shortMessage;X.open({type:"error",content:e})}},[L,M,H]);let ew=()=>{let e;let t="";return _.get(h),ex?K?(e="Project info",t=et?"Project progress ".concat(h,"% "):"Investment information"):e="Progress Update":e="Project Registration",{title:e,title2:t}};return(0,r.useEffect)(()=>{if(ex&&ed(!0),ex&&ev){ed(!1),console.log(ev,"detailsRes"),W(!0);let{data:e}=ev,t=e.projectCreateds&&e.projectCreateds.find(e=>e.projectId===ex);if(t){let e=BigInt(t.goalAmount),s=Number((0,a.d)(e)),o=t._title,r=t.deadline?parseInt(t.deadline,10)/1e3:null,l=new Date().getTimezoneOffset(),n=l/60>0?-(l/60):Math.abs(l/60);console.log(n,"offsetHours");let i=null!==r?d().unix(r).utc().utcOffset(n):null,c=t.creator;console.log("creatorAddress",c,typeof c),console.log("address",u,typeof u),console.log(f(u)!==c,"address !== creatorAddress"),f(u)!==c&&Q(!0);let m={projectName:o,projectDescription:t._description,projectNeedETH:s,projectLink:t._link,projectDeadline:i};p.setFieldsValue(m),console.log(p,"formData")}let{currentPercent:s,detailObj:o}=Y(e);console.log(s,o,"currentPercent"),C(o),e.progressRevieweds&&e.progressRevieweds.length&&(ei(e.progressRevieweds),e.progressRevieweds.find(e=>e.Investor===f(u))&&es(!0))}ef&&ex&&(er(ef[5]),en(ef[4]),ee(ef[8]),j(parseInt(ef[9],10)))},[ex,ev,ef]),(0,o.jsxs)("div",{className:"".concat(N().container," mt-10 "),children:[ex&&ec?(0,o.jsx)(R,{}):"",(0,o.jsx)("div",{className:N().title,children:ew().title}),G,(0,o.jsxs)(v.Z,{disabled:K,className:"".concat(N().formBox," detailFrom"),labelCol:{span:7},wrapperCol:{span:24},layout:"horizontal",form:p,size:"large",style:{width:640},onFinish:e=>{let{projectName:t,projectLink:s,projectNeedETH:o,projectDescription:r,projectDeadline:l}=e,n=l?d()(l).utc().valueOf():null,a=[t,r,s,(0,i.f)(String(o)),n];console.log(a,"args"),E(a,"createProject",void 0)},children:[(0,o.jsx)(v.Z.Item,{label:"Project Name",name:"projectName",rules:[{required:!0,message:"Please input the project name!"}],children:(0,o.jsx)(y.Z,{disabled:J})}),(0,o.jsx)(v.Z.Item,{label:"Project Description",name:"projectDescription",rules:[{required:!0,message:"Please input the project description!"}],children:(0,o.jsx)(y.Z.TextArea,{rows:4,disabled:J})}),(0,o.jsx)(v.Z.Item,{label:"Project Link",name:"projectLink",rules:[{required:!0,message:"Please input the project link!"}],children:(0,o.jsx)(y.Z,{addonBefore:"https://",disabled:J})}),(0,o.jsx)(v.Z.Item,{label:"Project Need ETH",name:"projectNeedETH",rules:[{required:!0,message:"Please input the amount of ETH needed!"}],children:(0,o.jsx)(w.Z,{disabled:J,style:{width:210}})}),(0,o.jsx)(v.Z.Item,{label:"Project Deadline",name:"projectDeadline",rules:[{required:!0,message:"Please input the project deadline!"}],children:(0,o.jsx)(S.Z,{showTime:{format:"HH:mm"},style:{width:210},disabled:J,disabledDate:e=>{let t=e?d()(e):null,s=d()().second(0).millisecond(0);return!!(t&&t.isBefore(s))}})}),K||J?"":(0,o.jsx)(v.Z.Item,{style:{textAlign:"right"},children:(0,o.jsx)(I.ZP,{type:"primary",loading:L,htmlType:"submit",style:{backgroundColor:"#97D44A"},children:"Submit"})}),J?(0,o.jsxs)(v.Z.Item,{label:"Progress of crowdfunding",children:[(0,o.jsx)(Z.Z,{type:"circle",percent:eg,strokeColor:"#97D44A",trailColor:"white",size:60}),(0,o.jsx)("span",{className:"ml-2",children:"".concat(eu," / ").concat(em,"ETH")})]}):"",J?(0,o.jsx)(v.Z.Item,{label:"Audit information",style:{textAlign:"right"},children:(0,o.jsx)(I.ZP,{ghost:!0,disabled:!1,className:N().processBtn,onClick:()=>{ej(!0)},children:"Detail"})}):"",J?(0,o.jsx)(v.Z.Item,{label:"Project progress",name:"projectProcessDetail",children:(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"100%"},children:[(0,o.jsx)(Z.Z,{percent:h,steps:4,strokeColor:"#97D44A",trailColor:"#B5C5A4",size:40,className:N().progress}),(0,o.jsx)(I.ZP,{ghost:!0,className:N().processBtn,onClick:()=>{c(!0)},disabled:!1,children:K?"Detail":"Next Step"})]})}):""]}),(0,o.jsx)(T,{percent:h,isInvestors:K,isModalOpen:s,loading:L,initialData:P,onOk:e=>{console.log("Updated data:",e);let t=_.get(h);if(void 0===t){X.open({type:"error",content:"Percentages are not in accordance with the rules of the contract"});return}let s=k.get(t+1);if(void 0===s)return;let o=A.get(s);if(void 0===o)return;let r=[Number(ex),s,e[o]];console.log(r,"进度args"),E(r,"updateProgress",void 0),c(!1)},onCancel:()=>{c(!1)}}),(0,o.jsx)(F,{progressRevieweds:ea,showModal:eh,onCancel:()=>{ej(!1)}}),K&&!$?(0,o.jsx)(B,{title:ew().title2,loading:L,inveronOk:e=>{console.log(e,typeof e,"amount"),E([ex],"supportProjectWithEth",e)}}):"",K&&$&&et?(0,o.jsx)(O,{title:ew().title2,loading:L,percent:h,examineOk:e=>{console.log(e,"examineData"),E([ex,h,e.comment,e.approved],"reviewProgress",void 0)}}):""]})}},51685:function(e,t,s){"use strict";s.d(t,{F:function(){return l}});var o=s(2265);let r=e=>{let[t,s]=(0,o.useState)(null),[r,l]=(0,o.useState)(!1),[n,a]=(0,o.useState)(null);return{data:t,loading:r,error:n,postData:async t=>{l(!0),a(null);try{let o=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!o.ok)throw Error("Error: ".concat(o.status));let r=await o.json();s(r)}catch(e){a(e.message)}finally{l(!1)}}}},l=e=>{let{url:t,query:s}=e,{data:l,loading:n,error:a,postData:i}=r(t);return(0,o.useEffect)(()=>{(async()=>{try{i({query:s})}catch(e){console.error(e)}finally{console.log("finally")}})()},[]),{data:l,loading:n,error:a}}},4493:function(){},58555:function(e){e.exports={container:"detail_container__nYTAx",title:"detail_title__mxxGI",formBox:"detail_formBox__OX_qR",isInvestors:"detail_isInvestors__XzIIJ",rightBtn:"detail_rightBtn__j0shC",progress:"detail_progress__X7Cld",processBtn:"detail_processBtn__qjuhV"}}},function(e){e.O(0,[7840,76,3169,2247,9052,5888,7120,356,9551,718,7491,4979,5475,3031,3172,2971,7023,1744],function(){return e(e.s=17789)}),_N_E=e.O()}]);