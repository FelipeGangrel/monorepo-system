import{j as e}from"./index-B6zMoDbo.js";import{C as s,g as n}from"./index-MWPviQxN.js";import{r as o}from"./index-Dxs5m6lS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFkskS4.js";const k={title:"Core UI/Carousel",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A carousel with motion and swipe built using Embla."}}}},l={args:{className:"w-full max-w-sm",opts:{align:"start"},children:e.jsxs(e.Fragment,{children:[e.jsx(s.Content,{children:Array.from({length:5}).map((t,a)=>e.jsx(s.Item,{className:"md:basis-1/2 lg:basis-1/3",children:e.jsx("div",{className:"p-1",children:e.jsx(n,{children:e.jsx(n.Content,{className:"flex aspect-square items-center justify-center p-6",children:e.jsx("span",{className:"text-3xl font-semibold",children:a+1})})})})},a))}),e.jsx(s.Previous,{}),e.jsx(s.Next,{})]})},render:t=>e.jsx(s,{...t})},c={args:{orientation:"vertical",className:"w-full max-w-sm",opts:{align:"start",loop:!0},children:e.jsxs(e.Fragment,{children:[e.jsx(s.Content,{className:"max-h-[200px]",children:Array.from({length:5}).map((t,a)=>e.jsx(s.Item,{className:"pt-1 md:basis-1/2",children:e.jsx("div",{className:"p-1",children:e.jsx(n,{children:e.jsx(n.Content,{className:"flex items-center justify-center p-6",children:e.jsx("span",{className:"text-3xl font-semibold",children:a+1})})})})},a))}),e.jsx(s.Previous,{}),e.jsx(s.Next,{})]})},render:t=>e.jsx("div",{className:"my-6",children:e.jsx(s,{...t})})},r=()=>{const[t,a]=o.useState(),[w,i]=o.useState(0),[v,A]=o.useState(0);return o.useEffect(()=>{t&&(A(t.scrollSnapList().length),i(t.selectedScrollSnap()+1),t.on("select",()=>{i(t.selectedScrollSnap()+1)}))},[t]),e.jsxs("div",{className:"mx-auto max-w-xs",children:[e.jsxs(s,{setApi:a,className:"w-full max-w-xs",children:[e.jsx(s.Content,{children:Array.from({length:5}).map((S,m)=>e.jsx(s.Item,{children:e.jsx(n,{children:e.jsx(n.Content,{className:"flex aspect-square items-center justify-center p-6",children:e.jsx("span",{className:"text-4xl font-semibold",children:m+1})})})},m))}),e.jsx(s.Previous,{}),e.jsx(s.Next,{})]}),e.jsxs("div",{className:"py-2 text-center text-sm text-muted-foreground",children:["Slide ",w," of ",v]})]})};r.__docgenInfo={description:`A carousel story showcasing the usage of the Carousel component
along with its API handling. This example demonstrates how to
interface with the Carousel API, track the currently displayed
slide, and total slide count.`,methods:[],displayName:"WithCarouselAPI"};var d,u,p;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var x,C,h;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    className: 'w-full max-w-sm',
    opts: {
      align: 'start',
      loop: true
    },
    children: <>
        <Carousel.Content className="max-h-[200px]">
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
}`,...(h=(C=c.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var f,g,N,j,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>;
}`,...(N=(g=r.parameters)==null?void 0:g.docs)==null?void 0:N.source},description:{story:`A carousel story showcasing the usage of the Carousel component
along with its API handling. This example demonstrates how to
interface with the Carousel API, track the currently displayed
slide, and total slide count.`,...(y=(j=r.parameters)==null?void 0:j.docs)==null?void 0:y.description}}};const R=["Example","VerticalOrientationAndLoop","WithCarouselAPI"];export{l as Example,c as VerticalOrientationAndLoop,r as WithCarouselAPI,R as __namedExportsOrder,k as default};
