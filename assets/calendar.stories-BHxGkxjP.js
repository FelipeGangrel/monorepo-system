import{C as y,f as b}from"./index-Cob0ihi4.js";import"./index-B5OHeJSP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D9u8kSYr.js";import"./index-DYwZEShM.js";const O={title:"core-ui/Calendar",component:y,tags:["autodocs"],args:{showOutsideDays:!0},parameters:{layout:"centered"}},r=new Date,e={args:{mode:"single",onSelect:f=>{console.log(f)}}},a={args:{mode:"single",selected:r}},s={args:{mode:"range",selected:{from:r,to:b(r,7)}}},o={args:{mode:"single",disabled:[{before:r}]}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    onSelect: value => {
      console.log(value);
    }
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,l,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    selected: today
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var i,g,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    mode: 'range',
    selected: {
      from: today,
      to: addDays(today, 7)
    }
  }
}`,...(p=(g=s.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var u,D,S;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    mode: 'single',
    disabled: [{
      before: today
    }]
  }
}`,...(S=(D=o.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const R=["Default","SingleDateSelection","RangeDateSelection","WithDisabledDates"];export{e as Default,s as RangeDateSelection,a as SingleDateSelection,o as WithDisabledDates,R as __namedExportsOrder,O as default};
