import{j as c}from"./index-D9u8kSYr.js";import{i as s}from"./index-Cob0ihi4.js";import{r as y}from"./index-B5OHeJSP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DYwZEShM.js";const _={title:"core-ui/Checkbox",component:s,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}},parameters:{layout:"centered"}},a={render:e=>c.jsx(s,{...e})},r=()=>{const[e,x]=y.useState(!0);return c.jsx(s,{checked:e,onCheckedChange:x})},t={args:{disabled:!0},render:e=>c.jsx(s,{...e})},o={args:{className:"bg-gray-100 border-gray-500 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"},render:e=>c.jsx(s,{...e})};r.__docgenInfo={description:"",methods:[],displayName:"Checked"};var d,n,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Checkbox {...args} />
}`,...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var u,i,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [isChecked, setIsChecked] = React.useState<'indeterminate' | boolean>(true);
  return <Checkbox checked={isChecked} onCheckedChange={setIsChecked} />;
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var h,g,l;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <Checkbox {...args} />
}`,...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var b,k,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    className: 'bg-gray-100 border-gray-500 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500'
  },
  render: args => <Checkbox {...args} />
}`,...(C=(k=o.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const E=["Default","Checked","Disabled","WithCustomStyles"];export{r as Checked,a as Default,t as Disabled,o as WithCustomStyles,E as __namedExportsOrder,_ as default};
