(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9361).Z,o=n(4941).Z,i=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,l=e.unoptimized,u=void 0!==l&&l,m=e.priority,y=void 0!==m&&m,w=e.loading,C=e.lazyRoot,k=void 0===C?null:C,x=e.lazyBoundary,A=e.className,I=e.quality,R=e.width,L=e.height,z=e.style,_=e.objectFit,M=e.objectPosition,D=e.onLoadingComplete,T=e.placeholder,N=void 0===T?"empty":T,B=e.blurDataURL,H=s(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),U=c.useContext(g.ImageConfigContext),q=c.useMemo((function(){var e=v||U||d.imageConfigDefault,t=i(e.deviceSizes).concat(i(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return a({},e,{allSizes:t,deviceSizes:n})}),[U]),Z=H,F=n?"responsive":"intrinsic";"layout"in Z&&(Z.layout&&(F=Z.layout),delete Z.layout);var W=O;if("loader"in Z){if(Z.loader){var $=Z.loader;W=function(e){e.config;var t=s(e,["config"]);return $(t)}}delete Z.loader}var K="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var V=S(t)?t.default:t;if(!V.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(V)));if(B=B||V.blurDataURL,K=V.src,(!F||"fill"!==F)&&(L=L||V.height,R=R||V.width,!V.height||!V.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(V)))}var G=!y&&("lazy"===w||"undefined"===typeof w);((t="string"===typeof t?t:K).startsWith("data:")||t.startsWith("blob:"))&&(u=!0,G=!1);h.has(t)&&(G=!1);q.unoptimized&&(u=!0);var J,Q=o(c.useState(!1),2),Y=Q[0],X=Q[1],ee=o(p.useIntersection({rootRef:k,rootMargin:x||"200px",disabled:!G}),3),te=ee[0],ne=ee[1],re=ee[2],oe=!G||ne,ie={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ae={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le=!1,ue={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:_,objectPosition:M},se=j(R),ce=j(L),fe=j(I);0;var de=Object.assign({},z,ue),pe="blur"!==N||Y?{}:{backgroundSize:_||"cover",backgroundPosition:M||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(B,'")')};if("fill"===F)ie.display="block",ie.position="absolute",ie.top=0,ie.left=0,ie.bottom=0,ie.right=0;else if("undefined"!==typeof se&&"undefined"!==typeof ce){var ge=ce/se,me=isNaN(ge)?"100%":"".concat(100*ge,"%");"responsive"===F?(ie.display="block",ie.position="relative",le=!0,ae.paddingTop=me):"intrinsic"===F?(ie.display="inline-block",ie.position="relative",ie.maxWidth="100%",le=!0,ae.maxWidth="100%",J="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(se,"%27%20height=%27").concat(ce,"%27/%3e")):"fixed"===F&&(ie.display="inline-block",ie.position="relative",ie.width=se,ie.height=ce)}else 0;var ye={src:b,srcSet:void 0,sizes:void 0};oe&&(ye=E({config:q,src:t,unoptimized:u,layout:F,width:se,quality:fe,sizes:n,loader:W}));var ve=t;0;var he;0;var be=(r(he={},"imagesrcset",ye.srcSet),r(he,"imagesizes",ye.sizes),r(he,"crossOrigin",Z.crossOrigin),he),we=c.default.useLayoutEffect,Se=c.useRef(D),Ee=c.useRef(t);c.useEffect((function(){Se.current=D}),[D]),we((function(){Ee.current!==t&&(re(),Ee.current=t)}),[re,t]);var je=a({isLazy:G,imgAttributes:ye,heightInt:ce,widthInt:se,qualityInt:fe,layout:F,className:A,imgStyle:de,blurStyle:pe,loading:w,config:q,unoptimized:u,placeholder:N,loader:W,srcString:ve,onLoadingCompleteRef:Se,setBlurComplete:X,setIntersection:te,isVisible:oe,noscriptSizes:n},Z);return c.default.createElement(c.default.Fragment,null,c.default.createElement("span",{style:ie},le?c.default.createElement("span",{style:ae},J?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:J}):null):null,c.default.createElement(P,Object.assign({},je))),y?c.default.createElement(f.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},be))):null)};var a=n(6495).Z,l=n(2648).Z,u=n(1598).Z,s=n(7273).Z,c=u(n(7294)),f=l(n(5443)),d=n(9309),p=n(7190),g=n(9977),m=(n(3794),n(2392));function y(e){return"/"===e[0]?e.slice(1):e}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},h=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,o=e.quality,i=new URL("".concat(t.path).concat(y(n))),a=i.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),o&&a.set("q",o.toString()),i.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(y(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(y(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function E(e){var t=e.config,n=e.src,r=e.unoptimized,o=e.layout,a=e.width,l=e.quality,u=e.sizes,s=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var c=function(e,t,n,r){var o=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var l,u=/(^|\s)(1?\d?\d)vw/g,s=[];l=u.exec(r);l)s.push(parseInt(l[2]));if(s.length){var c,f=.01*(c=Math).min.apply(c,i(s));return{widths:a.filter((function(e){return e>=o[0]*f})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:o,kind:"w"}:{widths:i(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,o,u),f=c.widths,d=c.kind,p=f.length-1;return{sizes:u||"w"!==d?u:"100vw",srcSet:f.map((function(e,r){return"".concat(s({config:t,src:n,quality:l,width:e})," ").concat("w"===d?e:r+1).concat(d)})).join(", "),src:s({config:t,src:n,quality:l,width:f[p]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function O(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=w.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(n))}function C(e,t,n,r,o,i){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(h.add(t),"blur"===r&&i(!0),null==o?void 0:o.current)){var n=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:n,naturalHeight:a})}})))}var P=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,o=e.layout,i=e.className,l=e.imgStyle,u=e.blurStyle,f=e.isLazy,d=e.placeholder,p=e.loading,g=e.srcString,m=e.config,y=e.unoptimized,v=e.loader,h=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,S=e.onLoad,j=e.onError,O=(e.isVisible,e.noscriptSizes),P=s(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return p=f?"lazy":p,c.default.createElement(c.default.Fragment,null,c.default.createElement("img",Object.assign({},P,t,{decoding:"async","data-nimg":o,className:i,style:a({},l,u),ref:c.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&C(e,g,0,d,h,b)}),[w,g,o,d,h,b]),onLoad:function(e){C(e.currentTarget,g,0,d,h,b),S&&S(e)},onError:function(e){"blur"===d&&b(!0),j&&j(e)}})),(f||"blur"===d)&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},P,E({config:m,src:g,unoptimized:y,layout:o,width:n,quality:r,sizes:O,loader:v}),{decoding:"async","data-nimg":o,style:l,className:i,loading:p}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,i=n(7273).Z,a=o(n(7294)),l=n(6273),u=n(2725),s=n(3462),c=n(1018),f=n(7190),d=n(1210),p=n(8684),g={};function m(e,t,n,r){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;g[t+"%"+n+(o?"%"+o:"")]=!0}}var y=a.default.forwardRef((function(e,t){var n,o=e.href,y=e.as,v=e.children,h=e.prefetch,b=e.passHref,w=e.replace,S=e.shallow,E=e.scroll,j=e.locale,O=e.onClick,C=e.onMouseEnter,P=e.onTouchStart,k=e.legacyBehavior,x=void 0===k?!0!==Boolean(!1):k,A=i(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,!x||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var I=!1!==h,R=a.default.useContext(s.RouterContext),L=a.default.useContext(c.AppRouterContext);L&&(R=L);var z,_=a.default.useMemo((function(){var e=r(l.resolveHref(R,o,!0),2),t=e[0],n=e[1];return{href:t,as:y?l.resolveHref(R,y):n||t}}),[R,o,y]),M=_.href,D=_.as,T=a.default.useRef(M),N=a.default.useRef(D);x&&(z=a.default.Children.only(n));var B=x?z&&"object"===typeof z&&z.ref:t,H=r(f.useIntersection({rootMargin:"200px"}),3),U=H[0],q=H[1],Z=H[2],F=a.default.useCallback((function(e){N.current===D&&T.current===M||(Z(),N.current=D,T.current=M),U(e),B&&("function"===typeof B?B(e):"object"===typeof B&&(B.current=e))}),[D,B,M,Z,U]);a.default.useEffect((function(){var e=q&&I&&l.isLocalURL(M),t="undefined"!==typeof j?j:R&&R.locale,n=g[M+"%"+D+(t?"%"+t:"")];e&&!n&&m(R,M,D,{locale:t})}),[D,M,q,j,I,R]);var W={ref:F,onClick:function(e){x||"function"!==typeof O||O(e),x&&z.props&&"function"===typeof z.props.onClick&&z.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,u,s,c,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:u}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!f})};c?a.default.startTransition(d):d()}}(e,R,M,D,w,S,E,j,Boolean(L),I)},onMouseEnter:function(e){x||"function"!==typeof C||C(e),x&&z.props&&"function"===typeof z.props.onMouseEnter&&z.props.onMouseEnter(e),!I&&L||l.isLocalURL(M)&&m(R,M,D,{priority:!0})},onTouchStart:function(e){x||"function"!==typeof P||P(e),x&&z.props&&"function"===typeof z.props.onTouchStart&&z.props.onTouchStart(e),!I&&L||l.isLocalURL(M)&&m(R,M,D,{priority:!0})}};if(!x||b||"a"===z.type&&!("href"in z.props)){var $="undefined"!==typeof j?j:R&&R.locale,K=R&&R.isLocaleDomain&&d.getDomainLocale(D,$,R.locales,R.domainLocales);W.href=K||p.addBasePath(u.addLocale(D,$,R&&R.defaultLocale))}return x?a.default.cloneElement(z,W):a.default.createElement("a",Object.assign({},A,W),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!a,c=r(o.useState(!1),2),f=c[0],d=c[1],p=r(o.useState(null),2),g=p[0],m=p[1];o.useEffect((function(){if(a){if(s||f)return;if(g&&g.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:i,elements:o},u.push(n),l.set(n,t),t}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),l.delete(o);var t=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&u.splice(t,1)}}}(g,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!f){var r=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(r)}}}),[g,s,n,t,f]);var y=o.useCallback((function(){d(!1)}),[]);return[m,f,y]};var o=n(7294),i=n(9311),a="function"===typeof IntersectionObserver,l=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var i=r.default.createContext(null);t.LayoutRouterContext=i;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a;var l=r.default.createContext(null);t.TemplateContext=l},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)},3186:function(e,t,n){"use strict";n.d(t,{p:function(){return K}});var r=n(7294);function o(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,o),r}var i=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(i||{}),a=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(a||{});function l({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:a=!0,name:l}){let c=s(t,e);if(a)return u(c,n,r,l);let f=null!=i?i:0;if(2&f){let{static:e=!1,...t}=c;if(e)return u(t,n,r,l)}if(1&f){let{unmount:e=!0,...t}=c;return o(e?0:1,{0:()=>null,1:()=>u({...t,hidden:!0,style:{display:"none"}},n,r,l)})}return u(c,n,r,l)}function u(e,t={},n,o){let{as:i=n,children:a,refName:l="ref",...u}=d(e,["unmount","static"]),c=void 0!==e.ref?{[l]:e.ref}:{},p="function"==typeof a?a(t):a;u.className&&"function"==typeof u.className&&(u.className=u.className(t));let g={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(g["data-headlessui-state"]=n.join(" "))}if(i===r.Fragment&&Object.keys(f(u)).length>0){if(!(0,r.isValidElement)(p)||Array.isArray(p)&&p.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${o} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));return(0,r.cloneElement)(p,Object.assign({},s(p.props,f(d(u,["ref"]))),g,c,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(p.ref,c.ref)))}return(0,r.createElement)(i,Object.assign({},d(u,["ref"]),i!==r.Fragment&&c,i!==r.Fragment&&g),p)}function s(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let o=n[r];for(let n of o){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;n(e,...t)}}});return t}function c(e){var t;return Object.assign((0,r.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function f(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function d(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}const p="undefined"==typeof window||"undefined"==typeof document;let g=p?r.useEffect:r.useLayoutEffect;let m=function(e){let t=function(e){let t=(0,r.useRef)(e);return g((()=>{t.current=e}),[e]),t}(e);return r.useCallback(((...e)=>t.current(...e)),[t])},y=Symbol();function v(e,t=!0){return Object.assign(e,{[y]:t})}function h(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=m((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[y])))?void 0:n}let b={serverHandoffComplete:!1};var w;let S=0;function E(){return++S}let j=null!=(w=r.useId)?w:function(){let e=function(){let[e,t]=(0,r.useState)(b.serverHandoffComplete);return(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>{!1===b.serverHandoffComplete&&(b.serverHandoffComplete=!0)}),[]),e}(),[t,n]=r.useState(e?E:null);return g((()=>{null===t&&n(E())}),[t]),null!=t?""+t:void 0};var O=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(O||{});function C(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}let P=(0,r.createContext)(null);P.displayName="OpenClosedContext";var k=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(k||{});function x(){return(0,r.useContext)(P)}function A({value:e,children:t}){return r.createElement(P.Provider,{value:e},t)}function I(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function R(e,t){let[n,o]=(0,r.useState)((()=>I(e)));return g((()=>{o(I(e))}),[e.type,e.as]),g((()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&o("button")}),[n,t]),n}var L,z=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(z||{}),_=((L=_||{})[L.ToggleDisclosure=0]="ToggleDisclosure",L[L.CloseDisclosure=1]="CloseDisclosure",L[L.SetButtonId=2]="SetButtonId",L[L.SetPanelId=3]="SetPanelId",L[L.LinkPanel=4]="LinkPanel",L[L.UnlinkPanel=5]="UnlinkPanel",L);let M={0:e=>({...e,disclosureState:o(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},D=(0,r.createContext)(null);function T(e){let t=(0,r.useContext)(D);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,T),t}return t}D.displayName="DisclosureContext";let N=(0,r.createContext)(null);function B(e){let t=(0,r.useContext)(N);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,B),t}return t}N.displayName="DisclosureAPIContext";let H=(0,r.createContext)(null);function U(e,t){return o(t.type,M,e,t)}H.displayName="DisclosurePanelContext";let q=r.Fragment,Z=c((function(e,t){let{defaultOpen:n=!1,...i}=e,a=`headlessui-disclosure-button-${j()}`,u=`headlessui-disclosure-panel-${j()}`,s=(0,r.useRef)(null),c=h(t,v((e=>{s.current=e}),void 0===e.as||e.as===r.Fragment)),f=(0,r.useRef)(null),d=(0,r.useRef)(null),g=(0,r.useReducer)(U,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:d,panelRef:f,buttonId:a,panelId:u}),[{disclosureState:y},b]=g;(0,r.useEffect)((()=>b({type:2,buttonId:a})),[a,b]),(0,r.useEffect)((()=>b({type:3,panelId:u})),[u,b]);let w=m((e=>{b({type:1});let t=function(e){return p?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}(s);if(!t)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(a):t.getElementById(a);null==n||n.focus()})),S=(0,r.useMemo)((()=>({close:w})),[w]),E=(0,r.useMemo)((()=>({open:0===y,close:w})),[y,w]),O={ref:c};return r.createElement(D.Provider,{value:g},r.createElement(N.Provider,{value:S},r.createElement(A,{value:o(y,{0:k.Open,1:k.Closed})},l({ourProps:O,theirProps:i,slot:E,defaultTag:q,name:"Disclosure"}))))})),F=c((function(e,t){let[n,o]=T("Disclosure.Button"),i=(0,r.useContext)(H),a=null!==i&&i===n.panelId,u=(0,r.useRef)(null),s=h(u,t,a?null:n.buttonRef),c=m((e=>{var t;if(a){if(1===n.disclosureState)return;switch(e.key){case O.Space:case O.Enter:e.preventDefault(),e.stopPropagation(),o({type:0}),null==(t=n.buttonRef.current)||t.focus()}}else switch(e.key){case O.Space:case O.Enter:e.preventDefault(),e.stopPropagation(),o({type:0})}})),f=m((e=>{if(e.key===O.Space)e.preventDefault()})),d=m((t=>{var r;C(t.currentTarget)||e.disabled||(a?(o({type:0}),null==(r=n.buttonRef.current)||r.focus()):o({type:0}))})),p=(0,r.useMemo)((()=>({open:0===n.disclosureState})),[n]),g=R(e,u),y=e;return l({ourProps:a?{ref:s,type:g,onKeyDown:c,onClick:d}:{ref:s,id:n.buttonId,type:g,"aria-expanded":e.disabled?void 0:0===n.disclosureState,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:c,onKeyUp:f,onClick:d},theirProps:y,slot:p,defaultTag:"button",name:"Disclosure.Button"})})),W=i.RenderStrategy|i.Static,$=c((function(e,t){let[n,o]=T("Disclosure.Panel"),{close:i}=B("Disclosure.Panel"),a=h(t,n.panelRef,(e=>{o({type:e?4:5})})),u=x(),s=null!==u?u===k.Open:0===n.disclosureState,c=(0,r.useMemo)((()=>({open:0===n.disclosureState,close:i})),[n,i]),f=e,d={ref:a,id:n.panelId};return r.createElement(H.Provider,{value:n.panelId},l({ourProps:d,theirProps:f,slot:c,defaultTag:"div",features:W,visible:s,name:"Disclosure.Panel"}))})),K=Object.assign(Z,{Button:F,Panel:$})},9396:function(e,t,n){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}n.d(t,{Z:function(){return r}})},797:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})}}]);