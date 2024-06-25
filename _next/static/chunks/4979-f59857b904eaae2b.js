"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4979],{8001:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(22988),c=n(2265),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},r=n(25636),l=c.forwardRef(function(e,t){return c.createElement(r.Z,(0,o.Z)({},e,{ref:t,icon:a}))})},25858:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(22988),c=n(2265),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},r=n(25636),l=c.forwardRef(function(e,t){return c.createElement(r.Z,(0,o.Z)({},e,{ref:t,icon:a}))})},32932:function(e,t,n){let o;n.d(t,{D:function(){return I},Z:function(){return x}});var c=n(2265),a=n(22988),r={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},l=n(25636),i=c.forwardRef(function(e,t){return c.createElement(l.Z,(0,a.Z)({},e,{ref:t,icon:r}))}),s=n(8001),d=n(25858),u=n(56800),m=n.n(u),p=n(88474),g=e=>!isNaN(parseFloat(e))&&isFinite(e),b=n(38750),f=n(35774),v=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,o=Object.getOwnPropertySymbols(e);c<o.length;c++)0>t.indexOf(o[c])&&Object.prototype.propertyIsEnumerable.call(e,o[c])&&(n[o[c]]=e[o[c]]);return n};let h={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},I=c.createContext({}),C=(o=0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o+=1,"".concat(e).concat(o)});var x=c.forwardRef((e,t)=>{let{prefixCls:n,className:o,trigger:a,children:r,defaultCollapsed:l=!1,theme:u="dark",style:x={},collapsible:B=!1,reverseArrow:S=!1,width:y=200,collapsedWidth:O=80,zeroWidthTriggerStyle:w,breakpoint:k,onCollapse:j,onBreakpoint:E}=e,H=v(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),{siderHook:z}=(0,c.useContext)(f.V),[T,N]=(0,c.useState)("collapsed"in e?e.collapsed:l),[R,M]=(0,c.useState)(!1);(0,c.useEffect)(()=>{"collapsed"in e&&N(e.collapsed)},[e.collapsed]);let Z=(t,n)=>{"collapsed"in e||N(t),null==j||j(t,n)},A=(0,c.useRef)();A.current=e=>{M(e.matches),null==E||E(e.matches),T!==e.matches&&Z(e.matches,"responsive")},(0,c.useEffect)(()=>{let e;function t(e){return A.current(e)}if("undefined"!=typeof window){let{matchMedia:n}=window;if(n&&k&&k in h){e=n("screen and (max-width: ".concat(h[k],")"));try{e.addEventListener("change",t)}catch(n){e.addListener(t)}t(e)}}return()=>{try{null==e||e.removeEventListener("change",t)}catch(n){null==e||e.removeListener(t)}}},[k]),(0,c.useEffect)(()=>{let e=C("ant-sider-");return z.addSider(e),()=>z.removeSider(e)},[]);let D=()=>{Z(!T,"clickTrigger")},{getPrefixCls:P}=(0,c.useContext)(b.E_),W=c.useMemo(()=>({siderCollapsed:T}),[T]);return c.createElement(I.Provider,{value:W},(()=>{let e=P("layout-sider",n),l=(0,p.Z)(H,["collapsed"]),b=T?O:y,f=g(b)?"".concat(b,"px"):String(b),v=0===parseFloat(String(O||0))?c.createElement("span",{onClick:D,className:m()("".concat(e,"-zero-width-trigger"),"".concat(e,"-zero-width-trigger-").concat(S?"right":"left")),style:w},a||c.createElement(i,null)):null,h={expanded:S?c.createElement(d.Z,null):c.createElement(s.Z,null),collapsed:S?c.createElement(s.Z,null):c.createElement(d.Z,null)}[T?"collapsed":"expanded"],I=null!==a?v||c.createElement("div",{className:"".concat(e,"-trigger"),onClick:D,style:{width:f}},a||h):null,C=Object.assign(Object.assign({},x),{flex:"0 0 ".concat(f),maxWidth:f,minWidth:f,width:f}),k=m()(e,"".concat(e,"-").concat(u),{["".concat(e,"-collapsed")]:!!T,["".concat(e,"-has-trigger")]:B&&null!==a&&!v,["".concat(e,"-below")]:!!R,["".concat(e,"-zero-width")]:0===parseFloat(f)},o);return c.createElement("aside",Object.assign({className:k},l,{style:C,ref:t}),c.createElement("div",{className:"".concat(e,"-children")},r),B||R&&v?I:null)})())})},35774:function(e,t,n){n.d(t,{V:function(){return o}});let o=n(2265).createContext({siderHook:{addSider:()=>null,removeSider:()=>null}})},61886:function(e,t,n){n.d(t,{J:function(){return i}});var o=n(2265),c=n(89114),a=n(97119),r=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,o=Object.getOwnPropertySymbols(e);c<o.length;c++)0>t.indexOf(o[c])&&Object.prototype.propertyIsEnumerable.call(e,o[c])&&(n[o[c]]=e[o[c]]);return n};let l=o.createContext(null),i=o.forwardRef((e,t)=>{let{children:n}=e,i=r(e,["children"]),s=o.useContext(l),d=o.useMemo(()=>Object.assign(Object.assign({},s),i),[s,i.prefixCls,i.mode,i.selectable,i.rootClassName]),u=(0,c.t4)(n),m=(0,c.x1)(t,u?n.ref:null);return o.createElement(l.Provider,{value:d},o.createElement(a.BR,null,u?o.cloneElement(n,{ref:m}):n))});t.Z=l},44979:function(e,t,n){n.d(t,{Z:function(){return F}});var o=n(2265),c=n(68229),a=n(32932),r=n(47964),l=n(56800),i=n.n(l),s=n(89114),d=n(88474),u=n(61865),m=n(76415),p=n(38750),g=n(68059),b=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,o=Object.getOwnPropertySymbols(e);c<o.length;c++)0>t.indexOf(o[c])&&Object.prototype.propertyIsEnumerable.call(e,o[c])&&(n[o[c]]=e[o[c]]);return n},f=e=>{let{prefixCls:t,className:n,dashed:a}=e,r=b(e,["prefixCls","className","dashed"]),{getPrefixCls:l}=o.useContext(p.E_),s=l("menu",t),d=i()({["".concat(s,"-item-divider-dashed")]:!!a},n);return o.createElement(c.iz,Object.assign({className:d},r))};let v=(0,o.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1});var h=n(68753),I=n(89523),C=e=>{var t;let{className:n,children:r,icon:l,title:s,danger:u}=e,{prefixCls:p,firstLevel:g,direction:b,disableMenuItemTitleTooltip:f,inlineCollapsed:C}=o.useContext(v),{siderCollapsed:x}=o.useContext(a.D),B=s;void 0===s?B=g?r:"":!1===s&&(B="");let S={title:B};x||C||(S.title=null,S.open=!1);let y=(0,h.Z)(r).length,O=o.createElement(c.ck,Object.assign({},(0,d.Z)(e,["title","icon","danger"]),{className:i()({["".concat(p,"-item-danger")]:u,["".concat(p,"-item-only-child")]:(l?y+1:y)===1},n),title:"string"==typeof s?s:void 0}),(0,m.Tm)(l,{className:i()(o.isValidElement(l)?null===(t=l.props)||void 0===t?void 0:t.className:"","".concat(p,"-item-icon"))}),(e=>{let t=o.createElement("span",{className:"".concat(p,"-title-content")},r);return(!l||o.isValidElement(r)&&"span"===r.type)&&r&&e&&g&&"string"==typeof r?o.createElement("div",{className:"".concat(p,"-inline-collapsed-noicon")},r.charAt(0)):t})(C));return f||(O=o.createElement(I.Z,Object.assign({},S,{placement:"rtl"===b?"left":"right",overlayClassName:"".concat(p,"-inline-collapsed-tooltip")}),O)),O},x=n(61886),B=n(90076),S=n(70142),y=n(98170),O=n(12656),w=n(51380),k=n(76927),j=n(93561),E=n(73204),H=e=>{let{componentCls:t,motionDurationSlow:n,horizontalLineHeight:o,colorSplit:c,lineWidth:a,lineType:r,itemPaddingInline:l}=e;return{["".concat(t,"-horizontal")]:{lineHeight:o,border:0,borderBottom:"".concat((0,B.bf)(a)," ").concat(r," ").concat(c),boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},["".concat(t,"-item, ").concat(t,"-submenu")]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:l},["> ".concat(t,"-item:hover,\n        > ").concat(t,"-item-active,\n        > ").concat(t,"-submenu ").concat(t,"-submenu-title:hover")]:{backgroundColor:"transparent"},["".concat(t,"-item, ").concat(t,"-submenu-title")]:{transition:["border-color ".concat(n),"background ".concat(n)].join(",")},["".concat(t,"-submenu-arrow")]:{display:"none"}}}},z=e=>{let{componentCls:t,menuArrowOffset:n,calc:o}=e;return{["".concat(t,"-rtl")]:{direction:"rtl"},["".concat(t,"-submenu-rtl")]:{transformOrigin:"100% 0"},["".concat(t,"-rtl").concat(t,"-vertical,\n    ").concat(t,"-submenu-rtl ").concat(t,"-vertical")]:{["".concat(t,"-submenu-arrow")]:{"&::before":{transform:"rotate(-45deg) translateY(".concat((0,B.bf)(o(n).mul(-1).equal()),")")},"&::after":{transform:"rotate(45deg) translateY(".concat((0,B.bf)(n),")")}}}}};let T=e=>Object.assign({},(0,y.oN)(e));var N=(e,t)=>{let{componentCls:n,itemColor:o,itemSelectedColor:c,groupTitleColor:a,itemBg:r,subMenuItemBg:l,itemSelectedBg:i,activeBarHeight:s,activeBarWidth:d,activeBarBorderWidth:u,motionDurationSlow:m,motionEaseInOut:p,motionEaseOut:g,itemPaddingInline:b,motionDurationMid:f,itemHoverColor:v,lineType:h,colorSplit:I,itemDisabledColor:C,dangerItemColor:x,dangerItemHoverColor:S,dangerItemSelectedColor:y,dangerItemActiveBg:O,dangerItemSelectedBg:w,popupBg:k,itemHoverBg:j,itemActiveBg:E,menuSubMenuBg:H,horizontalItemSelectedColor:z,horizontalItemSelectedBg:N,horizontalItemBorderRadius:R,horizontalItemHoverBg:M}=e;return{["".concat(n,"-").concat(t,", ").concat(n,"-").concat(t," > ").concat(n)]:{color:o,background:r,["&".concat(n,"-root:focus-visible")]:Object.assign({},T(e)),["".concat(n,"-item-group-title")]:{color:a},["".concat(n,"-submenu-selected")]:{["> ".concat(n,"-submenu-title")]:{color:c}},["".concat(n,"-item, ").concat(n,"-submenu-title")]:{color:o,["&:not(".concat(n,"-item-disabled):focus-visible")]:Object.assign({},T(e))},["".concat(n,"-item-disabled, ").concat(n,"-submenu-disabled")]:{color:"".concat(C," !important")},["".concat(n,"-item:not(").concat(n,"-item-selected):not(").concat(n,"-submenu-selected)")]:{["&:hover, > ".concat(n,"-submenu-title:hover")]:{color:v}},["&:not(".concat(n,"-horizontal)")]:{["".concat(n,"-item:not(").concat(n,"-item-selected)")]:{"&:hover":{backgroundColor:j},"&:active":{backgroundColor:E}},["".concat(n,"-submenu-title")]:{"&:hover":{backgroundColor:j},"&:active":{backgroundColor:E}}},["".concat(n,"-item-danger")]:{color:x,["&".concat(n,"-item:hover")]:{["&:not(".concat(n,"-item-selected):not(").concat(n,"-submenu-selected)")]:{color:S}},["&".concat(n,"-item:active")]:{background:O}},["".concat(n,"-item a")]:{"&, &:hover":{color:"inherit"}},["".concat(n,"-item-selected")]:{color:c,["&".concat(n,"-item-danger")]:{color:y},"a, a:hover":{color:"inherit"}},["& ".concat(n,"-item-selected")]:{backgroundColor:i,["&".concat(n,"-item-danger")]:{backgroundColor:w}},["&".concat(n,"-submenu > ").concat(n)]:{backgroundColor:H},["&".concat(n,"-popup > ").concat(n)]:{backgroundColor:k},["&".concat(n,"-submenu-popup > ").concat(n)]:{backgroundColor:k},["&".concat(n,"-horizontal")]:Object.assign(Object.assign({},"dark"===t?{borderBottom:0}:{}),{["> ".concat(n,"-item, > ").concat(n,"-submenu")]:{top:u,marginTop:e.calc(u).mul(-1).equal(),marginBottom:0,borderRadius:R,"&::after":{position:"absolute",insetInline:b,bottom:0,borderBottom:"".concat((0,B.bf)(s)," solid transparent"),transition:"border-color ".concat(m," ").concat(p),content:'""'},"&:hover, &-active, &-open":{background:M,"&::after":{borderBottomWidth:s,borderBottomColor:z}},"&-selected":{color:z,backgroundColor:N,"&:hover":{backgroundColor:N},"&::after":{borderBottomWidth:s,borderBottomColor:z}}}}),["&".concat(n,"-root")]:{["&".concat(n,"-inline, &").concat(n,"-vertical")]:{borderInlineEnd:"".concat((0,B.bf)(u)," ").concat(h," ").concat(I)}},["&".concat(n,"-inline")]:{["".concat(n,"-sub").concat(n,"-inline")]:{background:l},["".concat(n,"-item")]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:"".concat((0,B.bf)(d)," solid ").concat(c),transform:"scaleY(0.0001)",opacity:0,transition:["transform ".concat(f," ").concat(g),"opacity ".concat(f," ").concat(g)].join(","),content:'""'},["&".concat(n,"-item-danger")]:{"&::after":{borderInlineEndColor:y}}},["".concat(n,"-selected, ").concat(n,"-item-selected")]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:["transform ".concat(f," ").concat(p),"opacity ".concat(f," ").concat(p)].join(",")}}}}}};let R=e=>{let{componentCls:t,itemHeight:n,itemMarginInline:o,padding:c,menuArrowSize:a,marginXS:r,itemMarginBlock:l,itemWidth:i}=e,s=e.calc(a).add(c).add(r).equal();return{["".concat(t,"-item")]:{position:"relative",overflow:"hidden"},["".concat(t,"-item, ").concat(t,"-submenu-title")]:{height:n,lineHeight:(0,B.bf)(n),paddingInline:c,overflow:"hidden",textOverflow:"ellipsis",marginInline:o,marginBlock:l,width:i},["> ".concat(t,"-item,\n            > ").concat(t,"-submenu > ").concat(t,"-submenu-title")]:{height:n,lineHeight:(0,B.bf)(n)},["".concat(t,"-item-group-list ").concat(t,"-submenu-title,\n            ").concat(t,"-submenu-title")]:{paddingInlineEnd:s}}};var M=e=>{let{componentCls:t,iconCls:n,itemHeight:o,colorTextLightSolid:c,dropdownWidth:a,controlHeightLG:r,motionDurationMid:l,motionEaseOut:i,paddingXL:s,itemMarginInline:d,fontSizeLG:u,motionDurationSlow:m,paddingXS:p,boxShadowSecondary:g,collapsedWidth:b,collapsedIconSize:f}=e,v={height:o,lineHeight:(0,B.bf)(o),listStylePosition:"inside",listStyleType:"disc"};return[{[t]:{"&-inline, &-vertical":Object.assign({["&".concat(t,"-root")]:{boxShadow:"none"}},R(e))},["".concat(t,"-submenu-popup")]:{["".concat(t,"-vertical")]:Object.assign(Object.assign({},R(e)),{boxShadow:g})}},{["".concat(t,"-submenu-popup ").concat(t,"-vertical").concat(t,"-sub")]:{minWidth:a,maxHeight:"calc(100vh - ".concat((0,B.bf)(e.calc(r).mul(2.5).equal()),")"),padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{["".concat(t,"-inline")]:{width:"100%",["&".concat(t,"-root")]:{["".concat(t,"-item, ").concat(t,"-submenu-title")]:{display:"flex",alignItems:"center",transition:["border-color ".concat(m),"background ".concat(m),"padding ".concat(l," ").concat(i),"padding-inline calc(50% - ".concat((0,B.bf)(e.calc(u).div(2).equal())," - ").concat((0,B.bf)(d),")")].join(","),["> ".concat(t,"-title-content")]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},["".concat(t,"-sub").concat(t,"-inline")]:{padding:0,border:0,borderRadius:0,boxShadow:"none",["& > ".concat(t,"-submenu > ").concat(t,"-submenu-title")]:v,["& ".concat(t,"-item-group-title")]:{paddingInlineStart:s}},["".concat(t,"-item")]:v}},{["".concat(t,"-inline-collapsed")]:{width:b,["&".concat(t,"-root")]:{["".concat(t,"-item, ").concat(t,"-submenu ").concat(t,"-submenu-title")]:{["> ".concat(t,"-inline-collapsed-noicon")]:{fontSize:u,textAlign:"center"}}},["> ".concat(t,"-item,\n          > ").concat(t,"-item-group > ").concat(t,"-item-group-list > ").concat(t,"-item,\n          > ").concat(t,"-item-group > ").concat(t,"-item-group-list > ").concat(t,"-submenu > ").concat(t,"-submenu-title,\n          > ").concat(t,"-submenu > ").concat(t,"-submenu-title")]:{insetInlineStart:0,paddingInline:"calc(50% - ".concat((0,B.bf)(e.calc(u).div(2).equal())," - ").concat((0,B.bf)(d),")"),textOverflow:"clip",["\n            ".concat(t,"-submenu-arrow,\n            ").concat(t,"-submenu-expand-icon\n          ")]:{opacity:0},["".concat(t,"-item-icon, ").concat(n)]:{margin:0,fontSize:f,lineHeight:(0,B.bf)(o),"+ span":{display:"inline-block",opacity:0}}},["".concat(t,"-item-icon, ").concat(n)]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",["".concat(t,"-item-icon, ").concat(n)]:{display:"none"},"a, a:hover":{color:c}},["".concat(t,"-item-group-title")]:Object.assign(Object.assign({},y.vS),{paddingInline:p})}}]};let Z=e=>{let{componentCls:t,motionDurationSlow:n,motionDurationMid:o,motionEaseInOut:c,motionEaseOut:a,iconCls:r,iconSize:l,iconMarginInlineEnd:i}=e;return{["".concat(t,"-item, ").concat(t,"-submenu-title")]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:["border-color ".concat(n),"background ".concat(n),"padding ".concat(n," ").concat(c)].join(","),["".concat(t,"-item-icon, ").concat(r)]:{minWidth:l,fontSize:l,transition:["font-size ".concat(o," ").concat(a),"margin ".concat(n," ").concat(c),"color ".concat(n)].join(","),"+ span":{marginInlineStart:i,opacity:1,transition:["opacity ".concat(n," ").concat(c),"margin ".concat(n),"color ".concat(n)].join(",")}},["".concat(t,"-item-icon")]:Object.assign({},(0,y.Ro)()),["&".concat(t,"-item-only-child")]:{["> ".concat(r,", > ").concat(t,"-item-icon")]:{marginInlineEnd:0}}},["".concat(t,"-item-disabled, ").concat(t,"-submenu-disabled")]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},["> ".concat(t,"-submenu-title")]:{color:"inherit !important",cursor:"not-allowed"}}}},A=e=>{let{componentCls:t,motionDurationSlow:n,motionEaseInOut:o,borderRadius:c,menuArrowSize:a,menuArrowOffset:r}=e;return{["".concat(t,"-submenu")]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:e.margin,width:a,color:"currentcolor",transform:"translateY(-50%)",transition:"transform ".concat(n," ").concat(o,", opacity ").concat(n)},"&-arrow":{"&::before, &::after":{position:"absolute",width:e.calc(a).mul(.6).equal(),height:e.calc(a).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:c,transition:["background ".concat(n," ").concat(o),"transform ".concat(n," ").concat(o),"top ".concat(n," ").concat(o),"color ".concat(n," ").concat(o)].join(","),content:'""'},"&::before":{transform:"rotate(45deg) translateY(".concat((0,B.bf)(e.calc(r).mul(-1).equal()),")")},"&::after":{transform:"rotate(-45deg) translateY(".concat((0,B.bf)(r),")")}}}}},D=e=>{let{antCls:t,componentCls:n,fontSize:o,motionDurationSlow:c,motionDurationMid:a,motionEaseInOut:r,paddingXS:l,padding:i,colorSplit:s,lineWidth:d,zIndexPopup:u,borderRadiusLG:m,subMenuItemBorderRadius:p,menuArrowSize:g,menuArrowOffset:b,lineType:f,groupTitleLineHeight:v,groupTitleFontSize:h}=e;return[{"":{["".concat(n)]:Object.assign(Object.assign({},(0,y.dF)()),{"&-hidden":{display:"none"}})},["".concat(n,"-submenu-hidden")]:{display:"none"}},{[n]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,y.Wf)(e)),(0,y.dF)()),{marginBottom:0,paddingInlineStart:0,fontSize:o,lineHeight:0,listStyle:"none",outline:"none",transition:"width ".concat(c," cubic-bezier(0.2, 0, 0, 1) 0s"),"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",["".concat(n,"-item")]:{flex:"none"}},["".concat(n,"-item, ").concat(n,"-submenu, ").concat(n,"-submenu-title")]:{borderRadius:e.itemBorderRadius},["".concat(n,"-item-group-title")]:{padding:"".concat((0,B.bf)(l)," ").concat((0,B.bf)(i)),fontSize:h,lineHeight:v,transition:"all ".concat(c)},["&-horizontal ".concat(n,"-submenu")]:{transition:["border-color ".concat(c," ").concat(r),"background ".concat(c," ").concat(r)].join(",")},["".concat(n,"-submenu, ").concat(n,"-submenu-inline")]:{transition:["border-color ".concat(c," ").concat(r),"background ".concat(c," ").concat(r),"padding ".concat(a," ").concat(r)].join(",")},["".concat(n,"-submenu ").concat(n,"-sub")]:{cursor:"initial",transition:["background ".concat(c," ").concat(r),"padding ".concat(c," ").concat(r)].join(",")},["".concat(n,"-title-content")]:{transition:"color ".concat(c),["> ".concat(t,"-typography-ellipsis-single-line")]:{display:"inline",verticalAlign:"unset"}},["".concat(n,"-item a")]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},["".concat(n,"-item-divider")]:{overflow:"hidden",lineHeight:0,borderColor:s,borderStyle:f,borderWidth:0,borderTopWidth:d,marginBlock:d,padding:0,"&-dashed":{borderStyle:"dashed"}}}),Z(e)),{["".concat(n,"-item-group")]:{["".concat(n,"-item-group-list")]:{margin:0,padding:0,["".concat(n,"-item, ").concat(n,"-submenu-title")]:{paddingInline:"".concat((0,B.bf)(e.calc(o).mul(2).equal())," ").concat((0,B.bf)(i))}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:u,borderRadius:m,boxShadow:"none",transformOrigin:"0 0",["&".concat(n,"-submenu")]:{background:"transparent"},"&::before":{position:"absolute",inset:0,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'},["> ".concat(n)]:Object.assign(Object.assign(Object.assign({borderRadius:m},Z(e)),A(e)),{["".concat(n,"-item, ").concat(n,"-submenu > ").concat(n,"-submenu-title")]:{borderRadius:p},["".concat(n,"-submenu-title::after")]:{transition:"transform ".concat(c," ").concat(r)}})},"\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ":{transformOrigin:"100% 0"},"\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ":{transformOrigin:"100% 100%"},"\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ":{transformOrigin:"0 100%"},"\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ":{transformOrigin:"0 0"},"\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ":{paddingInlineEnd:e.paddingXS},"\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ":{paddingInlineStart:e.paddingXS},"\n          &-placement-topRight,\n          &-placement-topLeft\n          ":{paddingBottom:e.paddingXS},"\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ":{paddingTop:e.paddingXS}}}),A(e)),{["&-inline-collapsed ".concat(n,"-submenu-arrow,\n        &-inline ").concat(n,"-submenu-arrow")]:{"&::before":{transform:"rotate(-45deg) translateX(".concat((0,B.bf)(b),")")},"&::after":{transform:"rotate(45deg) translateX(".concat((0,B.bf)(e.calc(b).mul(-1).equal()),")")}},["".concat(n,"-submenu-open").concat(n,"-submenu-inline > ").concat(n,"-submenu-title > ").concat(n,"-submenu-arrow")]:{transform:"translateY(".concat((0,B.bf)(e.calc(g).mul(.2).mul(-1).equal()),")"),"&::after":{transform:"rotate(-45deg) translateX(".concat((0,B.bf)(e.calc(b).mul(-1).equal()),")")},"&::before":{transform:"rotate(45deg) translateX(".concat((0,B.bf)(b),")")}}})},{["".concat(t,"-layout-header")]:{[n]:{lineHeight:"inherit"}}}]},P=e=>{var t,n,o;let{colorPrimary:c,colorError:a,colorTextDisabled:r,colorErrorBg:l,colorText:i,colorTextDescription:s,colorBgContainer:d,colorFillAlter:u,colorFillContent:m,lineWidth:p,lineWidthBold:g,controlItemBgActive:b,colorBgTextHover:f,controlHeightLG:v,lineHeight:h,colorBgElevated:I,marginXXS:C,padding:x,fontSize:B,controlHeightSM:y,fontSizeLG:O,colorTextLightSolid:w,colorErrorHover:k}=e,j=null!==(t=e.activeBarWidth)&&void 0!==t?t:0,E=null!==(n=e.activeBarBorderWidth)&&void 0!==n?n:p,H=null!==(o=e.itemMarginInline)&&void 0!==o?o:e.marginXXS,z=new S.C(w).setAlpha(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:e.zIndexPopupBase+50,radiusItem:e.borderRadiusLG,itemBorderRadius:e.borderRadiusLG,radiusSubMenuItem:e.borderRadiusSM,subMenuItemBorderRadius:e.borderRadiusSM,colorItemText:i,itemColor:i,colorItemTextHover:i,itemHoverColor:i,colorItemTextHoverHorizontal:c,horizontalItemHoverColor:c,colorGroupTitle:s,groupTitleColor:s,colorItemTextSelected:c,itemSelectedColor:c,colorItemTextSelectedHorizontal:c,horizontalItemSelectedColor:c,colorItemBg:d,itemBg:d,colorItemBgHover:f,itemHoverBg:f,colorItemBgActive:m,itemActiveBg:b,colorSubItemBg:u,subMenuItemBg:u,colorItemBgSelected:b,itemSelectedBg:b,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:j,colorActiveBarHeight:g,activeBarHeight:g,colorActiveBarBorderSize:p,activeBarBorderWidth:E,colorItemTextDisabled:r,itemDisabledColor:r,colorDangerItemText:a,dangerItemColor:a,colorDangerItemTextHover:a,dangerItemHoverColor:a,colorDangerItemTextSelected:a,dangerItemSelectedColor:a,colorDangerItemBgActive:l,dangerItemActiveBg:l,colorDangerItemBgSelected:l,dangerItemSelectedBg:l,itemMarginInline:H,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:v,groupTitleLineHeight:h,collapsedWidth:2*v,popupBg:I,itemMarginBlock:C,itemPaddingInline:x,horizontalLineHeight:"".concat(1.15*v,"px"),iconSize:B,iconMarginInlineEnd:y-B,collapsedIconSize:O,groupTitleFontSize:B,darkItemDisabledColor:new S.C(w).setAlpha(.25).toRgbString(),darkItemColor:z,darkDangerItemColor:a,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:w,darkItemSelectedBg:c,darkDangerItemSelectedBg:a,darkItemHoverBg:"transparent",darkGroupTitleColor:z,darkItemHoverColor:w,darkDangerItemHoverColor:k,darkDangerItemSelectedColor:w,darkDangerItemActiveBg:a,itemWidth:j?"calc(100% + ".concat(E,"px)"):"calc(100% - ".concat(2*H,"px)")}};var W=n(94759),L=e=>{var t;let n;let{popupClassName:a,icon:r,title:l,theme:s}=e,u=o.useContext(v),{prefixCls:p,inlineCollapsed:g,theme:b}=u,f=(0,c.Xl)();if(r){let e=o.isValidElement(l)&&"span"===l.type;n=o.createElement(o.Fragment,null,(0,m.Tm)(r,{className:i()(o.isValidElement(r)?null===(t=r.props)||void 0===t?void 0:t.className:"","".concat(p,"-item-icon"))}),e?l:o.createElement("span",{className:"".concat(p,"-title-content")},l))}else n=g&&!f.length&&l&&"string"==typeof l?o.createElement("div",{className:"".concat(p,"-inline-collapsed-noicon")},l.charAt(0)):o.createElement("span",{className:"".concat(p,"-title-content")},l);let h=o.useMemo(()=>Object.assign(Object.assign({},u),{firstLevel:!1}),[u]),[I]=(0,W.Cn)("Menu");return o.createElement(v.Provider,{value:h},o.createElement(c.Wd,Object.assign({},(0,d.Z)(e,["icon"]),{title:n,popupClassName:i()(p,a,"".concat(p,"-").concat(s||b)),popupStyle:{zIndex:I}})))},q=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,o=Object.getOwnPropertySymbols(e);c<o.length;c++)0>t.indexOf(o[c])&&Object.prototype.propertyIsEnumerable.call(e,o[c])&&(n[o[c]]=e[o[c]]);return n};function X(e){return null===e||!1===e}let _={item:C,submenu:L,divider:f},V=(0,o.forwardRef)((e,t)=>{var n;let a=o.useContext(x.Z),l=a||{},{getPrefixCls:b,getPopupContainer:f,direction:h,menu:I}=o.useContext(p.E_),C=b(),{prefixCls:B,className:S,style:y,theme:T="light",expandIcon:R,_internalDisableMenuItemTitleTooltip:Z,inlineCollapsed:A,siderCollapsed:W,rootClassName:L,mode:V,selectable:Y,onClick:F,overflowedIndicatorPopupClassName:G}=e,J=q(e,["prefixCls","className","style","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","rootClassName","mode","selectable","onClick","overflowedIndicatorPopupClassName"]),$=(0,d.Z)(J,["collapsedWidth"]);null===(n=l.validator)||void 0===n||n.call(l,{mode:V});let K=(0,s.zX)(function(){var e;null==F||F.apply(void 0,arguments),null===(e=l.onClick)||void 0===e||e.call(l)}),Q=l.mode||V,U=null!=Y?Y:l.selectable,ee=o.useMemo(()=>void 0!==W?W:A,[A,W]),et={horizontal:{motionName:"".concat(C,"-slide-up")},inline:(0,u.Z)(C),other:{motionName:"".concat(C,"-zoom-big")}},en=b("menu",B||l.prefixCls),eo=(0,g.Z)(en),[ec,ea,er]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=!(arguments.length>2)||void 0===arguments[2]||arguments[2];return(0,j.I$)("Menu",e=>{let{colorBgElevated:t,controlHeightLG:n,fontSize:o,darkItemColor:c,darkDangerItemColor:a,darkItemBg:r,darkSubMenuItemBg:l,darkItemSelectedColor:i,darkItemSelectedBg:s,darkDangerItemSelectedBg:d,darkItemHoverBg:u,darkGroupTitleColor:m,darkItemHoverColor:p,darkItemDisabledColor:g,darkDangerItemHoverColor:b,darkDangerItemSelectedColor:f,darkDangerItemActiveBg:v,popupBg:h,darkPopupBg:I}=e,C=e.calc(o).div(7).mul(5).equal(),x=(0,E.TS)(e,{menuArrowSize:C,menuHorizontalHeight:e.calc(n).mul(1.15).equal(),menuArrowOffset:e.calc(C).mul(.25).equal(),menuSubMenuBg:t,calc:e.calc,popupBg:h}),B=(0,E.TS)(x,{itemColor:c,itemHoverColor:p,groupTitleColor:m,itemSelectedColor:i,itemBg:r,popupBg:I,subMenuItemBg:l,itemActiveBg:"transparent",itemSelectedBg:s,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:u,itemDisabledColor:g,dangerItemColor:a,dangerItemHoverColor:b,dangerItemSelectedColor:f,dangerItemActiveBg:v,dangerItemSelectedBg:d,menuSubMenuBg:l,horizontalItemSelectedColor:i,horizontalItemSelectedBg:s});return[D(x),H(x),M(x),N(x,"light"),N(B,"dark"),z(x),(0,O.Z)(x),(0,w.oN)(x,"slide-up"),(0,w.oN)(x,"slide-down"),(0,k._y)(x,"zoom-big")]},P,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],injectStyle:n,unitless:{groupTitleLineHeight:!0}})(e,t)}(en,eo,!a),el=i()("".concat(en,"-").concat(T),null==I?void 0:I.className,S),ei=o.useMemo(()=>{var e,t;if("function"==typeof R||X(R))return R||null;if("function"==typeof l.expandIcon||X(l.expandIcon))return l.expandIcon||null;if("function"==typeof(null==I?void 0:I.expandIcon)||X(null==I?void 0:I.expandIcon))return(null==I?void 0:I.expandIcon)||null;let n=null!==(e=null!=R?R:null==l?void 0:l.expandIcon)&&void 0!==e?e:null==I?void 0:I.expandIcon;return(0,m.Tm)(n,{className:i()("".concat(en,"-submenu-expand-icon"),o.isValidElement(n)?null===(t=n.props)||void 0===t?void 0:t.className:void 0)})},[R,null==l?void 0:l.expandIcon,null==I?void 0:I.expandIcon,en]),es=o.useMemo(()=>({prefixCls:en,inlineCollapsed:ee||!1,direction:h,firstLevel:!0,theme:T,mode:Q,disableMenuItemTitleTooltip:Z}),[en,ee,h,Z,T]);return ec(o.createElement(x.Z.Provider,{value:null},o.createElement(v.Provider,{value:es},o.createElement(c.ZP,Object.assign({getPopupContainer:f,overflowedIndicator:o.createElement(r.Z,null),overflowedIndicatorPopupClassName:i()(en,"".concat(en,"-").concat(T),G),mode:Q,selectable:U,onClick:K},$,{inlineCollapsed:ee,style:Object.assign(Object.assign({},null==I?void 0:I.style),y),className:el,prefixCls:en,direction:h,defaultMotions:et,expandIcon:ei,ref:t,rootClassName:i()(L,ea,l.rootClassName,er,eo),_internalComponents:_})))))}),Y=(0,o.forwardRef)((e,t)=>{let n=(0,o.useRef)(null),c=o.useContext(a.D);return(0,o.useImperativeHandle)(t,()=>({menu:n.current,focus:e=>{var t;null===(t=n.current)||void 0===t||t.focus(e)}})),o.createElement(V,Object.assign({ref:n},e,c))});Y.Item=C,Y.SubMenu=L,Y.Divider=f,Y.ItemGroup=c.BW;var F=Y}}]);