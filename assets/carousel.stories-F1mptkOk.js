import{j as b}from"./jsx-runtime-D_zvdyIk.js";/* empty css                */import{r as A}from"./index-CXcpQZ5J.js";import{c as ye}from"./utils-Dec1Exbm.js";import{B as ct}from"./button-DmDyehya.js";import{c as at}from"./createLucideIcon-D-niisEM.js";import{C as ae}from"./card-BsB8Umas.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B97ZzoEQ.js";import"./index-Bd7YGvbB.js";import"./index-bNgk5zX4.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=at("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=at("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);function Et(e){return Object.prototype.toString.call(e)==="[object Object]"}function $e(e){return Et(e)||Array.isArray(e)}function It(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function De(e,t){const n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;const i=JSON.stringify(Object.keys(e.breakpoints||{})),o=JSON.stringify(Object.keys(t.breakpoints||{}));return i!==o?!1:n.every(r=>{const u=e[r],a=t[r];return typeof u=="function"?`${u}`==`${a}`:!$e(u)||!$e(a)?u===a:De(u,a)})}function Ke(e){return e.concat().sort((t,n)=>t.name>n.name?1:-1).map(t=>t.options)}function At(e,t){if(e.length!==t.length)return!1;const n=Ke(e),s=Ke(t);return n.every((i,o)=>{const r=s[o];return De(i,r)})}function ke(e){return typeof e=="number"}function Te(e){return typeof e=="string"}function we(e){return typeof e=="boolean"}function Qe(e){return Object.prototype.toString.call(e)==="[object Object]"}function D(e){return Math.abs(e)}function Me(e){return Math.sign(e)}function pe(e,t){return D(e-t)}function jt(e,t){if(e===0||t===0||D(e)<=D(t))return 0;const n=pe(D(e),D(t));return D(n/e)}function Lt(e){return Math.round(e*100)/100}function ge(e){return he(e).map(Number)}function q(e){return e[Ce(e)]}function Ce(e){return Math.max(0,e.length-1)}function Fe(e,t){return t===Ce(e)}function Je(e,t=0){return Array.from(Array(e),(n,s)=>t+s)}function he(e){return Object.keys(e)}function ut(e,t){return[e,t].reduce((n,s)=>(he(s).forEach(i=>{const o=n[i],r=s[i],u=Qe(o)&&Qe(r);n[i]=u?ut(o,r):r}),n),{})}function Oe(e,t){return typeof t.MouseEvent<"u"&&e instanceof t.MouseEvent}function Pt(e,t){const n={start:s,center:i,end:o};function s(){return 0}function i(a){return o(a)/2}function o(a){return t-a}function r(a,c){return Te(e)?n[e](a):e(t,a,c)}return{measure:r}}function xe(){let e=[];function t(i,o,r,u={passive:!0}){let a;if("addEventListener"in i)i.addEventListener(o,r,u),a=()=>i.removeEventListener(o,r,u);else{const c=i;c.addListener(r),a=()=>c.removeListener(r)}return e.push(a),s}function n(){e=e.filter(i=>i())}const s={add:t,clear:n};return s}function Tt(e,t,n,s){const i=xe(),o=1e3/60;let r=null,u=0,a=0;function c(){i.add(e,"visibilitychange",()=>{e.hidden&&l()})}function x(){C(),i.clear()}function d(h){if(!a)return;r||(r=h,n(),n());const f=h-r;for(r=h,u+=f;u>=o;)n(),u-=o;const g=u/o;s(g),a&&(a=t.requestAnimationFrame(d))}function m(){a||(a=t.requestAnimationFrame(d))}function C(){t.cancelAnimationFrame(a),r=null,u=0,a=0}function l(){r=null,u=0}return{init:c,destroy:x,start:m,stop:C,update:n,render:s}}function Ot(e,t){const n=t==="rtl",s=e==="y",i=s?"y":"x",o=s?"x":"y",r=!s&&n?-1:1,u=x(),a=d();function c(l){const{height:p,width:h}=l;return s?p:h}function x(){return s?"top":n?"right":"left"}function d(){return s?"bottom":n?"left":"right"}function m(l){return l*r}return{scroll:i,cross:o,startEdge:u,endEdge:a,measureSize:c,direction:m}}function re(e=0,t=0){const n=D(e-t);function s(c){return c<e}function i(c){return c>t}function o(c){return s(c)||i(c)}function r(c){return o(c)?s(c)?e:t:c}function u(c){return n?c-n*Math.ceil((c-t)/n):c}return{length:n,max:t,min:e,constrain:r,reachedAny:o,reachedMax:i,reachedMin:s,removeOffset:u}}function lt(e,t,n){const{constrain:s}=re(0,e),i=e+1;let o=r(t);function r(m){return n?D((i+m)%i):s(m)}function u(){return o}function a(m){return o=r(m),d}function c(m){return x().set(u()+m)}function x(){return lt(e,u(),n)}const d={get:u,set:a,add:c,clone:x};return d}function Dt(e,t,n,s,i,o,r,u,a,c,x,d,m,C,l,p,h,f,g){const{cross:S,direction:w}=e,T=["INPUT","SELECT","TEXTAREA"],E={passive:!1},v=xe(),N=xe(),I=re(50,225).constrain(C.measure(20)),k={mouse:300,touch:400},j={mouse:500,touch:600},R=l?43:25;let H=!1,_=0,G=0,ee=!1,Z=!1,K=!1,Q=!1;function ue(y){if(!g)return;function L(z){(we(g)||g(y,z))&&fe(z)}const M=t;v.add(M,"dragstart",z=>z.preventDefault(),E).add(M,"touchmove",()=>{},E).add(M,"touchend",()=>{}).add(M,"touchstart",L).add(M,"mousedown",L).add(M,"touchcancel",F).add(M,"contextmenu",F).add(M,"click",X,!0)}function U(){v.clear(),N.clear()}function se(){const y=Q?n:t;N.add(y,"touchmove",V,E).add(y,"touchend",F).add(y,"mousemove",V,E).add(y,"mouseup",F)}function oe(y){const L=y.nodeName||"";return T.includes(L)}function J(){return(l?j:k)[Q?"mouse":"touch"]}function le(y,L){const M=d.add(Me(y)*-1),z=x.byDistance(y,!l).distance;return l||D(y)<I?z:h&&L?z*.5:x.byIndex(M.get(),0).distance}function fe(y){const L=Oe(y,s);Q=L,K=l&&L&&!y.buttons&&H,H=pe(i.get(),r.get())>=2,!(L&&y.button!==0)&&(oe(y.target)||(ee=!0,o.pointerDown(y),c.useFriction(0).useDuration(0),i.set(r),se(),_=o.readPoint(y),G=o.readPoint(y,S),m.emit("pointerDown")))}function V(y){if(!Oe(y,s)&&y.touches.length>=2)return F(y);const M=o.readPoint(y),z=o.readPoint(y,S),$=pe(M,_),Y=pe(z,G);if(!Z&&!Q&&(!y.cancelable||(Z=$>Y,!Z)))return F(y);const te=o.pointerMove(y);$>p&&(K=!0),c.useFriction(.3).useDuration(.75),u.start(),i.add(w(te)),y.preventDefault()}function F(y){const M=x.byDistance(0,!1).index!==d.get(),z=o.pointerUp(y)*J(),$=le(w(z),M),Y=jt(z,$),te=R-10*Y,W=f+Y/50;Z=!1,ee=!1,N.clear(),c.useDuration(te).useFriction(W),a.distance($,!l),Q=!1,m.emit("pointerUp")}function X(y){K&&(y.stopPropagation(),y.preventDefault(),K=!1)}function B(){return ee}return{init:ue,destroy:U,pointerDown:B}}function kt(e,t){let s,i;function o(d){return d.timeStamp}function r(d,m){const l=`client${(m||e.scroll)==="x"?"X":"Y"}`;return(Oe(d,t)?d:d.touches[0])[l]}function u(d){return s=d,i=d,r(d)}function a(d){const m=r(d)-r(i),C=o(d)-o(s)>170;return i=d,C&&(s=d),m}function c(d){if(!s||!i)return 0;const m=r(i)-r(s),C=o(d)-o(s),l=o(d)-o(i)>170,p=m/C;return C&&!l&&D(p)>.1?p:0}return{pointerDown:u,pointerMove:a,pointerUp:c,readPoint:r}}function Mt(){function e(n){const{offsetTop:s,offsetLeft:i,offsetWidth:o,offsetHeight:r}=n;return{top:s,right:i+o,bottom:s+r,left:i,width:o,height:r}}return{measure:e}}function Ft(e){function t(s){return e*(s/100)}return{measure:t}}function zt(e,t,n,s,i,o,r){const u=[e].concat(s);let a,c,x=[],d=!1;function m(h){return i.measureSize(r.measure(h))}function C(h){if(!o)return;c=m(e),x=s.map(m);function f(g){for(const S of g){if(d)return;const w=S.target===e,T=s.indexOf(S.target),E=w?c:x[T],v=m(w?e:s[T]);if(D(v-E)>=.5){h.reInit(),t.emit("resize");break}}}a=new ResizeObserver(g=>{(we(o)||o(h,g))&&f(g)}),n.requestAnimationFrame(()=>{u.forEach(g=>a.observe(g))})}function l(){d=!0,a&&a.disconnect()}return{init:C,destroy:l}}function Rt(e,t,n,s,i,o){let r=0,u=0,a=i,c=o,x=e.get(),d=0;function m(){const E=s.get()-e.get(),v=!a;let N=0;return v?(r=0,n.set(s),e.set(s),N=E):(n.set(e),r+=E/a,r*=c,x+=r,e.add(r),N=x-d),u=Me(N),d=x,T}function C(){const E=s.get()-t.get();return D(E)<.001}function l(){return a}function p(){return u}function h(){return r}function f(){return S(i)}function g(){return w(o)}function S(E){return a=E,T}function w(E){return c=E,T}const T={direction:p,duration:l,velocity:h,seek:m,settled:C,useBaseFriction:g,useBaseDuration:f,useFriction:w,useDuration:S};return T}function Vt(e,t,n,s,i){const o=i.measure(10),r=i.measure(50),u=re(.1,.99);let a=!1;function c(){return!(a||!e.reachedAny(n.get())||!e.reachedAny(t.get()))}function x(C){if(!c())return;const l=e.reachedMin(t.get())?"min":"max",p=D(e[l]-t.get()),h=n.get()-t.get(),f=u.constrain(p/r);n.subtract(h*f),!C&&D(h)<o&&(n.set(e.constrain(n.get())),s.useDuration(25).useBaseFriction())}function d(C){a=!C}return{shouldConstrain:c,constrain:x,toggleActive:d}}function Bt(e,t,n,s,i){const o=re(-t+e,0),r=d(),u=x(),a=m();function c(l,p){return pe(l,p)<=1}function x(){const l=r[0],p=q(r),h=r.lastIndexOf(l),f=r.indexOf(p)+1;return re(h,f)}function d(){return n.map((l,p)=>{const{min:h,max:f}=o,g=o.constrain(l),S=!p,w=Fe(n,p);return S?f:w||c(h,g)?h:c(f,g)?f:g}).map(l=>parseFloat(l.toFixed(3)))}function m(){if(t<=e+i)return[o.max];if(s==="keepSnaps")return r;const{min:l,max:p}=u;return r.slice(l,p)}return{snapsContained:a,scrollContainLimit:u}}function qt(e,t,n){const s=t[0],i=n?s-e:q(t);return{limit:re(i,s)}}function Ht(e,t,n,s){const o=t.min+.1,r=t.max+.1,{reachedMin:u,reachedMax:a}=re(o,r);function c(m){return m===1?a(n.get()):m===-1?u(n.get()):!1}function x(m){if(!c(m))return;const C=e*(m*-1);s.forEach(l=>l.add(C))}return{loop:x}}function _t(e){const{max:t,length:n}=e;function s(o){const r=o-t;return n?r/-n:0}return{get:s}}function Gt(e,t,n,s,i){const{startEdge:o,endEdge:r}=e,{groupSlides:u}=i,a=d().map(t.measure),c=m(),x=C();function d(){return u(s).map(p=>q(p)[r]-p[0][o]).map(D)}function m(){return s.map(p=>n[o]-p[o]).map(p=>-D(p))}function C(){return u(c).map(p=>p[0]).map((p,h)=>p+a[h])}return{snaps:c,snapsAligned:x}}function Ut(e,t,n,s,i,o){const{groupSlides:r}=i,{min:u,max:a}=s,c=x();function x(){const m=r(o),C=!e||t==="keepSnaps";return n.length===1?[o]:C?m:m.slice(u,a).map((l,p,h)=>{const f=!p,g=Fe(h,p);if(f){const S=q(h[0])+1;return Je(S)}if(g){const S=Ce(o)-q(h)[0]+1;return Je(S,q(h)[0])}return l})}return{slideRegistry:c}}function $t(e,t,n,s,i){const{reachedAny:o,removeOffset:r,constrain:u}=s;function a(l){return l.concat().sort((p,h)=>D(p)-D(h))[0]}function c(l){const p=e?r(l):u(l),h=t.map((g,S)=>({diff:x(g-p,0),index:S})).sort((g,S)=>D(g.diff)-D(S.diff)),{index:f}=h[0];return{index:f,distance:p}}function x(l,p){const h=[l,l+n,l-n];if(!e)return l;if(!p)return a(h);const f=h.filter(g=>Me(g)===p);return f.length?a(f):q(h)-n}function d(l,p){const h=t[l]-i.get(),f=x(h,p);return{index:l,distance:f}}function m(l,p){const h=i.get()+l,{index:f,distance:g}=c(h),S=!e&&o(h);if(!p||S)return{index:f,distance:l};const w=t[f]-g,T=l+x(w,0);return{index:f,distance:T}}return{byDistance:m,byIndex:d,shortcut:x}}function Kt(e,t,n,s,i,o,r){function u(d){const m=d.distance,C=d.index!==t.get();o.add(m),m&&(s.duration()?e.start():(e.update(),e.render(1),e.update())),C&&(n.set(t.get()),t.set(d.index),r.emit("select"))}function a(d,m){const C=i.byDistance(d,m);u(C)}function c(d,m){const C=t.clone().set(d),l=i.byIndex(C.get(),m);u(l)}return{distance:a,index:c}}function Qt(e,t,n,s,i,o,r,u){const a={passive:!0,capture:!0};let c=0;function x(C){if(!u)return;function l(p){if(new Date().getTime()-c>10)return;r.emit("slideFocusStart"),e.scrollLeft=0;const g=n.findIndex(S=>S.includes(p));ke(g)&&(i.useDuration(0),s.index(g,0),r.emit("slideFocus"))}o.add(document,"keydown",d,!1),t.forEach((p,h)=>{o.add(p,"focus",f=>{(we(u)||u(C,f))&&l(h)},a)})}function d(C){C.code==="Tab"&&(c=new Date().getTime())}return{init:x}}function me(e){let t=e;function n(){return t}function s(a){t=r(a)}function i(a){t+=r(a)}function o(a){t-=r(a)}function r(a){return ke(a)?a:a.get()}return{get:n,set:s,add:i,subtract:o}}function ft(e,t){const n=e.scroll==="x"?r:u,s=t.style;let i=null,o=!1;function r(m){return`translate3d(${m}px,0px,0px)`}function u(m){return`translate3d(0px,${m}px,0px)`}function a(m){if(o)return;const C=Lt(e.direction(m));C!==i&&(s.transform=n(C),i=C)}function c(m){o=!m}function x(){o||(s.transform="",t.getAttribute("style")||t.removeAttribute("style"))}return{clear:x,to:a,toggleActive:c}}function Jt(e,t,n,s,i,o,r,u,a){const x=ge(i),d=ge(i).reverse(),m=f().concat(g());function C(v,N){return v.reduce((I,k)=>I-i[k],N)}function l(v,N){return v.reduce((I,k)=>C(I,N)>0?I.concat([k]):I,[])}function p(v){return o.map((N,I)=>({start:N-s[I]+.5+v,end:N+t-.5+v}))}function h(v,N,I){const k=p(N);return v.map(j=>{const R=I?0:-n,H=I?n:0,_=I?"end":"start",G=k[j][_];return{index:j,loopPoint:G,slideLocation:me(-1),translate:ft(e,a[j]),target:()=>u.get()>G?R:H}})}function f(){const v=r[0],N=l(d,v);return h(N,n,!1)}function g(){const v=t-r[0]-1,N=l(x,v);return h(N,-n,!0)}function S(){return m.every(({index:v})=>{const N=x.filter(I=>I!==v);return C(N,t)<=.1})}function w(){m.forEach(v=>{const{target:N,translate:I,slideLocation:k}=v,j=N();j!==k.get()&&(I.to(j),k.set(j))})}function T(){m.forEach(v=>v.translate.clear())}return{canLoop:S,clear:T,loop:w,loopPoints:m}}function Xt(e,t,n){let s,i=!1;function o(a){if(!n)return;function c(x){for(const d of x)if(d.type==="childList"){a.reInit(),t.emit("slidesChanged");break}}s=new MutationObserver(x=>{i||(we(n)||n(a,x))&&c(x)}),s.observe(e,{childList:!0})}function r(){s&&s.disconnect(),i=!0}return{init:o,destroy:r}}function Yt(e,t,n,s){const i={};let o=null,r=null,u,a=!1;function c(){u=new IntersectionObserver(l=>{a||(l.forEach(p=>{const h=t.indexOf(p.target);i[h]=p}),o=null,r=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:s}),t.forEach(l=>u.observe(l))}function x(){u&&u.disconnect(),a=!0}function d(l){return he(i).reduce((p,h)=>{const f=parseInt(h),{isIntersecting:g}=i[f];return(l&&g||!l&&!g)&&p.push(f),p},[])}function m(l=!0){if(l&&o)return o;if(!l&&r)return r;const p=d(l);return l&&(o=p),l||(r=p),p}return{init:c,destroy:x,get:m}}function Zt(e,t,n,s,i,o){const{measureSize:r,startEdge:u,endEdge:a}=e,c=n[0]&&i,x=l(),d=p(),m=n.map(r),C=h();function l(){if(!c)return 0;const g=n[0];return D(t[u]-g[u])}function p(){if(!c)return 0;const g=o.getComputedStyle(q(s));return parseFloat(g.getPropertyValue(`margin-${a}`))}function h(){return n.map((g,S,w)=>{const T=!S,E=Fe(w,S);return T?m[S]+x:E?m[S]+d:w[S+1][u]-g[u]}).map(D)}return{slideSizes:m,slideSizesWithGaps:C,startGap:x,endGap:d}}function Wt(e,t,n,s,i,o,r,u,a){const{startEdge:c,endEdge:x,direction:d}=e,m=ke(n);function C(f,g){return ge(f).filter(S=>S%g===0).map(S=>f.slice(S,S+g))}function l(f){return f.length?ge(f).reduce((g,S,w)=>{const T=q(g)||0,E=T===0,v=S===Ce(f),N=i[c]-o[T][c],I=i[c]-o[S][x],k=!s&&E?d(r):0,j=!s&&v?d(u):0,R=D(I-j-(N+k));return w&&R>t+a&&g.push(S),v&&g.push(f.length),g},[]).map((g,S,w)=>{const T=Math.max(w[S-1]||0);return f.slice(T,g)}):[]}function p(f){return m?C(f,n):l(f)}return{groupSlides:p}}function en(e,t,n,s,i,o,r){const{align:u,axis:a,direction:c,startIndex:x,loop:d,duration:m,dragFree:C,dragThreshold:l,inViewThreshold:p,slidesToScroll:h,skipSnaps:f,containScroll:g,watchResize:S,watchSlides:w,watchDrag:T,watchFocus:E}=o,v=2,N=Mt(),I=N.measure(t),k=n.map(N.measure),j=Ot(a,c),R=j.measureSize(I),H=Ft(R),_=Pt(u,R),G=!d&&!!g,ee=d||!!g,{slideSizes:Z,slideSizesWithGaps:K,startGap:Q,endGap:ue}=Zt(j,I,k,n,ee,i),U=Wt(j,R,h,d,I,k,Q,ue,v),{snaps:se,snapsAligned:oe}=Gt(j,_,I,k,U),J=-q(se)+q(K),{snapsContained:le,scrollContainLimit:fe}=Bt(R,J,oe,g,v),V=G?le:oe,{limit:F}=qt(J,V,d),X=lt(Ce(V),x,d),B=X.clone(),O=ge(n),y=({dragHandler:ie,scrollBody:Le,scrollBounds:Pe,options:{loop:Se}})=>{Se||Pe.constrain(ie.pointerDown()),Le.seek()},L=({scrollBody:ie,translate:Le,location:Pe,offsetLocation:Se,previousLocation:gt,scrollLooper:ht,slideLooper:xt,dragHandler:yt,animation:Ct,eventHandler:qe,scrollBounds:St,options:{loop:He}},_e)=>{const Ge=ie.settled(),bt=!St.shouldConstrain(),Ue=He?Ge:Ge&&bt;Ue&&!yt.pointerDown()&&(Ct.stop(),qe.emit("settle")),Ue||qe.emit("scroll");const vt=Pe.get()*_e+gt.get()*(1-_e);Se.set(vt),He&&(ht.loop(ie.direction()),xt.loop()),Le.to(Se.get())},M=Tt(s,i,()=>y(je),ie=>L(je,ie)),z=.68,$=V[X.get()],Y=me($),te=me($),W=me($),ne=me($),de=Rt(Y,W,te,ne,m,z),Ie=$t(d,V,J,F,ne),Ae=Kt(M,X,B,de,Ie,ne,r),Re=_t(F),Ve=xe(),mt=Yt(t,n,r,p),{slideRegistry:Be}=Ut(G,g,V,fe,U,O),pt=Qt(e,n,Be,Ae,de,Ve,r,E),je={ownerDocument:s,ownerWindow:i,eventHandler:r,containerRect:I,slideRects:k,animation:M,axis:j,dragHandler:Dt(j,e,s,i,ne,kt(j,i),Y,M,Ae,de,Ie,X,r,H,C,l,f,z,T),eventStore:Ve,percentOfView:H,index:X,indexPrevious:B,limit:F,location:Y,offsetLocation:W,previousLocation:te,options:o,resizeHandler:zt(t,r,i,n,j,S,N),scrollBody:de,scrollBounds:Vt(F,W,ne,de,H),scrollLooper:Ht(J,F,W,[Y,W,te,ne]),scrollProgress:Re,scrollSnapList:V.map(Re.get),scrollSnaps:V,scrollTarget:Ie,scrollTo:Ae,slideLooper:Jt(j,R,J,Z,K,se,V,W,n),slideFocus:pt,slidesHandler:Xt(t,r,w),slidesInView:mt,slideIndexes:O,slideRegistry:Be,slidesToScroll:U,target:ne,translate:ft(j,t)};return je}function tn(){let e={},t;function n(c){t=c}function s(c){return e[c]||[]}function i(c){return s(c).forEach(x=>x(t,c)),a}function o(c,x){return e[c]=s(c).concat([x]),a}function r(c,x){return e[c]=s(c).filter(d=>d!==x),a}function u(){e={}}const a={init:n,emit:i,off:r,on:o,clear:u};return a}const nn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function rn(e){function t(o,r){return ut(o,r||{})}function n(o){const r=o.breakpoints||{},u=he(r).filter(a=>e.matchMedia(a).matches).map(a=>r[a]).reduce((a,c)=>t(a,c),{});return t(o,u)}function s(o){return o.map(r=>he(r.breakpoints||{})).reduce((r,u)=>r.concat(u),[]).map(e.matchMedia)}return{mergeOptions:t,optionsAtMedia:n,optionsMediaQueries:s}}function sn(e){let t=[];function n(o,r){return t=r.filter(({options:u})=>e.optionsAtMedia(u).active!==!1),t.forEach(u=>u.init(o,e)),r.reduce((u,a)=>Object.assign(u,{[a.name]:a}),{})}function s(){t=t.filter(o=>o.destroy())}return{init:n,destroy:s}}function Ne(e,t,n){const s=e.ownerDocument,i=s.defaultView,o=rn(i),r=sn(o),u=xe(),a=tn(),{mergeOptions:c,optionsAtMedia:x,optionsMediaQueries:d}=o,{on:m,off:C,emit:l}=a,p=j;let h=!1,f,g=c(nn,Ne.globalOptions),S=c(g),w=[],T,E,v;function N(){const{container:O,slides:y}=S;E=(Te(O)?e.querySelector(O):O)||e.children[0];const M=Te(y)?E.querySelectorAll(y):y;v=[].slice.call(M||E.children)}function I(O){const y=en(e,E,v,s,i,O,a);if(O.loop&&!y.slideLooper.canLoop()){const L=Object.assign({},O,{loop:!1});return I(L)}return y}function k(O,y){h||(g=c(g,O),S=x(g),w=y||w,N(),f=I(S),d([g,...w.map(({options:L})=>L)]).forEach(L=>u.add(L,"change",j)),S.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(B),f.eventHandler.init(B),f.resizeHandler.init(B),f.slidesHandler.init(B),f.options.loop&&f.slideLooper.loop(),E.offsetParent&&v.length&&f.dragHandler.init(B),T=r.init(B,w)))}function j(O,y){const L=U();R(),k(c({startIndex:L},O),y),a.emit("reInit")}function R(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),r.destroy(),u.clear()}function H(){h||(h=!0,u.clear(),R(),a.emit("destroy"),a.clear())}function _(O,y,L){!S.active||h||(f.scrollBody.useBaseFriction().useDuration(y===!0?0:S.duration),f.scrollTo.index(O,L||0))}function G(O){const y=f.index.add(1).get();_(y,O,-1)}function ee(O){const y=f.index.add(-1).get();_(y,O,1)}function Z(){return f.index.add(1).get()!==U()}function K(){return f.index.add(-1).get()!==U()}function Q(){return f.scrollSnapList}function ue(){return f.scrollProgress.get(f.location.get())}function U(){return f.index.get()}function se(){return f.indexPrevious.get()}function oe(){return f.slidesInView.get()}function J(){return f.slidesInView.get(!1)}function le(){return T}function fe(){return f}function V(){return e}function F(){return E}function X(){return v}const B={canScrollNext:Z,canScrollPrev:K,containerNode:F,internalEngine:fe,destroy:H,off:C,on:m,emit:l,plugins:le,previousScrollSnap:se,reInit:p,rootNode:V,scrollNext:G,scrollPrev:ee,scrollProgress:ue,scrollSnapList:Q,scrollTo:_,selectedScrollSnap:U,slideNodes:X,slidesInView:oe,slidesNotInView:J};return k(t,n),setTimeout(()=>a.emit("init"),0),B}Ne.globalOptions=void 0;function ze(e={},t=[]){const n=A.useRef(e),s=A.useRef(t),[i,o]=A.useState(),[r,u]=A.useState(),a=A.useCallback(()=>{i&&i.reInit(n.current,s.current)},[i]);return A.useEffect(()=>{De(n.current,e)||(n.current=e,a())},[e,a]),A.useEffect(()=>{At(s.current,t)||(s.current=t,a())},[t,a]),A.useEffect(()=>{if(It()&&r){Ne.globalOptions=ze.globalOptions;const c=Ne(r,n.current,s.current);return o(c),()=>c.destroy()}else o(void 0)},[r,o]),[u,i]}ze.globalOptions=void 0;const dt=A.createContext(null);function Ee(){const e=A.useContext(dt);if(!e)throw new Error("useCarousel must be used within a <Carousel />");return e}const P=A.forwardRef(({orientation:e="horizontal",opts:t,setApi:n,plugins:s,className:i,children:o,...r},u)=>{const[a,c]=ze({...t,axis:e==="horizontal"?"x":"y"},s),[x,d]=A.useState(!1),[m,C]=A.useState(!1),l=A.useCallback(g=>{g&&(d(g.canScrollPrev()),C(g.canScrollNext()))},[]),p=A.useCallback(()=>{c==null||c.scrollPrev()},[c]),h=A.useCallback(()=>{c==null||c.scrollNext()},[c]),f=A.useCallback(g=>{g.key==="ArrowLeft"?(g.preventDefault(),p()):g.key==="ArrowRight"&&(g.preventDefault(),h())},[p,h]);return A.useEffect(()=>{!c||!n||n(c)},[c,n]),A.useEffect(()=>{if(c)return l(c),c.on("reInit",l),c.on("select",l),()=>{c==null||c.off("select",l)}},[c,l]),b.jsx(dt.Provider,{value:{carouselRef:a,api:c,opts:t,orientation:e||((t==null?void 0:t.axis)==="y"?"vertical":"horizontal"),scrollPrev:p,scrollNext:h,canScrollPrev:x,canScrollNext:m},children:b.jsx("div",{ref:u,onKeyDownCapture:f,className:ye("core-relative",i),role:"region","aria-roledescription":"carousel",...r,children:o})})});P.displayName="Carousel";P.Content=A.forwardRef(({className:e,...t},n)=>{const{carouselRef:s,orientation:i}=Ee();return b.jsx("div",{ref:s,className:"core-overflow-hidden",children:b.jsx("div",{ref:n,className:ye("core-flex",i==="horizontal"?"core--ml-4":"core--mt-4 core-flex-col",e),...t})})});P.Content.displayName="Carousel.Content";P.Item=A.forwardRef(({className:e,...t},n)=>{const{orientation:s}=Ee();return b.jsx("div",{ref:n,role:"group","aria-roledescription":"slide",className:ye("core-min-w-0 core-shrink-0 core-grow-0 core-basis-full",s==="horizontal"?"core-pl-4":"core-pt-4",e),...t})});P.Item.displayName="Carousel.Item";P.Previous=A.forwardRef(({className:e,variant:t="outline",size:n="icon",...s},i)=>{const{orientation:o,scrollPrev:r,canScrollPrev:u}=Ee();return b.jsxs(ct,{ref:i,variant:t,size:n,className:ye("core-absolute core- core-h-8 core-w-8 core-rounded-full",o==="horizontal"?"core--left-12 core-top-1/2 core--translate-y-1/2":"core--top-12 core-left-1/2 core--translate-x-1/2 core-rotate-90",e),disabled:!u,onClick:r,...s,children:[b.jsx(Nt,{className:"core-h-4 core-w-4"}),b.jsx("span",{className:"core-sr-only",children:"Previous slide"})]})});P.Previous.displayName="Carousel.Previous";P.Next=A.forwardRef(({className:e,variant:t="outline",size:n="icon",...s},i)=>{const{orientation:o,scrollNext:r,canScrollNext:u}=Ee();return b.jsxs(ct,{ref:i,variant:t,size:n,className:ye("core-absolute core-h-8 core-w-8 core-rounded-full",o==="horizontal"?"core--right-12 core-top-1/2 core--translate-y-1/2":"core--bottom-12 core-left-1/2 core--translate-x-1/2 core-rotate-90",e),disabled:!u,onClick:r,...s,children:[b.jsx(wt,{className:"core-h-4 core-w-4"}),b.jsx("span",{className:"core-sr-only",children:"Next slide"})]})});P.Next.displayName="Carousel.Next";P.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{opts:{required:!1,tsType:{name:"Parameters[0]",raw:"UseCarouselParameters[0]"},description:""},plugins:{required:!1,tsType:{name:"Parameters[1]",raw:"UseCarouselParameters[1]"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},setApi:{required:!1,tsType:{name:"signature",type:"function",raw:"(api: CarouselApi) => void",signature:{arguments:[{type:{name:"UseEmblaCarouselType[1]",raw:"UseEmblaCarouselType[1]"},name:"api"}],return:{name:"void"}}},description:""}}};const xn={title:"Core UI/Carousel",component:P,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A carousel with motion and swipe built using Embla."}}}},be={args:{className:"w-full max-w-sm",opts:{align:"start"},children:b.jsxs(b.Fragment,{children:[b.jsx(P.Content,{children:Array.from({length:5}).map((e,t)=>b.jsx(P.Item,{className:"md:basis-1/2 lg:basis-1/3",children:b.jsx("div",{className:"p-1",children:b.jsx(ae,{children:b.jsx(ae.Content,{className:"flex aspect-square items-center justify-center p-6",children:b.jsx("span",{className:"text-3xl font-semibold",children:t+1})})})})},t))}),b.jsx(P.Previous,{}),b.jsx(P.Next,{})]})},render:e=>b.jsx(P,{...e})},ve={args:{orientation:"vertical",className:"w-full max-w-sm",opts:{align:"start",loop:!0},children:b.jsxs(b.Fragment,{children:[b.jsx(P.Content,{className:"max-h-[200px]",children:Array.from({length:5}).map((e,t)=>b.jsx(P.Item,{className:"pt-1 md:basis-1/2",children:b.jsx("div",{className:"p-1",children:b.jsx(ae,{children:b.jsx(ae.Content,{className:"flex items-center justify-center p-6",children:b.jsx("span",{className:"text-3xl font-semibold",children:t+1})})})})},t))}),b.jsx(P.Previous,{}),b.jsx(P.Next,{})]})},render:e=>b.jsx("div",{className:"my-6",children:b.jsx(P,{...e})})},ce=()=>{const[e,t]=A.useState(),[n,s]=A.useState(0),[i,o]=A.useState(0);return A.useEffect(()=>{e&&(o(e.scrollSnapList().length),s(e.selectedScrollSnap()+1),e.on("select",()=>{s(e.selectedScrollSnap()+1)}))},[e]),b.jsxs("div",{className:"mx-auto max-w-xs",children:[b.jsxs(P,{setApi:t,className:"w-full max-w-xs",children:[b.jsx(P.Content,{children:Array.from({length:5}).map((r,u)=>b.jsx(P.Item,{children:b.jsx(ae,{children:b.jsx(ae.Content,{className:"flex aspect-square items-center justify-center p-6",children:b.jsx("span",{className:"text-4xl font-semibold",children:u+1})})})},u))}),b.jsx(P.Previous,{}),b.jsx(P.Next,{})]}),b.jsxs("div",{className:"py-2 text-center text-sm text-muted-foreground",children:["Slide ",n," of ",i]})]})};ce.__docgenInfo={description:`A carousel story showcasing the usage of the Carousel component
along with its API handling. This example demonstrates how to
interface with the Carousel API, track the currently displayed
slide, and total slide count.`,methods:[],displayName:"WithCarouselAPI"};var Xe,Ye,Ze;be.parameters={...be.parameters,docs:{...(Xe=be.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    className: 'w-full max-w-sm',
    opts: {
      align: 'start'
    },
    children: <>
        <Carousel.Content>
          {Array.from({
          length: 5
        }).map((_, index) => <Carousel.Item key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <Card.Content className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </Card.Content>
                </Card>
              </div>
            </Carousel.Item>)}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </>
  },
  render: args => <Carousel {...args} />
}`,...(Ze=(Ye=be.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var We,et,tt;ve.parameters={...ve.parameters,docs:{...(We=ve.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    className: 'w-full max-w-sm',
    opts: {
      align: 'start',
      loop: true
    },
    children: <>
        <Carousel.Content className="max-h-[200px]">
          {Array.from({
          length: 5
        }).map((_, index) => <Carousel.Item key={index} className="pt-1 md:basis-1/2">
              <div className="p-1">
                <Card>
                  <Card.Content className="flex items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </Card.Content>
                </Card>
              </div>
            </Carousel.Item>)}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </>
  },
  render: args => <div className="my-6">
      <Carousel {...args} />
    </div>
}`,...(tt=(et=ve.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,rt,st,ot,it;ce.parameters={...ce.parameters,docs:{...(nt=ce.parameters)==null?void 0:nt.docs,source:{originalSource:`() => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return <div className="mx-auto max-w-xs">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <Carousel.Content>
          {Array.from({
          length: 5
        }).map((_, index) => <Carousel.Item key={index}>
              <Card>
                <Card.Content className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </Card.Content>
              </Card>
            </Carousel.Item>)}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>;
}`,...(st=(rt=ce.parameters)==null?void 0:rt.docs)==null?void 0:st.source},description:{story:`A carousel story showcasing the usage of the Carousel component
along with its API handling. This example demonstrates how to
interface with the Carousel API, track the currently displayed
slide, and total slide count.`,...(it=(ot=ce.parameters)==null?void 0:ot.docs)==null?void 0:it.description}}};const yn=["Example","VerticalOrientationAndLoop","WithCarouselAPI"];export{be as Example,ve as VerticalOrientationAndLoop,ce as WithCarouselAPI,yn as __namedExportsOrder,xn as default};
