import{j as r}from"./index-D9u8kSYr.js";import{e}from"./index-Cob0ihi4.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DYwZEShM.js";import"./index-B5OHeJSP.js";const H={title:"core-ui/Breadcrumb",component:e,tags:["autodocs"],parameters:{layout:"centered"}},m={render:a=>r.jsx(e,{...a,children:r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"/home",children:"Home"})}),r.jsx(e.Separator,{}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"/about",children:"About"})}),r.jsx(e.Separator,{}),r.jsx(e.Item,{children:r.jsx(e.Page,{children:"Current Page"})})]})})},n={render:a=>r.jsx(e,{...a,children:r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"/home",children:"Home"})}),r.jsx(e.Separator,{children:"*"}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"/about",children:"About"})}),r.jsx(e.Separator,{children:"*"}),r.jsx(e.Item,{children:r.jsx(e.Page,{children:"Current Page"})})]})})},c={render:a=>r.jsx(e,{...a,children:r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"/level1",children:"Level 1"})}),r.jsx(e.Separator,{}),r.jsx(e.Ellipsis,{}),r.jsx(e.Separator,{}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"/level5",children:"Level 5"})}),r.jsx(e.Separator,{}),r.jsx(e.Item,{children:r.jsx(e.Page,{children:"Current Page"})})]})})},d={render:a=>r.jsx(e,{...a,children:r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{asChild:!0,children:r.jsx("button",{onClick:()=>alert("Home clicked"),children:"Home"})})}),r.jsx(e.Separator,{}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"/about",children:"About"})}),r.jsx(e.Separator,{}),r.jsx(e.Item,{children:r.jsx(e.Page,{children:"Current Page"})})]})})},t={render:a=>r.jsx(e,{...a,className:"rounded-md bg-gray-100 p-4",children:r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{className:"text-blue-600 hover:underline",href:"/dashboard",children:"Dashboard"})}),r.jsx(e.Separator,{}),r.jsx(e.Item,{children:r.jsx(e.Link,{className:"text-blue-600 hover:underline",href:"/profile",children:"Profile"})}),r.jsx(e.Separator,{}),r.jsx(e.Item,{children:r.jsx(e.Page,{children:"Settings"})})]})})};var s,u,o;m.parameters={...m.parameters,docs:{...(s=m.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(o=(u=m.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};var i,b,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(b=n.parameters)==null?void 0:b.docs)==null?void 0:l.source}}};var B,h,p;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(p=(h=c.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var x,j,L;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(L=(j=d.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var g,I,k;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <Breadcrumb {...args} className="rounded-md bg-gray-100 p-4">
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
          <Breadcrumb.Page>Settings</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb>
}`,...(k=(I=t.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const A=["Default","CustomSeparator","OverflowEllipsis","CustomLinks","StyledBreadcrumb"];export{d as CustomLinks,n as CustomSeparator,m as Default,c as OverflowEllipsis,t as StyledBreadcrumb,A as __namedExportsOrder,H as default};
