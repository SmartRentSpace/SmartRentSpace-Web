(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1951],{42726:function(e,t,n){Promise.resolve().then(n.bind(n,48592))},76415:function(e,t,n){"use strict";n.d(t,{M2:function(){return a},Tm:function(){return c},wm:function(){return s}});var r=n(2265);function a(e){return e&&r.isValidElement(e)&&e.type===r.Fragment}let s=(e,t,n)=>r.isValidElement(e)?r.cloneElement(e,"function"==typeof n?n(e.props||{}):n):t;function c(e,t){return s(e,e,t)}},88474:function(e,t,n){"use strict";function r(e,t){var n=Object.assign({},e);return Array.isArray(t)&&t.forEach(function(e){delete n[e]}),n}n.d(t,{Z:function(){return r}})},83801:function(e,t,n){"use strict";n.d(t,{default:function(){return u}});var r=n(57437),a=n(2265),s=n(87138),c=n(62655),o=n(83172),l=n(26735),i=n(85053);let d=e=>{let t="bigint"==typeof e?Number(e):e,n=Math.abs(t);return n>=1e9?"".concat((t/1e9).toFixed(2).replace(/\.00$/,""),"B"):n>=1e6?"".concat((t/1e6).toFixed(2).replace(/\.00$/,""),"M"):n>=1e3?"".concat((t/1e3).toFixed(2).replace(/\.00$/,""),"K"):t.toString()};n(18733);var u=function(){let{address:e}=(0,l.m)(),{data:t,isLoading:n,isError:u,isSuccess:f}=(0,o.Ro)([e]),[h,m]=(0,a.useState)(0);return(0,a.useEffect)(()=>{t&&Number(t)>0&&m(Number((0,i.d)(t)))},[t]),console.log(t,h,n,u,f),(0,r.jsx)("div",{className:"sticky top-0 z-40 w-full bg-[#0F030F] h-[65px] custom-shadow bg-opacity-75 backdrop-filter",children:(0,r.jsxs)("div",{className:"h-full max-w-screen-md m-auto flex flex-row items-center justify-center justify-between text-white",children:[(0,r.jsxs)(s.default,{href:"/home",className:"font-bold text-3xl",children:["Frog",(0,r.jsx)("span",{className:"text-[#4caf50]",children:"Fund"})]}),(0,r.jsxs)("p",{className:"font-bold text-[100%] flex justify-center items-center",children:["My $CROAK Rewards:",(0,r.jsx)("span",{className:"text-[#4caf50] mr-1",children:d(h)||0}),"  ",(0,r.jsx)("img",{src:"https://smartfrogfund.github.io/SmartFrogFund-Web//_next/static/media/tokenomics.19b6e7c8.png",alt:"meme",className:"w-4 h-4 inline-block"})]}),(0,r.jsx)("div",{children:(0,r.jsx)(c.NL,{label:"Connect wallet",chainStatus:"icon",accountStatus:"avatar",showBalance:!1})})]})})}},48592:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(57437),a=n(2265),s=n(26735),c=n(51685),o=n(83801),l=n(87138);let i="inline-block mr-2  leading-8 px-3 text-center hover:scale-105 font-bold";var d=e=>{let{isLogged:t,curTab:n,onChangeTab:a}=e;return(0,r.jsx)("div",{className:"top-65 z-40 w-full bg-[#0F030F] h-[40px]",children:(0,r.jsxs)("div",{className:"h-full max-w-screen-md m-auto flex flex-row items-center justify-between",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{onClick:()=>a("ALL"),className:"".concat(i," ").concat("ALL"===n?"font-bold border-b-2 border-[#4caf50]":""),children:"All Project"}),t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("button",{onClick:()=>a("MY_PROJECT"),className:"".concat(i," ").concat("MY_PROJECT"===n?"border-b-2 border-[#4caf50]":""),children:"My Project"}),(0,r.jsx)("button",{onClick:()=>a("MY_FUND"),className:"".concat(i," ").concat("MY_FUND"===n?"border-b-2 border-[#4caf50]":""),children:"My Fund"})]})]}),t?(0,r.jsx)(l.default,{href:"/detail",className:"font-bold bg-[#4caf50] rounded-2xl leading-8 px-3 text-center hover:bg-[rgb(97,208,102)] hover:scale-105",children:"Create Project"}):(0,r.jsx)("span",{className:"font-semibold",children:"Now connect wallet to create a project"})]})})},u=n(58569),f=n(62575),h=n(16463),m=n(66648),x=n(85053),g={src:"https://smartfrogfund.github.io/SmartFrogFund-Web//_next/static/media/logo-frog.8a9dd118.svg",height:258,width:356,blurWidth:0,blurHeight:0},b={src:"https://smartfrogfund.github.io/SmartFrogFund-Web//_next/static/media/icon-coin.3ea6c185.svg",height:57,width:35,blurWidth:0,blurHeight:0},p=e=>{let{frogData:t,onClick:n}=e;return(0,r.jsx)("button",{className:"bg-[#b8c4a7] rounded-md hover:bg-[#4caf50] cursor-pointer h-24",onClick:()=>n(t),children:(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)(m.default,{className:"w-8 h-8 rounded-md mt-3 ml-3",src:g,alt:"frog"}),(0,r.jsxs)("div",{className:"flex flex-col flex-auto p-3 overflow-hidden",children:[(0,r.jsx)("div",{className:"font-bold",children:t._title}),(0,r.jsx)("div",{className:"truncate ... text-[#5B5B5B] text-sm",title:t._description,children:t._description}),(0,r.jsxs)("div",{className:"flex flex-row justify-end items-center",children:[(0,r.jsx)(m.default,{className:"w-4 h-4 mr-1",src:b,alt:"coin"}),(0,r.jsx)("span",{children:"".concat((0,x.d)(BigInt(t.goalAmount))," ETH")})]})]})]})})},j=n(47394),N=n(78421),w=()=>(0,r.jsx)("div",{className:"text-[#50d71e] flex justify-center items-center text-white font-bold",children:(0,r.jsx)(j.Z,{gap:"small",vertical:!0,children:(0,r.jsx)(j.Z,{gap:"small",children:(0,r.jsx)(N.Z,{tip:"Loading",size:"large",fullscreen:!0})})})}),v=e=>{let{projectList:t,isLoading:n,isLogged:a}=e,s=(0,h.useRouter)();if(n)return(0,r.jsx)(w,{});let c=e=>{a?s.push("/detail/?projectId=".concat(e.projectId)):u.ZP.warning("Please connect your wallet first")};return(0,r.jsx)("div",{className:"flex flex-col gap-2 max-w-screen-md m-auto mt-2 mb-8",children:0===t.length?(0,r.jsx)(f.Z,{style:{marginTop:200},description:(0,r.jsx)("span",{className:"text-white",children:"No data"})}):t.map(e=>(0,r.jsx)(p,{frogData:e,onClick:c},e.id))})},y=function(){let{address:e}=(0,s.m)(),[t,n]=a.useState("ALL"),[l,i]=a.useState([]),[u,f]=a.useState([]),{data:h,loading:m}=(0,c.F)({url:"https://api.studio.thegraph.com/query/76625/frogfund/version/latest",query:"\n    {\n      projectCreateds {\n        _description\n        _link\n        _title\n        blockNumber\n        blockTimestamp\n        creator\n        deadline \n        goalAmount\n        id\n        projectId\n        transactionHash\n      }\n      projectFundeds {\n        supporter\n        projectId\n      }\n    }\n    "});a.useEffect(()=>{let{projectCreateds:e,projectFundeds:t}=(null==h?void 0:h.data)||{};i(e||[]),f(t||[])},[h]);let x=!!e,g=[],b=[],p=[];return x&&(u.forEach(t=>{t.supporter===(null==e?void 0:e.toLocaleLowerCase())&&p.push(t.projectId)}),l.forEach(t=>{t.creator===(null==e?void 0:e.toLocaleLowerCase())&&g.push(t),p.includes(t.projectId)&&b.push(t)})),(0,r.jsxs)("div",{className:"bg-[#0F030F] h-full text-white bg-no-repeat bg-fixed overflow-y-auto",style:{backgroundImage:"url(".concat("https://smartfrogfund.github.io/SmartFrogFund-Web//_next/static/media/logo-bg-frog-rocket.d8f285f4.png",")"),backgroundSize:"auto",backgroundPosition:"10% 20%"},children:[(0,r.jsx)(o.default,{}),(0,r.jsx)(d,{isLogged:x,curTab:t,onChangeTab:e=>n(e)}),(0,r.jsx)(v,{projectList:{ALL:l,MY_PROJECT:g,MY_FUND:b}[t],isLoading:m,isLogged:x})]})}},51685:function(e,t,n){"use strict";n.d(t,{F:function(){return s}});var r=n(2265);let a=e=>{let[t,n]=(0,r.useState)(null),[a,s]=(0,r.useState)(!1),[c,o]=(0,r.useState)(null);return{data:t,loading:a,error:c,postData:async t=>{s(!0),o(null);try{let r=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!r.ok)throw Error("Error: ".concat(r.status));let a=await r.json();n(a)}catch(e){o(e.message)}finally{s(!1)}}}},s=e=>{let{url:t,query:n}=e,{data:s,loading:c,error:o,postData:l}=a(t);return(0,r.useEffect)(()=>{(async()=>{try{l({query:n})}catch(e){console.error(e)}finally{console.log("finally")}})()},[]),{data:s,loading:c,error:o}}},18733:function(){}},function(e){e.O(0,[4882,9472,76,3169,2247,356,7120,7138,718,741,6648,5475,3172,2971,7023,1744],function(){return e(e.s=42726)}),_N_E=e.O()}]);