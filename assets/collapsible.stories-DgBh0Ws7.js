import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css                */import{R as d,a as c,b as x}from"./index-FSUkWDnt.js";import{c as g}from"./createLucideIcon-D-niisEM.js";import{B as h}from"./button-DmDyehya.js";import"./index-CXcpQZ5J.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DW48STyt.js";import"./index-CiRIfjw3.js";import"./index-DTz3VF55.js";import"./index-Bd7YGvbB.js";import"./index-Yg3aDjnU.js";import"./index-BI2CIJjy.js";import"./index-DJQWtO6Q.js";import"./index-B97ZzoEQ.js";import"./index-C1fyEfKG.js";import"./index-CwgaEOf9.js";import"./index-bNgk5zX4.js";import"./utils-Dec1Exbm.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=g("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]),s=d;s.displayName="Collapsible";s.Trigger=c;s.Trigger.displayName="Collapsible.Trigger";s.Content=x;s.Content.displayName="Collapsible.Content";const S={title:"Core UI/Collapsible",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"An interactive component which expands/collapses a panel."}}}},r={args:{className:"w-full max-w-[400px] space-y-2",children:e.jsxs(e.Fragment,{children:[e.jsx(s.Trigger,{children:"Trigger"}),e.jsx(s.Content,{children:"Content"})]})},render:a=>e.jsx(s,{...a})},o={args:{className:"w-full max-w-[400px] space-y-2",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4 px-4",children:[e.jsx("h4",{className:"text-sm font-semibold",children:"@fulano starred 3 repositories"}),e.jsx(s.Trigger,{asChild:!0,children:e.jsxs(h,{variant:"ghost",size:"sm",children:[e.jsx(u,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm shadow-sm",children:"@radix-ui/primitives"}),e.jsxs(s.Content,{className:"space-y-2",children:[e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm shadow-sm",children:"@radix-ui/colors"}),e.jsx("div",{className:"rounded-md border px-4 py-2 font-mono text-sm shadow-sm",children:"@stitches/react"})]})]})},render:a=>e.jsx(s,{...a})};var t,n,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    className: 'w-full max-w-[400px] space-y-2',
    children: <>
        <Collapsible.Trigger>Trigger</Collapsible.Trigger>
        <Collapsible.Content>Content</Collapsible.Content>
      </>
  },
  render: args => <Collapsible {...args} />
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,m,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const W=["Example","WithButtonAndIcon"];export{r as Example,o as WithButtonAndIcon,W as __namedExportsOrder,S as default};
