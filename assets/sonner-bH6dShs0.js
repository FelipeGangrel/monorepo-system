import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{$ as n}from"./index-DrI3PcMD.js";import{r as c}from"./index-CXcpQZ5J.js";import{c as t}from"./createLucideIcon-D-niisEM.js";import{T as i}from"./triangle-alert-CYmvSnss.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=t("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=t("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=t("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=t("Loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]);function h(){const[r,o]=c.useState();return c.useEffect(()=>{const a=()=>{o(document.documentElement.classList.contains("dark")?"dark":"light")};a();const s=new MutationObserver(a);return s.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),()=>s.disconnect()},[]),{theme:r}}const g=({...r})=>{const{theme:o}=h();return e.jsx(n,{theme:o,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:core-bg-background group-[.toaster]:core-text-foreground group-[.toaster]:core-border-border group-[.toaster]:core-shadow-lg",description:"group-[.toast]:core-text-muted-foreground",actionButton:"group-[.toast]:core-bg-primary group-[.toast]:core-text-primary-foreground",cancelButton:"group-[.toast]:core-bg-muted group-[.toast]:core-text-muted-foreground"}},icons:{success:e.jsx(m,{className:"core-h-4 core-w-4 core-text-green-500"}),info:e.jsx(u,{className:"core-h-4 core-w-4 core-text-blue-500"}),warning:e.jsx(i,{className:"core-h-4 core-w-4 core-text-amber-500"}),error:e.jsx(d,{className:"core-h-4 core-w-4 core-text-red-500"}),loading:e.jsx(p,{className:"core-h-4 core-w-4 core-animate-spin core-text-gray-500"})},...r})};g.__docgenInfo={description:"",methods:[],displayName:"Toaster"};export{g as T};
