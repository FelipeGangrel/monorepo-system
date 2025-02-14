import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css                */import{r as u}from"./index-CXcpQZ5J.js";import{c as me}from"./index-CZW1kccr.js";import{u as pe}from"./index-Kvn1RAX5.js";import{c as S}from"./index-DW48STyt.js";import{u as Me}from"./index-Bd7YGvbB.js";import{c as xe}from"./index-CiRIfjw3.js";import{u as N}from"./index-CwgaEOf9.js";import{c as he,A as fe,C as ge,G as Ie,L as Se,I as ve,a as je,b as Re,d as Ce,e as we,S as Ne,f as ye,g as Te,h as _e,R as Pe,P as Ae,i as Ee}from"./index-DcLettmu.js";import{c as U,R as ke,I as Oe,C as Fe}from"./index-CjxkqA-i.js";import{P as V}from"./index-Yg3aDjnU.js";import{u as z}from"./index-DTz3VF55.js";import{c as I}from"./utils-Dec1Exbm.js";import{C as Ge}from"./chevron-right-BTFjDaLX.js";import{C as Le}from"./check-BpGw_sZq.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B97ZzoEQ.js";import"./index-DAer1WYL.js";import"./index-D_Yx1edV.js";import"./index-BI2CIJjy.js";import"./index-DJQWtO6Q.js";import"./index-Lbo4_nNx.js";import"./index-DFitwuLX.js";import"./index-C1fyEfKG.js";import"./createLucideIcon-D-niisEM.js";var C="Menubar",[y,De,Be]=me(C),[W,zr]=xe(C,[Be,U]),b=he(),H=U(),[Ke,P]=W(C),Z=u.forwardRef((n,o)=>{const{__scopeMenubar:a,value:t,onValueChange:s,defaultValue:M,loop:m=!0,dir:d,...c}=n,x=pe(d),i=H(a),[f="",p]=z({prop:t,onChange:s,defaultProp:M}),[g,l]=u.useState(null);return e.jsx(Ke,{scope:a,value:f,onMenuOpen:u.useCallback(h=>{p(h),l(h)},[p]),onMenuClose:u.useCallback(()=>p(""),[p]),onMenuToggle:u.useCallback(h=>{p(E=>E?"":h),l(h)},[p]),dir:x,loop:m,children:e.jsx(y.Provider,{scope:a,children:e.jsx(y.Slot,{scope:a,children:e.jsx(ke,{asChild:!0,...i,orientation:"horizontal",loop:m,dir:x,currentTabStopId:g,onCurrentTabStopIdChange:l,children:e.jsx(V.div,{role:"menubar",...c,ref:o})})})})})});Z.displayName=C;var A="MenubarMenu",[Ue,$]=W(A),q=n=>{const{__scopeMenubar:o,value:a,...t}=n,s=N(),M=a||s||"LEGACY_REACT_AUTO_VALUE",m=P(A,o),d=b(o),c=u.useRef(null),x=u.useRef(!1),i=m.value===M;return u.useEffect(()=>{i||(x.current=!1)},[i]),e.jsx(Ue,{scope:o,value:M,triggerId:N(),triggerRef:c,contentId:N(),wasKeyboardTriggerOpenRef:x,children:e.jsx(Pe,{...d,open:i,onOpenChange:f=>{f||m.onMenuClose()},modal:!1,dir:m.dir,...t})})};q.displayName=A;var T="MenubarTrigger",X=u.forwardRef((n,o)=>{const{__scopeMenubar:a,disabled:t=!1,...s}=n,M=H(a),m=b(a),d=P(T,a),c=$(T,a),x=u.useRef(null),i=Me(o,x,c.triggerRef),[f,p]=u.useState(!1),g=d.value===c.value;return e.jsx(y.ItemSlot,{scope:a,value:c.value,disabled:t,children:e.jsx(Oe,{asChild:!0,...M,focusable:!t,tabStopId:c.value,children:e.jsx(fe,{asChild:!0,...m,children:e.jsx(V.button,{type:"button",role:"menuitem",id:c.triggerId,"aria-haspopup":"menu","aria-expanded":g,"aria-controls":g?c.contentId:void 0,"data-highlighted":f?"":void 0,"data-state":g?"open":"closed","data-disabled":t?"":void 0,disabled:t,...s,ref:i,onPointerDown:S(n.onPointerDown,l=>{!t&&l.button===0&&l.ctrlKey===!1&&(d.onMenuOpen(c.value),g||l.preventDefault())}),onPointerEnter:S(n.onPointerEnter,()=>{var h;!!d.value&&!g&&(d.onMenuOpen(c.value),(h=x.current)==null||h.focus())}),onKeyDown:S(n.onKeyDown,l=>{t||(["Enter"," "].includes(l.key)&&d.onMenuToggle(c.value),l.key==="ArrowDown"&&d.onMenuOpen(c.value),["Enter"," ","ArrowDown"].includes(l.key)&&(c.wasKeyboardTriggerOpenRef.current=!0,l.preventDefault()))}),onFocus:S(n.onFocus,()=>p(!0)),onBlur:S(n.onBlur,()=>p(!1))})})})})});X.displayName=T;var Ve="MenubarPortal",Y=n=>{const{__scopeMenubar:o,...a}=n,t=b(o);return e.jsx(Ae,{...t,...a})};Y.displayName=Ve;var _="MenubarContent",J=u.forwardRef((n,o)=>{const{__scopeMenubar:a,align:t="start",...s}=n,M=b(a),m=P(_,a),d=$(_,a),c=De(a),x=u.useRef(!1);return e.jsx(ge,{id:d.contentId,"aria-labelledby":d.triggerId,"data-radix-menubar-content":"",...M,...s,ref:o,align:t,onCloseAutoFocus:S(n.onCloseAutoFocus,i=>{var p;!!!m.value&&!x.current&&((p=d.triggerRef.current)==null||p.focus()),x.current=!1,i.preventDefault()}),onFocusOutside:S(n.onFocusOutside,i=>{const f=i.target;c().some(g=>{var l;return(l=g.ref.current)==null?void 0:l.contains(f)})&&i.preventDefault()}),onInteractOutside:S(n.onInteractOutside,()=>{x.current=!0}),onEntryFocus:i=>{d.wasKeyboardTriggerOpenRef.current||i.preventDefault()},onKeyDown:S(n.onKeyDown,i=>{if(["ArrowRight","ArrowLeft"].includes(i.key)){const f=i.target,p=f.hasAttribute("data-radix-menubar-subtrigger"),g=f.closest("[data-radix-menubar-content]")!==i.currentTarget,h=(m.dir==="rtl"?"ArrowRight":"ArrowLeft")===i.key;if(!h&&p||g&&h)return;let v=c().filter(w=>!w.disabled).map(w=>w.value);h&&v.reverse();const k=v.indexOf(d.value);v=m.loop?ar(v,k+1):v.slice(k+1);const[O]=v;O&&m.onMenuOpen(O)}},{checkForDefaultPrevented:!1}),style:{...n.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}})});J.displayName=_;var ze="MenubarGroup",Q=u.forwardRef((n,o)=>{const{__scopeMenubar:a,...t}=n,s=b(a);return e.jsx(Ie,{...s,...t,ref:o})});Q.displayName=ze;var We="MenubarLabel",ee=u.forwardRef((n,o)=>{const{__scopeMenubar:a,...t}=n,s=b(a);return e.jsx(Se,{...s,...t,ref:o})});ee.displayName=We;var He="MenubarItem",re=u.forwardRef((n,o)=>{const{__scopeMenubar:a,...t}=n,s=b(a);return e.jsx(ve,{...s,...t,ref:o})});re.displayName=He;var Ze="MenubarCheckboxItem",ne=u.forwardRef((n,o)=>{const{__scopeMenubar:a,...t}=n,s=b(a);return e.jsx(je,{...s,...t,ref:o})});ne.displayName=Ze;var $e="MenubarRadioGroup",ae=u.forwardRef((n,o)=>{const{__scopeMenubar:a,...t}=n,s=b(a);return e.jsx(Re,{...s,...t,ref:o})});ae.displayName=$e;var qe="MenubarRadioItem",oe=u.forwardRef((n,o)=>{const{__scopeMenubar:a,...t}=n,s=b(a);return e.jsx(Ce,{...s,...t,ref:o})});oe.displayName=qe;var Xe="MenubarItemIndicator",te=u.forwardRef((n,o)=>{const{__scopeMenubar:a,...t}=n,s=b(a);return e.jsx(we,{...s,...t,ref:o})});te.displayName=Xe;var Ye="MenubarSeparator",se=u.forwardRef((n,o)=>{const{__scopeMenubar:a,...t}=n,s=b(a);return e.jsx(Ne,{...s,...t,ref:o})});se.displayName=Ye;var Je="MenubarArrow",Qe=u.forwardRef((n,o)=>{const{__scopeMenubar:a,...t}=n,s=b(a);return e.jsx(ye,{...s,...t,ref:o})});Qe.displayName=Je;var er="MenubarSub",ue=n=>{const{__scopeMenubar:o,children:a,open:t,onOpenChange:s,defaultOpen:M}=n,m=b(o),[d=!1,c]=z({prop:t,defaultProp:M,onChange:s});return e.jsx(Ee,{...m,open:d,onOpenChange:c,children:a})};ue.displayName=er;var rr="MenubarSubTrigger",ce=u.forwardRef((n,o)=>{const{__scopeMenubar:a,...t}=n,s=b(a);return e.jsx(Te,{"data-radix-menubar-subtrigger":"",...s,...t,ref:o})});ce.displayName=rr;var nr="MenubarSubContent",ie=u.forwardRef((n,o)=>{const{__scopeMenubar:a,...t}=n,s=b(a);return e.jsx(_e,{...s,"data-radix-menubar-content":"",...t,ref:o,style:{...n.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}})});ie.displayName=nr;function ar(n,o){return n.map((a,t)=>n[(o+t)%n.length])}var de=Z,or=q,tr=X,le=Y,sr=J,ur=Q,cr=ee,ir=re,dr=ne,lr=ae,br=oe,be=te,mr=se,pr=ue,Mr=ce,xr=ie;const r=u.forwardRef(({className:n,...o},a)=>e.jsx(de,{ref:a,className:I("core-flex core-h-9 core-items-center core-space-x-1 core-rounded-md core-border core-bg-background core-p-1 core-shadow-sm",n),...o}));r.displayName=de.displayName;r.Menu=or;r.Menu.displayName="Menubar.Menu";r.Group=ur;r.Group.displayName="Menubar.Group";r.Portal=le;r.Portal.displayName="Menubar.Portal";r.Sub=pr;r.Sub.displayName="Menubar.Sub";r.RadioGroup=lr;r.RadioGroup.displayName="Menubar.RadioGroup";r.Trigger=u.forwardRef(({className:n,...o},a)=>e.jsx(tr,{ref:a,className:I("core-flex core-cursor-default core-select-none core-items-center core-rounded-sm core-px-3 core-py-1 core-text-sm core-font-medium core-outline-none focus:core-bg-accent focus:core-text-accent-foreground data-[state=open]:core-bg-accent data-[state=open]:core-text-accent-foreground",n),...o}));r.Trigger.displayName="Menubar.Trigger";r.SubTrigger=u.forwardRef(({className:n,inset:o,children:a,...t},s)=>e.jsxs(Mr,{ref:s,className:I("core-flex core-cursor-default core-select-none core-items-center core-rounded-sm core-px-2 core-py-1.5 core-text-sm core-outline-none focus:core-bg-accent focus:core-text-accent-foreground data-[state=open]:core-bg-accent data-[state=open]:core-text-accent-foreground",o&&"core-pl-8",n),...t,children:[a,e.jsx(Ge,{className:"core-ml-auto core-h-4 core-w-4"})]}));r.SubTrigger.displayName="Menubar.SubTrigger";r.SubContent=u.forwardRef(({className:n,...o},a)=>e.jsx(xr,{ref:a,className:I("core-z-50 core-min-w-[8rem] core-overflow-hidden core-rounded-md core-border core-bg-popover core-p-1 core-text-popover-foreground core-shadow-lg data-[state=open]:core-animate-in data-[state=closed]:core-animate-out data-[state=closed]:core-fade-out-0 data-[state=open]:core-fade-in-0 data-[state=closed]:core-zoom-out-95 data-[state=open]:core-zoom-in-95 data-[side=bottom]:core-slide-in-from-top-2 data-[side=left]:core-slide-in-from-right-2 data-[side=right]:core-slide-in-from-left-2 data-[side=top]:core-slide-in-from-bottom-2",n),...o}));r.SubContent.displayName="Menubar.SubContent";r.Content=u.forwardRef(({className:n,align:o="start",alignOffset:a=-4,sideOffset:t=8,...s},M)=>e.jsx(le,{children:e.jsx(sr,{ref:M,align:o,alignOffset:a,sideOffset:t,className:I("core-z-50 core-min-w-[12rem] core-overflow-hidden core-rounded-md core-border core-bg-popover core-p-1 core-text-popover-foreground core-shadow-md data-[state=open]:core-animate-in data-[state=closed]:core-fade-out-0 data-[state=open]:core-fade-in-0 data-[state=closed]:core-zoom-out-95 data-[state=open]:core-zoom-in-95 data-[side=bottom]:core-slide-in-from-top-2 data-[side=left]:core-slide-in-from-right-2 data-[side=right]:core-slide-in-from-left-2 data-[side=top]:core-slide-in-from-bottom-2",n),...s})}));r.Content.displayName="Menubar.Content";r.Item=u.forwardRef(({className:n,inset:o,...a},t)=>e.jsx(ir,{ref:t,className:I("core-relative core-flex core-cursor-default core-select-none core-items-center core-rounded-sm core-px-2 core-py-1.5 core-text-sm core-outline-none focus:core-bg-accent focus:core-text-accent-foreground data-[disabled]:core-pointer-events-none data-[disabled]:core-opacity-50",o&&"core-pl-8",n),...a}));r.Item.displayName="Menubar.Item";r.CheckboxItem=u.forwardRef(({className:n,children:o,checked:a,...t},s)=>e.jsxs(dr,{ref:s,className:I("core-relative core-flex core-cursor-default core-select-none core-items-center core-rounded-sm core-py-1.5 core-pl-8 core-pr-2 core-text-sm core-outline-none focus:core-bg-accent focus:core-text-accent-foreground data-[disabled]:core-pointer-events-none data-[disabled]:core-opacity-50",n),checked:a,...t,children:[e.jsx("span",{className:"core-absolute core-left-2 core-flex core-h-3.5 core-w-3.5 core-items-center core-justify-center",children:e.jsx(be,{children:e.jsx(Le,{className:"core-h-4 core-w-4"})})}),o]}));r.CheckboxItem.displayName="Menubar.CheckboxItem";r.RadioItem=u.forwardRef(({className:n,children:o,...a},t)=>e.jsxs(br,{ref:t,className:I("core-relative core-flex core-cursor-default core-select-none core-items-center core-rounded-sm core-py-1.5 core-pl-8 core-pr-2 core-text-sm core-outline-none focus:core-bg-accent focus:core-text-accent-foreground data-[disabled]:core-pointer-events-none data-[disabled]:core-opacity-50",n),...a,children:[e.jsx("span",{className:"core-absolute core-left-2 core-flex core-h-3.5 core-w-3.5 core-items-center core-justify-center",children:e.jsx(be,{children:e.jsx(Fe,{className:"core-h-4 core-w-4 core-fill-current"})})}),o]}));r.RadioItem.displayName="Menubar.RadioItem";r.Label=u.forwardRef(({className:n,inset:o,...a},t)=>e.jsx(cr,{ref:t,className:I("core-px-2 core-py-1.5 core-text-sm core-font-semibold",o&&"core-pl-8",n),...a}));r.Label.displayName="Menubar.Label";r.Separator=u.forwardRef(({className:n,...o},a)=>e.jsx(mr,{ref:a,className:I("core--mx-1 core-my-1 core-h-px core-bg-muted",n),...o}));r.Separator.displayName="Menubar.Separator";r.Shortcut=({className:n,...o})=>e.jsx("span",{className:I("core-ml-auto core-text-xs core-tracking-widest core-text-muted-foreground",n),...o});r.Shortcut.displayName="Menubar.Shortcut";r.__docgenInfo={description:"",methods:[]};const Wr={title:"Core UI/Menubar",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands."}}}},j={args:{children:e.jsx(e.Fragment,{children:e.jsxs(r.Menu,{children:[e.jsx(r.Trigger,{children:"File"}),e.jsxs(r.Content,{children:[e.jsxs(r.Item,{children:["New Tab ",e.jsx(r.Shortcut,{children:"⌘T"})]}),e.jsx(r.Item,{children:"New Window"}),e.jsx(r.Separator,{}),e.jsx(r.Item,{children:"Share"}),e.jsx(r.Separator,{}),e.jsx(r.Item,{children:"Print"})]})]})})}},R={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(r.Menu,{children:[e.jsx(r.Trigger,{children:"File"}),e.jsxs(r.Content,{children:[e.jsxs(r.Item,{children:["New Tab ",e.jsx(r.Shortcut,{children:"⌘T"})]}),e.jsxs(r.Item,{children:["New Window ",e.jsx(r.Shortcut,{children:"⌘N"})]}),e.jsx(r.Item,{disabled:!0,children:"New Incognito Window"}),e.jsx(r.Separator,{}),e.jsxs(r.Sub,{children:[e.jsx(r.SubTrigger,{children:"Share"}),e.jsxs(r.SubContent,{children:[e.jsx(r.Item,{children:"Email link"}),e.jsx(r.Item,{children:"Messages"}),e.jsx(r.Item,{children:"Notes"})]})]}),e.jsx(r.Separator,{}),e.jsxs(r.Item,{children:["Print... ",e.jsx(r.Shortcut,{children:"⌘P"})]})]})]}),e.jsxs(r.Menu,{children:[e.jsx(r.Trigger,{children:"Edit"}),e.jsxs(r.Content,{children:[e.jsxs(r.Item,{children:["Undo ",e.jsx(r.Shortcut,{children:"⌘Z"})]}),e.jsxs(r.Item,{children:["Redo ",e.jsx(r.Shortcut,{children:"⇧⌘Z"})]}),e.jsx(r.Separator,{}),e.jsxs(r.Sub,{children:[e.jsx(r.SubTrigger,{children:"Find"}),e.jsxs(r.SubContent,{children:[e.jsx(r.Item,{children:"Search the web"}),e.jsx(r.Separator,{}),e.jsx(r.Item,{children:"Find..."}),e.jsx(r.Item,{children:"Find Next"}),e.jsx(r.Item,{children:"Find Previous"})]})]}),e.jsx(r.Separator,{}),e.jsx(r.Item,{children:"Cut"}),e.jsx(r.Item,{children:"Copy"}),e.jsx(r.Item,{children:"Paste"})]})]}),e.jsxs(r.Menu,{children:[e.jsx(r.Trigger,{children:"View"}),e.jsxs(r.Content,{children:[e.jsx(r.CheckboxItem,{children:"Always Show Bookmarks Bar"}),e.jsx(r.CheckboxItem,{checked:!0,children:"Always Show Full URLs"}),e.jsx(r.Separator,{}),e.jsxs(r.Item,{inset:!0,children:["Reload ",e.jsx(r.Shortcut,{children:"⌘R"})]}),e.jsxs(r.Item,{disabled:!0,inset:!0,children:["Force Reload ",e.jsx(r.Shortcut,{children:"⇧⌘R"})]}),e.jsx(r.Separator,{}),e.jsx(r.Item,{inset:!0,children:"Toggle Fullscreen"}),e.jsx(r.Separator,{}),e.jsx(r.Item,{inset:!0,children:"Hide Sidebar"})]})]}),e.jsxs(r.Menu,{children:[e.jsx(r.Trigger,{children:"Profiles"}),e.jsxs(r.Content,{children:[e.jsxs(r.RadioGroup,{value:"benoit",children:[e.jsx(r.RadioItem,{value:"andy",children:"Andy"}),e.jsx(r.RadioItem,{value:"benoit",children:"Benoit"}),e.jsx(r.RadioItem,{value:"Luis",children:"Luis"})]}),e.jsx(r.Separator,{}),e.jsx(r.Item,{inset:!0,children:"Edit..."}),e.jsx(r.Separator,{}),e.jsx(r.Item,{inset:!0,children:"Add Profile..."})]})]})]})}};var F,G,L;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(L=(G=j.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var D,B,K;R.parameters={...R.parameters,docs:{...(D=R.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(K=(B=R.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};const Hr=["Example","MultipleMenus"];export{j as Example,R as MultipleMenus,Hr as __namedExportsOrder,Wr as default};
