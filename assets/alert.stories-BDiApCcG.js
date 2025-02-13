import{j as e}from"./index-B6zMoDbo.js";import{b as r,T as y}from"./index-MWPviQxN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFkskS4.js";import"./index-Dxs5m6lS.js";const W={title:"Core UI/Alert",component:r,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","destructive"]}},parameters:{layout:"centered",docs:{description:{component:"Displays a callout for user attention."}}}},s={args:{variant:"default",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Title,{children:"Default Alert"}),e.jsx(r.Description,{children:"This is an informational alert."})]})},render:t=>e.jsx(r,{...t})},a={args:{variant:"destructive",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Title,{children:"Destructive Alert"}),e.jsx(r.Description,{children:"This is a destructive alert. It indicates an error or critical action."})]})},render:t=>e.jsx(r,{...t})},i={args:{variant:"default",className:"bg-blue-100 text-blue-900 border-blue-300",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Title,{children:"Custom Styled Alert"}),e.jsx(r.Description,{children:"This alert has custom styles applied to it via the `className` prop."})]})},render:t=>e.jsx(r,{...t})},n={args:{variant:"default",children:e.jsx(r.Description,{children:"This alert only has a description and no title."})},render:t=>e.jsx(r,{...t})},l={args:{variant:"default",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(y,{className:"mr-4 h-4 w-4"}),e.jsxs("div",{children:[e.jsx(r.Title,{children:"Alert with icon"}),e.jsx(r.Description,{children:"This is a alert with icon."})]})]})},render:t=>e.jsx(r,{...t})};var c,o,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: <>
        <Alert.Title>Default Alert</Alert.Title>
        <Alert.Description>This is an informational alert.</Alert.Description>
      </>
  },
  render: args => <Alert {...args} />
}`,...(d=(o=s.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,A,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(A=i.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};var x,v,T;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: <Alert.Description>
        This alert only has a description and no title.
      </Alert.Description>
  },
  render: args => <Alert {...args} />
}`,...(T=(v=n.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var j,D,f;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: <div className="flex items-center">
        <AlertTriangleIcon className="mr-4 h-4 w-4" />
        <div>
          <Alert.Title>Alert with icon</Alert.Title>
          <Alert.Description>This is a alert with icon.</Alert.Description>
        </div>
      </div>
  },
  render: args => <Alert {...args} />
}`,...(f=(D=l.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};const C=["Example","Destructive","WithCustomStyles","WithoutTitle","WithIcon"];export{a as Destructive,s as Example,i as WithCustomStyles,l as WithIcon,n as WithoutTitle,C as __namedExportsOrder,W as default};
