import{j as a}from"./jsx-runtime-D_zvdyIk.js";/* empty css                */import{r as I}from"./index-CXcpQZ5J.js";import{P as E}from"./index-Yg3aDjnU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BI2CIJjy.js";import"./index-DJQWtO6Q.js";import"./index-B97ZzoEQ.js";import"./index-Bd7YGvbB.js";var N="AspectRatio",y=I.forwardRef((r,j)=>{const{ratio:v=1/1,style:A,...w}=r;return a.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/v}%`},"data-radix-aspect-ratio-wrapper":"",children:a.jsx(E.div,{...w,ref:j,style:{...A,position:"absolute",top:0,right:0,bottom:0,left:0}})})});y.displayName=N;var S=y;const c=S,U={title:"Core UI/AspectRatio",component:c,tags:["autodocs"],decorators:[r=>a.jsx("div",{className:"w-[400px]",children:a.jsx(r,{})})],parameters:{docs:{description:{component:"Displays content within a desired ratio."}}}},i=a.jsx("img",{src:"https://images.unsplash.com/photo-1605030753481-bb38b08c384a?&auto=format&fit=crop&w=400&q=80",alt:"A house in a forest",className:"h-full w-full object-cover"}),t={args:{children:i,ratio:1},render:r=>a.jsx(c,{...r})},o={args:{children:i,ratio:4/3},render:r=>a.jsx(c,{...r})},e={args:{children:i,ratio:16/9}},s={args:{children:i,ratio:21/9}};var n,p,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: Image,
    ratio: 1
  },
  render: args => <AspectRatio {...args} />
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,l,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: Image,
    ratio: 4 / 3
  },
  render: args => <AspectRatio {...args} />
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,h,R;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: Image,
    ratio: 16 / 9
  }
}`,...(R=(h=e.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var b,x,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: Image,
    ratio: 21 / 9
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const k=["Ratio1by1","Ratio4by3","Ratio16by9","Ratio21by9"];export{e as Ratio16by9,t as Ratio1by1,s as Ratio21by9,o as Ratio4by3,k as __namedExportsOrder,U as default};
