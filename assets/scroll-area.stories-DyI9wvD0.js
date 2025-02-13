import{j as r}from"./index-B6zMoDbo.js";import{S as a,o as B}from"./index-MWPviQxN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFkskS4.js";import"./index-Dxs5m6lS.js";const z={title:"Core UI/ScrollArea",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{source:{language:"tsx"},description:{component:"Augments native scroll functionality for custom, cross-browser styling."}}}},n=()=>{const l=Array.from({length:50}).map((s,N,w)=>`v1.2.0-beta.${w.length-N}`);return r.jsxs("div",{className:"p-4",children:[r.jsx("h4",{className:"mb-4 text-sm font-medium leading-none",children:"Tags"}),l.map(s=>r.jsxs("div",{children:[r.jsx("div",{className:"text-sm",children:s}),r.jsx(B,{className:"my-2"})]},s))]})},A=()=>{const l=[{artist:"Ornella Binni",art:"https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80"},{artist:"Tom Byrom",art:"https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80"},{artist:"Vladimir Malyavko",art:"https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80"}];return r.jsx("div",{className:"flex w-max space-x-4 p-4",children:l.map(s=>r.jsxs("figure",{className:"shrink-0",children:[r.jsx("div",{className:"overflow-hidden rounded-md",children:r.jsx("img",{src:s.art,alt:`Photo by ${s.artist}`,className:"aspect-[3/4] h-fit w-fit object-cover",width:300,height:400})}),r.jsxs("figcaption",{className:"pt-2 text-xs text-muted-foreground",children:["Photo by"," ",r.jsx("span",{className:"font-semibold text-foreground",children:s.artist})]})]},s.artist))})},e={args:{className:"h-72 w-48 rounded-md border",children:r.jsxs(r.Fragment,{children:[r.jsx(n,{}),r.jsx(a.ScrollBar,{})]})}},o={args:{className:"h-72 w-48 rounded-md border",children:r.jsxs(r.Fragment,{children:[r.jsx(n,{}),r.jsx(a.ScrollBar,{className:"bg-foreground"})]})}},t={args:{className:"h-72 w-48 rounded-md border",children:r.jsxs(r.Fragment,{children:[r.jsx(n,{}),r.jsx(a.ScrollBar,{children:r.jsx(a.ScrollBarThumb,{className:"bg-foreground"})})]})}},c={args:{className:"w-96 whitespace-nowrap rounded-md border",children:r.jsxs(r.Fragment,{children:[r.jsx(A,{}),r.jsx(a.ScrollBar,{orientation:"horizontal"})]})}};var m,d,i;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    className: 'h-72 w-48 rounded-md border',
    children: <>
        <TagsComponent />
        <ScrollArea.ScrollBar />
      </>
  }
}`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,h,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    className: 'h-72 w-48 rounded-md border',
    children: <>
        <TagsComponent />
        <ScrollArea.ScrollBar className="bg-foreground" />
      </>
  }
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,x,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    className: 'h-72 w-48 rounded-md border',
    children: <>
        <TagsComponent />
        <ScrollArea.ScrollBar>
          <ScrollArea.ScrollBarThumb className="bg-foreground" />
        </ScrollArea.ScrollBar>
      </>
  }
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var S,f,j;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    className: 'w-96 whitespace-nowrap rounded-md border',
    children: <>
        <ArtworksComponent />
        <ScrollArea.ScrollBar orientation="horizontal" />
      </>
  }
}`,...(j=(f=c.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const E=["Example","WithCustomScrollbar","WithCustomThumb","WithHorizontalScroll"];export{e as Example,o as WithCustomScrollbar,t as WithCustomThumb,c as WithHorizontalScroll,E as __namedExportsOrder,z as default};
