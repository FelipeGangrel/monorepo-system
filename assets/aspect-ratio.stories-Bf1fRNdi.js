import{j as a}from"./index-B6zMoDbo.js";import{c as n}from"./index-MWPviQxN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFkskS4.js";import"./index-Dxs5m6lS.js";const S={title:"Core UI/AspectRatio",component:n,tags:["autodocs"],decorators:[r=>a.jsx("div",{className:"w-[400px]",children:a.jsx(r,{})})],parameters:{docs:{description:{component:"Displays content within a desired ratio."}}}},c=a.jsx("img",{src:"https://images.unsplash.com/photo-1605030753481-bb38b08c384a?&auto=format&fit=crop&w=400&q=80",alt:"A house in a forest",className:"h-full w-full object-cover"}),e={args:{children:c,ratio:1},render:r=>a.jsx(n,{...r})},s={args:{children:c,ratio:4/3},render:r=>a.jsx(n,{...r})},o={args:{children:c,ratio:16/9}},t={args:{children:c,ratio:21/9}};var i,m,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: Image,
    ratio: 1
  },
  render: args => <AspectRatio {...args} />
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,g,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: Image,
    ratio: 4 / 3
  },
  render: args => <AspectRatio {...args} />
}`,...(l=(g=s.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,h,R;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: Image,
    ratio: 16 / 9
  }
}`,...(R=(h=o.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var b,x,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: Image,
    ratio: 21 / 9
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const v=["Ratio1by1","Ratio4by3","Ratio16by9","Ratio21by9"];export{o as Ratio16by9,e as Ratio1by1,t as Ratio21by9,s as Ratio4by3,v as __namedExportsOrder,S as default};
