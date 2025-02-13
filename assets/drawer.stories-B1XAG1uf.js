import{j as e}from"./index-B6zMoDbo.js";import{i as p,O as a,B as r,Q as w}from"./index-MWPviQxN.js";import{r as C}from"./index-Dxs5m6lS.js";import{M as j}from"./minus-Dge2uVIC.js";import{B as D,h as v}from"./BarChart-CK-Ql34o.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFkskS4.js";import"./tiny-invariant-CopsF_GD.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=p("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),F={title:"Core UI/Drawer",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A drawer component for React."}}}},n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(a.Trigger,{asChild:!0,children:e.jsx(r,{children:"Trigger"})}),e.jsxs(a.Content,{children:[e.jsxs(a.Header,{children:[e.jsx(a.Title,{children:"Are you absolutely sure?"}),e.jsx(a.Description,{children:"This action cannot be undone."})]}),e.jsxs(a.Footer,{children:[e.jsx(r,{children:"Submit"}),e.jsx(a.Close,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Cancel"})})]})]})]})}},t=()=>{const m=[{goal:400},{goal:300},{goal:200},{goal:300},{goal:200},{goal:278},{goal:189},{goal:239},{goal:300},{goal:200},{goal:278},{goal:189},{goal:349}],[s,g]=C.useState(350);function o(x){g(Math.max(200,Math.min(400,s+x)))}return e.jsxs(a,{children:[e.jsx(a.Trigger,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Open Drawer"})}),e.jsx(a.Content,{children:e.jsxs("div",{className:"mx-auto w-full max-w-sm",children:[e.jsxs(a.Header,{children:[e.jsx(a.Title,{children:"Move Goal"}),e.jsx(a.Description,{children:"Set your daily activity goal."})]}),e.jsxs("div",{className:"p-4 pb-0",children:[e.jsxs("div",{className:"flex items-center justify-center space-x-2",children:[e.jsxs(r,{variant:"outline",size:"icon",className:"h-8 w-8 shrink-0 rounded-full",onClick:()=>o(-10),disabled:s<=200,children:[e.jsx(j,{}),e.jsx("span",{className:"sr-only",children:"Decrease"})]}),e.jsxs("div",{className:"flex-1 text-center",children:[e.jsx("div",{className:"text-7xl font-bold tracking-tighter",children:s}),e.jsx("div",{className:"text-[0.70rem] uppercase text-muted-foreground",children:"Calories/day"})]}),e.jsxs(r,{variant:"outline",size:"icon",className:"h-8 w-8 shrink-0 rounded-full",onClick:()=>o(10),disabled:s>=400,children:[e.jsx(f,{}),e.jsx("span",{className:"sr-only",children:"Increase"})]})]}),e.jsx("div",{className:"mt-3 h-[120px]",children:e.jsx(w,{width:"100%",height:"100%",children:e.jsx(D,{data:m,children:e.jsx(v,{dataKey:"goal",style:{fill:"hsl(var(--foreground))",opacity:.9}})})})})]}),e.jsxs(a.Footer,{children:[e.jsx(r,{children:"Submit"}),e.jsx(a.Close,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Cancel"})})]})]})})]})};t.__docgenInfo={description:"",methods:[],displayName:"WithChart"};var i,l,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: <>
        <Drawer.Trigger asChild>
          <Button>Trigger</Button>
        </Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Are you absolutely sure?</Drawer.Title>
            <Drawer.Description>
              This action cannot be undone.
            </Drawer.Description>
          </Drawer.Header>
          <Drawer.Footer>
            <Button>Submit</Button>
            <Drawer.Close asChild>
              <Button variant="outline">Cancel</Button>
            </Drawer.Close>
          </Drawer.Footer>
        </Drawer.Content>
      </>
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,u,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const data = [{
    goal: 400
  }, {
    goal: 300
  }, {
    goal: 200
  }, {
    goal: 300
  }, {
    goal: 200
  }, {
    goal: 278
  }, {
    goal: 189
  }, {
    goal: 239
  }, {
    goal: 300
  }, {
    goal: 200
  }, {
    goal: 278
  }, {
    goal: 189
  }, {
    goal: 349
  }];
  const [goal, setGoal] = React.useState(350);
  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }
  return <Drawer>
      <Drawer.Trigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <div className="mx-auto w-full max-w-sm">
          <Drawer.Header>
            <Drawer.Title>Move Goal</Drawer.Title>
            <Drawer.Description>
              Set your daily activity goal.
            </Drawer.Description>
          </Drawer.Header>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button variant="outline" size="icon" className="h-8 w-8 shrink-0 rounded-full" onClick={() => onClick(-10)} disabled={goal <= 200}>
                <Minus />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {goal}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Calories/day
                </div>
              </div>
              <Button variant="outline" size="icon" className="h-8 w-8 shrink-0 rounded-full" onClick={() => onClick(10)} disabled={goal >= 400}>
                <Plus />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar dataKey="goal" style={{
                  fill: 'hsl(var(--foreground))',
                  opacity: 0.9
                } as React.CSSProperties} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <Drawer.Footer>
            <Button>Submit</Button>
            <Drawer.Close asChild>
              <Button variant="outline">Cancel</Button>
            </Drawer.Close>
          </Drawer.Footer>
        </div>
      </Drawer.Content>
    </Drawer>;
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const R=["Example","WithChart"];export{n as Example,t as WithChart,R as __namedExportsOrder,F as default};
