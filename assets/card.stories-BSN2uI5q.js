import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css                */import{C as t}from"./card-BsB8Umas.js";import{c as p}from"./createLucideIcon-D-niisEM.js";import{S as x}from"./switch-B2Thtr3I.js";import{C as h}from"./check-BpGw_sZq.js";import{B as u}from"./button-DmDyehya.js";import"./index-CXcpQZ5J.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-Dec1Exbm.js";import"./index-DW48STyt.js";import"./index-Bd7YGvbB.js";import"./index-CiRIfjw3.js";import"./index-DTz3VF55.js";import"./index-B1wjFh51.js";import"./index-DFitwuLX.js";import"./index-Yg3aDjnU.js";import"./index-BI2CIJjy.js";import"./index-DJQWtO6Q.js";import"./index-B97ZzoEQ.js";import"./index-bNgk5zX4.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=p("BellRing",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]]),P={title:"Core UI/Card",component:t,tags:["autodocs"],args:{className:"w-screen max-w-[400px]"},parameters:{layout:"centered",docs:{description:{component:"Displays a card with header, content, and footer."}}}},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Card title"}),e.jsx(t.Description,{children:"Card Description"})]}),e.jsx(t.Content,{children:e.jsx("p",{children:"Card Content"})}),e.jsx(t.Footer,{children:e.jsx("p",{children:"Card Footer"})})]})}},f=[{title:"Your call has been confirmed.",description:"1 hour ago"},{title:"You have a new message!",description:"1 hour ago"},{title:"Your subscription is expiring soon!",description:"2 hours ago"}],s={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(t.Header,{children:[e.jsx(t.Title,{children:"Notifications"}),e.jsx(t.Description,{children:"You have 3 unread messages."})]}),e.jsxs(t.Content,{className:"grid gap-4",children:[e.jsxs("div",{className:"flex items-center space-x-4 rounded-md border p-4",children:[e.jsx(C,{}),e.jsxs("div",{className:"flex-1 space-y-1",children:[e.jsx("p",{className:"text-sm font-medium leading-none",children:"Push Notifications"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Send notifications to device."})]}),e.jsx(x,{})]}),e.jsx("div",{children:f.map((r,m)=>e.jsxs("div",{className:"mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0",children:[e.jsx("span",{className:"flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{className:"text-sm font-medium leading-none",children:r.title}),e.jsx("p",{className:"text-sm text-muted-foreground",children:r.description})]})]},m))})]}),e.jsx(t.Footer,{children:e.jsxs(u,{className:"w-full",children:[e.jsx(h,{})," Mark all as read"]})})]})}};var a,i,o;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: <>
        <Card.Header>
          <Card.Title>Card title</Card.Title>
          <Card.Description>Card Description</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Card Content</p>
        </Card.Content>
        <Card.Footer>
          <p>Card Footer</p>
        </Card.Footer>
      </>
  }
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <>
        <Card.Header>
          <Card.Title>Notifications</Card.Title>
          <Card.Description>You have 3 unread messages.</Card.Description>
        </Card.Header>
        <Card.Content className="grid gap-4">
          <div className="flex items-center space-x-4 rounded-md border p-4">
            <BellRingIcon />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Push Notifications
              </p>
              <p className="text-sm text-muted-foreground">
                Send notifications to device.
              </p>
            </div>
            <Switch />
          </div>
          <div>
            {notifications.map((notification, index) => <div key={index} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>)}
          </div>
        </Card.Content>
        <Card.Footer>
          <Button className="w-full">
            <CheckIcon /> Mark all as read
          </Button>
        </Card.Footer>
      </>
  }
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const L=["Example","NotificationsExample"];export{n as Example,s as NotificationsExample,L as __namedExportsOrder,P as default};
