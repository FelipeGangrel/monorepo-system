import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css                */import{S as v}from"./index-B97ZzoEQ.js";import{r as m}from"./index-CXcpQZ5J.js";import{c as n}from"./utils-Dec1Exbm.js";import{C as w}from"./chevron-right-BTFjDaLX.js";import{c as E}from"./createLucideIcon-D-niisEM.js";import"./index-Bd7YGvbB.js";import"./_commonjsHelpers-Cpj98o6Y.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=E("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]),r=m.forwardRef(({...a},c)=>e.jsx("nav",{ref:c,"aria-label":"breadcrumb",...a}));r.displayName="Breadcrumb";r.List=m.forwardRef(({className:a,...c},s)=>e.jsx("ol",{ref:s,className:n("core-flex core-flex-wrap core-items-center core-gap-1.5 core-break-words core-text-sm core-text-muted-foreground sm:core-gap-2.5",a),...c}));r.List.displayName="Breadcrumb.List";r.Item=m.forwardRef(({className:a,...c},s)=>e.jsx("li",{ref:s,className:n("core-inline-flex core-items-center core-gap-1.5",a),...c}));r.Item.displayName="Breadcrumb.Item";r.Link=m.forwardRef(({asChild:a,className:c,...s},y)=>{const C=a?v:"a";return e.jsx(C,{ref:y,className:n("core-transition-colors hover:core-text-foreground",c),...s})});r.Link.displayName="Breadcrumb.Link";r.Page=m.forwardRef(({className:a,...c},s)=>e.jsx("span",{ref:s,role:"link","aria-disabled":"true","aria-current":"page",className:n("core-font-normal core-text-foreground",a),...c}));r.Page.displayName="BreadcrumbPage";r.Separator=({children:a,className:c,...s})=>e.jsx("li",{role:"presentation","aria-hidden":"true",className:n("[&>svg]:core-w-3.5 [&>svg]:core-h-3.5",c),...s,children:a??e.jsx(w,{})});r.Separator.displayName="Breadcrumb.Separator";r.Ellipsis=({className:a,...c})=>e.jsxs("span",{role:"presentation","aria-hidden":"true",className:n("core-flex core-h-9 core-w-9 core-items-center core-justify-center",a),...c,children:[e.jsx(R,{className:"core-h-4 core-w-4"}),e.jsx("span",{className:"core-sr-only",children:"More"})]});r.Ellipsis.displayName="Breadcrumb.Ellipsis";r.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const U={title:"Core UI/Breadcrumb",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Displays the path to the current resource using a hierarchy of links."}}}},t={render:a=>e.jsx(r,{...a,children:e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"/home",children:"Home"})}),e.jsx(r.Separator,{}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"/about",children:"About"})}),e.jsx(r.Separator,{}),e.jsx(r.Item,{children:e.jsx(r.Page,{children:"Current Page"})})]})})},d={render:a=>e.jsx(r,{...a,children:e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"/home",children:"Home"})}),e.jsx(r.Separator,{children:"*"}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"/about",children:"About"})}),e.jsx(r.Separator,{children:"*"}),e.jsx(r.Item,{children:e.jsx(r.Page,{children:"Current Page"})})]})})},o={render:a=>e.jsx(r,{...a,children:e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"/level1",children:"Level 1"})}),e.jsx(r.Separator,{}),e.jsx(r.Ellipsis,{}),e.jsx(r.Separator,{}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"/level5",children:"Level 5"})}),e.jsx(r.Separator,{}),e.jsx(r.Item,{children:e.jsx(r.Page,{children:"Current Page"})})]})})},i={render:a=>e.jsx(r,{...a,children:e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{asChild:!0,children:e.jsx("button",{onClick:()=>alert("Home clicked"),children:"Home"})})}),e.jsx(r.Separator,{}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"/about",children:"About"})}),e.jsx(r.Separator,{}),e.jsx(r.Item,{children:e.jsx(r.Page,{children:"Current Page"})})]})})},u={render:a=>e.jsx(r,{...a,className:"rounded-md p-4 dark:bg-red-400",children:e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{className:"text-blue-600 hover:underline",href:"/dashboard",children:"Dashboard"})}),e.jsx(r.Separator,{}),e.jsx(r.Item,{children:e.jsx(r.Link,{className:"text-blue-600 hover:underline",href:"/profile",children:"Profile"})}),e.jsx(r.Separator,{}),e.jsx(r.Item,{children:e.jsx(r.Page,{className:"text-foreground",children:"Settings"})})]})})};var l,b,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Breadcrumb {...args}>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/home">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/about">About</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>Current Page</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb>
}`,...(p=(b=t.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var B,h,x;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Breadcrumb {...args}>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/home">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>*</Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/about">About</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>*</Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Page>Current Page</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb>
}`,...(x=(h=d.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,g,L;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Breadcrumb {...args}>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/level1">Level 1</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Ellipsis />
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/level5">Level 5</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>Current Page</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb>
}`,...(L=(g=o.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var f,I,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Breadcrumb {...args}>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link asChild>
            <button onClick={() => alert('Home clicked')}>Home</button>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/about">About</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>Current Page</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb>
}`,...(k=(I=i.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var S,P,N;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Breadcrumb {...args} className="rounded-md p-4 dark:bg-red-400">
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link className="text-blue-600 hover:underline" href="/dashboard">
            Dashboard
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link className="text-blue-600 hover:underline" href="/profile">
            Profile
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page className="text-foreground">
            Settings
          </Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb>
}`,...(N=(P=u.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};const F=["Example","CustomSeparator","OverflowEllipsis","CustomLinks","StyledBreadcrumb"];export{i as CustomLinks,d as CustomSeparator,t as Example,o as OverflowEllipsis,u as StyledBreadcrumb,F as __namedExportsOrder,U as default};
