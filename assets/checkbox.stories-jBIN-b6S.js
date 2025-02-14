import{j as c}from"./jsx-runtime-D_zvdyIk.js";/* empty css                */import{r as y}from"./index-CXcpQZ5J.js";import{C as t}from"./checkbox-3EZznuD6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bd7YGvbB.js";import"./index-CiRIfjw3.js";import"./index-DW48STyt.js";import"./index-DTz3VF55.js";import"./index-B1wjFh51.js";import"./index-DFitwuLX.js";import"./index-C1fyEfKG.js";import"./index-Yg3aDjnU.js";import"./index-BI2CIJjy.js";import"./index-DJQWtO6Q.js";import"./index-B97ZzoEQ.js";import"./utils-Dec1Exbm.js";import"./check-BpGw_sZq.js";import"./createLucideIcon-D-niisEM.js";const F={title:"Core UI/Checkbox",component:t,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}},parameters:{layout:"centered",docs:{description:{component:"A control that allows the user to toggle between checked and not checked."}}}},s={render:e=>c.jsx(t,{...e})},r=()=>{const[e,x]=y.useState(!0);return c.jsx(t,{checked:e,onCheckedChange:x})},o={args:{disabled:!0},render:e=>c.jsx(t,{...e})},a={args:{className:"bg-gray-100 border-gray-500 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"},render:e=>c.jsx(t,{...e})};r.__docgenInfo={description:"",methods:[],displayName:"Checked"};var d,n,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Checkbox {...args} />
}`,...(m=(n=s.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,i,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [isChecked, setIsChecked] = React.useState<'indeterminate' | boolean>(true);
  return <Checkbox checked={isChecked} onCheckedChange={setIsChecked} />;
}`,...(h=(i=r.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <Checkbox {...args} />
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var b,k,C;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    className: 'bg-gray-100 border-gray-500 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500'
  },
  render: args => <Checkbox {...args} />
}`,...(C=(k=a.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const G=["Example","Checked","Disabled","WithCustomStyles"];export{r as Checked,o as Disabled,s as Example,a as WithCustomStyles,G as __namedExportsOrder,F as default};
