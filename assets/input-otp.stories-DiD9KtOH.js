import{j as r}from"./jsx-runtime-D_zvdyIk.js";/* empty css                */import{r as e}from"./index-CXcpQZ5J.js";import{c as Q}from"./utils-Dec1Exbm.js";import{c as He}from"./createLucideIcon-D-niisEM.js";import{M as $e}from"./minus-BRh1MKCU.js";import"./_commonjsHelpers-Cpj98o6Y.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=He("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]]);var Ve=Object.defineProperty,Xe=Object.defineProperties,Ye=Object.getOwnPropertyDescriptors,ee=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,ve=(t,o,l)=>o in t?Ve(t,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[o]=l,qe=(t,o)=>{for(var l in o||(o={}))ye.call(o,l)&&ve(t,l,o[l]);if(ee)for(var l of ee(o))Ce.call(o,l)&&ve(t,l,o[l]);return t},Ke=(t,o)=>Xe(t,Ye(o)),Ue=(t,o)=>{var l={};for(var u in t)ye.call(t,u)&&o.indexOf(u)<0&&(l[u]=t[u]);if(t!=null&&ee)for(var u of ee(t))o.indexOf(u)<0&&Ce.call(t,u)&&(l[u]=t[u]);return l};function Ze(t){let o=setTimeout(t,0),l=setTimeout(t,10),u=setTimeout(t,50);return[o,l,u]}function Je(t){let o=e.useRef();return e.useEffect(()=>{o.current=t}),o.current}var Qe=18,Ge=40,et=`${Ge}px`,tt=["[data-lastpass-icon-root]","com-1password-button","[data-dashlanecreated]",'[style$="2147483647 !important;"]'].join(",");function nt({containerRef:t,inputRef:o,pushPasswordManagerStrategy:l,isFocused:u}){let[O,m]=e.useState(!1),[C,T]=e.useState(!1),[_,B]=e.useState(!1),F=e.useMemo(()=>l==="none"?!1:(l==="increase-width"||l==="experimental-no-flickering")&&O&&C,[O,C,l]),N=e.useCallback(()=>{let g=t.current,w=o.current;if(!g||!w||_||l==="none")return;let S=g,I=S.getBoundingClientRect().left+S.offsetWidth,A=S.getBoundingClientRect().top+S.offsetHeight/2,c=I-Qe,H=A;document.querySelectorAll(tt).length===0&&document.elementFromPoint(c,H)===g||(m(!0),B(!0))},[t,o,_,l]);return e.useEffect(()=>{let g=t.current;if(!g||l==="none")return;function w(){let I=window.innerWidth-g.getBoundingClientRect().right;T(I>=Ge)}w();let S=setInterval(w,1e3);return()=>{clearInterval(S)}},[t,l]),e.useEffect(()=>{let g=u||document.activeElement===o.current;if(l==="none"||!g)return;let w=setTimeout(N,0),S=setTimeout(N,2e3),I=setTimeout(N,5e3),A=setTimeout(()=>{B(!0)},6e3);return()=>{clearTimeout(w),clearTimeout(S),clearTimeout(I),clearTimeout(A)}},[o,u,l,N]),{hasPWMBadge:O,willPushPWMBadge:F,PWM_BADGE_SPACE_WIDTH:et}}var Me=e.createContext({}),Re=e.forwardRef((t,o)=>{var l=t,{value:u,onChange:O,maxLength:m,textAlign:C="left",pattern:T,placeholder:_,inputMode:B="numeric",onComplete:F,pushPasswordManagerStrategy:N="increase-width",pasteTransformer:g,containerClassName:w,noScriptCSSFallback:S=rt,render:I,children:A}=l,c=Ue(l,["value","onChange","maxLength","textAlign","pattern","placeholder","inputMode","onComplete","pushPasswordManagerStrategy","pasteTransformer","containerClassName","noScriptCSSFallback","render","children"]),H,le,ie,se,ue;let[ke,De]=e.useState(typeof c.defaultValue=="string"?c.defaultValue:""),p=u??ke,G=Je(p),$=e.useCallback(n=>{O==null||O(n),De(n)},[O]),b=e.useMemo(()=>T?typeof T=="string"?new RegExp(T):T:null,[T]),d=e.useRef(null),te=e.useRef(null),ne=e.useRef({value:p,onChange:$,isIOS:typeof window<"u"&&((le=(H=window==null?void 0:window.CSS)==null?void 0:H.supports)==null?void 0:le.call(H,"-webkit-touch-callout","none"))}),q=e.useRef({prev:[(ie=d.current)==null?void 0:ie.selectionStart,(se=d.current)==null?void 0:se.selectionEnd,(ue=d.current)==null?void 0:ue.selectionDirection]});e.useImperativeHandle(o,()=>d.current,[]),e.useEffect(()=>{let n=d.current,a=te.current;if(!n||!a)return;ne.current.value!==n.value&&ne.current.onChange(n.value),q.current.prev=[n.selectionStart,n.selectionEnd,n.selectionDirection];function f(){if(document.activeElement!==n){V(null),X(null);return}let s=n.selectionStart,h=n.selectionEnd,K=n.selectionDirection,P=n.maxLength,R=n.value,j=q.current.prev,E=-1,y=-1,k;if(R.length!==0&&s!==null&&h!==null){let We=s===h,Be=s===R.length&&R.length<P;if(We&&!Be){let D=s;if(D===0)E=0,y=1,k="forward";else if(D===P)E=D-1,y=D,k="backward";else if(P>1&&R.length>1){let ae=0;if(j[0]!==null&&j[1]!==null){k=D<j[1]?"backward":"forward";let Fe=j[0]===j[1]&&j[0]<P;k==="backward"&&!Fe&&(ae=-1)}E=ae+D,y=ae+D+1}}E!==-1&&y!==-1&&E!==y&&d.current.setSelectionRange(E,y,k)}let ge=E!==-1?E:s,xe=y!==-1?y:h,Le=k??K;V(ge),X(xe),q.current.prev=[ge,xe,Le]}if(document.addEventListener("selectionchange",f,{capture:!0}),f(),document.activeElement===n&&re(!0),!document.getElementById("input-otp-style")){let s=document.createElement("style");if(s.id="input-otp-style",document.head.appendChild(s),s.sheet){let h="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";Y(s.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),Y(s.sheet,`[data-input-otp]:autofill { ${h} }`),Y(s.sheet,`[data-input-otp]:-webkit-autofill { ${h} }`),Y(s.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),Y(s.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let x=()=>{a&&a.style.setProperty("--root-height",`${n.clientHeight}px`)};x();let v=new ResizeObserver(x);return v.observe(n),()=>{document.removeEventListener("selectionchange",f,{capture:!0}),v.disconnect()}},[]);let[ce,pe]=e.useState(!1),[z,re]=e.useState(!1),[M,V]=e.useState(null),[L,X]=e.useState(null);e.useEffect(()=>{Ze(()=>{var n,a,f,x;(n=d.current)==null||n.dispatchEvent(new Event("input"));let v=(a=d.current)==null?void 0:a.selectionStart,s=(f=d.current)==null?void 0:f.selectionEnd,h=(x=d.current)==null?void 0:x.selectionDirection;v!==null&&s!==null&&(V(v),X(s),q.current.prev=[v,s,h])})},[p,z]),e.useEffect(()=>{G!==void 0&&p!==G&&G.length<m&&p.length===m&&(F==null||F(p))},[m,F,G,p]);let W=nt({containerRef:te,inputRef:d,pushPasswordManagerStrategy:N,isFocused:z}),de=e.useCallback(n=>{let a=n.currentTarget.value.slice(0,m);if(a.length>0&&b&&!b.test(a)){n.preventDefault();return}typeof G=="string"&&a.length<G.length&&document.dispatchEvent(new Event("selectionchange")),$(a)},[m,$,G,b]),me=e.useCallback(()=>{var n;if(d.current){let a=Math.min(d.current.value.length,m-1),f=d.current.value.length;(n=d.current)==null||n.setSelectionRange(a,f),V(a),X(f)}re(!0)},[m]),fe=e.useCallback(n=>{var a,f;let x=d.current;if(!g&&(!ne.current.isIOS||!n.clipboardData||!x))return;let v=n.clipboardData.getData("text/plain"),s=g?g(v):v;n.preventDefault();let h=(a=d.current)==null?void 0:a.selectionStart,K=(f=d.current)==null?void 0:f.selectionEnd,P=(h!==K?p.slice(0,h)+s+p.slice(K):p.slice(0,h)+s+p.slice(h)).slice(0,m);if(P.length>0&&b&&!b.test(P))return;x.value=P,$(P);let R=Math.min(P.length,m-1),j=P.length;x.setSelectionRange(R,j),V(R),X(j)},[m,$,b,p]),_e=e.useMemo(()=>({position:"relative",cursor:c.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[c.disabled]),he=e.useMemo(()=>({position:"absolute",inset:0,width:W.willPushPWMBadge?`calc(100% + ${W.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:W.willPushPWMBadge?`inset(0 ${W.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:C,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[W.PWM_BADGE_SPACE_WIDTH,W.willPushPWMBadge,C]),Ne=e.useMemo(()=>e.createElement("input",Ke(qe({autoComplete:c.autoComplete||"one-time-code"},c),{"data-input-otp":!0,"data-input-otp-placeholder-shown":p.length===0||void 0,"data-input-otp-mss":M,"data-input-otp-mse":L,inputMode:B,pattern:b==null?void 0:b.source,"aria-placeholder":_,style:he,maxLength:m,value:p,ref:d,onPaste:n=>{var a;fe(n),(a=c.onPaste)==null||a.call(c,n)},onChange:de,onMouseOver:n=>{var a;pe(!0),(a=c.onMouseOver)==null||a.call(c,n)},onMouseLeave:n=>{var a;pe(!1),(a=c.onMouseLeave)==null||a.call(c,n)},onFocus:n=>{var a;me(),(a=c.onFocus)==null||a.call(c,n)},onBlur:n=>{var a;re(!1),(a=c.onBlur)==null||a.call(c,n)}})),[de,me,fe,B,he,m,L,M,c,b==null?void 0:b.source,p]),oe=e.useMemo(()=>({slots:Array.from({length:m}).map((n,a)=>{var f;let x=z&&M!==null&&L!==null&&(M===L&&a===M||a>=M&&a<L),v=p[a]!==void 0?p[a]:null,s=p[0]!==void 0?null:(f=_==null?void 0:_[a])!=null?f:null;return{char:v,placeholderChar:s,isActive:x,hasFakeCaret:x&&v===null}}),isFocused:z,isHovering:!c.disabled&&ce}),[z,ce,m,L,M,c.disabled,p]),Ae=e.useMemo(()=>I?I(oe):e.createElement(Me.Provider,{value:oe},A),[A,oe,I]);return e.createElement(e.Fragment,null,S!==null&&e.createElement("noscript",null,e.createElement("style",null,S)),e.createElement("div",{ref:te,"data-input-otp-container":!0,style:_e,className:w},Ae,e.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},Ne)))});Re.displayName="Input";function Y(t,o){try{t.insertRule(o)}catch{console.error("input-otp could not insert CSS rule:",o)}}var rt=`
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`,ot="^\\d+$";const i=e.forwardRef(({className:t,containerClassName:o,...l},u)=>r.jsx(Re,{ref:u,containerClassName:Q("core-flex core-items-center core-gap-2 has-[:disabled]:core-opacity-50",o),className:Q("disabled:core-cursor-not-allowed",t),...l}));i.displayName="InputOTP";i.Group=e.forwardRef(({className:t,...o},l)=>r.jsx("div",{ref:l,className:Q("core-flex core-items-center",t),...o}));i.Group.displayName="InputOTP.Group";i.Slot=e.forwardRef(({index:t,className:o,...l},u)=>{const O=e.useContext(Me),{char:m,hasFakeCaret:C,isActive:T}=O.slots[t];return r.jsxs("div",{ref:u,className:Q("core-relative core-flex core-h-9 core-w-9 core-items-center core-justify-center core-border-y core-border-r core-border-input core-text-sm core-shadow-sm core-transition-all first:core-rounded-l-md first:core-border-l last:core-rounded-r-md",T&&"core-z-10 core-ring-1 core-ring-ring",o),...l,children:[m,C&&r.jsx("div",{className:"core-pointer-events-none core-absolute core-inset-0 core-flex core-items-center core-justify-center",children:r.jsx("div",{className:"core-h-4 core-w-px core-animate-caret-blink core-bg-foreground core-duration-1000"})})]})});i.Slot.displayName="InputOTP.Slot";i.Separator=e.forwardRef(({...t},o)=>(t.children=(t==null?void 0:t.children)??r.jsx(ze,{}),r.jsx("div",{ref:o,role:"separator",...t})));i.Separator.displayName="InputOTP.Separator";const at={REGEXP_ONLY_DIGITS:ot};i.__docgenInfo={description:"",methods:[],displayName:"InputOTP"};const mt={title:"Core UI/InputOTP",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Accessible one-time password component with copy paste functionality."}}}},U={args:{maxLength:6,children:r.jsxs(r.Fragment,{children:[r.jsxs(i.Group,{children:[r.jsx(i.Slot,{index:0}),r.jsx(i.Slot,{index:1}),r.jsx(i.Slot,{index:2})]}),r.jsx(i.Separator,{}),r.jsxs(i.Group,{children:[r.jsx(i.Slot,{index:3}),r.jsx(i.Slot,{index:4}),r.jsx(i.Slot,{index:5})]})]})}},Z={args:{maxLength:6,pattern:at.REGEXP_ONLY_DIGITS,children:r.jsxs(r.Fragment,{children:[r.jsxs(i.Group,{children:[r.jsx(i.Slot,{index:0}),r.jsx(i.Slot,{index:1}),r.jsx(i.Slot,{index:2})]}),r.jsx(i.Separator,{}),r.jsxs(i.Group,{children:[r.jsx(i.Slot,{index:3}),r.jsx(i.Slot,{index:4}),r.jsx(i.Slot,{index:5})]})]})}},J={args:{maxLength:6,children:r.jsxs(r.Fragment,{children:[r.jsxs(i.Group,{children:[r.jsx(i.Slot,{index:0}),r.jsx(i.Slot,{index:1}),r.jsx(i.Slot,{index:2})]}),r.jsx(i.Separator,{children:r.jsx($e,{})}),r.jsxs(i.Group,{children:[r.jsx(i.Slot,{index:3}),r.jsx(i.Slot,{index:4}),r.jsx(i.Slot,{index:5})]})]})}};var Se,Pe,be;U.parameters={...U.parameters,docs:{...(Se=U.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    maxLength: 6,
    children: <>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
        </InputOTP.Group>
        <InputOTP.Separator />
        <InputOTP.Group>
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </>
  }
}`,...(be=(Pe=U.parameters)==null?void 0:Pe.docs)==null?void 0:be.source}}};var Oe,Te,Ie;Z.parameters={...Z.parameters,docs:{...(Oe=Z.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    maxLength: 6,
    pattern: InputOTPPattern.REGEXP_ONLY_DIGITS,
    children: <>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
        </InputOTP.Group>
        <InputOTP.Separator />
        <InputOTP.Group>
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </>
  }
}`,...(Ie=(Te=Z.parameters)==null?void 0:Te.docs)==null?void 0:Ie.source}}};var je,we,Ee;J.parameters={...J.parameters,docs:{...(je=J.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    maxLength: 6,
    children: <>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
        </InputOTP.Group>
        <InputOTP.Separator>
          <MinusIcon />
        </InputOTP.Separator>
        <InputOTP.Group>
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </>
  }
}`,...(Ee=(we=J.parameters)==null?void 0:we.docs)==null?void 0:Ee.source}}};const ft=["Example","OnlyDigits","CustomSeparator"];export{J as CustomSeparator,U as Example,Z as OnlyDigits,ft as __namedExportsOrder,mt as default};
