(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[300],{9213:function(n,t,e){n.exports=function(n,t){"use strict";function e(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var r=e(t);function o(n){return n.concat().sort((function(n,t){return n.name>t.name?1:-1})).map((function(n){return n.options}))}function i(t,e){void 0===t&&(t={}),void 0===e&&(e=[]);var u=n.useRef(r.default.optionsHandler()),c=n.useRef(t),a=n.useRef(e),s=n.useState(),f=s[0],l=s[1],d=n.useState(),p=d[0],v=d[1],m=n.useCallback((function(){f&&f.reInit(c.current,a.current)}),[f]);return n.useEffect((function(){if("undefined"!=typeof window&&window.document&&window.document.createElement&&p){r.default.globalOptions=i.globalOptions;var n=r.default(p,c.current,a.current);return l(n),function(){return n.destroy()}}l(void 0)}),[p,l]),n.useEffect((function(){u.current.areEqual(c.current,t)||(c.current=t,m())}),[t,m]),n.useEffect((function(){(function(n,t){if(n.length!==t.length)return!1;var e=r.default.optionsHandler().areEqual,i=o(n),u=o(t);return i.every((function(n,t){var r=u[t];return e(n,r)}))})(a.current,e)||(a.current=e,m())}),[e,m]),[v,f]}return i.globalOptions=void 0,i}(e(7294),e(6883))},6883:function(n){n.exports=function(){"use strict";function n(n){return"number"==typeof n}function t(n){return"[object Object]"===Object.prototype.toString.call(n)}function e(n){return t(n)||function(n){return Array.isArray(n)}(n)}function r(n){return Math.abs(n)}function o(n){return n?n/r(n):0}function i(n,t){return r(n-t)}function u(n){return s(n).map(Number)}function c(n){return n[a(n)]}function a(n){return Math.max(0,n.length-1)}function s(n){return Object.keys(n)}function f(n,e){return[n,e].reduce((function(n,e){return s(e).forEach((function(r){var o=n[r],i=e[r],u=t(o)&&t(i);n[r]=u?f(o,i):i})),n}),{})}function l(n,t){var r=s(n),o=s(t);return r.length===o.length&&r.every((function(r){var o=n[r],i=t[r];return"function"==typeof o?"".concat(o)==="".concat(i):e(o)&&e(i)?l(o,i):o===i}))}function d(t,e){var r={start:function(){return 0},center:function(n){return o(n)/2},end:o};function o(n){return e-n}return{measure:function(o){return n(t)?e*Number(t):r[t](o)}}}function p(n,t){var e=r(n-t);function o(t){return t<n}function i(n){return n>t}function u(n){return o(n)||i(n)}return{length:e,max:t,min:n,constrain:function(e){return u(e)?o(e)?n:t:e},reachedAny:u,reachedMax:i,reachedMin:o,removeOffset:function(n){return e?n-e*Math.ceil((n-t)/e):n}}}function v(n,t,e){var o=p(0,n),i=o.min,u=o.constrain,c=n+1,a=s(t);function s(n){return e?r((c+n)%c):u(n)}function f(){return a}function l(n){return a=s(n),d}var d={add:function(n){return l(f()+n)},clone:function(){return v(n,f(),e)},get:f,set:l,min:i,max:n};return d}function m(){var n=[],t={add:function(e,r,o,i){return void 0===i&&(i=!1),e.addEventListener(r,o,i),n.push((function(){return e.removeEventListener(r,o,i)})),t},removeAll:function(){return n=n.filter((function(n){return n()})),t}};return t}function g(t){var e=t;function r(n){return e/=n,i}function o(t){return n(t)?t:t.get()}var i={add:function(n){return e+=o(n),i},divide:r,get:function(){return e},multiply:function(n){return e*=n,i},normalize:function(){return 0!==e&&r(e),i},set:function(n){return e=o(n),i},subtract:function(n){return e-=o(n),i}};return i}function x(n,t,e,u,c,a,s,f,l,d,p,v,x,h,y,w){var b=n.cross,S=["INPUT","SELECT","TEXTAREA"],E=g(0),M=m(),A=m(),k=x.measure(20),C={mouse:300,touch:400},I={mouse:500,touch:600},O=y?5:16,T=0,P=0,D=!1,B=!1,z=!1,L=!1;function N(n){if(!(L="mousedown"===n.type)||0===n.button){var t,r=i(u.get(),a.get())>=2,o=L||!r,s=(t=n.target.nodeName||"",!(S.indexOf(t)>-1)),f=r||L&&s;D=!0,c.pointerDown(n),E.set(u),u.set(a),l.useBaseMass().useSpeed(80),function(){var n=L?document:e;A.add(n,"touchmove",R).add(n,"touchend",H).add(n,"mousemove",R).add(n,"mouseup",H)}(),T=c.readPoint(n),P=c.readPoint(n,b),v.emit("pointerDown"),o&&(z=!1),f&&n.preventDefault()}}function R(n){if(!B&&!L){if(!n.cancelable)return H(n);var e=c.readPoint(n),r=c.readPoint(n,b),o=i(e,T),a=i(r,P);if(!(B=o>a)&&!z)return H(n)}var f=c.pointerMove(n);!z&&f&&(z=!0),s.start(),u.add(t.apply(f)),n.preventDefault()}function H(n){var e=d.byDistance(0,!1).index!==p.get(),a=c.pointerUp(n)*(y?I:C)[L?"mouse":"touch"],s=function(n,t){var e=p.clone().add(-1*o(n)),i=e.get()===p.min||e.get()===p.max,u=d.byDistance(n,!y).distance;return y||r(n)<k?u:!h&&i?.4*u:w&&t?.5*u:d.byIndex(e.get(),0).distance}(t.apply(a),e),m=function(n,t){if(0===n||0===t)return 0;if(r(n)<=r(t))return 0;var e=i(r(n),r(t));return r(e/n)}(a,s),g=i(u.get(),E.get())>=.5,x=e&&m>.75,b=r(a)<k,S=x?10:O,M=x?1+2.5*m:1;g&&!L&&(z=!0),B=!1,D=!1,A.removeAll(),l.useSpeed(b?9:S).useMass(M),f.distance(s,!y),L=!1,v.emit("pointerUp")}function j(n){z&&n.preventDefault()}return{addActivationEvents:function(){var n=e;M.add(n,"touchmove",(function(){})).add(n,"touchend",(function(){})).add(n,"touchstart",N).add(n,"mousedown",N).add(n,"touchcancel",H).add(n,"contextmenu",H).add(n,"click",j)},clickAllowed:function(){return!z},pointerDown:function(){return D},removeAllEvents:function(){M.removeAll(),A.removeAll()}}}function h(n,t,e){var r,i,u=(r=2,i=Math.pow(10,r),function(n){return Math.round(n*i)/i}),c=g(0),a=g(0),s=g(0),f=0,l=t,d=e;function p(n){return l=n,m}function v(n){return d=n,m}var m={direction:function(){return f},seek:function(t){s.set(t).subtract(n);var e,r,i,u=(r=0)+(s.get()-(e=0))/(100-e)*(l-r);return f=o(s.get()),s.normalize().multiply(u).subtract(c),(i=s).divide(d),a.add(i),m},settle:function(t){var e=t.get()-n.get(),r=!u(e);return r&&n.set(t),r},update:function(){c.add(a),n.add(c),a.multiply(0)},useBaseMass:function(){return v(e)},useBaseSpeed:function(){return p(t)},useMass:v,useSpeed:p};return m}function y(n,t,e,o,i){var u=i.measure(10),c=i.measure(50),a=!1;return{constrain:function(i){if(!a&&n.reachedAny(e.get())&&n.reachedAny(t.get())){var s=n.reachedMin(t.get())?"min":"max",f=r(n[s]-t.get()),l=e.get()-t.get(),d=Math.min(f/c,.85);e.subtract(l*d),!i&&r(l)<u&&(e.set(n.constrain(e.get())),o.useSpeed(10).useMass(3))}},toggleActive:function(n){a=!n}}}function w(n,t,e,r){var o=p(-t+n,e[0]),i=e.map(o.constrain);return{snapsContained:function(){if(t<=n)return[o.max];if("keepSnaps"===r)return i;var e=function(){var n=i[0],t=c(i);return p(i.lastIndexOf(n),i.indexOf(t)+1)}(),u=e.min,a=e.max;return i.slice(u,a)}()}}function b(n,t,e,r){var o=p(t.min+.1,t.max+.1),i=o.reachedMin,u=o.reachedMax;return{loop:function(t){if(function(n){return 1===n?u(e.get()):-1===n&&i(e.get())}(t)){var o=n*(-1*t);r.forEach((function(n){return n.add(o)}))}}}}function S(n){var t=n.max,e=n.length;return{get:function(n){return(n-t)/-e}}}function E(n,t,e,i,u){var c=i.reachedAny,a=i.removeOffset,s=i.constrain;function f(n){return n.concat().sort((function(n,t){return r(n)-r(t)}))[0]}function l(t,r){var i=[t,t+e,t-e];return n?f(r?i.filter((function(n){return o(n)===r})):i):i[0]}return{byDistance:function(e,o){var i=u.get()+e,f=function(e){var o=n?a(e):s(e);return{index:t.map((function(n){return n-o})).map((function(n){return l(n,0)})).map((function(n,t){return{diff:n,index:t}})).sort((function(n,t){return r(n.diff)-r(t.diff)}))[0].index,distance:o}}(i),d=f.index,p=f.distance,v=!n&&c(i);return!o||v?{index:d,distance:e}:{index:d,distance:e+l(t[d]-p,0)}},byIndex:function(n,e){return{index:n,distance:l(t[n]-u.get(),e)}},shortcut:l}}function M(n,t,e){var r="x"===n.scroll?function(n){return"translate3d(".concat(n,"px,0px,0px)")}:function(n){return"translate3d(0px,".concat(n,"px,0px)")},o=e.style,i=!1;return{clear:function(){i||(o.transform="",e.getAttribute("style")||e.removeAttribute("style"))},to:function(n){i||(o.transform=r(t.apply(n.get())))},toggleActive:function(n){i=!n}}}function A(n,t,e,r,o,i,c,a,s){var f,l=u(o),d=u(o).reverse(),p=(f=i[0]-1,x(m(d,f),"end")).concat(function(){var n=e-i[0]-1;return x(m(l,n),"start")}());function v(n,t){return n.reduce((function(n,t){return n-o[t]}),t)}function m(n,t){return n.reduce((function(n,e){return v(n,t)>0?n.concat([e]):n}),[])}function x(e,o){var i="start"===o,u=i?-r:r,f=c.findSlideBounds([u]);return e.map((function(e){var o=i?0:-r,u=i?r:0,c=f.filter((function(n){return n.index===e}))[0][i?"end":"start"],l=g(-1),d=g(-1),p=M(n,t,s[e]);return{index:e,location:d,translate:p,target:function(){return l.set(a.get()>c?o:u)}}}))}return{canLoop:function(){return p.every((function(n){var t=n.index;return v(l.filter((function(n){return n!==t})),e)<=.1}))},clear:function(){p.forEach((function(n){return n.translate.clear()}))},loop:function(){p.forEach((function(n){var t=n.target,e=n.translate,r=n.location,o=t();o.get()!==r.get()&&(0===o.get()?e.clear():e.to(o),r.set(o))}))},loopPoints:p}}function k(n,t,e,r,o,i,u){var c=o.removeOffset,a=o.constrain,s=i?[0,t,-t]:[0],f=l(s,u);function l(t,o){var i=t||s,u=function(n){var t=n||0;return e.map((function(n){return p(.5,n-.5).constrain(n*t)}))}(o);return i.reduce((function(t,o){var i=r.map((function(t,r){return{start:t-e[r]+u[r]+o,end:t+n-u[r]+o,index:r}}));return t.concat(i)}),[])}return{check:function(n,t){var e=i?c(n):a(n);return(t||f).reduce((function(n,t){var r=t.index,o=t.start,i=t.end;return-1===n.indexOf(r)&&o<e&&i>e?n.concat([r]):n}),[])},findSlideBounds:l}}function C(t,e,r){var o=n(r);return{groupSlides:function(n){return o?function(n,t){return u(n).filter((function(n){return n%t==0})).map((function(e){return n.slice(e,e+t)}))}(n,r):function(n){return u(n).reduce((function(n,r){var o=e.slice(c(n),r+1).reduce((function(n,t){return n+t}),0);return!r||o>t?n.concat(r):n}),[]).map((function(t,e,r){return n.slice(t,r[e+1])}))}(n)}}}function I(n,t,e,o,i){var s=o.align,f=o.axis,l=o.direction,I=o.startIndex,O=o.inViewThreshold,T=o.loop,P=o.speed,D=o.dragFree,B=o.slidesToScroll,z=o.skipSnaps,L=o.containScroll,N=t.getBoundingClientRect(),R=e.map((function(n){return n.getBoundingClientRect()})),H=function(n){var t="rtl"===n?-1:1;return{apply:function(n){return n*t}}}(l),j=function(n,t){var e="y"===n?"y":"x";return{scroll:e,cross:"y"===n?"x":"y",startEdge:"y"===e?"top":"rtl"===t?"right":"left",endEdge:"y"===e?"bottom":"rtl"===t?"left":"right",measureSize:function(n){var t=n.width,r=n.height;return"x"===e?t:r}}}(f,l),q=j.measureSize(N),V=function(n){return{measure:function(t){return n*(t/100)}}}(q),F=d(s,q),X=!T&&""!==L,_=function(n,t,e,o,i){var u=n.measureSize,s=n.startEdge,f=n.endEdge,l=function(){if(!i)return 0;var n=e[0];return r(t[s]-n[s])}(),d=function(){if(!i)return 0;var n=window.getComputedStyle(c(o));return parseFloat(n.getPropertyValue("margin-".concat(f)))}(),p=e.map(u),v=e.map((function(n,t,e){var r=!t,o=t===a(e);return r?p[t]+l:o?p[t]+d:e[t+1][s]-n[s]})).map(r);return{slideSizes:p,slideSizesWithGaps:v}}(j,N,R,e,T||""!==L),U=_.slideSizes,W=_.slideSizesWithGaps,Z=C(q,W,B),G=function(n,t,e,o,i,u,s){var f,l=n.startEdge,d=n.endEdge,p=u.groupSlides,v=p(o).map((function(n){return c(n)[d]-n[0][l]})).map(r).map(t.measure),m=o.map((function(n){return e[l]-n[l]})).map((function(n){return-r(n)})),g=(f=c(m)-c(i),p(m).map((function(n){return n[0]})).map((function(n,t,e){var r=!t,o=t===a(e);return s&&r?0:s&&o?f:n+v[t]})));return{snaps:m,snapsAligned:g}}(j,F,N,R,W,Z,X),J=G.snaps,Y=G.snapsAligned,$=-c(J)+c(W),K=w(q,$,Y,L).snapsContained,Q=X?K:Y,nn=function(n,t,e){var r,o;return{limit:(r=t[0],o=c(t),p(e?r-n:o,r))}}($,Q,T).limit,tn=v(a(Q),I,T),en=tn.clone(),rn=u(e),on=function(n){var t=0;function e(n,e){return function(){n===!!t&&e()}}function r(){t=window.requestAnimationFrame(n)}return{proceed:e(!0,r),start:e(!1,r),stop:e(!0,(function(){window.cancelAnimationFrame(t),t=0}))}}((function(){T||vn.scrollBounds.constrain(vn.dragHandler.pointerDown()),vn.scrollBody.seek(an).update();var n=vn.scrollBody.settle(an);n&&!vn.dragHandler.pointerDown()&&(vn.animation.stop(),i.emit("settle")),n||i.emit("scroll"),T&&(vn.scrollLooper.loop(vn.scrollBody.direction()),vn.slideLooper.loop()),vn.translate.to(cn),vn.animation.proceed()})),un=Q[tn.get()],cn=g(un),an=g(un),sn=h(cn,P,1),fn=E(T,Q,$,nn,an),ln=function(n,t,e,r,o,i){function u(r){var u=r.distance,c=r.index!==t.get();u&&(n.start(),o.add(u)),c&&(e.set(t.get()),t.set(r.index),i.emit("select"))}return{distance:function(n,t){u(r.byDistance(n,t))},index:function(n,e){var o=t.clone().set(n);u(r.byIndex(o.get(),e))}}}(on,tn,en,fn,an,i),dn=k(q,$,U,J,nn,T,O),pn=x(j,H,n,an,function(n){var t,e;function o(n){return"undefined"!=typeof TouchEvent&&n instanceof TouchEvent}function i(n){return n.timeStamp}function u(t,e){var r=e||n.scroll,i="client".concat("x"===r?"X":"Y");return(o(t)?t.touches[0]:t)[i]}return{isTouchEvent:o,pointerDown:function(n){return t=n,e=n,u(n)},pointerMove:function(n){var r=u(n)-u(e),o=i(n)-i(t)>170;return e=n,o&&(t=n),r},pointerUp:function(n){if(!t||!e)return 0;var o=u(e)-u(t),c=i(n)-i(t),a=i(n)-i(e)>170,s=o/c;return c&&!a&&r(s)>.1?s:0},readPoint:u}}(j),cn,on,ln,sn,fn,tn,i,V,T,D,z),vn={containerRect:N,slideRects:R,animation:on,axis:j,direction:H,dragHandler:pn,eventStore:m(),percentOfView:V,index:tn,indexPrevious:en,limit:nn,location:cn,options:o,scrollBody:sn,scrollBounds:y(nn,cn,an,sn,V),scrollLooper:b($,nn,cn,[cn,an]),scrollProgress:S(nn),scrollSnaps:Q,scrollTarget:fn,scrollTo:ln,slideLooper:A(j,H,q,$,W,Q,dn,cn,e),slidesToScroll:Z,slidesInView:dn,slideIndexes:rn,target:an,translate:M(j,H,t)};return vn}var O={align:"center",axis:"x",containScroll:"",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,speed:10,startIndex:0,active:!0};function T(){function n(n,t){return f(n,t||{})}return{merge:n,areEqual:function(n,t){return JSON.stringify(s(n.breakpoints||{}))===JSON.stringify(s(t.breakpoints||{}))&&l(n,t)},atMedia:function(t){var e=t.breakpoints||{},r=s(e).filter((function(n){return window.matchMedia(n).matches})).map((function(n){return e[n]})).reduce((function(t,e){return n(t,e)}),{});return n(t,r)}}}function P(n,t,e){var r,o,i,u,c,a=m(),s=T(),f=function(){var n=T(),t=n.atMedia,e=n.areEqual,r=[],o=[];function i(n){var r=t(n.options);return function(){return!e(r,t(n.options))}}var u={init:function(n,e){return o=n.map(i),(r=n.filter((function(n){return t(n.options).active}))).forEach((function(n){return n.init(e)})),n.reduce((function(n,t){var e;return Object.assign(n,((e={})[t.name]=t,e))}),{})},destroy:function(){r=r.filter((function(n){return n.destroy()}))},haveChanged:function(){return o.some((function(n){return n()}))}};return u}(),l=function(){var n={};function t(t){return n[t]||[]}var e={emit:function(n){return t(n).forEach((function(t){return t(n)})),e},off:function(r,o){return n[r]=t(r).filter((function(n){return n!==o})),e},on:function(r,o){return n[r]=t(r).concat([o]),e}};return e}(),d=l.on,p=l.off,v=S,g=!1,x=s.merge(O,P.globalOptions),h=s.merge(x),y=[],w=0;function b(t,e){if(!g){var a,d;if(a="container"in n&&n.container,d="slides"in n&&n.slides,i="root"in n?n.root:n,u=a||i.children[0],c=d||[].slice.call(u.children),x=s.merge(x,t),h=s.atMedia(x),r=I(i,u,c,h,l),w=r.axis.measureSize(i.getBoundingClientRect()),!h.active)return E();if(r.translate.to(r.location),y=e||y,o=f.init(y,C),h.loop){if(!r.slideLooper.canLoop())return E(),b({loop:!1},e);r.slideLooper.loop()}h.draggable&&u.offsetParent&&c.length&&r.dragHandler.addActivationEvents()}}function S(n,t){var e=k();E(),b(s.merge({startIndex:e},n),t),l.emit("reInit")}function E(){r.dragHandler.removeAllEvents(),r.animation.stop(),r.eventStore.removeAll(),r.translate.clear(),r.slideLooper.clear(),f.destroy()}function M(n){var t=r[n?"target":"location"].get(),e=h.loop?"removeOffset":"constrain";return r.slidesInView.check(r.limit[e](t))}function A(n,t,e){h.active&&!g&&(r.scrollBody.useBaseMass().useSpeed(t?100:h.speed),r.scrollTo.index(n,e||0))}function k(){return r.index.get()}var C={canScrollNext:function(){return r.index.clone().add(1).get()!==k()},canScrollPrev:function(){return r.index.clone().add(-1).get()!==k()},clickAllowed:function(){return r.dragHandler.clickAllowed()},containerNode:function(){return u},internalEngine:function(){return r},destroy:function(){g||(g=!0,a.removeAll(),E(),l.emit("destroy"))},off:p,on:d,plugins:function(){return o},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:v,rootNode:function(){return i},scrollNext:function(n){A(r.index.clone().add(1).get(),!0===n,-1)},scrollPrev:function(n){A(r.index.clone().add(-1).get(),!0===n,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnaps.map(r.scrollProgress.get)},scrollTo:A,selectedScrollSnap:k,slideNodes:function(){return c},slidesInView:M,slidesNotInView:function(n){var t=M(n);return r.slideIndexes.filter((function(n){return-1===t.indexOf(n)}))}};return b(t,e),a.add(window,"resize",(function(){var n=s.atMedia(x),t=!s.areEqual(n,h),e=r.axis.measureSize(i.getBoundingClientRect()),o=w!==e,u=f.haveChanged();(o||t||u)&&S(),l.emit("resize")})),setTimeout((function(){return l.emit("init")}),0),C}return P.globalOptions=void 0,P.optionsHandler=T,P}()},2746:function(n,t,e){const r=e(5893);n.exports.c=r},828:function(n,t,e){"use strict";e.d(t,{Z:function(){return i}});var r=e(3375);var o=e(1566);function i(n,t){return function(n){if(Array.isArray(n))return n}(n)||(0,r.Z)(n,t)||(0,o.Z)(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},3659:function(n,t,e){"use strict";e.d(t,{R:function(){return l}});var r={};e.r(r),e.d(r,{MDXContext:function(){return u},MDXProvider:function(){return f},useMDXComponents:function(){return a},withMDXComponents:function(){return c}});var o=e(7294),i=e(2746);const u=o.createContext({});function c(n){return function(t){const e=a(t.components);return o.createElement(n,{...t,allComponents:e})}}function a(n){const t=o.useContext(u);return o.useMemo((()=>"function"===typeof n?n(t):{...t,...n}),[t,n])}const s={};function f({components:n,children:t,disableParentContext:e}){let r=a(n);return e&&(r=n||s),o.createElement(u.Provider,{value:r},t)}function l({compiledSource:n,frontmatter:t,scope:e,components:u={},lazy:c}){const[a,s]=(0,o.useState)(!c||"undefined"===typeof window);(0,o.useEffect)((()=>{if(c){const n=window.requestIdleCallback((()=>{s(!0)}));return()=>window.cancelIdleCallback(n)}}),[]);const l=(0,o.useMemo)((()=>{const o=Object.assign({opts:{...r,...i.c}},{frontmatter:t},e),u=Object.keys(o),c=Object.values(o),a=Reflect.construct(Function,u.concat(`${n}`));return a.apply(a,c).default}),[e,n]);if(!a)return o.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const d=o.createElement(f,{components:u},o.createElement(l,null));return c?o.createElement("div",null,d):d}"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(n){var t=Date.now();return setTimeout((function(){n({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(n){clearTimeout(n)})}}]);