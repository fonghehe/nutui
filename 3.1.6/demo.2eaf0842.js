var v=Object.defineProperty,F=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var h=(e,s,u)=>s in e?v(e,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[s]=u,T=(e,s)=>{for(var u in s||(s={}))C.call(s,u)&&h(e,u,s[u]);if(_)for(var u of _(s))D.call(s,u)&&h(e,u,s[u]);return e},E=(e,s)=>F(e,B(s));import{c as w}from"./mobile.f6e549d3.js";import{_ as y}from"./index.66306187.js";import{a as g,A as b,r as m,e as O,j as o,k as d,B as V,C as k,g as n,o as j,l as I,t as i}from"./vendor.9cc7b6f2.js";const{createDemo:P}=w("countdown"),S=P({props:{},setup(){const e=g({serverTime:Date.now()-30*1e3,end:Date.now()+50*1e3,asyncEnd:0,paused:!1,resetTime:{d:"1",h:"00",m:"00",s:"00"}}),s=()=>{e.paused=!e.paused},u=()=>{console.log("countdown: ended.")},c=r=>{console.log("paused: ",r)},p=r=>{console.log("restart: ",r)};return setTimeout(()=>{e.asyncEnd=Date.now()+30*1e3},3e3),E(T({},b(e)),{toggle:s,onend:u,onpaused:c,onrestart:p})}}),t=e=>(V("data-v-4fc80275"),e=e(),k(),e),$={class:"demo"},N=t(()=>n("h2",null,"\u57FA\u7840\u7528\u6CD5",-1)),R=t(()=>n("h2",null,"\u663E\u793A\u5929",-1)),z=t(()=>n("h2",null,"\u4EE5\u670D\u52A1\u7AEF\u7684\u65F6\u95F4\u4E3A\u51C6",-1)),U=t(()=>n("h2",null,"\u663E\u793A\u4E3A \u5929\u65F6\u5206\u79D2",-1)),q=t(()=>n("h2",null,"\u5F02\u6B65\u66F4\u65B0\u7ED3\u675F\u65F6\u95F4",-1)),G=t(()=>n("h2",null,"\u63A7\u5236\u5F00\u59CB\u548C\u6682\u505C\u7684\u5012\u8BA1\u65F6",-1)),H={style:{position:"absolute",right:"10px",top:"9px"}},J=t(()=>n("h2",null,"\u81EA\u5B9A\u4E49\u5C55\u793A",-1)),K={class:"countdown-part-box"},L={class:"part-item-symbol"},M={class:"part-item h"},Q=t(()=>n("span",{class:"part-item-symbol"},":",-1)),W={class:"part-item m"},X=t(()=>n("span",{class:"part-item-symbol"},":",-1)),Y={class:"part-item s"},Z=t(()=>n("h2",null,"\u81EA\u5B9A\u4E49\u663E\u793A",-1)),x=t(()=>n("span",null,"\u53EF\u8C03\u7528\u8BE5\u7EC4\u4EF6\u63D0\u4F9B\u7684 restTime \u65B9\u6CD5\u83B7\u53D6 '\u5929\u65F6\u5206\u79D2' \u81EA\u5B9A\u4E49\u663E\u793A",-1));function ee(e,s,u,c,p,r){const a=m("nut-countdown"),l=m("nut-cell"),f=m("nut-button");return j(),O("div",$,[N,o(l,null,{default:d(()=>[o(a,{endTime:e.end,onOnEnd:e.onend},null,8,["endTime","onOnEnd"])]),_:1}),R,o(l,null,{default:d(()=>[o(a,{endTime:e.end,showDays:""},null,8,["endTime"])]),_:1}),z,o(l,null,{default:d(()=>[o(a,{startTime:e.serverTime,endTime:e.end},null,8,["startTime","endTime"])]),_:1}),U,o(l,null,{default:d(()=>[o(a,{showDays:"",showPlainText:"",endTime:e.end},null,8,["endTime"])]),_:1}),q,o(l,null,{default:d(()=>[o(a,{showPlainText:"",endTime:e.asyncEnd},null,8,["endTime"])]),_:1}),G,o(l,null,{default:d(()=>[o(a,{endTime:e.end,paused:e.paused,onOnPaused:e.onpaused,onOnRestart:e.onrestart},null,8,["endTime","paused","onOnPaused","onOnRestart"]),n("div",H,[o(f,{type:"primary",size:"small",onClick:e.toggle},{default:d(()=>[I(i(e.paused?"start":"stop"),1)]),_:1},8,["onClick"])])]),_:1}),J,o(l,null,{default:d(()=>[n("span",null,[o(a,{modelValue:e.resetTime,"onUpdate:modelValue":s[0]||(s[0]=A=>e.resetTime=A),endTime:e.end},{default:d(()=>[n("div",K,[n("div",L,i(e.resetTime.d)+"\u5929",1),n("div",M,i(e.resetTime.h),1),Q,n("div",W,i(e.resetTime.m),1),X,n("div",Y,i(e.resetTime.s),1)])]),_:1},8,["modelValue","endTime"])])]),_:1}),Z,o(l,null,{default:d(()=>[x]),_:1})])}var te=y(S,[["render",ee],["__scopeId","data-v-4fc80275"]]);export{te as default};
