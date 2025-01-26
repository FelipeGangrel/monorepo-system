import{j as e}from"./index-D9u8kSYr.js";import{i as s,j as r}from"./index-W8zSIVWl.js";import{r as l}from"./index-B5OHeJSP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DYwZEShM.js";const P={title:"core-ui/Carousel",component:s,tags:["autodocs"],parameters:{layout:"centered"}},o={args:{className:"w-full max-w-sm",opts:{align:"start"},children:e.jsxs(e.Fragment,{children:[e.jsx(s.Content,{children:Array.from({length:5}).map((t,a)=>e.jsx(s.Item,{className:"md:basis-1/2 lg:basis-1/3",children:e.jsx("div",{className:"p-1",children:e.jsx(r,{children:e.jsx(r.Content,{className:"flex aspect-square items-center justify-center p-6",children:e.jsx("span",{className:"text-3xl font-semibold",children:a+1})})})})},a))}),e.jsx(s.Previous,{}),e.jsx(s.Next,{})]})},render:t=>e.jsx(s,{...t})},c={args:{orientation:"vertical",className:"w-full max-w-sm",opts:{align:"start",loop:!0},children:e.jsxs(e.Fragment,{children:[e.jsx(s.Content,{className:"-mt-1 h-[200px]",children:Array.from({length:5}).map((t,a)=>e.jsx(s.Item,{className:"pt-1 md:basis-1/2",children:e.jsx("div",{className:"p-1",children:e.jsx(r,{children:e.jsx(r.Content,{className:"flex items-center justify-center p-6",children:e.jsx("span",{className:"text-3xl font-semibold",children:a+1})})})})},a))}),e.jsx(s.Previous,{}),e.jsx(s.Next,{})]})},render:t=>e.jsx("div",{className:"my-6",children:e.jsx(s,{...t})})},n=()=>{const[t,a]=l.useState(),[g,i]=l.useState(0),[v,y]=l.useState(0);return l.useEffect(()=>{t&&(y(t.scrollSnapList().length),i(t.selectedScrollSnap()+1),t.on("select",()=>{i(t.selectedScrollSnap()+1)}))},[t]),e.jsxs("div",{className:"mx-auto max-w-xs",children:[e.jsxs(s,{setApi:a,className:"w-full max-w-xs",children:[e.jsx(s.Content,{children:Array.from({length:5}).map((S,m)=>e.jsx(s.Item,{children:e.jsx(r,{children:e.jsx(r.Content,{className:"flex aspect-square items-center justify-center p-6",children:e.jsx("span",{className:"text-4xl font-semibold",children:m+1})})})},m))}),e.jsx(s.Previous,{}),e.jsx(s.Next,{})]}),e.jsxs("div",{className:"text-muted-foreground py-2 text-center text-sm",children:["Slide ",g," of ",v]})]})};n.__docgenInfo={description:"",methods:[],displayName:"WithApi"};var d,u,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    className: 'w-full max-w-sm',
    opts: {
      align: 'start'
    },
    children: <>
        <Carousel.Content>
          {Array.from({
          length: 5
        }).map((_, index) => <Carousel.Item key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <Card.Content className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </Card.Content>
                </Card>
              </div>
            </Carousel.Item>)}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </>
  },
  render: args => <Carousel {...args} />
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var x,C,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    className: 'w-full max-w-sm',
    opts: {
      align: 'start',
      loop: true
    },
    children: <>
        <Carousel.Content className="-mt-1 h-[200px]">
          {Array.from({
          length: 5
        }).map((_, index) => <Carousel.Item key={index} className="pt-1 md:basis-1/2">
              <div className="p-1">
                <Card>
                  <Card.Content className="flex items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </Card.Content>
                </Card>
              </div>
            </Carousel.Item>)}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </>
  },
  render: args => <div className="my-6">
      <Carousel {...args} />
    </div>
}`,...(f=(C=c.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var h,N,j;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return <div className="mx-auto max-w-xs">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <Carousel.Content>
          {Array.from({
          length: 5
        }).map((_, index) => <Carousel.Item key={index}>
              <Card>
                <Card.Content className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </Card.Content>
              </Card>
            </Carousel.Item>)}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        Slide {current} of {count}
      </div>
    </div>;
}`,...(j=(N=n.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};const E=["Default","VerticalOrientationAndLoop","WithApi"];export{o as Default,c as VerticalOrientationAndLoop,n as WithApi,E as __namedExportsOrder,P as default};
