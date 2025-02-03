import{j as e}from"./index-ChoN-ss6.js";import{l as p,j as s,q as x,B as u,s as h}from"./index-ef7Bbbrs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DYwZEShM.js";import"./index-B5OHeJSP.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=p("BellRing",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]]),y={title:"core-ui/Card",component:s,tags:["autodocs"],args:{className:"w-screen max-w-[400px]"},parameters:{layout:"centered"}},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(s.Header,{children:[e.jsx(s.Title,{children:"Card title"}),e.jsx(s.Description,{children:"Card Description"})]}),e.jsx(s.Content,{children:e.jsx("p",{children:"Card Content"})}),e.jsx(s.Footer,{children:e.jsx("p",{children:"Card Footer"})})]})}},g=[{title:"Your call has been confirmed.",description:"1 hour ago"},{title:"You have a new message!",description:"1 hour ago"},{title:"Your subscription is expiring soon!",description:"2 hours ago"}],a={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(s.Header,{children:[e.jsx(s.Title,{children:"Notifications"}),e.jsx(s.Description,{children:"You have 3 unread messages."})]}),e.jsxs(s.Content,{className:"grid gap-4",children:[e.jsxs("div",{className:"flex items-center space-x-4 rounded-md border p-4",children:[e.jsx(C,{}),e.jsxs("div",{className:"flex-1 space-y-1",children:[e.jsx("p",{className:"text-sm font-medium leading-none",children:"Push Notifications"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"Send notifications to device."})]}),e.jsx(x,{})]}),e.jsx("div",{children:g.map((t,m)=>e.jsxs("div",{className:"mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0",children:[e.jsx("span",{className:"flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{className:"text-sm font-medium leading-none",children:t.title}),e.jsx("p",{className:"text-muted-foreground text-sm",children:t.description})]})]},m))})]}),e.jsx(s.Footer,{children:e.jsxs(u,{className:"w-full",children:[e.jsx(h,{})," Mark all as read"]})})]})}};var r,i,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var o,c,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
              <p className="text-muted-foreground text-sm">
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
                  <p className="text-muted-foreground text-sm">
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
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const k=["Default","NotificationsExample"];export{n as Default,a as NotificationsExample,k as __namedExportsOrder,y as default};
