var g=Object.defineProperty,A=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var p=(e,a,o)=>a in e?g(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,h=(e,a)=>{for(var o in a||(a={}))B.call(a,o)&&p(e,o,a[o]);if(V)for(var o of V(a))F.call(a,o)&&p(e,o,a[o]);return e},E=(e,a)=>A(e,v(a));import{c as D,T as k}from"./mobile.f6e549d3.js";import{_ as U}from"./index.66306187.js";import{a as $,A as j,r as c,e as I,j as l,k as u,o as S,g as m,t as C,l as t,B as y,C as N}from"./vendor.9cc7b6f2.js";const{createDemo:T}=D("radio"),w=T({props:{},setup(){const e=$({radioVal:1,radioVal2:2,radioVal3:1,radioVal4:1,radioVal5:1,radioVal6:1}),a=i=>{console.log(i)},o=i=>{console.log(i)},f=i=>{k.text(`\u60A8\u9009\u4E2D\u4E86${i}`)};return E(h({},j(e)),{handleChange1:a,handleChange2:o,handleChange3:f})}}),b=e=>(y("data-v-8b730bbc"),e=e(),N(),e),z={class:"demo demo-nut-radio"},R=t("\u5355\u9009\u68461"),q=t("\u5355\u9009\u68462"),G=t("\u5355\u9009\u68461"),H=t("\u5355\u9009\u68462"),J=b(()=>m("div",{class:"demo-check"},"\u5F53\u524D\u9009\u4E2D\u503C",-1)),K=t("\u7981\u7528\u5355\u9009\u6846"),L=t("\u7981\u7528\u5355\u9009\u6846"),M=t("\u81EA\u5B9A\u4E49\u5C3A\u5BF812"),O=t("\u81EA\u5B9A\u4E49\u5C3A\u5BF812"),P=t("\u81EA\u5B9A\u4E49\u56FE\u6807"),Q=t("\u81EA\u5B9A\u4E49\u56FE\u6807"),W=t("\u89E6\u53D1\u4E8B\u4EF6"),X=t("\u89E6\u53D1\u4E8B\u4EF6"),Y=b(()=>m("div",{class:"demo-check"},"\u5F53\u524D\u9009\u4E2D\u503C",-1));function Z(e,a,o,f,i,x){const d=c("nut-radio"),_=c("nut-radiogroup"),s=c("nut-cell"),r=c("nut-cell-group");return S(),I("div",z,[l(r,{title:"\u57FA\u672C\u7528\u6CD5-\u5DE6\u53F3\u4FA7"},{default:u(()=>[l(s,null,{default:u(()=>[l(_,{modelValue:e.radioVal,"onUpdate:modelValue":a[0]||(a[0]=n=>e.radioVal=n),onChange:e.handleChange1},{default:u(()=>[l(d,{label:1},{default:u(()=>[R]),_:1}),l(d,{label:2},{default:u(()=>[q]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1}),l(s,null,{default:u(()=>[l(_,{modelValue:e.radioVal,"onUpdate:modelValue":a[1]||(a[1]=n=>e.radioVal=n),"text-position":"left",onChange:e.handleChange1},{default:u(()=>[l(d,{label:1},{default:u(()=>[G]),_:1}),l(d,{label:2},{default:u(()=>[H]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1}),l(s,null,{default:u(()=>[J,m("div",null,C(e.radioVal),1)]),_:1})]),_:1}),l(r,{title:"\u5355\u9009\u6846\u7981\u7528"},{default:u(()=>[l(s,null,{default:u(()=>[l(_,{modelValue:e.radioVal3,"onUpdate:modelValue":a[2]||(a[2]=n=>e.radioVal3=n)},{default:u(()=>[l(d,{label:1,disabled:""},{default:u(()=>[K]),_:1}),l(d,{label:2,disabled:""},{default:u(()=>[L]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(r,{title:"\u81EA\u5B9A\u4E49\u5C3A\u5BF8"},{default:u(()=>[l(s,null,{default:u(()=>[l(_,{modelValue:e.radioVal4,"onUpdate:modelValue":a[3]||(a[3]=n=>e.radioVal4=n)},{default:u(()=>[l(d,{label:1,"icon-size":"12"},{default:u(()=>[M]),_:1}),l(d,{label:2,"icon-size":"12"},{default:u(()=>[O]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(r,{title:"Radio\u81EA\u5B9A\u4E49\u56FE\u6807"},{default:u(()=>[l(s,null,{default:u(()=>[l(_,{modelValue:e.radioVal5,"onUpdate:modelValue":a[4]||(a[4]=n=>e.radioVal5=n)},{default:u(()=>[l(d,{label:1,"icon-name":"checklist","icon-active-name":"checklist"},{default:u(()=>[P]),_:1}),l(d,{label:2,"icon-name":"checklist","icon-active-name":"checklist"},{default:u(()=>[Q]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(r,{title:"\u89E6\u53D1\u4E8B\u4EF6"},{default:u(()=>[l(s,null,{default:u(()=>[l(_,{modelValue:e.radioVal6,"onUpdate:modelValue":a[5]||(a[5]=n=>e.radioVal6=n),onChange:e.handleChange3},{default:u(()=>[l(d,{label:1},{default:u(()=>[W]),_:1}),l(d,{label:2},{default:u(()=>[X]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1}),l(s,null,{default:u(()=>[Y,m("div",null,C(e.radioVal6),1)]),_:1})]),_:1})])}var oe=U(w,[["render",Z],["__scopeId","data-v-8b730bbc"]]);export{oe as default};
