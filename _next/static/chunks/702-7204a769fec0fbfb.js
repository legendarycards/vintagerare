"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{1439:function(e,r,l){l.d(r,{Z:function(){return _}});var a,n,t=l(5893),s=l(6020);!function(e){e.BaseFirst="base-first",e.BaseShadowless="base-shadowless",e.BaseUnlimited="base-unlimited"}(a||(a={})),function(e){e.Mythical="mythical",e.Legendary="legendary",e.Epic="epic",e.Rare="rare",e.Uncommon="uncommon"}(n||(n={}));var i=new Map([[n.Mythical,"text-pink-600"],[n.Legendary,"text-orange-700"],[n.Epic,"text-purple-600"],[n.Rare,"text-blue-600"],[n.Uncommon,"text-emerald-700"]]),c=function(e){var r=i.get(e.color);return(0,t.jsx)("span",{className:(0,s.cx)("inline-block mt-5 text-xs font-medium tracking-wider uppercase ",r),children:e.color})},o=l(1664),d=l.n(o),x=l(5675),u=l.n(x),m=function(e){var r=e.href,l=e.src,a=e.subtext,n=(0,t.jsx)(u(),{src:"".concat("","/").concat(l),placeholder:"blur",height:1005,width:720,blurDataURL:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",objectFit:"cover",className:"transition-all rounded-2xl"}),i=null==r||""===r?(0,t.jsx)("div",{children:n}):(0,t.jsx)(d(),{href:"".concat(r),children:(0,t.jsx)("a",{children:n})});return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:(0,s.cx)("relative transition-all rounded-xl hover:scale-105","aspect-square"),children:i}),(0,t.jsx)("div",{className:"text-sm",children:a})]})},h=function(e){var r=e.href,l=e.titleText,a=(0,t.jsx)("span",{className:"bg-gradient-to-r from-sky-900 to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]",children:l}),n=null==r||""===r?(0,t.jsx)("div",{children:a}):(0,t.jsx)(d(),{href:r,children:(0,t.jsx)("a",{children:a})});return(0,t.jsx)("h2",{className:"mt-2 text-lg font-semibold tracking-normal text-brand-primary text-white",children:n})},f=l(828),g=l(7294),p=l(9213),j=l.n(p),b=function(e){var r=e.selected,l=e.onClick,a=e.imgSrc;return(0,t.jsx)("div",{className:"embla__slide embla__slide--thumb ".concat(r?"is-selected":""),children:(0,t.jsx)("button",{onClick:l,className:"embla__slide__inner embla__slide__inner--thumb",type:"button",children:(0,t.jsx)("img",{className:"embla__slide__thumbnail",src:a,alt:"A cool cat."})})})},v=function(e){var r=e.group,l=e.groupPrefix,a=e.groupLink,n=(0,g.useState)(0),s=n[0],i=n[1],c=(0,f.Z)(j()({skipSnaps:!1}),2),o=c[0],d=c[1],x=(0,f.Z)(j()({containScroll:"keepSnaps",dragFree:!0}),2),u=x[0],h=x[1],p=(0,g.useCallback)((function(e){console.log(e),d&&h&&h.clickAllowed()&&d.scrollTo(e)}),[d,h]),v=(0,g.useCallback)((function(){d&&h&&(i(d.selectedScrollSnap()),h.scrollTo(d.selectedScrollSnap()))}),[d,h,i]);return(0,g.useEffect)((function(){d&&(v(),d.on("select",v))}),[d,v]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"embla",children:(0,t.jsx)("div",{className:"embla__viewport",ref:o,children:(0,t.jsx)("div",{className:"embla__container",children:r.map((function(e,r){return(0,t.jsx)("div",{className:"embla__slide",children:(0,t.jsx)("div",{className:"embla__slide__inner",children:(0,t.jsxs)("div",{className:"grid gap-6 grid-cols-2 p-3",children:[(0,t.jsx)(m,{href:a,src:"".concat(l,"/").concat(e,"/normal.jpeg"),subtext:"Normal Version"}),(0,t.jsx)(m,{href:a,src:"".concat(l,"/").concat(e,"/rare.jpeg"),subtext:"Rare Version"})]})})},r)}))})})}),(0,t.jsx)("div",{className:"embla embla--thumb",children:(0,t.jsx)("div",{className:"embla__viewport",ref:u,children:(0,t.jsx)("div",{className:"embla__container embla__container--thumb",children:r.map((function(e,r){return(0,t.jsx)(b,{onClick:function(){return p(r)},selected:r===s,imgSrc:"".concat("","/").concat(l,"/").concat(e,"/rare.jpeg")},r)}))})})})]})},_=function(e){var r=e.card,l=e.listView,a=l?"cards/".concat(r.slug):"",n=null==r._group||0==r._group.length?(0,t.jsxs)("div",{className:"grid gap-6 grid-cols-2 p-4",children:[(0,t.jsx)(m,{href:a,src:r._normalVersion,subtext:"Normal Version"}),(0,t.jsx)(m,{href:a,src:r._rareVersion,subtext:"Rare Version"})]}):(0,t.jsx)(v,{group:r._group,groupPrefix:r._groupPrefix,groupLink:a});return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"group relative rounded-xl bg-slate-900 mb-8 p-4 pb-2",children:[n,(0,t.jsx)(c,{color:r.category}),(0,t.jsx)(h,{href:a,titleText:r.title}),r.description&&(0,t.jsx)("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3",children:r.description})]})})}},2284:function(e,r,l){var a=l(5893),n=l(6020);r.Z=function(e){var r=e.children,l=e.className;return(0,a.jsx)("div",{className:(0,n.cx)("container mx-auto mb-4",l),children:r})}},6402:function(e,r,l){l.d(r,{Z:function(){return h}});var a=l(1799),n=l(5893),t=l(9815),s=l(3186),i=l(2284),c=l(1664),o=l.n(c),d=l(5675),x=l.n(d),u=function(e){var r=[{label:"About",href:"/about",external:!1}],l=[{label:"Github",href:"https://github.com/legendarycards/legendarycards",external:!0}],a=(0,t.Z)(r).concat((0,t.Z)(l));return(0,n.jsx)(i.Z,{children:(0,n.jsx)("nav",{children:(0,n.jsx)(s.p,{children:function(e){var t=e.open;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex flex-wrap justify-between md:gap-10 md:flex-nowrap",children:[(0,n.jsx)("div",{className:"flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1",children:r.map((function(e,r){return(0,n.jsx)(o(),{href:e.href,children:(0,n.jsx)("a",{className:"leading-6 font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400",children:e.label})},r)}))}),(0,n.jsxs)("div",{className:"flex justify-between items-center w-full md:w-auto",children:[(0,n.jsx)(o(),{href:"/",children:(0,n.jsx)("a",{className:"relative w-35",children:(0,n.jsx)(x(),{src:"/logo.svg",alt:"Logo",width:"350",height:"85",priority:!0})})}),(0,n.jsx)(s.p.Button,{"aria-label":"Toggle Menu",className:"px-2 py-1 ml-auto text-gray-500 rounded-md md:hidden focus:text-blue-500 focus:outline-none dark:text-gray-300 ",children:(0,n.jsxs)("svg",{className:"w-6 h-6 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[t&&(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"}),!t&&(0,n.jsx)("path",{fillRule:"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})]})})]}),(0,n.jsx)("div",{className:"flex-col items-center justify-start order-2 hidden w-full md:flex md:flex-row md:w-auto md:flex-1 md:order-none",children:l.map((function(e,r){return(0,n.jsx)(o(),{href:e.href,children:(0,n.jsx)("a",{className:"leading-6 font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400",target:e.external?"_blank":"",rel:e.external?"noopener":"",children:e.label})},r)}))})]}),(0,n.jsx)(s.p.Panel,{children:(0,n.jsx)("div",{className:"flex flex-col items-center justify-start order-2 w-full md:hidden",children:a.map((function(e,r){return(0,n.jsx)(o(),{href:e.href,children:(0,n.jsx)("a",{className:"leading-6 font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400",target:e.external?"_blank":"",rel:e.external?"noopener":"",children:e.label})},r)}))})})]})}})})})},m=function(e){var r=e.copyright;return null==r&&(r="legendary.cards"),(0,n.jsx)(i.Z,{className:"mt-10 border-t border-gray-100 dark:border-gray-800 p-2",children:(0,n.jsxs)("div",{className:"text-sm text-center",children:["Copyright \xa9 ",(new Date).getFullYear()," ",r,". All rights reserved."]})})},h=function(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"antialiased text-gray-800 dark:bg-black dark:text-gray-400",children:[(0,n.jsx)(u,(0,a.Z)({},{logo:"/logo.svg",logoAlt:"/logo.svg"})),(0,n.jsx)("div",{children:e.children}),(0,n.jsx)(m,(0,a.Z)({},e))]})})}},6020:function(e,r,l){l.d(r,{cx:function(){return a}});var a=function(){for(var e=arguments.length,r=new Array(e),l=0;l<e;l++)r[l]=arguments[l];return r.filter(Boolean).join(" ")}}}]);