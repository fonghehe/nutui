var t=Object.defineProperty,e=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(e,r,n)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n;import{c as p}from"./mobile.9383a006.js";import{a as c,A as o,r as i,o as u,e as d,g as f,j as _,k as v,l as b}from"./vendor.3379a4e5.js";import"./index.7ef57e57.js";const{createDemo:g}=p("steps");var h=g({props:{},setup(){const t=c({current1:1,current2:1,current3:1,current4:1,current5:1});return p=((t,e)=>{for(var r in e||(e={}))l.call(e,r)&&s(t,r,e[r]);if(n)for(var r of n(e))a.call(e,r)&&s(t,r,e[r]);return t})({},o(t)),e(p,r({handleStep:e=>{t[e]>=3?t[e]=1:t[e]+=1}}));var p}});const y={class:"demo padding"},m=f("h2",null,"基本用法",-1),j={class:"steps-wrapper"},w=b("1"),x=b("2"),O=b("3"),P={class:"steps-button"},S=b("下一步"),k=f("h2",null,"标题和描述信息",-1),C={class:"steps-wrapper"},D=b("1"),A={class:"steps-button",style:{"margin-top":"10px"}},E=b("下一步"),I=f("h2",null,"自定义图标",-1),q={class:"steps-wrapper"},z=b("1"),B=b("2"),F=b("3"),G=f("h2",null,"竖向步骤条",-1),H={class:"steps-wrapper",style:{height:"300px",padding:"15px 30px"}},J=b("1"),K=b("2"),L=b("3"),M=f("h2",null,"竖向步骤条",-1),N={class:"steps-wrapper",style:{height:"300px",padding:"15px 40px"}},Q=b("1"),R=b("2"),T=b("3");h.render=function(t,e,r,n,l,a){const s=i("nut-step"),p=i("nut-steps"),c=i("nut-button");return u(),d("div",y,[m,f("div",j,[_(p,{current:t.current1},{default:v((()=>[_(s,{title:"步骤一"},{default:v((()=>[w])),_:1}),_(s,{title:"步骤二"},{default:v((()=>[x])),_:1}),_(s,{title:"步骤三"},{default:v((()=>[O])),_:1})])),_:1},8,["current"]),f("div",P,[_(c,{type:"danger",onClick:e[0]||(e[0]=e=>t.handleStep("current1"))},{default:v((()=>[S])),_:1})])]),k,f("div",C,[_(p,{current:t.current2},{default:v((()=>[_(s,{title:"步骤一",content:"步骤描述"},{default:v((()=>[D])),_:1}),_(s,{title:"步骤二",content:"步骤描述"}),_(s,{title:"步骤三",content:"步骤描述"})])),_:1},8,["current"]),f("div",A,[_(c,{type:"danger",onClick:e[1]||(e[1]=e=>t.handleStep("current2"))},{default:v((()=>[E])),_:1})])]),I,f("div",q,[_(p,{current:"1"},{default:v((()=>[_(s,{title:"已完成",icon:"service"},{default:v((()=>[z])),_:1}),_(s,{title:"进行中",icon:"people"},{default:v((()=>[B])),_:1}),_(s,{title:"未开始",icon:"location2"},{default:v((()=>[F])),_:1})])),_:1})]),G,f("div",H,[_(p,{direction:"vertical",current:"2"},{default:v((()=>[_(s,{title:"已完成",content:"您的订单已经打包完成，商品已发出"},{default:v((()=>[J])),_:1}),_(s,{title:"进行中",content:"您的订单正在配送途中"},{default:v((()=>[K])),_:1}),_(s,{title:"未开始",content:"收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"},{default:v((()=>[L])),_:1})])),_:1})]),M,f("div",N,[_(p,{direction:"vertical","progress-dot":"",current:"2"},{default:v((()=>[_(s,{title:"已完成",content:"您的订单已经打包完成，商品已发出"},{default:v((()=>[Q])),_:1}),_(s,{title:"进行中",content:"您的订单正在配送途中"},{default:v((()=>[R])),_:1}),_(s,{title:"未开始",content:"<p>收货地址为：</p><p>北京市经济技术开发区科创十一街18号院京东大厦</p>"},{default:v((()=>[T])),_:1})])),_:1})])])};export{h as default};
