import{j as e}from"./index-B6zMoDbo.js";import{j as t}from"./index-MWPviQxN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFkskS4.js";import"./index-Dxs5m6lS.js";const l={title:"Core UI/ContextMenu",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Displays a menu to the user — such as a set of actions or functions — triggered by a button."}}}},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t.Trigger,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(t.Content,{className:"w-64",children:[e.jsxs(t.Item,{inset:!0,children:["Back",e.jsx(t.Shortcut,{children:"⌘["})]}),e.jsxs(t.Item,{inset:!0,disabled:!0,children:["Forward",e.jsx(t.Shortcut,{children:"⌘]"})]}),e.jsxs(t.Item,{inset:!0,children:["Reload",e.jsx(t.Shortcut,{children:"⌘R"})]}),e.jsxs(t.Sub,{children:[e.jsx(t.SubTrigger,{inset:!0,children:"More Tools"}),e.jsxs(t.SubContent,{className:"w-48",children:[e.jsxs(t.Item,{children:["Save Page As...",e.jsx(t.Shortcut,{children:"⇧⌘S"})]}),e.jsx(t.Item,{children:"Create Shortcut..."}),e.jsx(t.Item,{children:"Name Window..."}),e.jsx(t.Separator,{}),e.jsx(t.Item,{children:"Developer Tools"})]})]}),e.jsx(t.Separator,{}),e.jsxs(t.CheckboxItem,{checked:!0,children:["Show Bookmarks Bar",e.jsx(t.Shortcut,{children:"⌘⇧B"})]}),e.jsx(t.CheckboxItem,{children:"Show Full URLs"}),e.jsx(t.Separator,{}),e.jsxs(t.RadioGroup,{value:"pedro",children:[e.jsx(t.Label,{inset:!0,children:"People"}),e.jsx(t.Separator,{}),e.jsx(t.RadioItem,{value:"pedro",children:"Pedro Duarte"}),e.jsx(t.RadioItem,{value:"colm",children:"Colm Tuite"})]})]})]})}};var o,r,s,u,a;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: <>
        <ContextMenu.Trigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenu.Trigger>
        <ContextMenu.Content className="w-64">
          <ContextMenu.Item inset>
            Back
            <ContextMenu.Shortcut>⌘[</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Item inset disabled>
            Forward
            <ContextMenu.Shortcut>⌘]</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Item inset>
            Reload
            <ContextMenu.Shortcut>⌘R</ContextMenu.Shortcut>
          </ContextMenu.Item>
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger inset>More Tools</ContextMenu.SubTrigger>
            <ContextMenu.SubContent className="w-48">
              <ContextMenu.Item>
                Save Page As...
                <ContextMenu.Shortcut>⇧⌘S</ContextMenu.Shortcut>
              </ContextMenu.Item>
              <ContextMenu.Item>Create Shortcut...</ContextMenu.Item>
              <ContextMenu.Item>Name Window...</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item>Developer Tools</ContextMenu.Item>
            </ContextMenu.SubContent>
          </ContextMenu.Sub>
          <ContextMenu.Separator />
          <ContextMenu.CheckboxItem checked>
            Show Bookmarks Bar
            <ContextMenu.Shortcut>⌘⇧B</ContextMenu.Shortcut>
          </ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItem>Show Full URLs</ContextMenu.CheckboxItem>
          <ContextMenu.Separator />
          <ContextMenu.RadioGroup value="pedro">
            <ContextMenu.Label inset>People</ContextMenu.Label>
            <ContextMenu.Separator />
            <ContextMenu.RadioItem value="pedro">
              Pedro Duarte
            </ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="colm">
              Colm Tuite
            </ContextMenu.RadioItem>
          </ContextMenu.RadioGroup>
        </ContextMenu.Content>
      </>
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source},description:{story:`An example usage of the \`ContextMenu\` component, showcasing various menu items,
submenus, shortcuts, and states (e.g., disabled, checked).

Right-click to open the context menu`,...(a=(u=n.parameters)==null?void 0:u.docs)==null?void 0:a.description}}};const h=["Example"];export{n as Example,h as __namedExportsOrder,l as default};
