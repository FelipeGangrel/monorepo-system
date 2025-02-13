import{j as e}from"./index-B6zMoDbo.js";import{i as c,N as s,B as p}from"./index-MWPviQxN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFkskS4.js";import"./index-Dxs5m6lS.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=c("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]),b={title:"Core UI/Collapsible",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"An interactive component which expands/collapses a panel."}}}},a={args:{className:"w-full max-w-[400px] space-y-2",children:e.jsxs(e.Fragment,{children:[e.jsx(s.Trigger,{children:"Trigger"}),e.jsx(s.Content,{children:"Content"})]})},render:o=>e.jsx(s,{...o})},r={args:{className:"w-full max-w-[400px] space-y-2",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4 px-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"@fulano starred 3 repositories"}),e.jsx(s.Trigger,{asChild:!0,children:e.jsxs(p,{variant:"ghost",size:"sm",children:[e.jsx(x,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm shadow-sm",children:"@radix-ui/primitives"}),e.jsxs(s.Content,{className:"space-y-2",children:[e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm shadow-sm",children:"@radix-ui/colors"}),e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm shadow-sm",children:"@stitches/react"})]})]})},render:o=>e.jsx(s,{...o})};var t,n,l;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    className: 'w-full max-w-[400px] space-y-2',
    children: <>
        <Collapsible.Trigger>Trigger</Collapsible.Trigger>
        <Collapsible.Content>Content</Collapsible.Content>
      </>
  },
  render: args => <Collapsible {...args} />
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    className: 'w-full max-w-[400px] space-y-2',
    children: <>
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            @fulano starred 3 repositories
          </h4>
          <Collapsible.Trigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </Collapsible.Trigger>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @radix-ui/primitives
        </div>
        <Collapsible.Content className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @stitches/react
          </div>
        </Collapsible.Content>
      </>
  },
  render: args => <Collapsible {...args} />
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const f=["Example","WithButtonAndIcon"];export{a as Example,r as WithButtonAndIcon,f as __namedExportsOrder,b as default};
