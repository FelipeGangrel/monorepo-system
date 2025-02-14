import{j as e}from"./jsx-runtime-D_zvdyIk.js";/* empty css                */import{r as f}from"./index-CXcpQZ5J.js";import{t as U,a as $}from"./utils-Dec1Exbm.js";import{C as g,a as x,f as i}from"./calendar-B4kqJj26.js";import{P as a}from"./popover-CM32oPe3.js";import{C as h}from"./calendar-BfPEkkOs.js";import{B as P}from"./button-DmDyehya.js";import{S as r}from"./select-pXMv_Zyr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./intl-SEpHnTkT.js";import"./createLucideIcon-D-niisEM.js";import"./chevron-right-BTFjDaLX.js";import"./index-DW48STyt.js";import"./index-Bd7YGvbB.js";import"./index-CiRIfjw3.js";import"./index-DAer1WYL.js";import"./index-Yg3aDjnU.js";import"./index-BI2CIJjy.js";import"./index-DJQWtO6Q.js";import"./index-B97ZzoEQ.js";import"./index-D_Yx1edV.js";import"./index-CwgaEOf9.js";import"./index-Lbo4_nNx.js";import"./index-DFitwuLX.js";import"./index-C1fyEfKG.js";import"./index-DTz3VF55.js";import"./index-bNgk5zX4.js";import"./index-BdQq_4o_.js";import"./index-CZW1kccr.js";import"./index-Kvn1RAX5.js";import"./index-B1wjFh51.js";import"./chevron-down-DcXjIPAM.js";import"./check-BpGw_sZq.js";function S(...t){return U($(t))}const Ce={title:"Core UI/Calendar",component:g,tags:["autodocs"],args:{showOutsideDays:!0,language:"pt"},argTypes:{language:{control:"select",options:["en","pt","es","de"]}},parameters:{layout:"centered",docs:{description:{component:"A date field component that allows users to enter and edit date."}}}},u=new Date,c={args:{mode:"single",onSelect:console.log}},l={args:{mode:"single",selected:u}},m={args:{mode:"range",selected:{from:u,to:x(u,7)}}},p={args:{mode:"single",disabled:[{before:u}]}},s=()=>{const[t,o]=f.useState();return e.jsxs(a,{children:[e.jsx(a.Trigger,{asChild:!0,children:e.jsxs(P,{variant:"outline",className:S("w-[280px] justify-start text-left font-normal",!t&&"text-muted-foreground"),children:[e.jsx(h,{className:"mr-2 h-4 w-4"}),t?i(t,"PPP"):e.jsx("span",{children:"Pick a date"})]})}),e.jsx(a.Content,{className:"w-auto p-0",children:e.jsx(g,{mode:"single",selected:t,onSelect:o,initialFocus:!0})})]})},n=()=>{const[t,o]=f.useState({from:new Date(2022,0,20),to:x(new Date(2022,0,20),20)});return e.jsx("div",{className:"grid gap-2",children:e.jsxs(a,{children:[e.jsx(a.Trigger,{asChild:!0,children:e.jsxs(P,{id:"date",variant:"outline",className:S("w-[300px] justify-start text-left font-normal",!t&&"text-muted-foreground"),children:[e.jsx(h,{}),t!=null&&t.from?t.to?e.jsxs(e.Fragment,{children:[i(t.from,"LLL dd, y")," -"," ",i(t.to,"LLL dd, y")]}):i(t.from,"LLL dd, y"):e.jsx("span",{children:"Pick a date"})]})}),e.jsx(a.Content,{className:"w-auto p-0",align:"start",children:e.jsx(g,{initialFocus:!0,mode:"range",defaultMonth:t==null?void 0:t.from,selected:t,onSelect:o,numberOfMonths:2})})]})})},d=()=>{const[t,o]=f.useState();return e.jsxs(a,{children:[e.jsx(a.Trigger,{asChild:!0,children:e.jsxs(P,{variant:"outline",className:S("w-[280px] justify-start text-left font-normal",!t&&"text-muted-foreground"),children:[e.jsx(h,{}),t?i(t,"PPP"):e.jsx("span",{children:"Pick a date"})]})}),e.jsxs(a.Content,{className:"flex w-auto flex-col space-y-2 p-2",children:[e.jsxs(r,{onValueChange:A=>o(x(new Date,parseInt(A))),children:[e.jsx(r.Trigger,{children:e.jsx(r.Value,{placeholder:"Select"})}),e.jsxs(r.Content,{position:"popper",children:[e.jsx(r.Item,{value:"0",children:"Today"}),e.jsx(r.Item,{value:"1",children:"Tomorrow"}),e.jsx(r.Item,{value:"3",children:"In 3 days"}),e.jsx(r.Item,{value:"7",children:"In a week"})]})]}),e.jsx("div",{className:"rounded-md border",children:e.jsx(g,{mode:"single",selected:t,onSelect:o})})]})]})};s.__docgenInfo={description:"",methods:[],displayName:"DatePicker"};n.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker"};d.__docgenInfo={description:"",methods:[],displayName:"DatePickerWithPresets"};var D,v,j;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    onSelect: console.log
  }
}`,...(j=(v=c.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var y,C,w;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    selected: today
  }
}`,...(w=(C=l.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var I,N,L;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    mode: 'range',
    selected: {
      from: today,
      to: addDays(today, 7)
    }
  }
}`,...(L=(N=m.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var k,T,b;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    disabled: [{
      before: today
    }]
  }
}`,...(b=(T=p.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var R,B,_;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [date, setDate] = React.useState<Date>();
  return <Popover>
      <Popover.Trigger asChild>
        <Button variant={'outline'} className={cn('w-[280px] justify-start text-left font-normal', !date && 'text-muted-foreground')}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </Popover.Trigger>
      <Popover.Content className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </Popover.Content>
    </Popover>;
}`,...(_=(B=s.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var E,F,M;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20)
  });
  return <div className="grid gap-2">
      <Popover>
        <Popover.Trigger asChild>
          <Button id="date" variant={'outline'} className={cn('w-[300px] justify-start text-left font-normal', !date && 'text-muted-foreground')}>
            <CalendarIcon />
            {date?.from ? date.to ? <>
                  {format(date.from, 'LLL dd, y')} -{' '}
                  {format(date.to, 'LLL dd, y')}
                </> : format(date.from, 'LLL dd, y') : <span>Pick a date</span>}
          </Button>
        </Popover.Trigger>
        <Popover.Content className="w-auto p-0" align="start">
          <Calendar initialFocus mode="range" defaultMonth={date?.from} selected={date} onSelect={setDate} numberOfMonths={2} />
        </Popover.Content>
      </Popover>
    </div>;
}`,...(M=(F=n.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var W,O,V;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const [date, setDate] = React.useState<Date>();
  return <Popover>
      <Popover.Trigger asChild>
        <Button variant={'outline'} className={cn('w-[280px] justify-start text-left font-normal', !date && 'text-muted-foreground')}>
          <CalendarIcon />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </Popover.Trigger>
      <Popover.Content className="flex w-auto flex-col space-y-2 p-2">
        <Select onValueChange={(value: string) => setDate(addDays(new Date(), parseInt(value)))}>
          <Select.Trigger>
            <Select.Value placeholder="Select" />
          </Select.Trigger>
          <Select.Content position="popper">
            <Select.Item value="0">Today</Select.Item>
            <Select.Item value="1">Tomorrow</Select.Item>
            <Select.Item value="3">In 3 days</Select.Item>
            <Select.Item value="7">In a week</Select.Item>
          </Select.Content>
        </Select>
        <div className="rounded-md border">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
      </Popover.Content>
    </Popover>;
}`,...(V=(O=d.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const we=["Example","SingleDateSelection","RangeDateSelection","WithDisabledDates","DatePicker","DateRangePicker","DatePickerWithPresets"];export{s as DatePicker,d as DatePickerWithPresets,n as DateRangePicker,c as Example,m as RangeDateSelection,l as SingleDateSelection,p as WithDisabledDates,we as __namedExportsOrder,Ce as default};
