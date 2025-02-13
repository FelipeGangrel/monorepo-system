import{j as c}from"./index-B6zMoDbo.js";import{h as s}from"./index-MWPviQxN.js";import{r as y}from"./index-Dxs5m6lS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFkskS4.js";const _={title:"Core UI/Checkbox",component:s,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}},parameters:{layout:"centered",docs:{description:{component:"A control that allows the user to toggle between checked and not checked."}}}},a={render:e=>c.jsx(s,{...e})},r=()=>{const[e,x]=y.useState(!0);return c.jsx(s,{checked:e,onCheckedChange:x})},t={args:{disabled:!0},render:e=>c.jsx(s,{...e})},o={args:{className:"bg-gray-100 border-gray-500 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"},render:e=>c.jsx(s,{...e})};r.__docgenInfo={description:"",methods:[],displayName:"Checked"};var d,n,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Checkbox {...args} />
}`,...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,h,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [isChecked, setIsChecked] = React.useState<'indeterminate' | boolean>(true);
  return <Checkbox checked={isChecked} onCheckedChange={setIsChecked} />;
}`,...(i=(h=r.parameters)==null?void 0:h.docs)==null?void 0:i.source}}};var u,l,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <Checkbox {...args} />
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var b,k,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    className: 'bg-gray-100 border-gray-500 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500'
  },
  render: args => <Checkbox {...args} />
}`,...(C=(k=o.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const N=["Example","Checked","Disabled","WithCustomStyles"];export{r as Checked,t as Disabled,a as Example,o as WithCustomStyles,N as __namedExportsOrder,_ as default};
