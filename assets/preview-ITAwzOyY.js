import{j as l}from"./jsx-runtime-D_zvdyIk.js";/* empty css                */import{N as s,c as I}from"./index-CO1E7WRC.js";import{r as d}from"./index-CXcpQZ5J.js";import{g as x}from"./_commonjsHelpers-Cpj98o6Y.js";import{T as N}from"./sonner-bH6dShs0.js";import"./iframe-WkWYkHLd.js";import"./index-BI2CIJjy.js";import"./index-DJQWtO6Q.js";import"./index-Cu4lwwaE.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index-DrI3PcMD.js";import"./createLucideIcon-D-niisEM.js";import"./triangle-alert-CYmvSnss.js";var D="DARK_MODE",g,k;function B(){return k||(k=1,g=function t(r,e){if(r===e)return!0;if(r&&e&&typeof r=="object"&&typeof e=="object"){if(r.constructor!==e.constructor)return!1;var a,n,o;if(Array.isArray(r)){if(a=r.length,a!=e.length)return!1;for(n=a;n--!==0;)if(!t(r[n],e[n]))return!1;return!0}if(r.constructor===RegExp)return r.source===e.source&&r.flags===e.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===e.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===e.toString();if(o=Object.keys(r),a=o.length,a!==Object.keys(e).length)return!1;for(n=a;n--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[n]))return!1;for(n=a;n--!==0;){var i=o[n];if(!t(r[i],e[i]))return!1}return!0}return r!==r&&e!==e}),g}var F=B();const C=x(F);function f(t){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},f(t)}var y;function j(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,a)}return e}function w(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?j(Object(e),!0).forEach(function(a){K(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):j(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function K(t,r,e){return r=q(r),r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function q(t){var r=L(t,"string");return f(r)==="symbol"?r:String(r)}function L(t,r){if(f(t)!=="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var a=e.call(t,r);if(f(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function c(t){return G(t)||V(t)||U(t)||Y()}function Y(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(t,r){if(t){if(typeof t=="string")return v(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return v(t,r)}}function V(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function G(t){if(Array.isArray(t))return v(t)}function v(t,r){(r==null||r>t.length)&&(r=t.length);for(var e=0,a=new Array(r);e<r;e++)a[e]=t[e];return a}const{global:H}=__STORYBOOK_MODULE_GLOBAL__,{STORY_CHANGED:pr,SET_STORIES:mr,DOCS_RENDERED:dr}=__STORYBOOK_MODULE_CORE_EVENTS__;var P=H,W=P.document,m=P.window,T="sb-addon-themes-3";(y=m.matchMedia)===null||y===void 0||y.call(m,"(prefers-color-scheme: dark)");var h={classTarget:"body",dark:s.dark,darkClass:["dark"],light:s.light,lightClass:["light"],stylePreview:!1,userHasExplicitlySetTheTheme:!1},A=function(r){m.localStorage.setItem(T,JSON.stringify(r))},J=function(r,e){var a=e.current,n=e.darkClass,o=n===void 0?h.darkClass:n,i=e.lightClass,u=i===void 0?h.lightClass:i;if(a==="dark"){var _,E;(_=r.classList).remove.apply(_,c(p(u))),(E=r.classList).add.apply(E,c(p(o)))}else{var S,b;(S=r.classList).remove.apply(S,c(p(o))),(b=r.classList).add.apply(b,c(p(u)))}},p=function(r){var e=[];return e.concat(r).map(function(a){return a})},$=function(r){var e=W.querySelector(r.classTarget);e&&J(e,r)},z=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=m.localStorage.getItem(T);if(typeof e=="string"){var a=JSON.parse(e);return r&&(r.dark&&!C(a.dark,r.dark)&&(a.dark=r.dark,A(a)),r.light&&!C(a.light,r.light)&&(a.light=r.light,A(a))),a}return w(w({},h),r)};$(z());const{addons:gr,useState:yr,useEffect:Or}=__STORYBOOK_MODULE_PREVIEW_API__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,O=R.getChannel(),M=({children:t,context:r})=>{const[e,a]=d.useState(()=>{var i,u;return((u=(i=R.getChannel().data)==null?void 0:i.DARK_MODE)==null?void 0:u[0])??!1}),n=d.useMemo(()=>({...e?s.dark:s.light}),[e]);return d.useEffect(()=>(O.on(D,a),()=>O.off(D,a)),[O]),l.jsx(I,{context:r,theme:n,children:t})};M.__docgenInfo={description:"",methods:[],displayName:"DocsContainer"};const vr={parameters:{darkMode:{dark:{...s.dark},light:{...s.light},stylePreview:!0,darkClass:"dark",lightClass:"light"},backgrounds:{options:{dark:{name:"Dark",value:"#333"},light:{name:"Light",value:"#F7F9F2"},lightBlue:{name:"Light Blue",value:"#EBF5FF"},darkBlue:{name:"Dark Blue",value:"#001529"}}},docs:{container:M}}},hr=[t=>l.jsxs(l.Fragment,{children:[l.jsx(t,{}),l.jsx(N,{})]})];export{hr as decorators,vr as default};
