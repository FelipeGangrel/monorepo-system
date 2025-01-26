import{j as o}from"./index-D9u8kSYr.js";import{A as e}from"./index-Cob0ihi4.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DYwZEShM.js";import"./index-B5OHeJSP.js";const I={title:"core-ui/Accordion",component:e,tags:["autodocs"],args:{type:"single",collapsible:!0,className:"w-screen max-w-[400px]"},argTypes:{type:{control:{type:"radio"},options:["single","multiple"]},collapsible:{control:{type:"boolean"}}},parameters:{layout:"centered"}},n={render:r=>o.jsxs(e,{...r,children:[o.jsxs(e.Item,{value:"item-1",children:[o.jsx(e.Trigger,{children:"Accordion Title 1"}),o.jsx(e.Content,{children:"This is the content for the first item."})]}),o.jsxs(e.Item,{value:"item-2",children:[o.jsx(e.Trigger,{children:"Accordion Title 2"}),o.jsx(e.Content,{children:"This is the content for the second item."})]}),o.jsxs(e.Item,{value:"item-3",children:[o.jsx(e.Trigger,{children:"Accordion Title 3"}),o.jsx(e.Content,{children:"This is the content for the third item."})]})]})},c={args:{type:"multiple"},render:r=>o.jsxs(e,{...r,children:[o.jsxs(e.Item,{value:"item-1",children:[o.jsx(e.Trigger,{children:"Accordion Item 1"}),o.jsx(e.Content,{children:"Content for multiple accordion item 1."})]}),o.jsxs(e.Item,{value:"item-2",children:[o.jsx(e.Trigger,{children:"Accordion Item 2"}),o.jsx(e.Content,{children:"Content for multiple accordion item 2."})]}),o.jsxs(e.Item,{value:"item-3",children:[o.jsx(e.Trigger,{children:"Accordion Item 3"}),o.jsx(e.Content,{children:"Content for multiple accordion item 3."})]})]})},t={args:{type:"single",collapsible:!1},render:r=>o.jsxs(e,{...r,children:[o.jsxs(e.Item,{value:"item-1",children:[o.jsx(e.Trigger,{children:"Accordion Title 1"}),o.jsx(e.Content,{children:"You cannot collapse this once opened."})]}),o.jsxs(e.Item,{value:"item-2",children:[o.jsx(e.Trigger,{children:"Accordion Title 2"}),o.jsx(e.Content,{children:"Second item that cannot be collapsed once opened."})]})]})};var i,d,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(d=n.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var l,a,m;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(a=c.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};var A,g,p;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const j=["Default","MultipleItems","NonCollapsible"];export{n as Default,c as MultipleItems,t as NonCollapsible,j as __namedExportsOrder,I as default};
