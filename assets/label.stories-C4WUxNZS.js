import{j as a}from"./index-B6zMoDbo.js";import{L as t,m as l}from"./index-MWPviQxN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFkskS4.js";import"./index-Dxs5m6lS.js";const L={title:"Core UI/Label",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Renders an accessible label associated with controls."}}}},e={args:{children:"Label"},render:s=>a.jsx(t,{...s})},r={args:{htmlFor:"input"},render:s=>a.jsxs("div",{className:"space-y-2",children:[a.jsx(t,{...s,children:"Label"}),a.jsx(l,{id:"input"})]})};var o,n,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Label'
  },
  render: args => <Label {...args} />
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,i,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    htmlFor: 'input'
  },
  render: args => <div className="space-y-2">
      <Label {...args}>Label</Label>
      <Input id="input" />
    </div>
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const h=["Example","ForInput"];export{e as Example,r as ForInput,h as __namedExportsOrder,L as default};
