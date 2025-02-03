import{j as e}from"./index-ChoN-ss6.js";import{M as n}from"./index-ef7Bbbrs.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DYwZEShM.js";import"./index-B5OHeJSP.js";const h={title:"core-ui/Menubar",component:n,tags:["autodocs"],parameters:{layout:"centered"}},r={args:{children:e.jsx(e.Fragment,{children:e.jsxs(n.Menu,{children:[e.jsx(n.Trigger,{children:"File"}),e.jsxs(n.Content,{children:[e.jsxs(n.Item,{children:["New Tab ",e.jsx(n.Shortcut,{children:"⌘T"})]}),e.jsx(n.Item,{children:"New Window"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{children:"Share"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{children:"Print"})]})]})})}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(n.Menu,{children:[e.jsx(n.Trigger,{children:"File"}),e.jsxs(n.Content,{children:[e.jsxs(n.Item,{children:["New Tab ",e.jsx(n.Shortcut,{children:"⌘T"})]}),e.jsxs(n.Item,{children:["New Window ",e.jsx(n.Shortcut,{children:"⌘N"})]}),e.jsx(n.Item,{disabled:!0,children:"New Incognito Window"}),e.jsx(n.Separator,{}),e.jsxs(n.Sub,{children:[e.jsx(n.SubTrigger,{children:"Share"}),e.jsxs(n.SubContent,{children:[e.jsx(n.Item,{children:"Email link"}),e.jsx(n.Item,{children:"Messages"}),e.jsx(n.Item,{children:"Notes"})]})]}),e.jsx(n.Separator,{}),e.jsxs(n.Item,{children:["Print... ",e.jsx(n.Shortcut,{children:"⌘P"})]})]})]}),e.jsxs(n.Menu,{children:[e.jsx(n.Trigger,{children:"Edit"}),e.jsxs(n.Content,{children:[e.jsxs(n.Item,{children:["Undo ",e.jsx(n.Shortcut,{children:"⌘Z"})]}),e.jsxs(n.Item,{children:["Redo ",e.jsx(n.Shortcut,{children:"⇧⌘Z"})]}),e.jsx(n.Separator,{}),e.jsxs(n.Sub,{children:[e.jsx(n.SubTrigger,{children:"Find"}),e.jsxs(n.SubContent,{children:[e.jsx(n.Item,{children:"Search the web"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{children:"Find..."}),e.jsx(n.Item,{children:"Find Next"}),e.jsx(n.Item,{children:"Find Previous"})]})]}),e.jsx(n.Separator,{}),e.jsx(n.Item,{children:"Cut"}),e.jsx(n.Item,{children:"Copy"}),e.jsx(n.Item,{children:"Paste"})]})]}),e.jsxs(n.Menu,{children:[e.jsx(n.Trigger,{children:"View"}),e.jsxs(n.Content,{children:[e.jsx(n.CheckboxItem,{children:"Always Show Bookmarks Bar"}),e.jsx(n.CheckboxItem,{checked:!0,children:"Always Show Full URLs"}),e.jsx(n.Separator,{}),e.jsxs(n.Item,{inset:!0,children:["Reload ",e.jsx(n.Shortcut,{children:"⌘R"})]}),e.jsxs(n.Item,{disabled:!0,inset:!0,children:["Force Reload ",e.jsx(n.Shortcut,{children:"⇧⌘R"})]}),e.jsx(n.Separator,{}),e.jsx(n.Item,{inset:!0,children:"Toggle Fullscreen"}),e.jsx(n.Separator,{}),e.jsx(n.Item,{inset:!0,children:"Hide Sidebar"})]})]}),e.jsxs(n.Menu,{children:[e.jsx(n.Trigger,{children:"Profiles"}),e.jsxs(n.Content,{children:[e.jsxs(n.RadioGroup,{value:"benoit",children:[e.jsx(n.RadioItem,{value:"andy",children:"Andy"}),e.jsx(n.RadioItem,{value:"benoit",children:"Benoit"}),e.jsx(n.RadioItem,{value:"Luis",children:"Luis"})]}),e.jsx(n.Separator,{}),e.jsx(n.Item,{inset:!0,children:"Edit..."}),e.jsx(n.Separator,{}),e.jsx(n.Item,{inset:!0,children:"Add Profile..."})]})]})]})}};var a,u,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: <>
        <Menubar.Menu>
          <Menubar.Trigger>File</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>
              New Tab <Menubar.Shortcut>⌘T</Menubar.Shortcut>
            </Menubar.Item>
            <Menubar.Item>New Window</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>Share</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>Print</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
      </>
  }
}`,...(i=(u=r.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var s,b,o;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: <>
        <Menubar.Menu>
          <Menubar.Trigger>File</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>
              New Tab <Menubar.Shortcut>⌘T</Menubar.Shortcut>
            </Menubar.Item>
            <Menubar.Item>
              New Window <Menubar.Shortcut>⌘N</Menubar.Shortcut>
            </Menubar.Item>
            <Menubar.Item disabled>New Incognito Window</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Sub>
              <Menubar.SubTrigger>Share</Menubar.SubTrigger>
              <Menubar.SubContent>
                <Menubar.Item>Email link</Menubar.Item>
                <Menubar.Item>Messages</Menubar.Item>
                <Menubar.Item>Notes</Menubar.Item>
              </Menubar.SubContent>
            </Menubar.Sub>
            <Menubar.Separator />
            <Menubar.Item>
              Print... <Menubar.Shortcut>⌘P</Menubar.Shortcut>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu>
          <Menubar.Trigger>Edit</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>
              Undo <Menubar.Shortcut>⌘Z</Menubar.Shortcut>
            </Menubar.Item>
            <Menubar.Item>
              Redo <Menubar.Shortcut>⇧⌘Z</Menubar.Shortcut>
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Sub>
              <Menubar.SubTrigger>Find</Menubar.SubTrigger>
              <Menubar.SubContent>
                <Menubar.Item>Search the web</Menubar.Item>
                <Menubar.Separator />
                <Menubar.Item>Find...</Menubar.Item>
                <Menubar.Item>Find Next</Menubar.Item>
                <Menubar.Item>Find Previous</Menubar.Item>
              </Menubar.SubContent>
            </Menubar.Sub>
            <Menubar.Separator />
            <Menubar.Item>Cut</Menubar.Item>
            <Menubar.Item>Copy</Menubar.Item>
            <Menubar.Item>Paste</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu>
          <Menubar.Trigger>View</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.CheckboxItem>
              Always Show Bookmarks Bar
            </Menubar.CheckboxItem>
            <Menubar.CheckboxItem checked>
              Always Show Full URLs
            </Menubar.CheckboxItem>
            <Menubar.Separator />
            <Menubar.Item inset>
              Reload <Menubar.Shortcut>⌘R</Menubar.Shortcut>
            </Menubar.Item>
            <Menubar.Item disabled inset>
              Force Reload <Menubar.Shortcut>⇧⌘R</Menubar.Shortcut>
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item inset>Toggle Fullscreen</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item inset>Hide Sidebar</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu>
          <Menubar.Trigger>Profiles</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.RadioGroup value="benoit">
              <Menubar.RadioItem value="andy">Andy</Menubar.RadioItem>
              <Menubar.RadioItem value="benoit">Benoit</Menubar.RadioItem>
              <Menubar.RadioItem value="Luis">Luis</Menubar.RadioItem>
            </Menubar.RadioGroup>
            <Menubar.Separator />
            <Menubar.Item inset>Edit...</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item inset>Add Profile...</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
      </>
  }
}`,...(o=(b=t.parameters)==null?void 0:b.docs)==null?void 0:o.source}}};const I=["Default","MultipleMenus"];export{r as Default,t as MultipleMenus,I as __namedExportsOrder,h as default};
