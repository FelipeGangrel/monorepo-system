import{j as e}from"./index-B6zMoDbo.js";import{R as a,L as l,B as F,u as b}from"./index-MWPviQxN.js";import{z as n,u as j,F as o,t as N}from"./index-MJAPglt_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFkskS4.js";import"./index-Dxs5m6lS.js";import"./calendar-DT8zRPVc.js";const w={title:"Core UI/Radio Group",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."}}}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a.Item,{value:"default",id:"r1"}),e.jsx(l,{htmlFor:"r1",children:"Default"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a.Item,{value:"comfortable",id:"r2"}),e.jsx(l,{htmlFor:"r2",children:"Comfortable"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a.Item,{value:"compact",id:"r3"}),e.jsx(l,{htmlFor:"r3",children:"Compact"})]})]})}},s=()=>{const f=n.object({type:n.enum(["all","mentions","none"],{required_error:"You need to select a notification type."})}),m=j({resolver:N(f)});function h(r){b("You submitted the following values:",{description:e.jsx("pre",{className:"mt-2 w-[324px] rounded-md bg-slate-950 p-4",children:e.jsx("code",{className:"w-full text-white",children:JSON.stringify(r,null,2)})})})}return e.jsx(o,{...m,children:e.jsxs("form",{onSubmit:m.handleSubmit(h),className:"w-[400px] space-y-6",children:[e.jsx(o.Field,{control:m.control,name:"type",render:({field:r})=>e.jsxs(o.Item,{className:"space-y-3",children:[e.jsx(o.Label,{children:"Notify me about..."}),e.jsx(o.Control,{children:e.jsxs(a,{onValueChange:r.onChange,defaultValue:r.value,className:"flex flex-col space-y-1",children:[e.jsxs(o.Item,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(o.Control,{children:e.jsx(a.Item,{value:"all"})}),e.jsx(o.Label,{className:"font-normal",children:"All new messages"})]}),e.jsxs(o.Item,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(o.Control,{children:e.jsx(a.Item,{value:"mentions"})}),e.jsx(o.Label,{className:"font-normal",children:"Direct messages and mentions"})]}),e.jsxs(o.Item,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(o.Control,{children:e.jsx(a.Item,{value:"none"})}),e.jsx(o.Label,{className:"font-normal",children:"Nothing"})]})]})}),e.jsx(o.Message,{})]})}),e.jsx(F,{type:"submit",children:"Submit"})]})})};s.__docgenInfo={description:"",methods:[],displayName:"FormExample"};var c,i,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,p,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(x=(p=s.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const R=["Example","FormExample"];export{t as Example,s as FormExample,R as __namedExportsOrder,w as default};
