(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{70675:function(e,t,n){Promise.resolve().then(n.bind(n,19889))},19889:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(57437),i=n(58569),s=n(77631),o=n(17185),a=n(79226),u=n(46682),c=n(2265),l=n(16463),h=n(78421);let f=()=>{let[e,t]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{console.log("Loading status:",e)},[e]),{fetchData:async(e,n)=>{t(!0);try{let r=await fetch(e,n),s=await r.json();return s.message&&i.ZP.info(s.message),t(!1),s}catch(e){throw i.ZP.error("An error occurred"),t(!1),e}},LoadingSpinner:function(){return(0,r.jsx)(h.Z,{spinning:e,tip:"Loading",fullscreen:!0})},loading:e}};var m=()=>{let{fetchData:e,LoadingSpinner:t,loading:n}=f();return{login:async t=>e("".concat("http://localhost:3000/api/","admin/login"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}),signUp:async t=>e("".concat("http://localhost:3000/api/","users"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}),LoadingSpinner:t,loading:n}},p=function(){(0,l.useRouter)();let[e,t]=(0,c.useState)(!1),[n,h]=i.ZP.useMessage(),[f]=s.Z.useForm(),{login:p,signUp:d,LoadingSpinner:y,loading:g}=m(),w=async t=>{try{let n;n=e?await d(t):await p(t),!e&&n.success&&(window.location.href="/admin/dashboard")}catch(e){}};return(0,r.jsxs)("div",{className:"w-full h-[50%] flex justify-center items-center mt-[10%]",children:[h,(0,r.jsx)(o.Z,{title:"Login SmartQuickly",style:{width:"50%"},children:(0,r.jsxs)(s.Z,{name:"basic",onFinish:w,labelCol:{span:3},children:[(0,r.jsx)(s.Z.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:(0,r.jsx)(a.Z,{})}),(0,r.jsx)(s.Z.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:(0,r.jsx)(a.Z,{type:"password"})}),(0,r.jsxs)(s.Z.Item,{wrapperCol:{offset:8,span:6},children:[(0,r.jsx)(u.ZP,{type:"primary",htmlType:"submit",className:"mr-10",onClick:()=>t(!1),children:"Sign in"}),(0,r.jsx)(u.ZP,{htmlType:"submit",onClick:()=>t(!0),children:"Sign up"})]})]})}),(0,r.jsx)(y,{})]})}},25566:function(e){var t,n,r,i=e.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var u=[],c=!1,l=-1;function h(){c&&r&&(c=!1,r.length?u=r.concat(u):l=-1,u.length&&f())}function f(){if(!c){var e=a(h);c=!0;for(var t=u.length;t;){for(r=u,u=[];++l<t;)r&&r[l].run();l=-1,t=u.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||c||a(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},function(e){e.O(0,[76,3169,2247,9052,356,7298,7185,9551,718,7491,2971,7023,1744],function(){return e(e.s=70675)}),_N_E=e.O()}]);