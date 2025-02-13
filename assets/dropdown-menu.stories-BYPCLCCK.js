import{j as e}from"./index-B6zMoDbo.js";import{k as o,B as D}from"./index-MWPviQxN.js";import{r as a}from"./index-Dxs5m6lS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFkskS4.js";const R={title:"Core UI/DropdownMenu",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Displays a menu to the user — such as a set of actions or functions — triggered by a button."}}}},r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(o.Trigger,{children:"Open"}),e.jsxs(o.Content,{children:[e.jsx(o.Label,{children:"My Account"}),e.jsx(o.Separator,{}),e.jsx(o.Item,{children:"Profile"}),e.jsx(o.Item,{children:"Billing"}),e.jsx(o.Item,{children:"Team"}),e.jsx(o.Item,{children:"Subscription"})]})]})}},n=()=>{const[s,d]=a.useState(!0),[x,g]=a.useState(!1),[C,S]=a.useState(!1);return e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(D,{variant:"outline",children:"Open"})}),e.jsxs(o.Content,{className:"w-56",children:[e.jsx(o.Label,{children:"Appearance"}),e.jsx(o.Separator,{}),e.jsx(o.CheckboxItem,{checked:s,onCheckedChange:d,children:"Status Bar"}),e.jsx(o.CheckboxItem,{checked:x,onCheckedChange:g,disabled:!0,children:"Activity Bar"}),e.jsx(o.CheckboxItem,{checked:C,onCheckedChange:S,children:"Panel"})]})]})},t=()=>{const[s,d]=a.useState("bottom");return e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(D,{variant:"outline",children:"Open"})}),e.jsxs(o.Content,{className:"w-56",children:[e.jsx(o.Label,{children:"Panel Position"}),e.jsx(o.Separator,{}),e.jsxs(o.RadioGroup,{value:s,onValueChange:d,children:[e.jsx(o.RadioItem,{value:"top",children:"Top"}),e.jsx(o.RadioItem,{value:"bottom",children:"Bottom"}),e.jsx(o.RadioItem,{value:"right",children:"Right"})]})]})]})};n.__docgenInfo={description:"",methods:[],displayName:"Checkboxes"};t.__docgenInfo={description:"",methods:[],displayName:"RadioGroup"};var i,c,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: <>
        <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>My Account</DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Profile</DropdownMenu.Item>
          <DropdownMenu.Item>Billing</DropdownMenu.Item>
          <DropdownMenu.Item>Team</DropdownMenu.Item>
          <DropdownMenu.Item>Subscription</DropdownMenu.Item>
        </DropdownMenu.Content>
      </>
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,h,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);
  return <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-56">
        <DropdownMenu.Label>Appearance</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.CheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
          Status Bar
        </DropdownMenu.CheckboxItem>
        <DropdownMenu.CheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar} disabled>
          Activity Bar
        </DropdownMenu.CheckboxItem>
        <DropdownMenu.CheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
          Panel
        </DropdownMenu.CheckboxItem>
      </DropdownMenu.Content>
    </DropdownMenu>;
}`,...(l=(h=n.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var m,w,M;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [position, setPosition] = React.useState('bottom');
  return <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-56">
        <DropdownMenu.Label>Panel Position</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.RadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenu.RadioItem value="top">Top</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="bottom">Bottom</DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="right">Right</DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu>;
}`,...(M=(w=t.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};const v=["Example","Checkboxes","RadioGroup"];export{n as Checkboxes,r as Example,t as RadioGroup,v as __namedExportsOrder,R as default};
