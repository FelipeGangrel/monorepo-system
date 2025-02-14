import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css                */import{r as a}from"./index-CXcpQZ5J.js";import{D as o}from"./dropdown-menu-Bv8ZgRH4.js";import{B as M}from"./button-DmDyehya.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DW48STyt.js";import"./index-Bd7YGvbB.js";import"./index-CiRIfjw3.js";import"./index-DTz3VF55.js";import"./index-Yg3aDjnU.js";import"./index-BI2CIJjy.js";import"./index-DJQWtO6Q.js";import"./index-B97ZzoEQ.js";import"./index-DcLettmu.js";import"./index-CZW1kccr.js";import"./index-Kvn1RAX5.js";import"./index-DAer1WYL.js";import"./index-D_Yx1edV.js";import"./index-CwgaEOf9.js";import"./index-Lbo4_nNx.js";import"./index-DFitwuLX.js";import"./index-C1fyEfKG.js";import"./index-CjxkqA-i.js";import"./createLucideIcon-D-niisEM.js";import"./utils-Dec1Exbm.js";import"./chevron-right-BTFjDaLX.js";import"./check-BpGw_sZq.js";import"./index-bNgk5zX4.js";const Y={title:"Core UI/DropdownMenu",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Displays a menu to the user — such as a set of actions or functions — triggered by a button."}}}},r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(o.Trigger,{children:"Open"}),e.jsxs(o.Content,{children:[e.jsx(o.Label,{children:"My Account"}),e.jsx(o.Separator,{}),e.jsx(o.Item,{children:"Profile"}),e.jsx(o.Item,{children:"Billing"}),e.jsx(o.Item,{children:"Team"}),e.jsx(o.Item,{children:"Subscription"})]})]})}},n=()=>{const[s,i]=a.useState(!0),[x,g]=a.useState(!1),[C,S]=a.useState(!1);return e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(M,{variant:"outline",children:"Open"})}),e.jsxs(o.Content,{className:"w-56",children:[e.jsx(o.Label,{children:"Appearance"}),e.jsx(o.Separator,{}),e.jsx(o.CheckboxItem,{checked:s,onCheckedChange:i,children:"Status Bar"}),e.jsx(o.CheckboxItem,{checked:x,onCheckedChange:g,disabled:!0,children:"Activity Bar"}),e.jsx(o.CheckboxItem,{checked:C,onCheckedChange:S,children:"Panel"})]})]})},t=()=>{const[s,i]=a.useState("bottom");return e.jsxs(o,{children:[e.jsx(o.Trigger,{asChild:!0,children:e.jsx(M,{variant:"outline",children:"Open"})}),e.jsxs(o.Content,{className:"w-56",children:[e.jsx(o.Label,{children:"Panel Position"}),e.jsx(o.Separator,{}),e.jsxs(o.RadioGroup,{value:s,onValueChange:i,children:[e.jsx(o.RadioItem,{value:"top",children:"Top"}),e.jsx(o.RadioItem,{value:"bottom",children:"Bottom"}),e.jsx(o.RadioItem,{value:"right",children:"Right"})]})]})]})};n.__docgenInfo={description:"",methods:[],displayName:"Checkboxes"};t.__docgenInfo={description:"",methods:[],displayName:"RadioGroup"};var d,p,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,m,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var l,w,D;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(D=(w=t.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const Z=["Example","Checkboxes","RadioGroup"];export{n as Checkboxes,r as Example,t as RadioGroup,Z as __namedExportsOrder,Y as default};
