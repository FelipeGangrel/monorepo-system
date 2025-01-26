import{j as e}from"./index-D9u8kSYr.js";import{m as t}from"./index-W8zSIVWl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DYwZEShM.js";import"./index-B5OHeJSP.js";const i={title:"core-ui/ContextMenu",component:t,tags:["autodocs"],parameters:{layout:"centered"}},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t.Trigger,{className:"flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm",children:"Right click here"}),e.jsxs(t.Content,{className:"w-64",children:[e.jsxs(t.Item,{inset:!0,children:["Back",e.jsx(t.Shortcut,{children:"⌘["})]}),e.jsxs(t.Item,{inset:!0,disabled:!0,children:["Forward",e.jsx(t.Shortcut,{children:"⌘]"})]}),e.jsxs(t.Item,{inset:!0,children:["Reload",e.jsx(t.Shortcut,{children:"⌘R"})]}),e.jsxs(t.Sub,{children:[e.jsx(t.SubTrigger,{inset:!0,children:"More Tools"}),e.jsxs(t.SubContent,{className:"w-48",children:[e.jsxs(t.Item,{children:["Save Page As...",e.jsx(t.Shortcut,{children:"⇧⌘S"})]}),e.jsx(t.Item,{children:"Create Shortcut..."}),e.jsx(t.Item,{children:"Name Window..."}),e.jsx(t.Separator,{}),e.jsx(t.Item,{children:"Developer Tools"})]})]}),e.jsx(t.Separator,{}),e.jsxs(t.CheckboxItem,{checked:!0,children:["Show Bookmarks Bar",e.jsx(t.Shortcut,{children:"⌘⇧B"})]}),e.jsx(t.CheckboxItem,{children:"Show Full URLs"}),e.jsx(t.Separator,{}),e.jsxs(t.RadioGroup,{value:"pedro",children:[e.jsx(t.Label,{inset:!0,children:"People"}),e.jsx(t.Separator,{}),e.jsx(t.RadioItem,{value:"pedro",children:"Pedro Duarte"}),e.jsx(t.RadioItem,{value:"colm",children:"Colm Tuite"})]})]})]})}};var o,r,u;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(u=(r=n.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};const l=["Default"];export{n as Default,l as __namedExportsOrder,i as default};
