System.register(["./mobile-legacy.3c3074f7.js","./vendor-legacy.0f70f248.js","./index-legacy.7d8e4f21.js"],(function(t){"use strict";var e,i,o,n,c,l,f,s;return{setters:[function(t){e=t.c,i=t.N},function(t){o=t.r,n=t.o,c=t.e,l=t.j,f=t.k,s=t.l},function(){}],execute:function(){const{createDemo:r}=e("notify");var u=t("default",r({setup:()=>({baseNotify:t=>{i.text(t,{onClose:()=>{console.log("close")},onClick:()=>{console.log("click")}})},primaryNotify:t=>{i.primary(t)},successNotify:t=>{i.success(t)},errorNotify:t=>{i.danger(t)},warningNotify:t=>{i.warn(t)},cusBgNotify:t=>{i.text(t,{color:"#ad0000",background:"#ffe1e1"})},timeNotify:t=>{i.text(t,{duration:1e4})}})}));const a={class:"demo"},d=s("基础用法"),y=s("主要通知"),k=s("成功通知"),N=s("危险通知"),g=s("警告通知"),_=s(" 自定义背景色和字体颜色 "),m=s(" 自定义时长 ");u.render=function(t,e,i,s,r,u){const C=o("nut-cell"),L=o("nut-cell-group");return n(),c("div",a,[l(L,{title:"基础用法"},{default:f((()=>[l(C,{"is-Link":"",onClick:e[0]||(e[0]=e=>t.baseNotify("基础用法"))},{default:f((()=>[d])),_:1})])),_:1}),l(L,{title:"通知类型"},{default:f((()=>[l(C,{"is-Link":"",onClick:e[1]||(e[1]=e=>t.primaryNotify("主要通知"))},{default:f((()=>[y])),_:1}),l(C,{"is-Link":"",onClick:e[2]||(e[2]=e=>t.successNotify("成功通知"))},{default:f((()=>[k])),_:1}),l(C,{"is-Link":"",onClick:e[3]||(e[3]=e=>t.errorNotify("危险通知"))},{default:f((()=>[N])),_:1}),l(C,{"is-Link":"",onClick:e[4]||(e[4]=e=>t.warningNotify("警告通知"))},{default:f((()=>[g])),_:1})])),_:1}),l(L,{title:"自定义样式"},{default:f((()=>[l(C,{"is-Link":"",onClick:e[5]||(e[5]=e=>t.cusBgNotify("自定义背景色和字体颜色"))},{default:f((()=>[_])),_:1})])),_:1}),l(L,{title:"自定义时长"},{default:f((()=>[l(C,{"is-Link":"",onClick:e[6]||(e[6]=e=>t.timeNotify("自定义时长"))},{default:f((()=>[m])),_:1})])),_:1})])}}}}));
