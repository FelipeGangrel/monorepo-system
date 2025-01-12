import{j as b}from"./jsx-runtime-CLpGMVip.js";import{c as B,a as S}from"./index-Bcst1ezr.js";const D=S("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function f({className:y,variant:h,...x}){return b.jsx("div",{className:B(D({variant:h}),y),...x})}f.__docgenInfo={description:"",methods:[],displayName:"Badge",composes:["VariantProps"]};const O={title:"core-ui/Badge",component:f,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","secondary","destructive","outline"]}},parameters:{layout:"centered"}},e={args:{children:"Badge",variant:"default"}},r={args:{children:"Badge",variant:"secondary"}},a={args:{children:"Badge",variant:"destructive"}},t={args:{children:"Badge",variant:"outline"}};var n,s,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    variant: 'default'
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var d,c,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    variant: 'secondary'
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var u,g,l;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    variant: 'destructive'
  }
}`,...(l=(g=a.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var p,m,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    variant: 'outline'
  }
}`,...(v=(m=t.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const V=["Default","Secondary","Destructive","Outline"];export{e as Default,a as Destructive,t as Outline,r as Secondary,V as __namedExportsOrder,O as default};
