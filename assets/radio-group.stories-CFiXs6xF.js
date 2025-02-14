import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css                */import{z as S,u as $,F as c,t as Q}from"./index-DXuDcAt_.js";import{u as Z}from"./index-DrI3PcMD.js";import{r as i}from"./index-CXcpQZ5J.js";import{c as I}from"./index-DW48STyt.js";import{u as A}from"./index-Bd7YGvbB.js";import{c as D}from"./index-CiRIfjw3.js";import{P as g}from"./index-Yg3aDjnU.js";import{c as O,R as ee,I as oe,C as re}from"./index-CjxkqA-i.js";import{u as te}from"./index-DTz3VF55.js";import{u as ae}from"./index-Kvn1RAX5.js";import{u as se}from"./index-DFitwuLX.js";import{u as ne}from"./index-B1wjFh51.js";import{P as ce}from"./index-C1fyEfKG.js";import{c as M}from"./utils-Dec1Exbm.js";import{L as N}from"./label-CvAuHLSi.js";import{B as ie}from"./button-DmDyehya.js";import"./index-B97ZzoEQ.js";import"./index-BI2CIJjy.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DJQWtO6Q.js";import"./createLucideIcon-D-niisEM.js";import"./index-CZW1kccr.js";import"./index-CwgaEOf9.js";import"./index-bNgk5zX4.js";var C="Radio",[le,V]=D(C),[me,de]=le(C),q=i.forwardRef((r,t)=>{const{__scopeRadio:o,name:s,checked:a=!1,required:n,disabled:l,value:f="on",onCheck:u,form:x,...b}=r,[p,h]=i.useState(null),m=A(t,y=>h(y)),v=i.useRef(!1),R=p?x||!!p.closest("form"):!0;return e.jsxs(me,{scope:o,checked:a,disabled:l,children:[e.jsx(g.button,{type:"button",role:"radio","aria-checked":a,"data-state":K(a),"data-disabled":l?"":void 0,disabled:l,value:f,...b,ref:m,onClick:I(r.onClick,y=>{a||u==null||u(),R&&(v.current=y.isPropagationStopped(),v.current||y.stopPropagation())})}),R&&e.jsx(ue,{control:p,bubbles:!v.current,name:s,value:f,checked:a,required:n,disabled:l,form:x,style:{transform:"translateX(-100%)"}})]})});q.displayName=C;var z="RadioIndicator",B=i.forwardRef((r,t)=>{const{__scopeRadio:o,forceMount:s,...a}=r,n=de(z,o);return e.jsx(ce,{present:s||n.checked,children:e.jsx(g.span,{"data-state":K(n.checked),"data-disabled":n.disabled?"":void 0,...a,ref:t})})});B.displayName=z;var ue=r=>{const{control:t,checked:o,bubbles:s=!0,...a}=r,n=i.useRef(null),l=ne(o),f=se(t);return i.useEffect(()=>{const u=n.current,x=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(x,"checked").set;if(l!==o&&p){const h=new Event("click",{bubbles:s});p.call(u,o),u.dispatchEvent(h)}},[l,o,s]),e.jsx("input",{type:"radio","aria-hidden":!0,defaultChecked:o,...a,tabIndex:-1,ref:n,style:{...r.style,...f,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function K(r){return r?"checked":"unchecked"}var pe=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],w="RadioGroup",[fe,Ue]=D(w,[O,V]),Y=O(),T=V(),[xe,he]=fe(w),U=i.forwardRef((r,t)=>{const{__scopeRadioGroup:o,name:s,defaultValue:a,value:n,required:l=!1,disabled:f=!1,orientation:u,dir:x,loop:b=!0,onValueChange:p,...h}=r,m=Y(o),v=ae(x),[R,y]=te({prop:n,defaultProp:a,onChange:p});return e.jsx(xe,{scope:o,name:s,required:l,disabled:f,value:R,onValueChange:y,children:e.jsx(ee,{asChild:!0,...m,orientation:u,dir:v,loop:b,children:e.jsx(g.div,{role:"radiogroup","aria-required":l,"aria-orientation":u,"data-disabled":f?"":void 0,dir:v,...h,ref:t})})})});U.displayName=w;var H="RadioGroupItem",J=i.forwardRef((r,t)=>{const{__scopeRadioGroup:o,disabled:s,...a}=r,n=he(H,o),l=n.disabled||s,f=Y(o),u=T(o),x=i.useRef(null),b=A(t,x),p=n.value===a.value,h=i.useRef(!1);return i.useEffect(()=>{const m=R=>{pe.includes(R.key)&&(h.current=!0)},v=()=>h.current=!1;return document.addEventListener("keydown",m),document.addEventListener("keyup",v),()=>{document.removeEventListener("keydown",m),document.removeEventListener("keyup",v)}},[]),e.jsx(oe,{asChild:!0,...f,focusable:!l,active:p,children:e.jsx(q,{disabled:l,required:n.required,checked:p,...u,...a,name:n.name,ref:b,onCheck:()=>n.onValueChange(a.value),onKeyDown:I(m=>{m.key==="Enter"&&m.preventDefault()}),onFocus:I(a.onFocus,()=>{var m;h.current&&((m=x.current)==null||m.click())})})})});J.displayName=H;var ve="RadioGroupIndicator",W=i.forwardRef((r,t)=>{const{__scopeRadioGroup:o,...s}=r,a=T(o);return e.jsx(B,{...a,...s,ref:t})});W.displayName=ve;var be=U,X=J,Re=W;const d=i.forwardRef(({className:r,...t},o)=>e.jsx(be,{className:M("core-grid core-gap-2",r),...t,ref:o}));d.displayName="RadioGroup";d.Item=i.forwardRef(({className:r,...t},o)=>e.jsx(X,{ref:o,className:M("core-aspect-square core-h-4 core-w-4 core-rounded-full core-border core-border-primary core-text-primary core-shadow focus:core-outline-none focus-visible:core-ring-1 focus-visible:core-ring-ring disabled:core-cursor-not-allowed disabled:core-opacity-50",r),...t,children:e.jsx(Re,{className:"core-flex core-items-center core-justify-center",children:e.jsx(re,{className:"core-h-3.5 core-w-3.5 core-fill-primary"})})}));d.Item.displayName=X.displayName;d.__docgenInfo={description:"",methods:[],displayName:"RadioGroup"};const He={title:"Core UI/Radio Group",component:d,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."}}}},j={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(d.Item,{value:"default",id:"r1"}),e.jsx(N,{htmlFor:"r1",children:"Default"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(d.Item,{value:"comfortable",id:"r2"}),e.jsx(N,{htmlFor:"r2",children:"Comfortable"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(d.Item,{value:"compact",id:"r3"}),e.jsx(N,{htmlFor:"r3",children:"Compact"})]})]})}},F=()=>{const r=S.object({type:S.enum(["all","mentions","none"],{required_error:"You need to select a notification type."})}),t=$({resolver:Q(r)});function o(s){Z("You submitted the following values:",{description:e.jsx("pre",{className:"mt-2 w-[324px] rounded-md bg-slate-950 p-4",children:e.jsx("code",{className:"w-full text-white",children:JSON.stringify(s,null,2)})})})}return e.jsx(c,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(o),className:"w-[400px] space-y-6",children:[e.jsx(c.Field,{control:t.control,name:"type",render:({field:s})=>e.jsxs(c.Item,{className:"space-y-3",children:[e.jsx(c.Label,{children:"Notify me about..."}),e.jsx(c.Control,{children:e.jsxs(d,{onValueChange:s.onChange,defaultValue:s.value,className:"flex flex-col space-y-1",children:[e.jsxs(c.Item,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(c.Control,{children:e.jsx(d.Item,{value:"all"})}),e.jsx(c.Label,{className:"font-normal",children:"All new messages"})]}),e.jsxs(c.Item,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(c.Control,{children:e.jsx(d.Item,{value:"mentions"})}),e.jsx(c.Label,{className:"font-normal",children:"Direct messages and mentions"})]}),e.jsxs(c.Item,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(c.Control,{children:e.jsx(d.Item,{value:"none"})}),e.jsx(c.Label,{className:"font-normal",children:"Nothing"})]})]})}),e.jsx(c.Message,{})]})}),e.jsx(ie,{type:"submit",children:"Submit"})]})})};F.__docgenInfo={description:"",methods:[],displayName:"FormExample"};var G,E,L;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: <>
        <div className="flex items-center space-x-2">
          <RadioGroup.Item value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroup.Item value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroup.Item value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </>
  }
}`,...(L=(E=j.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var k,_,P;F.parameters={...F.parameters,docs:{...(k=F.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const FormSchema = z.object({
    type: z.enum(['all', 'mentions', 'none'], {
      required_error: 'You need to select a notification type.'
    })
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast('You submitted the following values:', {
      description: <pre className="mt-2 w-[324px] rounded-md bg-slate-950 p-4">
          <code className="w-full text-white">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
    });
  }
  return <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[400px] space-y-6">
        <Form.Field control={form.control} name="type" render={({
        field
      }) => <Form.Item className="space-y-3">
              <Form.Label>Notify me about...</Form.Label>
              <Form.Control>
                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                  <Form.Item className="flex items-center space-x-3 space-y-0">
                    <Form.Control>
                      <RadioGroup.Item value="all" />
                    </Form.Control>
                    <Form.Label className="font-normal">
                      All new messages
                    </Form.Label>
                  </Form.Item>
                  <Form.Item className="flex items-center space-x-3 space-y-0">
                    <Form.Control>
                      <RadioGroup.Item value="mentions" />
                    </Form.Control>
                    <Form.Label className="font-normal">
                      Direct messages and mentions
                    </Form.Label>
                  </Form.Item>
                  <Form.Item className="flex items-center space-x-3 space-y-0">
                    <Form.Control>
                      <RadioGroup.Item value="none" />
                    </Form.Control>
                    <Form.Label className="font-normal">Nothing</Form.Label>
                  </Form.Item>
                </RadioGroup>
              </Form.Control>
              <Form.Message />
            </Form.Item>} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>;
}`,...(P=(_=F.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};const Je=["Example","FormExample"];export{j as Example,F as FormExample,Je as __namedExportsOrder,He as default};
