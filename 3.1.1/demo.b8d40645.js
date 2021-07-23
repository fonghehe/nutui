var t=Object.defineProperty,e=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,a,l)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l;import{c as i}from"./mobile.51796f58.js";import{a as o,x as d,y as u,z as b,r as p,o as f,c as r,f as _,F as h,h as m,t as y,n as g,A as v,j}from"./vendor.0d0a34e4.js";import"./index.24e285d8.js";const{createDemo:w}=i("tab");var T=w({props:{},setup(){const t=o({editList:[{title:"标签一"},{title:"标签二"}]});return i=((t,e)=>{for(var a in e||(e={}))n.call(e,a)&&c(t,a,e[a]);if(l)for(var a of l(e))s.call(e,a)&&c(t,a,e[a]);return t})({},d(t)),e(i,a({changeList:function(){t.editList.push({title:"标签"+t.editList.length})},switchTab:function(t,e){console.log(t,e)}}));var i}});const O=v();u("data-v-25a66b16");const L={class:"demo full"},x=_("h2",null,"基础用法，默认tab-title宽度均分相等",-1),P=_("p",{class:"content"},"这里是页签全部内容",-1),k=_("p",{class:"content"},"这里是页签待付款内容",-1),I=_("p",{class:"content"},"这里是页签待收获内容",-1),S=_("p",{class:"content"},"这里是页签已完成内容",-1),C=_("h2",null,"defaultIndex设置默认显示tab",-1),D=_("h2",null,"switchTab监听切换tab返回事件",-1),z=_("p",{class:"content"},"这里是页签全部内容",-1),A=_("p",{class:"content"},"这里是页签待付款内容",-1),E=_("p",{class:"content"},"这里是页签待收获内容",-1),F=_("p",{class:"content"},"这里是页签已完成内容",-1),q=_("h2",null," animatedTime 开启切换标签内容时的转场动画时间",-1),B=_("p",{class:"content"},"这里是页签全部内容",-1),G=_("p",{class:"content"},"这里是页签待付款内容",-1),H=_("p",{class:"content"},"这里是页签待收获内容",-1),J=_("p",{class:"content"},"这里是页签已完成内容",-1),K=_("h2",null," 禁止tab内容滑动",-1),M=_("p",{class:"content"},"这里是页签全部内容",-1),N=_("p",{class:"content"},"这里是页签待付款内容",-1),Q=_("p",{class:"content"},"这里是页签待收获内容",-1),R=_("p",{class:"content"},"这里是页签已完成内容",-1),U=_("h2",null,' 设置scrollType="scroll"，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。',-1),V=_("p",{class:"content"},"这里是页签全部内容",-1),W=_("p",{class:"content"},"这里是页签待付款内容",-1),X=_("p",{class:"content"},"这里是页签待收获内容",-1),Y=_("p",{class:"content"},"这里是页签已完成内容",-1),Z=_("p",{class:"content"},"这里是页签已取消内容",-1),$=_("p",{class:"content"},"这里是页签待评价内容",-1),tt=_("h2",null,"设置slot:header可以自定义标签",-1),et=_("p",{class:"content"},"这里是页签全部内容",-1),at=_("p",{class:"content"},"这里是页签待付款内容",-1),lt=_("p",{class:"content"},"这里是页签待收获内容",-1),nt=_("p",{class:"content"},"这里是页签已完成内容",-1),st=_("p",{class:"content"},"这里是页签已取消内容",-1),ct=_("p",{class:"content"},"这里是页签待评价内容",-1),it=_("h2",null,"左右tab布局",-1),ot=_("p",{class:"content"},"这里是页签一内容",-1),dt=_("p",{class:"content"},"这里是页签二内容",-1),ut=_("p",{class:"content"},"这里是页签三内容",-1),bt=_("p",{class:"content"},"这里是页签四内容",-1),pt=_("p",{class:"content"},"这里是页签五内容",-1),ft=_("p",{class:"content"},"这里是页签六内容",-1),rt=_("p",{class:"content"},"这里是页签七内容",-1),_t=_("h2",null,"异步操作",-1),ht={class:"content"},mt=j("改变数据");b();const yt=O(((t,e,a,l,n,s)=>{const c=p("nut-tab-panel"),i=p("nut-tab"),o=p("nut-icon"),d=p("nut-button");return f(),r("div",L,[x,_(i,null,{default:O((()=>[_(c,{"tab-title":"全部"},{default:O((()=>[P])),_:1}),_(c,{"tab-title":"待付款"},{default:O((()=>[k])),_:1}),_(c,{"tab-title":"待收获"},{default:O((()=>[I])),_:1}),_(c,{"tab-title":"已完成"},{default:O((()=>[S])),_:1})])),_:1}),C,D,_(i,{"default-index":1,onSwitchTab:t.switchTab},{default:O((()=>[_(c,{"tab-title":"全部"},{default:O((()=>[z])),_:1}),_(c,{"tab-title":"待付款"},{default:O((()=>[A])),_:1}),_(c,{"tab-title":"待收获"},{default:O((()=>[E])),_:1}),_(c,{"tab-title":"已完成"},{default:O((()=>[F])),_:1})])),_:1},8,["onSwitchTab"]),q,_(i,{"animated-time":500},{default:O((()=>[_(c,{"tab-title":"全部"},{default:O((()=>[B])),_:1}),_(c,{"tab-title":"待付款"},{default:O((()=>[G])),_:1}),_(c,{"tab-title":"待收获"},{default:O((()=>[H])),_:1}),_(c,{"tab-title":"已完成"},{default:O((()=>[J])),_:1})])),_:1}),K,_(i,{"no-swiping":!0},{default:O((()=>[_(c,{"tab-title":"全部"},{default:O((()=>[M])),_:1}),_(c,{"tab-title":"待付款"},{default:O((()=>[N])),_:1}),_(c,{"tab-title":"待收获"},{default:O((()=>[Q])),_:1}),_(c,{"tab-title":"已完成"},{default:O((()=>[R])),_:1})])),_:1}),U,_(i,{"animated-time":500,scrollType:"scroll"},{default:O((()=>[_(c,{"tab-title":"全部"},{default:O((()=>[V])),_:1}),_(c,{"tab-title":"待付款"},{default:O((()=>[W])),_:1}),_(c,{"tab-title":"待收获"},{default:O((()=>[X])),_:1}),_(c,{"tab-title":"已完成"},{default:O((()=>[Y])),_:1}),_(c,{"tab-title":"已取消"},{default:O((()=>[Z])),_:1}),_(c,{"tab-title":"待评价"},{default:O((()=>[$])),_:1})])),_:1}),tt,_(i,{scrollType:"scroll"},{default:O((()=>[_(c,{"tab-title":"全部"},{header:O((()=>[_(o,{name:"dongdong"})])),default:O((()=>[et])),_:1}),_(c,{"tab-title":"待付款"},{default:O((()=>[at])),_:1}),_(c,{"tab-title":"待收获"},{default:O((()=>[lt])),_:1}),_(c,{"tab-title":"已完成"},{default:O((()=>[nt])),_:1}),_(c,{"tab-title":"已取消"},{default:O((()=>[st])),_:1}),_(c,{"tab-title":"待评价"},{default:O((()=>[ct])),_:1})])),_:1}),it,_(i,{direction:"vertical","animated-time":500,"default-index":2,scrollType:"scroll"},{default:O((()=>[_(c,{"tab-title":"页签一"},{default:O((()=>[ot])),_:1}),_(c,{"tab-title":"页签二"},{default:O((()=>[dt])),_:1}),_(c,{"tab-title":"页签三"},{default:O((()=>[ut])),_:1}),_(c,{"tab-title":"页签四"},{default:O((()=>[bt])),_:1}),_(c,{"tab-title":"页签五"},{default:O((()=>[pt])),_:1}),_(c,{"tab-title":"页签六"},{default:O((()=>[ft])),_:1}),_(c,{"tab-title":"页签七"},{default:O((()=>[rt])),_:1})])),_:1}),_t,t.editList.length>0?(f(),r(i,{key:0,"animated-time":500},{default:O((()=>[(f(!0),r(h,null,m(t.editList,((t,e)=>(f(),r(c,{"tab-title":t.title,key:e},{default:O((()=>[_("p",ht,"这里是页签"+y(e)+"内容",1)])),_:2},1032,["tab-title"])))),128))])),_:1})):g("",!0),_(d,{type:"primary",onClick:t.changeList},{default:O((()=>[mt])),_:1},8,["onClick"])])}));T.render=yt,T.__scopeId="data-v-25a66b16";export default T;