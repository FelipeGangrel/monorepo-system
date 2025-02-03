import{j as e}from"./index-ChoN-ss6.js";import{C as g,f,P as a,B as x,g as c,h,S as r}from"./index-ef7Bbbrs.js";import{r as P}from"./index-B5OHeJSP.js";import{C as S}from"./calendar-Y5SZFpeX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DYwZEShM.js";const K={title:"core-ui/Calendar",component:g,tags:["autodocs"],args:{showOutsideDays:!0},parameters:{layout:"centered"}},p=new Date,l={args:{mode:"single",onSelect:t=>{console.log(t)}}},i={args:{mode:"single",selected:p}},m={args:{mode:"range",selected:{from:p,to:f(p,7)}}},u={args:{mode:"single",disabled:[{before:p}]}},o=()=>{const[t,s]=P.useState();return e.jsxs(a,{children:[e.jsx(a.Trigger,{asChild:!0,children:e.jsxs(x,{variant:"outline",className:h("w-[280px] justify-start text-left font-normal",!t&&"text-muted-foreground"),children:[e.jsx(S,{className:"mr-2 h-4 w-4"}),t?c(t,"PPP"):e.jsx("span",{children:"Pick a date"})]})}),e.jsx(a.Content,{className:"w-auto p-0",children:e.jsx(g,{mode:"single",selected:t,onSelect:s,initialFocus:!0})})]})},n=()=>{const[t,s]=P.useState({from:new Date(2022,0,20),to:f(new Date(2022,0,20),20)});return e.jsx("div",{className:"grid gap-2",children:e.jsxs(a,{children:[e.jsx(a.Trigger,{asChild:!0,children:e.jsxs(x,{id:"date",variant:"outline",className:h("w-[300px] justify-start text-left font-normal",!t&&"text-muted-foreground"),children:[e.jsx(S,{}),t!=null&&t.from?t.to?e.jsxs(e.Fragment,{children:[c(t.from,"LLL dd, y")," -"," ",c(t.to,"LLL dd, y")]}):c(t.from,"LLL dd, y"):e.jsx("span",{children:"Pick a date"})]})}),e.jsx(a.Content,{className:"w-auto p-0",align:"start",children:e.jsx(g,{initialFocus:!0,mode:"range",defaultMonth:t==null?void 0:t.from,selected:t,onSelect:s,numberOfMonths:2})})]})})},d=()=>{const[t,s]=P.useState();return e.jsxs(a,{children:[e.jsx(a.Trigger,{asChild:!0,children:e.jsxs(x,{variant:"outline",className:h("w-[280px] justify-start text-left font-normal",!t&&"text-muted-foreground"),children:[e.jsx(S,{}),t?c(t,"PPP"):e.jsx("span",{children:"Pick a date"})]})}),e.jsxs(a.Content,{className:"flex w-auto flex-col space-y-2 p-2",children:[e.jsxs(r,{onValueChange:$=>s(f(new Date,parseInt($))),children:[e.jsx(r.Trigger,{children:e.jsx(r.Value,{placeholder:"Select"})}),e.jsxs(r.Content,{position:"popper",children:[e.jsx(r.Item,{value:"0",children:"Today"}),e.jsx(r.Item,{value:"1",children:"Tomorrow"}),e.jsx(r.Item,{value:"3",children:"In 3 days"}),e.jsx(r.Item,{value:"7",children:"In a week"})]})]}),e.jsx("div",{className:"rounded-md border",children:e.jsx(g,{mode:"single",selected:t,onSelect:s})})]})]})};o.__docgenInfo={description:"",methods:[],displayName:"DatePicker"};n.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker"};d.__docgenInfo={description:"",methods:[],displayName:"DatePickerWithPresets"};var D,v,j;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    onSelect: value => {
      console.log(value);
    }
  }
}`,...(j=(v=l.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var y,C,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    selected: today
  }
}`,...(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var I,N,L;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    mode: 'range',
    selected: {
      from: today,
      to: addDays(today, 7)
    }
  }
}`,...(L=(N=m.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var k,T,b;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    disabled: [{
      before: today
    }]
  }
}`,...(b=(T=u.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var R,B,_;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(_=(B=o.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var F,W,M;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
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
}`,...(M=(W=n.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var O,V,E;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [date, setDate] = React.useState<Date>();
  return <Popover>
      <Popover.Trigger asChild>
        <Button variant={'outline'} className={cn('w-[280px] justify-start text-left font-normal', !date && 'text-muted-foreground')}>
          <CalendarIcon />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </Popover.Trigger>
      <Popover.Content className="flex w-auto flex-col space-y-2 p-2">
        <Select onValueChange={value => setDate(addDays(new Date(), parseInt(value)))}>
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
}`,...(E=(V=d.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};const Q=["Default","SingleDateSelection","RangeDateSelection","WithDisabledDates","DatePicker","DateRangePicker","DatePickerWithPresets"];export{o as DatePicker,d as DatePickerWithPresets,n as DateRangePicker,l as Default,m as RangeDateSelection,i as SingleDateSelection,u as WithDisabledDates,Q as __namedExportsOrder,K as default};
