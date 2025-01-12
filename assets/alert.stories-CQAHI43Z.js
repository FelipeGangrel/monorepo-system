import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as d}from"./index-CYQpqK1Q.js";import{c as p,a as W}from"./index-Bcst1ezr.js";import{c as C}from"./createLucideIcon-DksVRVQW.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=C("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),E=W("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),w=d.forwardRef(({className:r,variant:a,...s},I)=>e.jsx("div",{ref:I,role:"alert",className:p(E({variant:a}),r),...s}));w.displayName="Alert";const S=d.forwardRef(({className:r,...a},s)=>e.jsx("h5",{ref:s,className:p("mb-1 font-medium leading-none tracking-tight",r),...a}));S.displayName="AlertTitle";const k=d.forwardRef(({className:r,...a},s)=>e.jsx("div",{ref:s,className:p("text-sm [&_p]:leading-relaxed",r),...a}));k.displayName="AlertDescription";const t={Root:w,Title:S,Description:k},L={title:"core-ui/Alert",component:t.Root,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","destructive"]}},parameters:{layout:"centered"}},i={args:{variant:"default",children:e.jsxs(e.Fragment,{children:[e.jsx(t.Title,{children:"Default Alert"}),e.jsx(t.Description,{children:"This is an informational alert."})]})},render:r=>e.jsx(t.Root,{...r})},n={args:{variant:"destructive",children:e.jsxs(e.Fragment,{children:[e.jsx(t.Title,{children:"Destructive Alert"}),e.jsx(t.Description,{children:"This is a destructive alert. It indicates an error or critical action."})]})},render:r=>e.jsx(t.Root,{...r})},o={args:{variant:"default",className:"bg-blue-100 text-blue-900 border-blue-300",children:e.jsxs(e.Fragment,{children:[e.jsx(t.Title,{children:"Custom Styled Alert"}),e.jsx(t.Description,{children:"This alert has custom styles applied to it via the `className` prop."})]})},render:r=>e.jsx(t.Root,{...r})},l={args:{variant:"default",children:e.jsx(t.Description,{children:"This alert only has a description and no title."})},render:r=>e.jsx(t.Root,{...r})},c={args:{variant:"default",children:e.jsxs(e.Fragment,{children:[e.jsx(F,{className:"h-4 w-4"}),e.jsx(t.Title,{children:"Alert with icon"}),e.jsx(t.Description,{children:"This is a alert with icon."})]})},render:r=>e.jsx(t.Root,{...r})};var u,m,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: <>
        <Alert.Title>Default Alert</Alert.Title>
        <Alert.Description>This is an informational alert.</Alert.Description>
      </>
  },
  render: args => <Alert.Root {...args} />
}`,...(h=(m=i.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,v,A;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: <>
        <Alert.Title>Destructive Alert</Alert.Title>
        <Alert.Description>
          This is a destructive alert. It indicates an error or critical action.
        </Alert.Description>
      </>
  },
  render: args => <Alert.Root {...args} />
}`,...(A=(v=n.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var x,f,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
  render: args => <Alert.Root {...args} />
}`,...(T=(f=o.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var D,j,y;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: <Alert.Description>
        This alert only has a description and no title.
      </Alert.Description>
  },
  render: args => <Alert.Root {...args} />
}`,...(y=(j=l.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var b,R,N;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: <>
        <AlertTriangleIcon className="h-4 w-4" />
        <Alert.Title>Alert with icon</Alert.Title>
        <Alert.Description>This is a alert with icon.</Alert.Description>
      </>
  },
  render: args => <Alert.Root {...args} />
}`,...(N=(R=c.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};const O=["Default","Destructive","WithCustomStyles","WithoutTitle","WithIcon"];export{i as Default,n as Destructive,o as WithCustomStyles,c as WithIcon,l as WithoutTitle,O as __namedExportsOrder,L as default};
