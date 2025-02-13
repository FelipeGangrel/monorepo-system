import{j as e}from"./index-B6zMoDbo.js";import{n as a}from"./index-MWPviQxN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFkskS4.js";import"./index-Dxs5m6lS.js";const u={title:"Core UI/Resizable",component:a,tags:["autodocs"],argTypes:{direction:{control:"inline-radio",options:["horizontal","vertical"]}},parameters:{layout:"centered",docs:{description:{component:"Accessible resizable panel groups and layouts with keyboard support."}}}},s={args:{direction:"vertical",className:"min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Panel,{defaultSize:25,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Header"})})}),e.jsx(a.Handle,{}),e.jsx(a.Panel,{defaultSize:75,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Content"})})})]})}},l={args:{direction:"horizontal",className:"max-w-md rounded-lg border md:min-w-[450px]",children:e.jsxs(e.Fragment,{children:[e.jsx(a.Panel,{defaultSize:50,children:e.jsx("div",{className:"flex h-[200px] items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"One"})})}),e.jsx(a.Handle,{withHandle:!0}),e.jsx(a.Panel,{defaultSize:50,children:e.jsxs(a,{direction:"vertical",children:[e.jsx(a.Panel,{defaultSize:25,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Two"})})}),e.jsx(a.Handle,{withHandle:!0}),e.jsx(a.Panel,{defaultSize:75,children:e.jsx("div",{className:"flex h-full items-center justify-center p-6",children:e.jsx("span",{className:"font-semibold",children:"Three"})})})]})})]})}};var i,n,r;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    direction: 'vertical',
    className: 'min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]',
    children: <>
        <Resizable.Panel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Header</span>
          </div>
        </Resizable.Panel>
        <Resizable.Handle />
        <Resizable.Panel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </Resizable.Panel>
      </>
  }
}`,...(r=(n=s.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var t,d,c;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    className: 'max-w-md rounded-lg border md:min-w-[450px]',
    children: <>
        <Resizable.Panel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </div>
        </Resizable.Panel>
        <Resizable.Handle withHandle />
        <Resizable.Panel defaultSize={50}>
          <Resizable direction="vertical">
            <Resizable.Panel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </Resizable.Panel>
            <Resizable.Handle withHandle />
            <Resizable.Panel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </Resizable.Panel>
          </Resizable>
        </Resizable.Panel>
      </>
  }
}`,...(c=(d=l.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const h=["Example","WithHandle"];export{s as Example,l as WithHandle,h as __namedExportsOrder,u as default};
