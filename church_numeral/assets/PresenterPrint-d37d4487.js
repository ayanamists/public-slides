import{d as _,u as d,a as h,c as m,b as p,r as u,o as s,e as n,f as t,t as o,g as l,F as f,h as g,n as v,i as x,j as y,k as b,l as N,m as k,_ as P}from"./index-dc976657.js";import{N as w}from"./NoteDisplay-7c625d4a.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const c=p(()=>u.map(a=>{var r;return(r=a.meta)==null?void 0:r.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,r)=>(s(),n("div",{id:"page-root",style:v(l(x))},[t("div",V,[t("div",L,[t("h1",S,o(l(m).title),1),t("div",T,o(new Date().toLocaleString()),1)]),(s(!0),n(f,null,g(c.value,(e,i)=>(s(),n("div",{key:i,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,o(e==null?void 0:e.no)+"/"+o(l(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),j])]),N(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),i<c.value.length-1?(s(),n("hr",z)):k("v-if",!0)]))),128))])],4))}}),E=P(C,[["__file","/home/ayanamists/repo/sicp/church-numeral/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
