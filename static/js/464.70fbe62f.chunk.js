"use strict";(self.webpackChunkwyatt_chen_website=self.webpackChunkwyatt_chen_website||[]).push([[464],{1977:(e,a,n)=>{n.d(a,{a:()=>d,d:()=>s,loadImage:()=>c});var o=n(4409);const t=0,r=1,i=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;async function c(e){return new Promise((a=>{e.loading=!0;const n=new Image;e.element=n,n.addEventListener("load",(()=>{e.loading=!1,a()})),n.addEventListener("error",(()=>{e.element=void 0,e.error=!0,e.loading=!1,(0,o.tZ)().error("".concat(o.dI," loading image: ").concat(e.source)),a()})),n.src=e.source}))}async function d(e){if("svg"!==e.type)return void await c(e);e.loading=!0;const a=await fetch(e.source);a.ok?e.svgData=await a.text():((0,o.tZ)().error("".concat(o.dI," Image not found")),e.error=!0),e.loading=!1}function s(e,a,n,d){var s,l;const g=function(e,a,n){const{svgData:r}=e;if(!r)return"";const c=(0,o.LC)(a,n);if(r.includes("fill"))return r.replace(i,(()=>c));const d=r.indexOf(">");return"".concat(r.substring(t,d),' fill="').concat(c,'"').concat(r.substring(d))}(e,n,null!==(s=null===(l=d.opacity)||void 0===l?void 0:l.value)&&void 0!==s?s:r),u={color:n,gif:a.gif,data:{...e,svgData:g},loaded:!1,ratio:a.width/a.height,replaceColor:a.replaceColor,source:a.src};return new Promise((a=>{const n=new Blob([g],{type:"image/svg+xml"}),o=URL||window.URL||window.webkitURL||window,t=o.createObjectURL(n),r=new Image;r.addEventListener("load",(()=>{u.loaded=!0,u.element=r,a(u),o.revokeObjectURL(t)}));r.addEventListener("error",(()=>{(async()=>{o.revokeObjectURL(t);const n={...e,error:!1,loading:!0};await c(n),u.loaded=!0,u.element=n.element,a(u)})()})),r.src=t}))}},464:(e,a,n)=>{n.d(a,{loadImageShape:()=>i});var o=n(1977),t=n(4409);const r=3;async function i(e){let a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];!function(e){e.loadImage||(e.loadImage=async a=>{if(!a.name&&!a.src)throw new Error("".concat(t.dI," no image source provided"));if(e.images||(e.images=[]),!e.images.find((e=>e.name===a.name||e.source===a.src)))try{var i,c;const t={gif:null!==(i=a.gif)&&void 0!==i&&i,name:null!==(c=a.name)&&void 0!==c?c:a.src,source:a.src,type:a.src.substring(a.src.length-r),error:!1,loading:!0,replaceColor:a.replaceColor,ratio:a.width&&a.height?a.width/a.height:void 0};let d;if(e.images.push(t),a.gif){const{loadGifImage:e}=await n.e(463).then(n.bind(n,463));d=e}else d=a.replaceColor?o.a:o.loadImage;await d(t)}catch{var d;throw new Error("".concat(t.dI," ").concat(null!==(d=a.name)&&void 0!==d?d:a.src," not found"))}})}(e);const{ImagePreloaderPlugin:i}=await n.e(4843).then(n.bind(n,4843)),{ImageDrawer:c}=await n.e(4752).then(n.bind(n,4752)),d=new i(e);await e.addPlugin(d,a),await e.addShape(["image","images"],new c(e),a)}}}]);
//# sourceMappingURL=464.70fbe62f.chunk.js.map