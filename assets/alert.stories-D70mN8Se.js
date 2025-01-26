import{j as e}from"./index-D9u8kSYr.js";import{l as y,o as r}from"./index-W8zSIVWl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DYwZEShM.js";import"./index-B5OHeJSP.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=y("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),C={title:"core-ui/Alert",component:r,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","destructive"]}},parameters:{layout:"centered"}},s={args:{variant:"default",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Title,{children:"Default Alert"}),e.jsx(r.Description,{children:"This is an informational alert."})]})},render:t=>e.jsx(r,{...t})},a={args:{variant:"destructive",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Title,{children:"Destructive Alert"}),e.jsx(r.Description,{children:"This is a destructive alert. It indicates an error or critical action."})]})},render:t=>e.jsx(r,{...t})},i={args:{variant:"default",className:"bg-blue-100 text-blue-900 border-blue-300",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Title,{children:"Custom Styled Alert"}),e.jsx(r.Description,{children:"This alert has custom styles applied to it via the `className` prop."})]})},render:t=>e.jsx(r,{...t})},n={args:{variant:"default",children:e.jsx(r.Description,{children:"This alert only has a description and no title."})},render:t=>e.jsx(r,{...t})},l={args:{variant:"default",children:e.jsxs(e.Fragment,{children:[e.jsx(b,{className:"h-4 w-4"}),e.jsx(r.Title,{children:"Alert with icon"}),e.jsx(r.Description,{children:"This is a alert with icon."})]})},render:t=>e.jsx(r,{...t})};var c,o,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: <>
        <Alert.Title>Default Alert</Alert.Title>
        <Alert.Description>This is an informational alert.</Alert.Description>
      </>
  },
  render: args => <Alert {...args} />
}`,...(d=(o=s.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var p,u,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: <>
        <Alert.Title>Destructive Alert</Alert.Title>
        <Alert.Description>
          This is a destructive alert. It indicates an error or critical action.
        </Alert.Description>
      </>
  },
  render: args => <Alert {...args} />
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var m,A,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    className: 'bg-blue-100 text-blue-900 border-blue-300',
    children: <>
        <Alert.Title>Custom Styled Alert</Alert.Title>
        <Alert.Description>
          This alert has custom styles applied to it via the \`className\` prop.
        </Alert.Description>
      </>
  },
  render: args => <Alert {...args} />
}`,...(g=(A=i.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};var T,x,v;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: <Alert.Description>
        This alert only has a description and no title.
      </Alert.Description>
  },
  render: args => <Alert {...args} />
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var D,j,f;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: <>
        <AlertTriangleIcon className="h-4 w-4" />
        <Alert.Title>Alert with icon</Alert.Title>
        <Alert.Description>This is a alert with icon.</Alert.Description>
      </>
  },
  render: args => <Alert {...args} />
}`,...(f=(j=l.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};const F=["Default","Destructive","WithCustomStyles","WithoutTitle","WithIcon"];export{s as Default,a as Destructive,i as WithCustomStyles,l as WithIcon,n as WithoutTitle,F as __namedExportsOrder,C as default};
