"use strict";(self.webpackChunkwyatt_chen_website=self.webpackChunkwyatt_chen_website||[]).push([[7454],{7454:(t,e,n)=>{n.d(e,{Bouncer:()=>h});var i=n(4409);const o=2,s=.5,c=Math.PI*s,a=2,r=10;function l(t,e,n,s,a){const r=t.particles.quadTree.query(s,a);for(const l of r)s instanceof i.jl?(0,i.pE)((0,i.Tg)(l),{position:e,radius:n,mass:n**o*c,velocity:i.Mi.origin,factor:i.Mi.origin}):s instanceof i.M_&&(0,i.jo)(l,(0,i.AE)(e,n))}function f(t,e,n,o){(0,i.U6)(n,e,((e,n)=>function(t,e,n,o){const c=document.querySelectorAll(e);c.length&&c.forEach((e=>{const c=e,l=t.retina.pixelRatio,f={x:(c.offsetLeft+c.offsetWidth*s)*l,y:(c.offsetTop+c.offsetHeight*s)*l},u=c.offsetWidth*s*l,d=r*l,h="circle"===n.type?new i.jl(f.x,f.y,u+d):new i.M_(c.offsetLeft*l-d,c.offsetTop*l-d,c.offsetWidth*l+d*a,c.offsetHeight*l+d*a);o(f,u,h)}))}(t,e,n,((e,n,i)=>l(t,e,n,i,o)))))}class u{constructor(){this.distance=200}load(t){t&&void 0!==t.distance&&(this.distance=t.distance)}}const d="bounce";class h extends i.sJ{constructor(t){super(t)}clear(){}init(){const t=this.container,e=t.actualOptions.interactivity.modes.bounce;e&&(t.retina.bounceModeDistance=e.distance*t.retina.pixelRatio)}interact(){const t=this.container,e=t.actualOptions.interactivity.events,n=t.interactivity.status===i.Rb,o=e.onHover.enable,s=e.onHover.mode,c=e.onDiv;n&&o&&(0,i.hn)(d,s)?function(t,e){const n=t.retina.pixelRatio,o=r*n,s=t.interactivity.mouse.position,c=t.retina.bounceModeDistance;!c||c<0||!s||l(t,s,c,new i.jl(s.x,s.y,c+o),e)}(this.container,(t=>this.isEnabled(t))):f(this.container,c,d,(t=>this.isEnabled(t)))}isEnabled(t){var e;const n=this.container,o=n.actualOptions,s=n.interactivity.mouse,c=(null!==(e=null===t||void 0===t?void 0:t.interactivity)&&void 0!==e?e:o.interactivity).events,a=c.onDiv;return!!s.position&&c.onHover.enable&&(0,i.hn)(d,c.onHover.mode)||(0,i.iK)(d,a)}loadModeOptions(t){t.bounce||(t.bounce=new u);for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];for(const o of n)t.bounce.load(null===o||void 0===o?void 0:o.bounce)}reset(){}}}}]);
//# sourceMappingURL=7454.999110b5.chunk.js.map