import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css                */import{R as l,r as k}from"./index-CXcpQZ5J.js";import{c as xe}from"./index-CiRIfjw3.js";import{c as Ce}from"./index-CZW1kccr.js";import{u as ve}from"./index-Bd7YGvbB.js";import{c as Ie}from"./index-DW48STyt.js";import{u as re}from"./index-DTz3VF55.js";import{P as te}from"./index-Yg3aDjnU.js";import{c as ne,R as Te,T as je,C as be}from"./index-FSUkWDnt.js";import{u as ye}from"./index-CwgaEOf9.js";import{u as we}from"./index-Kvn1RAX5.js";import{c as D}from"./utils-Dec1Exbm.js";import{C as Ne}from"./chevron-down-DcXjIPAM.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B97ZzoEQ.js";import"./index-BI2CIJjy.js";import"./index-DJQWtO6Q.js";import"./index-C1fyEfKG.js";import"./createLucideIcon-D-niisEM.js";var A="Accordion",Re=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[O,_e,Pe]=Ce(A),[j,ao]=xe(A,[Pe,ne]),M=ne(),ce=l.forwardRef((o,i)=>{const{type:t,...c}=o,s=c,n=c;return e.jsx(O.Provider,{scope:o.__scopeAccordion,children:t==="multiple"?e.jsx(De,{...n,ref:i}):e.jsx(ke,{...s,ref:i})})});ce.displayName=A;var[ie,Se]=j(A),[se,Ee]=j(A,{collapsible:!1}),ke=l.forwardRef((o,i)=>{const{value:t,defaultValue:c,onValueChange:s=()=>{},collapsible:n=!1,...a}=o,[d,m]=re({prop:t,defaultProp:c,onChange:s});return e.jsx(ie,{scope:o.__scopeAccordion,value:d?[d]:[],onItemOpen:m,onItemClose:l.useCallback(()=>n&&m(""),[n,m]),children:e.jsx(se,{scope:o.__scopeAccordion,collapsible:n,children:e.jsx(ae,{...a,ref:i})})})}),De=l.forwardRef((o,i)=>{const{value:t,defaultValue:c,onValueChange:s=()=>{},...n}=o,[a=[],d]=re({prop:t,defaultProp:c,onChange:s}),m=l.useCallback(f=>d((g=[])=>[...g,f]),[d]),u=l.useCallback(f=>d((g=[])=>g.filter(y=>y!==f)),[d]);return e.jsx(ie,{scope:o.__scopeAccordion,value:a,onItemOpen:m,onItemClose:u,children:e.jsx(se,{scope:o.__scopeAccordion,collapsible:!0,children:e.jsx(ae,{...n,ref:i})})})}),[Oe,b]=j(A),ae=l.forwardRef((o,i)=>{const{__scopeAccordion:t,disabled:c,dir:s,orientation:n="vertical",...a}=o,d=l.useRef(null),m=ve(d,i),u=_e(t),g=we(s)==="ltr",y=Ie(o.onKeyDown,v=>{var K;if(!Re.includes(v.key))return;const fe=v.target,w=u().filter(S=>{var L;return!((L=S.ref.current)!=null&&L.disabled)}),I=w.findIndex(S=>S.ref.current===fe),H=w.length;if(I===-1)return;v.preventDefault();let p=I;const N=0,R=H-1,_=()=>{p=I+1,p>R&&(p=N)},P=()=>{p=I-1,p<N&&(p=R)};switch(v.key){case"Home":p=N;break;case"End":p=R;break;case"ArrowRight":n==="horizontal"&&(g?_():P());break;case"ArrowDown":n==="vertical"&&_();break;case"ArrowLeft":n==="horizontal"&&(g?P():_());break;case"ArrowUp":n==="vertical"&&P();break}const he=p%H;(K=w[he].ref.current)==null||K.focus()});return e.jsx(Oe,{scope:t,disabled:c,direction:s,orientation:n,children:e.jsx(O.Slot,{scope:t,children:e.jsx(te.div,{...a,"data-orientation":n,ref:m,onKeyDown:c?void 0:y})})})}),T="AccordionItem",[Me,V]=j(T),de=l.forwardRef((o,i)=>{const{__scopeAccordion:t,value:c,...s}=o,n=b(T,t),a=Se(T,t),d=M(t),m=ye(),u=c&&a.value.includes(c)||!1,f=n.disabled||o.disabled;return e.jsx(Me,{scope:t,open:u,disabled:f,triggerId:m,children:e.jsx(Te,{"data-orientation":n.orientation,"data-state":ue(u),...d,...s,ref:i,disabled:f,open:u,onOpenChange:g=>{g?a.onItemOpen(c):a.onItemClose(c)}})})});de.displayName=T;var le="AccordionHeader",me=l.forwardRef((o,i)=>{const{__scopeAccordion:t,...c}=o,s=b(A,t),n=V(le,t);return e.jsx(te.h3,{"data-orientation":s.orientation,"data-state":ue(n.open),"data-disabled":n.disabled?"":void 0,...c,ref:i})});me.displayName=le;var E="AccordionTrigger",pe=l.forwardRef((o,i)=>{const{__scopeAccordion:t,...c}=o,s=b(A,t),n=V(E,t),a=Ee(E,t),d=M(t);return e.jsx(O.ItemSlot,{scope:t,children:e.jsx(je,{"aria-disabled":n.open&&!a.collapsible||void 0,"data-orientation":s.orientation,id:n.triggerId,...d,...c,ref:i})})});pe.displayName=E;var Ae="AccordionContent",ge=l.forwardRef((o,i)=>{const{__scopeAccordion:t,...c}=o,s=b(A,t),n=V(Ae,t),a=M(t);return e.jsx(be,{role:"region","aria-labelledby":n.triggerId,"data-orientation":s.orientation,...a,...c,ref:i,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...o.style}})});ge.displayName=Ae;function ue(o){return o?"open":"closed"}var Ve=ce,He=de,Ke=me,Le=pe,Ue=ge;const r=Ve;r.displayName="Accordion";r.Item=k.forwardRef(({className:o,...i},t)=>e.jsx(He,{ref:t,className:D("core-border-b",o),...i}));r.Item.displayName="Accordion.Item";r.Trigger=k.forwardRef(({className:o,children:i,...t},c)=>e.jsx(Ke,{className:"core-flex",children:e.jsxs(Le,{ref:c,className:D("core-flex core-flex-1 core-items-center core-justify-between core-py-4 core-text-sm core-font-medium core-transition-all hover:core-underline core-text-left [&[data-state=open]>svg]:core-rotate-180",o),...t,children:[i,e.jsx(Ne,{className:"core-h-4 core-w-4 core-shrink-0 core-text-muted-foreground core-transition-transform core-duration-200"})]})}));r.Trigger.displayName="Accordion.Trigger";r.Content=k.forwardRef(({className:o,children:i,...t},c)=>e.jsx(Ue,{ref:c,className:"core-overflow-hidden core-text-sm data-[state=closed]:core-animate-accordion-up data-[state=open]:core-animate-accordion-down",...t,children:e.jsx("div",{className:D("core-pb-4 core-pt-0",o),children:i})}));r.Content.displayName="Accordion.Content";const lo={title:"Core UI/Accordion",component:r,tags:["autodocs"],args:{type:"single",collapsible:!0,className:"w-screen max-w-[400px]"},argTypes:{type:{control:{type:"radio"},options:["single","multiple"]},collapsible:{control:{type:"boolean"}}},parameters:{layout:"centered",docs:{description:{component:"A vertically stacked set of interactive headings that each reveal a section of content."}}}},h={render:o=>e.jsxs(r,{...o,children:[e.jsxs(r.Item,{value:"item-1",children:[e.jsx(r.Trigger,{children:"Accordion Title 1"}),e.jsx(r.Content,{children:"This is the content for the first item."})]}),e.jsxs(r.Item,{value:"item-2",children:[e.jsx(r.Trigger,{children:"Accordion Title 2"}),e.jsx(r.Content,{children:"This is the content for the second item."})]}),e.jsxs(r.Item,{value:"item-3",children:[e.jsx(r.Trigger,{children:"Accordion Title 3"}),e.jsx(r.Content,{children:"This is the content for the third item."})]})]})},x={args:{type:"multiple"},render:o=>e.jsxs(r,{...o,children:[e.jsxs(r.Item,{value:"item-1",children:[e.jsx(r.Trigger,{children:"Accordion Item 1"}),e.jsx(r.Content,{children:"Content for multiple accordion item 1."})]}),e.jsxs(r.Item,{value:"item-2",children:[e.jsx(r.Trigger,{children:"Accordion Item 2"}),e.jsx(r.Content,{children:"Content for multiple accordion item 2."})]}),e.jsxs(r.Item,{value:"item-3",children:[e.jsx(r.Trigger,{children:"Accordion Item 3"}),e.jsx(r.Content,{children:"Content for multiple accordion item 3."})]})]})},C={args:{type:"single",collapsible:!1},render:o=>e.jsxs(r,{...o,children:[e.jsxs(r.Item,{value:"item-1",children:[e.jsx(r.Trigger,{children:"Accordion Title 1"}),e.jsx(r.Content,{children:"You cannot collapse this once opened."})]}),e.jsxs(r.Item,{value:"item-2",children:[e.jsx(r.Trigger,{children:"Accordion Title 2"}),e.jsx(r.Content,{children:"Second item that cannot be collapsed once opened."})]})]})};var U,Y,z,G,$;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Accordion Title 1</Accordion.Trigger>
        <Accordion.Content>
          This is the content for the first item.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Accordion Title 2</Accordion.Trigger>
        <Accordion.Content>
          This is the content for the second item.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Accordion Title 3</Accordion.Trigger>
        <Accordion.Content>
          This is the content for the third item.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
}`,...(z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:z.source},description:{story:`The default Accordion story demonstrates a single-type accordion
with collapsible functionality enabled.`,...($=(G=h.parameters)==null?void 0:G.docs)==null?void 0:$.description}}};var q,B,F,J,Q;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: 'multiple'
  },
  render: args => <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Accordion Item 1</Accordion.Trigger>
        <Accordion.Content>
          Content for multiple accordion item 1.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Accordion Item 2</Accordion.Trigger>
        <Accordion.Content>
          Content for multiple accordion item 2.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Accordion Item 3</Accordion.Trigger>
        <Accordion.Content>
          Content for multiple accordion item 3.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
}`,...(F=(B=x.parameters)==null?void 0:B.docs)==null?void 0:F.source},description:{story:`Demonstrates an accordion with 'multiple' type, allowing
multiple items to be open simultaneously.`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var W,X,Z,ee,oe;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: false
  },
  render: args => <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Accordion Title 1</Accordion.Trigger>
        <Accordion.Content>
          You cannot collapse this once opened.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Accordion Title 2</Accordion.Trigger>
        <Accordion.Content>
          Second item that cannot be collapsed once opened.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
}`,...(Z=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:`An Accordion story that demonstrates a non-collapsible
single-type accordion.`,...(oe=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:oe.description}}};const mo=["Single","Multiple","NonCollapsible"];export{x as Multiple,C as NonCollapsible,h as Single,mo as __namedExportsOrder,lo as default};
