import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css                */import{F as t,z as a,u as j,t as S}from"./index-DXuDcAt_.js";import{I as i}from"./input-FexwBTpQ.js";import{S as l}from"./select-pXMv_Zyr.js";import{L as c}from"./label-CvAuHLSi.js";import{C as v}from"./checkbox-3EZznuD6.js";import{D as I}from"./date-picker-DzeVb3hm.js";import{S as C}from"./switch-B2Thtr3I.js";import{B as d}from"./button-DmDyehya.js";import"./index-B97ZzoEQ.js";import"./index-CXcpQZ5J.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Bd7YGvbB.js";import"./utils-Dec1Exbm.js";import"./index-BI2CIJjy.js";import"./index-DJQWtO6Q.js";import"./index-BdQq_4o_.js";import"./index-DW48STyt.js";import"./index-CZW1kccr.js";import"./index-CiRIfjw3.js";import"./index-Kvn1RAX5.js";import"./index-DAer1WYL.js";import"./index-Yg3aDjnU.js";import"./index-D_Yx1edV.js";import"./index-CwgaEOf9.js";import"./index-Lbo4_nNx.js";import"./index-DFitwuLX.js";import"./index-DTz3VF55.js";import"./index-B1wjFh51.js";import"./chevron-down-DcXjIPAM.js";import"./createLucideIcon-D-niisEM.js";import"./check-BpGw_sZq.js";import"./index-bNgk5zX4.js";import"./index-C1fyEfKG.js";import"./intl-SEpHnTkT.js";import"./calendar-B4kqJj26.js";import"./chevron-right-BTFjDaLX.js";import"./calendar-BfPEkkOs.js";import"./x-DwkRq1qV.js";import"./popover-CM32oPe3.js";const pe={title:"react-hook-form/Form",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{source:{language:"tsx"},description:{component:"Building forms with React Hook Form and Zod."}}}},s=()=>{const x=a.object({populatedInput:a.string().optional(),requiredInput:a.string().min(1,{message:"Please enter a value"}),select:a.string().optional(),multipleCheckbox:a.array(a.string()).optional(),switch:a.boolean(),date:a.date()}),r=j({resolver:S(x),defaultValues:{populatedInput:"some default value",requiredInput:"",select:"",multipleCheckbox:[],switch:!1,date:void 0}}),f=o=>{alert("Submitted value: "+JSON.stringify(o))};return e.jsx("div",{className:"w-screen max-w-[400px]",children:e.jsx(t,{...r,children:e.jsxs("form",{className:"flex flex-col gap-4",onSubmit:r.handleSubmit(f),children:[e.jsx(t.Field,{control:r.control,name:"populatedInput",render:({field:o})=>e.jsxs(t.Item,{children:[e.jsx(t.Label,{children:"Populated input"}),e.jsx(i,{...o}),e.jsx(t.Message,{})]})}),e.jsx(t.Field,{control:r.control,name:"requiredInput",render:({field:o})=>e.jsxs(t.Item,{children:[e.jsx(t.Label,{children:"Required input"}),e.jsx(i,{...o}),e.jsx(t.Message,{})]})}),e.jsx(t.Field,{control:r.control,name:"select",render:({field:o})=>e.jsxs(t.Item,{children:[e.jsx(t.Label,{children:"Select"}),e.jsxs(l,{...o,onValueChange:o.onChange,children:[e.jsx(l.Trigger,{children:e.jsx(l.Value,{placeholder:"Select an option"})}),e.jsxs(l.Content,{children:[e.jsx(l.Item,{value:"Vite",children:"Vite"}),e.jsx(l.Item,{value:"NextJS",children:"NextJS"}),e.jsx(l.Item,{value:"CRA",disabled:!0,children:"Create React APP"})]})]}),e.jsx(t.Message,{})]})}),e.jsx(t.Field,{control:r.control,name:"multipleCheckbox",render:({field:o})=>e.jsxs(t.Item,{children:[e.jsx(t.Label,{children:"Checkbox"}),["web","mobile","desktop"].map(n=>{var m;return e.jsxs(c,{className:"flex items-center gap-2 font-normal",children:[e.jsx(v,{id:`${o.name}-${n}`,name:`${o.name}[]`,checked:(m=o.value)==null?void 0:m.includes(n),onCheckedChange:g=>{const F=g?[...o.value||[],n]:(o.value||[]).filter(b=>b!==n);o.onChange(F)}}),e.jsx("span",{children:n})]},n)}),e.jsx(t.Message,{})]})}),e.jsx(t.Field,{control:r.control,name:"date",render:({field:o})=>e.jsxs(t.Item,{className:"flex flex-col gap-2",children:[e.jsx(t.Label,{children:"Date of birth"}),e.jsx(I,{clearable:!0,language:"en",value:o.value,onChange:o.onChange}),e.jsx(t.Description,{children:"Your date of birth is used to calculate your age."}),e.jsx(t.Message,{})]})}),e.jsx(t.Field,{control:r.control,name:"switch",render:({field:o})=>e.jsxs(t.Item,{children:[e.jsx(c,{children:"Switch"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-10",children:o.value?"ON":"OFF"}),e.jsx(C,{value:"on",checked:o.value,onCheckedChange:o.onChange})]}),e.jsx(t.Message,{})]})}),e.jsx(d,{type:"reset",variant:"secondary",onClick:()=>r.reset(),children:"Reset"}),e.jsx(d,{type:"submit",children:"Submit"})]})})})};s.__docgenInfo={description:"",methods:[],displayName:"Example"};var p,u,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const ue=["Example"];export{s as Example,ue as __namedExportsOrder,pe as default};
