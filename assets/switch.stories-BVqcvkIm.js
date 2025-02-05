import{j as e}from"./index-ChoN-ss6.js";import{q as s,L as n}from"./index-Bo_9io7Q.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DYwZEShM.js";import"./index-B5OHeJSP.js";const D={title:"core-ui/Switch",component:s,tags:["autodocs"],decorators:[r=>e.jsx("div",{className:"flex items-center space-x-2",children:e.jsx(r,{})})],parameters:{layout:"centered"}},a={args:{id:"switch-default"},render:r=>e.jsxs(e.Fragment,{children:[e.jsx(n,{htmlFor:r.id,children:"Label"}),e.jsx(s,{...r})]})},d={args:{id:"switch-checked",checked:!0},render:r=>e.jsxs(e.Fragment,{children:[e.jsx(n,{htmlFor:r.id,children:"Label"}),e.jsx(s,{...r})]})},t={args:{id:"switch-disabled",disabled:!0},render:r=>e.jsxs(e.Fragment,{children:[e.jsx(n,{htmlFor:r.id,children:"Label"}),e.jsx(s,{...r})]})},c={args:{id:"switch-checked-disabled",checked:!0,disabled:!0},render:r=>e.jsxs(e.Fragment,{children:[e.jsx(n,{htmlFor:r.id,children:"Label"}),e.jsx(s,{...r})]})};var i,o,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: 'switch-default'
  },
  render: args => <>
      <Label htmlFor={args.id}>Label</Label>
      <Switch {...args} />
    </>
}`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var h,m,b;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'switch-checked',
    checked: true
  },
  render: args => <>
      <Label htmlFor={args.id}>Label</Label>
      <Switch {...args} />
    </>
}`,...(b=(m=d.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var u,p,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'switch-disabled',
    disabled: true
  },
  render: args => <>
      <Label htmlFor={args.id}>Label</Label>
      <Switch {...args} />
    </>
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,L,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: 'switch-checked-disabled',
    checked: true,
    disabled: true
  },
  render: args => <>
      <Label htmlFor={args.id}>Label</Label>
      <Switch {...args} />
    </>
}`,...(j=(L=c.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};const C=["Default","Checked","Disabled","CheckedAndDisabled"];export{d as Checked,c as CheckedAndDisabled,a as Default,t as Disabled,C as __namedExportsOrder,D as default};
