import{j as e}from"./index-B6zMoDbo.js";import{s,L as n}from"./index-MWPviQxN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFkskS4.js";import"./index-Dxs5m6lS.js";const C={title:"Core UI/Switch",component:s,tags:["autodocs"],decorators:[r=>e.jsx("div",{className:"flex items-center space-x-2",children:e.jsx(r,{})})],parameters:{layout:"centered",docs:{description:{component:"A control that allows the user to toggle between checked and not checked."}}}},a={args:{id:"switch-default"},render:r=>e.jsxs(e.Fragment,{children:[e.jsx(n,{htmlFor:r.id,children:"Label"}),e.jsx(s,{...r})]})},d={args:{id:"switch-checked",checked:!0},render:r=>e.jsxs(e.Fragment,{children:[e.jsx(n,{htmlFor:r.id,children:"Label"}),e.jsx(s,{...r})]})},t={args:{id:"switch-disabled",disabled:!0},render:r=>e.jsxs(e.Fragment,{children:[e.jsx(n,{htmlFor:r.id,children:"Label"}),e.jsx(s,{...r})]})},c={args:{id:"switch-checked-disabled",checked:!0,disabled:!0},render:r=>e.jsxs(e.Fragment,{children:[e.jsx(n,{htmlFor:r.id,children:"Label"}),e.jsx(s,{...r})]})};var i,o,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: 'switch-default'
  },
  render: args => <>
      <Label htmlFor={args.id}>Label</Label>
      <Switch {...args} />
    </>
}`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var h,m,p;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'switch-checked',
    checked: true
  },
  render: args => <>
      <Label htmlFor={args.id}>Label</Label>
      <Switch {...args} />
    </>
}`,...(p=(m=d.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,g,u;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: 'switch-disabled',
    disabled: true
  },
  render: args => <>
      <Label htmlFor={args.id}>Label</Label>
      <Switch {...args} />
    </>
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,L,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: 'switch-checked-disabled',
    checked: true,
    disabled: true
  },
  render: args => <>
      <Label htmlFor={args.id}>Label</Label>
      <Switch {...args} />
    </>
}`,...(j=(L=c.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};const D=["Example","Checked","Disabled","CheckedAndDisabled"];export{d as Checked,c as CheckedAndDisabled,t as Disabled,a as Example,D as __namedExportsOrder,C as default};
