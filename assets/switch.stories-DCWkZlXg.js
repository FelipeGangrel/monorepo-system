import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css                */import{S as s}from"./switch-B2Thtr3I.js";import{L as o}from"./label-CvAuHLSi.js";import"./index-CXcpQZ5J.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DW48STyt.js";import"./index-Bd7YGvbB.js";import"./index-CiRIfjw3.js";import"./index-DTz3VF55.js";import"./index-B1wjFh51.js";import"./index-DFitwuLX.js";import"./index-Yg3aDjnU.js";import"./index-BI2CIJjy.js";import"./index-DJQWtO6Q.js";import"./index-B97ZzoEQ.js";import"./utils-Dec1Exbm.js";import"./index-bNgk5zX4.js";const z={title:"Core UI/Switch",component:s,tags:["autodocs"],decorators:[r=>e.jsx("div",{className:"flex items-center space-x-2",children:e.jsx(r,{})})],parameters:{layout:"centered",docs:{description:{component:"A control that allows the user to toggle between checked and not checked."}}}},a={args:{id:"switch-default"},render:r=>e.jsxs(e.Fragment,{children:[e.jsx(o,{htmlFor:r.id,children:"Label"}),e.jsx(s,{...r})]})},t={args:{id:"switch-checked",checked:!0},render:r=>e.jsxs(e.Fragment,{children:[e.jsx(o,{htmlFor:r.id,children:"Label"}),e.jsx(s,{...r})]})},d={args:{id:"switch-disabled",disabled:!0},render:r=>e.jsxs(e.Fragment,{children:[e.jsx(o,{htmlFor:r.id,children:"Label"}),e.jsx(s,{...r})]})},c={args:{id:"switch-checked-disabled",checked:!0,disabled:!0},render:r=>e.jsxs(e.Fragment,{children:[e.jsx(o,{htmlFor:r.id,children:"Label"}),e.jsx(s,{...r})]})};var i,n,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: 'switch-default'
  },
  render: args => <>
      <Label htmlFor={args.id}>Label</Label>
      <Switch {...args} />
    </>
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var m,h,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'switch-checked',
    checked: true
  },
  render: args => <>
      <Label htmlFor={args.id}>Label</Label>
      <Switch {...args} />
    </>
}`,...(p=(h=t.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var b,g,u;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    id: 'switch-disabled',
    disabled: true
  },
  render: args => <>
      <Label htmlFor={args.id}>Label</Label>
      <Switch {...args} />
    </>
}`,...(u=(g=d.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,L,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: 'switch-checked-disabled',
    checked: true,
    disabled: true
  },
  render: args => <>
      <Label htmlFor={args.id}>Label</Label>
      <Switch {...args} />
    </>
}`,...(j=(L=c.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};const B=["Example","Checked","Disabled","CheckedAndDisabled"];export{t as Checked,c as CheckedAndDisabled,d as Disabled,a as Example,B as __namedExportsOrder,z as default};
