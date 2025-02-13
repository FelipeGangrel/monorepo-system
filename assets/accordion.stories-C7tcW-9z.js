import{j as o}from"./index-B6zMoDbo.js";import{A as e}from"./index-MWPviQxN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFkskS4.js";import"./index-Dxs5m6lS.js";const S={title:"Core UI/Accordion",component:e,tags:["autodocs"],args:{type:"single",collapsible:!0,className:"w-screen max-w-[400px]"},argTypes:{type:{control:{type:"radio"},options:["single","multiple"]},collapsible:{control:{type:"boolean"}}},parameters:{layout:"centered",docs:{description:{component:"A vertically stacked set of interactive headings that each reveal a section of content."}}}},r={render:n=>o.jsxs(e,{...n,children:[o.jsxs(e.Item,{value:"item-1",children:[o.jsx(e.Trigger,{children:"Accordion Title 1"}),o.jsx(e.Content,{children:"This is the content for the first item."})]}),o.jsxs(e.Item,{value:"item-2",children:[o.jsx(e.Trigger,{children:"Accordion Title 2"}),o.jsx(e.Content,{children:"This is the content for the second item."})]}),o.jsxs(e.Item,{value:"item-3",children:[o.jsx(e.Trigger,{children:"Accordion Title 3"}),o.jsx(e.Content,{children:"This is the content for the third item."})]})]})},t={args:{type:"multiple"},render:n=>o.jsxs(e,{...n,children:[o.jsxs(e.Item,{value:"item-1",children:[o.jsx(e.Trigger,{children:"Accordion Item 1"}),o.jsx(e.Content,{children:"Content for multiple accordion item 1."})]}),o.jsxs(e.Item,{value:"item-2",children:[o.jsx(e.Trigger,{children:"Accordion Item 2"}),o.jsx(e.Content,{children:"Content for multiple accordion item 2."})]}),o.jsxs(e.Item,{value:"item-3",children:[o.jsx(e.Trigger,{children:"Accordion Item 3"}),o.jsx(e.Content,{children:"Content for multiple accordion item 3."})]})]})},c={args:{type:"single",collapsible:!1},render:n=>o.jsxs(e,{...n,children:[o.jsxs(e.Item,{value:"item-1",children:[o.jsx(e.Trigger,{children:"Accordion Title 1"}),o.jsx(e.Content,{children:"You cannot collapse this once opened."})]}),o.jsxs(e.Item,{value:"item-2",children:[o.jsx(e.Trigger,{children:"Accordion Title 2"}),o.jsx(e.Content,{children:"Second item that cannot be collapsed once opened."})]})]})};var i,s,d,l,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Accordion Title 1</Accordion.Trigger>
        <Accordion.Content>
          This is the content for the first item.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Accordion Title 2</Accordion.Trigger>
        <Accordion.Content>
          This is the content for the second item.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Accordion Title 3</Accordion.Trigger>
        <Accordion.Content>
          This is the content for the third item.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
}`,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source},description:{story:`The default Accordion story demonstrates a single-type accordion
with collapsible functionality enabled.`,...(a=(l=r.parameters)==null?void 0:l.docs)==null?void 0:a.description}}};var m,p,A,g,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'multiple'
  },
  render: args => <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Accordion Item 1</Accordion.Trigger>
        <Accordion.Content>
          Content for multiple accordion item 1.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Accordion Item 2</Accordion.Trigger>
        <Accordion.Content>
          Content for multiple accordion item 2.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Accordion Item 3</Accordion.Trigger>
        <Accordion.Content>
          Content for multiple accordion item 3.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
}`,...(A=(p=t.parameters)==null?void 0:p.docs)==null?void 0:A.source},description:{story:`Demonstrates an accordion with 'multiple' type, allowing
multiple items to be open simultaneously.`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var u,T,x,C,I;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: false
  },
  render: args => <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Accordion Title 1</Accordion.Trigger>
        <Accordion.Content>
          You cannot collapse this once opened.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Accordion Title 2</Accordion.Trigger>
        <Accordion.Content>
          Second item that cannot be collapsed once opened.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
}`,...(x=(T=c.parameters)==null?void 0:T.docs)==null?void 0:x.source},description:{story:`An Accordion story that demonstrates a non-collapsible
single-type accordion.`,...(I=(C=c.parameters)==null?void 0:C.docs)==null?void 0:I.description}}};const w=["Single","Multiple","NonCollapsible"];export{t as Multiple,c as NonCollapsible,r as Single,w as __namedExportsOrder,S as default};
