import{c as E}from"./mobile.f6e549d3.js";import{_ as y}from"./index.66306187.js";import{m as C,a as r,r as d,e as m,j as t,k as o,g as a,o as p,F as L,i as A,t as F,l}from"./vendor.9cc7b6f2.js";const{createDemo:g}=E("popover"),k=g({setup(){const e=C({showIcon:!1,placement:!1,darkTheme:!1,lightTheme:!1,Customized:!1,disableAction:!1,topLocation:!1,rightLocation:!1,leftLocation:!1}),s=r([{name:"\u9009\u9879\u4E00"},{name:"\u9009\u9879\u4E8C"},{name:"\u9009\u9879\u4E09"}]),c=r([{name:"\u9009\u9879\u4E00",icon:"my2"},{name:"\u9009\u9879\u4E8C",icon:"cart2"},{name:"\u9009\u9879\u4E09",icon:"location2"}]),v=r([{name:"\u9009\u9879\u4E00",disabled:!0},{name:"\u9009\u9879\u4E8C",disabled:!0},{name:"\u9009\u9879\u4E09"}]),b=r([{name:"service",desc:"\u9009\u9879\u4E00"},{name:"notice",desc:"\u9009\u9879\u4E8C"},{name:"location",desc:"\u9009\u9879\u4E09"},{name:"category",desc:"\u9009\u9879\u56DB"},{name:"scan2",desc:"\u9009\u9879\u4E94"},{name:"message",desc:"\u9009\u9879\u516D"}]);return{iconItemList:s,itemList:c,visible:e,itemListDisabled:v,selfContent:b,chooseItem:()=>{alert("\u9009\u62E9\u9879")}}}}),I={class:"demo"},B=a("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),D=l("\u660E\u6717\u98CE\u683C"),q=l("\u6697\u9ED1\u98CE\u683C"),U=a("h2",null,"\u9009\u9879\u914D\u7F6E",-1),T=l("\u5C55\u793A\u56FE\u6807"),j=l("\u7981\u7528\u9009\u9879"),w=a("h2",null,"\u81EA\u5B9A\u4E49\u5185\u5BB9",-1),z=l("\u81EA\u5B9A\u4E49\u5185\u5BB9"),$={class:"self-content"},N={class:"self-content-desc"},V=a("h2",null,"\u4F4D\u7F6E\u81EA\u5B9A\u4E49",-1),S=l("\u5411\u4E0A\u5F39\u51FA"),G=a("h2",null,null,-1),H=l("\u5411\u53F3\u5F39\u51FA"),J=l("\u5411\u5DE6\u5F39\u51FA");function K(e,s,c,v,b,f){const n=d("nut-button"),u=d("nut-popover"),h=d("nut-icon");return p(),m("div",I,[B,t(u,{visible:e.visible.lightTheme,"onUpdate:visible":s[0]||(s[0]=i=>e.visible.lightTheme=i),list:e.iconItemList,onChoose:e.chooseItem},{reference:o(()=>[t(n,{type:"primary",shape:"square"},{default:o(()=>[D]),_:1})]),_:1},8,["visible","list","onChoose"]),t(u,{visible:e.visible.darkTheme,"onUpdate:visible":s[1]||(s[1]=i=>e.visible.darkTheme=i),theme:"dark",list:e.iconItemList},{reference:o(()=>[t(n,{type:"primary",shape:"square"},{default:o(()=>[q]),_:1})]),_:1},8,["visible","list"]),U,t(u,{visible:e.visible.showIcon,"onUpdate:visible":s[2]||(s[2]=i=>e.visible.showIcon=i),theme:"dark",list:e.itemList},{reference:o(()=>[t(n,{type:"primary",shape:"square"},{default:o(()=>[T]),_:1})]),_:1},8,["visible","list"]),t(u,{visible:e.visible.disableAction,"onUpdate:visible":s[3]||(s[3]=i=>e.visible.disableAction=i),list:e.itemListDisabled},{reference:o(()=>[t(n,{type:"primary",shape:"square"},{default:o(()=>[j]),_:1})]),_:1},8,["visible","list"]),w,t(u,{visible:e.visible.Customized,"onUpdate:visible":s[4]||(s[4]=i=>e.visible.Customized=i)},{reference:o(()=>[t(n,{type:"primary",shape:"square"},{default:o(()=>[z]),_:1})]),content:o(()=>[a("div",$,[(p(!0),m(L,null,A(e.selfContent,(i,_)=>(p(),m("div",{class:"self-content-item",key:_},[t(h,{name:i.name,size:"15"},null,8,["name"]),a("div",N,F(i.desc),1)]))),128))])]),_:1},8,["visible"]),V,t(u,{visible:e.visible.topLocation,"onUpdate:visible":s[5]||(s[5]=i=>e.visible.topLocation=i),location:"top",theme:"dark",list:e.iconItemList},{reference:o(()=>[t(n,{type:"primary",shape:"square"},{default:o(()=>[S]),_:1})]),_:1},8,["visible","list"]),G,t(u,{visible:e.visible.rightLocation,"onUpdate:visible":s[6]||(s[6]=i=>e.visible.rightLocation=i),location:"right",theme:"dark",list:e.iconItemList},{reference:o(()=>[t(n,{type:"primary",shape:"square"},{default:o(()=>[H]),_:1})]),_:1},8,["visible","list"]),t(u,{visible:e.visible.leftLocation,"onUpdate:visible":s[7]||(s[7]=i=>e.visible.leftLocation=i),location:"left",theme:"dark",list:e.iconItemList},{reference:o(()=>[t(n,{type:"primary",shape:"square"},{default:o(()=>[J]),_:1})]),_:1},8,["visible","list"])])}var Q=y(k,[["render",K]]);export{Q as default};
