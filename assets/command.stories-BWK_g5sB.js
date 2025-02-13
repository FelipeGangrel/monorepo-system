import{j as e}from"./index-B6zMoDbo.js";import{i as r,X as t}from"./index-MWPviQxN.js";import{r as d}from"./index-Dxs5m6lS.js";import{C as j}from"./calendar-DT8zRPVc.js";import{S as I}from"./smile-cAcejo8G.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFkskS4.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=r("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=r("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=r("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=r("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),P={title:"Core UI/Command",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Fast, composable, unstyled command menu for React."}}}},o={args:{className:"w-screen max-w-[400px]",children:e.jsxs(e.Fragment,{children:[e.jsx(t.Input,{placeholder:"Type a command or search..."}),e.jsxs(t.List,{children:[e.jsx(t.Empty,{children:"No results found."}),e.jsxs(t.Group,{heading:"Suggestions",children:[e.jsx(t.Item,{children:"Calendar"}),e.jsx(t.Item,{children:"Search Emoji"}),e.jsx(t.Item,{children:"Calculator"})]}),e.jsx(t.Separator,{}),e.jsxs(t.Group,{heading:"Settings",children:[e.jsx(t.Item,{children:"Profile"}),e.jsx(t.Item,{children:"Billing"}),e.jsx(t.Item,{children:"Settings"})]})]})]})}},n=()=>{const[g,s]=d.useState(!1);return d.useEffect(()=>{const m=a=>{a.key==="j"&&(a.metaKey||a.ctrlKey)&&(a.preventDefault(),s(y=>!y))};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[]),e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Press"," ",e.jsxs("kbd",{className:"pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100",children:[e.jsx("span",{className:"text-xs",children:"⌘"}),"J"]})]}),e.jsxs(t.Dialog,{open:g,onOpenChange:s,children:[e.jsx(t.Input,{placeholder:"Type a command or search..."}),e.jsxs(t.List,{children:[e.jsx(t.Empty,{children:"No results found."}),e.jsxs(t.Group,{heading:"Suggestions",children:[e.jsxs(t.Item,{children:[e.jsx(j,{}),e.jsx("span",{children:"Calendar"})]}),e.jsxs(t.Item,{children:[e.jsx(I,{}),e.jsx("span",{children:"Search Emoji"})]}),e.jsxs(t.Item,{children:[e.jsx(S,{}),e.jsx("span",{children:"Calculator"})]})]}),e.jsx(t.Separator,{}),e.jsxs(t.Group,{heading:"Settings",children:[e.jsxs(t.Item,{children:[e.jsx(v,{}),e.jsx("span",{children:"Profile"}),e.jsx(t.Shortcut,{children:"⌘P"})]}),e.jsxs(t.Item,{children:[e.jsx(f,{}),e.jsx("span",{children:"Billing"}),e.jsx(t.Shortcut,{children:"⌘B"})]}),e.jsxs(t.Item,{children:[e.jsx(k,{}),e.jsx("span",{children:"Settings"}),e.jsx(t.Shortcut,{children:"⌘S"})]})]})]})]})]})};n.__docgenInfo={description:`A Command component demonstrating a dialog with keyboard shortcut support.
Features include:
- Shortcut: Press ⌘+J (Mac) or Ctrl+J (Windows) to open/close the command menu.
- Includes input for searching and categorized command groups.
- Interactive list items with icons and shortcuts for quick access.`,methods:[],displayName:"WithKeyboardShortcut"};var c,i,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    className: 'w-screen max-w-[400px]',
    children: <>
        <Command.Input placeholder="Type a command or search..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading="Suggestions">
            <Command.Item>Calendar</Command.Item>
            <Command.Item>Search Emoji</Command.Item>
            <Command.Item>Calculator</Command.Item>
          </Command.Group>
          <Command.Separator />
          <Command.Group heading="Settings">
            <Command.Item>Profile</Command.Item>
            <Command.Item>Billing</Command.Item>
            <Command.Item>Settings</Command.Item>
          </Command.Group>
        </Command.List>
      </>
  }
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,h,u,x,C;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(open => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);
  return <>
      <p className="text-sm text-muted-foreground">
        Press{' '}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>
      <Command.Dialog open={open} onOpenChange={setOpen}>
        <Command.Input placeholder="Type a command or search..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading="Suggestions">
            <Command.Item>
              <Calendar />
              <span>Calendar</span>
            </Command.Item>
            <Command.Item>
              <Smile />
              <span>Search Emoji</span>
            </Command.Item>
            <Command.Item>
              <Calculator />
              <span>Calculator</span>
            </Command.Item>
          </Command.Group>
          <Command.Separator />
          <Command.Group heading="Settings">
            <Command.Item>
              <User />
              <span>Profile</span>
              <Command.Shortcut>⌘P</Command.Shortcut>
            </Command.Item>
            <Command.Item>
              <CreditCard />
              <span>Billing</span>
              <Command.Shortcut>⌘B</Command.Shortcut>
            </Command.Item>
            <Command.Item>
              <Settings />
              <span>Settings</span>
              <Command.Shortcut>⌘S</Command.Shortcut>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>;
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source},description:{story:`A Command component demonstrating a dialog with keyboard shortcut support.
Features include:
- Shortcut: Press ⌘+J (Mac) or Ctrl+J (Windows) to open/close the command menu.
- Includes input for searching and categorized command groups.
- Interactive list items with icons and shortcuts for quick access.`,...(C=(x=n.parameters)==null?void 0:x.docs)==null?void 0:C.description}}};const K=["Example","WithKeyboardShortcut"];export{o as Example,n as WithKeyboardShortcut,K as __namedExportsOrder,P as default};
