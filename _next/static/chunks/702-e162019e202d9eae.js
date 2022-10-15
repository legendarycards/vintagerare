"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{1439:function(e,r,t){t.d(r,{Z:function(){return A}});var l,a,n=t(5893),s=t(6020);!function(e){e.BaseFirst="base-first",e.BaseShadowless="base-shadowless",e.BaseUnlimited="base-unlimited"}(l||(l={})),function(e){e.Mythical="mythical",e.Legendary="legendary",e.Epic="epic",e.Rare="rare",e.Uncommon="uncommon"}(a||(a={}));var i=new Map([[a.Mythical,"text-pink-600"],[a.Legendary,"text-orange-700"],[a.Epic,"text-purple-600"],[a.Rare,"text-blue-600"],[a.Uncommon,"text-emerald-700"]]),c=function(e){var r=i.get(e.color);return(0,n.jsx)("span",{className:(0,s.cx)("inline-block mt-5 text-xs font-medium tracking-wider uppercase ",r),children:e.color})},o=t(1664),d=t.n(o),x=t(5675),h=t.n(x),u=function(e){var r=e.href,t=e.src,l=e.subText,a=e.titleText,i=(0,n.jsx)(h(),{src:"".concat("","/").concat(t),placeholder:"blur",height:1005,width:720,blurDataURL:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",objectFit:"cover",className:"transition-all rounded-2xl",alt:"".concat(a,": ").concat(l)}),c=null==r||""===r?(0,n.jsx)("div",{children:i}):(0,n.jsx)(d(),{href:"".concat(r),children:(0,n.jsx)("a",{children:i})});return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:(0,s.cx)("relative transition-all rounded-xl hover:scale-105","aspect-square"),children:c}),(0,n.jsx)("div",{className:"text-sm",children:l})]})},m=function(e){var r=e.href,t=e.titleText,l=(0,n.jsx)("span",{className:"bg-gradient-to-r from-sky-900 to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]",children:t}),a=null==r||""===r?(0,n.jsx)("div",{children:l}):(0,n.jsx)(d(),{href:r,children:(0,n.jsx)("a",{children:l})});return(0,n.jsx)("h2",{className:"mt-2 text-lg font-semibold tracking-normal text-brand-primary text-white",children:a})},f=t(828),g=t(7294),p=t(9213),b=t.n(p),j=function(e){var r=e.selected,t=e.onClick,l=e.imgSrc;return(0,n.jsx)("div",{className:"embla__slide embla__slide--thumb ".concat(r?"is-selected":""),children:(0,n.jsx)("button",{onClick:t,className:"embla__slide__inner embla__slide__inner--thumb",type:"button",children:(0,n.jsx)(h(),{className:"embla__slide__thumbnail",src:l,height:1005,width:700,alt:"Card select thumbnail"})})})},v=function(e){var r=e.group,t=e.groupPrefix,l=e.groupLink,a=e.titleText,s=e.search,i=(0,g.useState)(0),c=i[0],o=i[1],d=(0,f.Z)(b()({skipSnaps:!1}),2),x=d[0],m=d[1],p=(0,f.Z)(b()({containScroll:"keepSnaps",draggable:!1,dragFree:!0}),2),v=p[0],A=p[1],_=(0,g.useCallback)((function(e){m&&A&&A.clickAllowed()&&m.scrollTo(e)}),[m,A]),w=(0,g.useCallback)((function(){m&&A&&(o(m.selectedScrollSnap()),A.scrollTo(m.selectedScrollSnap()))}),[m,A,o]);(0,g.useEffect)((function(){m&&(w(),m.on("select",w))}),[m,w]);for(var y=new Array,N=new Array,k=0;k<r.length;k++)k>0&&k%8==0&&(y[y.length]=N,N=new Array),N[N.length]=k;N.length>0&&(y[y.length]=N);var T=new Array;for(k=8-N.length;k>0;k--)T[k-1]=1e3+k;return(0,g.useEffect)((function(){if(null!=s&&s.length>0)for(var e=0;e<r.length;e++)if(r[e].includes(s)){o(e),_(e);break}}),[s,r,_]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"embla",children:(0,n.jsx)("div",{className:"embla__viewport",ref:x,children:(0,n.jsx)("div",{className:"embla__container",children:r.map((function(e,r){return(0,n.jsx)("div",{className:"embla__slide",children:(0,n.jsx)("div",{className:"embla__slide__inner",children:(0,n.jsxs)("div",{className:"grid gap-6 grid-cols-2 p-3",children:[(0,n.jsx)(u,{href:l,src:"".concat(t,"/").concat(e,"/normal.jpeg"),subText:"Normal Version",titleText:a}),(0,n.jsx)(u,{href:l,src:"".concat(t,"/").concat(e,"/rare.jpeg"),subText:"Rare Version",titleText:a})]})})},r)}))})})}),(0,n.jsx)("div",{className:"embla embla--thumb",children:(0,n.jsx)("div",{className:"embla__viewport",ref:v,children:y.map((function(e,l){return(0,n.jsxs)("div",{className:"embla__container embla__container--thumb",children:[e.map((function(e){return(0,n.jsx)(j,{onClick:function(){return _(e)},selected:e===c,imgSrc:"".concat("","/").concat(t,"/").concat(r[e],"/rare.jpeg")},e)})),l==y.length-1?T.map((function(e){return(0,n.jsx)("div",{className:"embla__slide embla__slide--thumb",children:(0,n.jsx)(h(),{className:"embla__slide__thumbnail",src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",height:1005,width:700,alt:""})},e)})):(0,n.jsx)(n.Fragment,{})]},"group-row-".concat(l))}))})})]})},A=function(e){var r=e.card,t=e.listView,l=e.search,a=t?"cards/".concat(r.slug):"",s=null==r._group||0==r._group.length?(0,n.jsxs)("div",{className:"grid gap-6 grid-cols-2 p-4",children:[(0,n.jsx)(u,{href:a,src:r._normalVersion,subText:"Normal Version",titleText:r.title}),(0,n.jsx)(u,{href:a,src:r._rareVersion,subText:"Rare Version",titleText:r.title})]}):(0,n.jsx)(v,{group:r._group,groupPrefix:r._groupPrefix,groupLink:a,titleText:r.title,search:l});return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"group relative rounded-xl bg-slate-900 mb-8 p-4 pb-2 row",children:[s,(0,n.jsx)(c,{color:r.category}),(0,n.jsx)(m,{href:a,titleText:r.title}),r.description&&(0,n.jsx)("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3",children:r.description})]})})}},2284:function(e,r,t){var l=t(5893),a=t(6020);r.Z=function(e){var r=e.children,t=e.className;return(0,l.jsx)("div",{className:(0,a.cx)("container mx-auto mb-4",t),children:r})}},6402:function(e,r,t){t.d(r,{Z:function(){return m}});var l=t(1799),a=t(5893),n=t(9815),s=t(3186),i=t(2284),c=t(1664),o=t.n(c),d=t(5675),x=t.n(d),h=function(e){var r=[{label:"About",href:"/about",external:!1}],t=[{label:"Github",href:"https://github.com/legendarycards/legendarycards",external:!0}],l=(0,n.Z)(r).concat((0,n.Z)(t));return(0,a.jsx)(i.Z,{children:(0,a.jsx)("nav",{children:(0,a.jsx)(s.p,{children:function(e){var n=e.open;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex flex-wrap justify-between md:gap-10 md:flex-nowrap",children:[(0,a.jsx)("div",{className:"flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1",children:r.map((function(e,r){return(0,a.jsx)(o(),{href:e.href,children:(0,a.jsx)("a",{className:"leading-6 font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400",children:e.label})},r)}))}),(0,a.jsxs)("div",{className:"flex justify-between items-center w-full md:w-auto",children:[(0,a.jsx)(o(),{href:"/",children:(0,a.jsx)("a",{className:"relative w-35",children:(0,a.jsx)(x(),{src:"/logo.svg",alt:"Logo",width:"350",height:"85",priority:!0})})}),(0,a.jsx)(s.p.Button,{"aria-label":"Toggle Menu",className:"px-2 py-1 ml-auto text-gray-500 rounded-md md:hidden focus:text-blue-500 focus:outline-none dark:text-gray-300 ",children:(0,a.jsxs)("svg",{className:"w-6 h-6 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[n&&(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"}),!n&&(0,a.jsx)("path",{fillRule:"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})]})})]}),(0,a.jsx)("div",{className:"flex-col items-center justify-start order-2 hidden w-full md:flex md:flex-row md:w-auto md:flex-1 md:order-none",children:t.map((function(e,r){return(0,a.jsx)(o(),{href:e.href,children:(0,a.jsx)("a",{className:"leading-6 font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400",target:e.external?"_blank":"",rel:e.external?"noopener":"",children:e.label})},r)}))})]}),(0,a.jsx)(s.p.Panel,{children:(0,a.jsx)("div",{className:"flex flex-col items-center justify-start order-2 w-full md:hidden",children:l.map((function(e,r){return(0,a.jsx)(o(),{href:e.href,children:(0,a.jsx)("a",{className:"leading-6 font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400",target:e.external?"_blank":"",rel:e.external?"noopener":"",children:e.label})},r)}))})})]})}})})})},u=function(e){var r=e.copyright;return null==r&&(r="legendary.cards"),(0,a.jsx)(i.Z,{className:"mt-10 border-t border-gray-100 dark:border-gray-800 p-2",children:(0,a.jsxs)("div",{className:"text-sm text-center",children:[r," claims no copyright, all content is provided for archive and reference."]})})},m=function(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"antialiased text-gray-800 dark:bg-black dark:text-gray-400",children:[(0,a.jsx)(h,(0,l.Z)({},{logo:"/logo.svg",logoAlt:"/logo.svg"})),(0,a.jsx)("div",{children:e.children}),(0,a.jsx)(u,(0,l.Z)({},e))]})})}},6020:function(e,r,t){t.d(r,{cx:function(){return l}});var l=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter(Boolean).join(" ")}}}]);