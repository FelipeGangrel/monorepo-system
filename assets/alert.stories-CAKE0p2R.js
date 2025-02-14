import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css                */import{r as d}from"./index-CXcpQZ5J.js";import{c as p}from"./utils-Dec1Exbm.js";import{c as I}from"./index-bNgk5zX4.js";import{T as W}from"./triangle-alert-CYmvSnss.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./createLucideIcon-D-niisEM.js";const C=I("core-relative core-w-full core-rounded-lg core-border core-px-4 core-py-3 core-text-sm [&>svg+div]:core-translate-y-[-3px] [&>svg]:core-absolute [&>svg]:core-left-4 [&>svg]:core-top-4 [&>svg]:core-text-foreground [&>svg~*]:core-pl-7",{variants:{variant:{default:"core-bg-background core-text-foreground",destructive:"core-border-destructive/50 core-text-destructive dark:core-border-destructive [&>svg]:core-text-destructive"}},defaultVariants:{variant:"default"}}),r=d.forwardRef(({className:t,variant:s,...a},S)=>e.jsx("div",{ref:S,role:"alert",className:p(C({variant:s}),t),...a}));r.displayName="Alert";r.Title=d.forwardRef(({className:t,...s},a)=>e.jsx("h5",{ref:a,className:p("core-mb-1 core-font-medium core-leading-none core-tracking-tight",t),...s}));r.Title.displayName="Alert.Title";r.Description=d.forwardRef(({className:t,...s},a)=>e.jsx("div",{ref:a,className:p("core-text-sm [&_p]:core-leading-relaxed",t),...s}));r.Description.displayName="Alert.Description";r.__docgenInfo={description:"",methods:[],displayName:"Alert"};const q={title:"Core UI/Alert",component:r,tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","destructive"]}},parameters:{layout:"centered",docs:{description:{component:"Displays a callout for user attention."}}}},i={args:{variant:"default",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Title,{children:"Default Alert"}),e.jsx(r.Description,{children:"This is an informational alert."})]})},render:t=>e.jsx(r,{...t})},n={args:{variant:"destructive",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Title,{children:"Destructive Alert"}),e.jsx(r.Description,{children:"This is a destructive alert. It indicates an error or critical action."})]})},render:t=>e.jsx(r,{...t})},o={args:{variant:"default",className:"bg-blue-100 text-blue-900 border-blue-300",children:e.jsxs(e.Fragment,{children:[e.jsx(r.Title,{children:"Custom Styled Alert"}),e.jsx(r.Description,{children:"This alert has custom styles applied to it via the `className` prop."})]})},render:t=>e.jsx(r,{...t})},l={args:{variant:"default",children:e.jsx(r.Description,{children:"This alert only has a description and no title."})},render:t=>e.jsx(r,{...t})},c={args:{variant:"default",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(W,{className:"mr-4 h-4 w-4"}),e.jsxs("div",{children:[e.jsx(r.Title,{children:"Alert with icon"}),e.jsx(r.Description,{children:"This is a alert with icon."})]})]})},render:t=>e.jsx(r,{...t})};var m,u,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: <>
        <Alert.Title>Default Alert</Alert.Title>
        <Alert.Description>This is an informational alert.</Alert.Description>
      </>
  },
  render: args => <Alert {...args} />
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,v,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var A,f,T;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(T=(f=o.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var j,D,y;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: <Alert.Description>
        This alert only has a description and no title.
      </Alert.Description>
  },
  render: args => <Alert {...args} />
}`,...(y=(D=l.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var b,N,w;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(w=(N=c.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};const z=["Example","Destructive","WithCustomStyles","WithoutTitle","WithIcon"];export{n as Destructive,i as Example,o as WithCustomStyles,c as WithIcon,l as WithoutTitle,z as __namedExportsOrder,q as default};
