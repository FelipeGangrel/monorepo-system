import{j as e}from"./index-B6zMoDbo.js";import{m,p as r,L as i,h as j,s as v,B as d}from"./index-MWPviQxN.js";import{F as t,z as l,u as S,D as I,t as C}from"./index-MJAPglt_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFkskS4.js";import"./index-Dxs5m6lS.js";import"./calendar-DT8zRPVc.js";const z={title:"react-hook-form/Form",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{source:{language:"tsx"},description:{component:"Building forms with React Hook Form and Zod."}}}},s=()=>{const x=l.object({populatedInput:l.string().optional(),requiredInput:l.string().min(1,{message:"Please enter a value"}),select:l.string().optional(),multipleCheckbox:l.array(l.string()).optional(),switch:l.boolean(),date:l.date()}),o=S({resolver:C(x),defaultValues:{populatedInput:"some default value",requiredInput:"",select:"",multipleCheckbox:[],switch:!1,date:void 0}}),g=a=>{alert("Submitted value: "+JSON.stringify(a))};return e.jsx("div",{className:"w-screen max-w-[400px]",children:e.jsx(t,{...o,children:e.jsxs("form",{className:"flex flex-col gap-4",onSubmit:o.handleSubmit(g),children:[e.jsx(t.Field,{control:o.control,name:"populatedInput",render:({field:a})=>e.jsxs(t.Item,{children:[e.jsx(t.Label,{children:"Populated input"}),e.jsx(m,{...a}),e.jsx(t.Message,{})]})}),e.jsx(t.Field,{control:o.control,name:"requiredInput",render:({field:a})=>e.jsxs(t.Item,{children:[e.jsx(t.Label,{children:"Required input"}),e.jsx(m,{...a}),e.jsx(t.Message,{})]})}),e.jsx(t.Field,{control:o.control,name:"select",render:({field:a})=>e.jsxs(t.Item,{children:[e.jsx(t.Label,{children:"Select"}),e.jsxs(r,{...a,onValueChange:a.onChange,children:[e.jsx(r.Trigger,{children:e.jsx(r.Value,{placeholder:"Select an option"})}),e.jsxs(r.Content,{children:[e.jsx(r.Item,{value:"Vite",children:"Vite"}),e.jsx(r.Item,{value:"NextJS",children:"NextJS"}),e.jsx(r.Item,{value:"CRA",disabled:!0,children:"Create React APP"})]})]}),e.jsx(t.Message,{})]})}),e.jsx(t.Field,{control:o.control,name:"multipleCheckbox",render:({field:a})=>e.jsxs(t.Item,{children:[e.jsx(t.Label,{children:"Checkbox"}),["web","mobile","desktop"].map(n=>{var c;return e.jsxs(i,{className:"flex items-center gap-2 font-normal",children:[e.jsx(j,{id:`${a.name}-${n}`,name:`${a.name}[]`,checked:(c=a.value)==null?void 0:c.includes(n),onCheckedChange:f=>{const F=f?[...a.value||[],n]:(a.value||[]).filter(b=>b!==n);a.onChange(F)}}),e.jsx("span",{children:n})]},n)}),e.jsx(t.Message,{})]})}),e.jsx(t.Field,{control:o.control,name:"date",render:({field:a})=>e.jsxs(t.Item,{className:"flex flex-col gap-2",children:[e.jsx(t.Label,{children:"Date of birth"}),e.jsx(I,{clearable:!0,language:"en",value:a.value,onChange:a.onChange}),e.jsx(t.Description,{children:"Your date of birth is used to calculate your age."}),e.jsx(t.Message,{})]})}),e.jsx(t.Field,{control:o.control,name:"switch",render:({field:a})=>e.jsxs(t.Item,{children:[e.jsx(i,{children:"Switch"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-10",children:a.value?"ON":"OFF"}),e.jsx(v,{value:"on",checked:a.value,onCheckedChange:a.onChange})]}),e.jsx(t.Message,{})]})}),e.jsx(d,{type:"reset",variant:"secondary",onClick:()=>o.reset(),children:"Reset"}),e.jsx(d,{type:"submit",children:"Submit"})]})})})};s.__docgenInfo={description:"",methods:[],displayName:"Example"};var u,p,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const formSchema = z.object({
    populatedInput: z.string().optional(),
    requiredInput: z.string().min(1, {
      message: 'Please enter a value'
    }),
    select: z.string().optional(),
    multipleCheckbox: z.array(z.string()).optional(),
    switch: z.boolean(),
    date: z.date()
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      populatedInput: 'some default value',
      requiredInput: '',
      select: '',
      multipleCheckbox: [],
      switch: false,
      date: undefined
    }
  });
  const onSubmit = (data: Partial<z.infer<typeof formSchema>>) => {
    alert('Submitted value: ' + JSON.stringify(data));
  };
  return <div className="w-screen max-w-[400px]">
      <Form {...form}>
        <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
          <Form.Field control={form.control} name="populatedInput" render={({
          field
        }) => <Form.Item>
                <Form.Label>Populated input</Form.Label>
                <Input {...field} />
                <Form.Message />
              </Form.Item>} />
          <Form.Field control={form.control} name="requiredInput" render={({
          field
        }) => <Form.Item>
                <Form.Label>Required input</Form.Label>
                <Input {...field} />
                <Form.Message />
              </Form.Item>} />
          <Form.Field control={form.control} name="select" render={({
          field
        }) => <Form.Item>
                <Form.Label>Select</Form.Label>
                <Select {...field} onValueChange={field.onChange}>
                  <Select.Trigger>
                    <Select.Value placeholder="Select an option" />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.Item value="Vite">Vite</Select.Item>
                    <Select.Item value="NextJS">NextJS</Select.Item>
                    <Select.Item value="CRA" disabled>
                      Create React APP
                    </Select.Item>
                  </Select.Content>
                </Select>
                <Form.Message />
              </Form.Item>} />
          <Form.Field control={form.control} name="multipleCheckbox" render={({
          field
        }) => <Form.Item>
                <Form.Label>Checkbox</Form.Label>
                {['web', 'mobile', 'desktop'].map(value => <Label key={value} className="flex items-center gap-2 font-normal">
                    <Checkbox id={\`\${field.name}-\${value}\`} name={\`\${field.name}[]\`} checked={(field.value as string[])?.includes(value)} onCheckedChange={checked => {
              const newValue = checked ? [...(field.value as string[] || []), value] : (field.value as string[] || []).filter(v => v !== value);
              field.onChange(newValue);
            }} />
                    <span>{value}</span>
                  </Label>)}
                <Form.Message />
              </Form.Item>} />
          <Form.Field control={form.control} name="date" render={({
          field
        }) => <Form.Item className="flex flex-col gap-2">
                <Form.Label>Date of birth</Form.Label>
                <DatePicker clearable language={'en'} value={field.value} onChange={field.onChange} />
                <Form.Description>
                  Your date of birth is used to calculate your age.
                </Form.Description>
                <Form.Message />
              </Form.Item>} />
          <Form.Field control={form.control} name="switch" render={({
          field
        }) => <Form.Item>
                <Label>Switch</Label>
                <div className="flex items-center gap-2">
                  <span className="w-10">{field.value ? 'ON' : 'OFF'}</span>
                  <Switch value="on" checked={field.value} onCheckedChange={field.onChange} />
                </div>
                <Form.Message />
              </Form.Item>} />

          <Button type="reset" variant="secondary" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>;
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const P=["Example"];export{s as Example,P as __namedExportsOrder,z as default};
