(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9194)}])},70:function(e,t,n){"use strict";n.d(t,{b:function(){return a},h:function(){return l}});var r=n(5893),o=n(7294),u=(0,o.createContext)({});function a(e){var t=e.children,n=(0,o.useState)([]),a=n[0],l=n[1],c=(0,o.useState)([]),f=c[0],i=c[1];return(0,r.jsx)(u.Provider,{value:{prerequisites:a,setPrerequisites:l,stacks:f,setStacks:i},children:t})}function l(){return(0,o.useContext)(u)}},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,u=n(7273).Z,a=o(n(7294)),l=n(6273),c=n(2725),f=n(3462),i=n(1018),s=n(7190),d=n(1210),p=n(8684),v={};function y(e,t,n,r){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var h=a.default.forwardRef((function(e,t){var n,o=e.href,h=e.as,b=e.children,x=e.prefetch,_=e.passHref,m=e.replace,g=e.shallow,j=e.scroll,C=e.locale,O=e.onClick,M=e.onMouseEnter,P=e.onTouchStart,L=e.legacyBehavior,w=void 0===L?!0!==Boolean(!1):L,E=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,!w||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var R=!1!==x,k=a.default.useContext(f.RouterContext),S=a.default.useContext(i.AppRouterContext);S&&(k=S);var N,T=a.default.useMemo((function(){var e=r(l.resolveHref(k,o,!0),2),t=e[0],n=e[1];return{href:t,as:h?l.resolveHref(k,h):n||t}}),[k,o,h]),I=T.href,Z=T.as,B=a.default.useRef(I),U=a.default.useRef(Z);w&&(N=a.default.Children.only(n));var A=w?N&&"object"===typeof N&&N.ref:t,D=r(s.useIntersection({rootMargin:"200px"}),3),H=D[0],K=D[1],q=D[2],G=a.default.useCallback((function(e){U.current===Z&&B.current===I||(q(),U.current=Z,B.current=I),H(e),A&&("function"===typeof A?A(e):"object"===typeof A&&(A.current=e))}),[Z,A,I,q,H]);a.default.useEffect((function(){var e=K&&R&&l.isLocalURL(I),t="undefined"!==typeof C?C:k&&k.locale,n=v[I+"%"+Z+(t?"%"+t:"")];e&&!n&&y(k,I,Z,{locale:t})}),[Z,I,K,C,R,k]);var X={ref:G,onClick:function(e){w||"function"!==typeof O||O(e),w&&N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,c,f,i,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:f,scroll:c}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!s})};i?a.default.startTransition(d):d()}}(e,k,I,Z,m,g,j,C,Boolean(S),R)},onMouseEnter:function(e){w||"function"!==typeof M||M(e),w&&N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),!R&&S||l.isLocalURL(I)&&y(k,I,Z,{priority:!0})},onTouchStart:function(e){w||"function"!==typeof P||P(e),w&&N.props&&"function"===typeof N.props.onTouchStart&&N.props.onTouchStart(e),!R&&S||l.isLocalURL(I)&&y(k,I,Z,{priority:!0})}};if(!w||_||"a"===N.type&&!("href"in N.props)){var z="undefined"!==typeof C?C:k&&k.locale,F=k&&k.isLocaleDomain&&d.getDomainLocale(Z,z,k.locales,k.domainLocales);X.href=F||p.addBasePath(c.addLocale(Z,z,k&&k.defaultLocale))}return w?a.default.cloneElement(N,X):a.default.createElement("a",Object.assign({},E,X),n)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,f=e.disabled||!a,i=r(o.useState(!1),2),s=i[0],d=i[1],p=r(o.useState(null),2),v=p[0],y=p[1];o.useEffect((function(){if(a){if(f||s)return;if(v&&v.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:o},c.push(n),l.set(n,t),t}(n),o=r.id,u=r.observer,a=r.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(v,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){var r=u.requestIdleCallback((function(){return d(!0)}));return function(){return u.cancelIdleCallback(r)}}}),[v,f,n,t,s]);var h=o.useCallback((function(){d(!1)}),[]);return[y,s,h]};var o=n(7294),u=n(9311),a="function"===typeof IntersectionObserver,l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var u=r.default.createContext(null);t.LayoutRouterContext=u;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a;var l=r.default.createContext(null);t.TemplateContext=l},9194:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(1799),o=n(5893),u=n(1664),a=n.n(u),l=function(){return(0,o.jsx)("header",{className:"py-2",children:(0,o.jsx)(a(),{href:"/",children:(0,o.jsx)("a",{className:"text-2xl font-bold text-green-500",children:"My Simple Blog App"})})})},c=function(e){var t=e.children;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"max-w-prose mx-auto px-4",children:[(0,o.jsx)(l,{}),(0,o.jsx)("main",{className:"pt-4 pb-12",children:t})]})})},f=(n(3456),n(70));var i=function(e){var t=e.Component,n=e.pageProps;return(0,o.jsxs)(f.b,{children:["  ",(0,o.jsx)(c,{children:(0,o.jsx)(t,(0,r.Z)({},n))})]})}},3456:function(){},1664:function(e,t,n){e.exports=n(8418)},1799:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}n.d(t,{Z:function(){return o}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(387)}));var n=e.O();_N_E=n}]);