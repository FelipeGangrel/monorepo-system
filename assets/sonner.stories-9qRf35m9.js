import{j as n}from"./index-B6zMoDbo.js";import{r as X,B as e,u as t}from"./index-MWPviQxN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFkskS4.js";import"./index-Dxs5m6lS.js";const eo={title:"Core UI/Toast",decorators:[o=>n.jsxs("div",{children:[n.jsx(o,{}),n.jsx(X,{})]})],parameters:{layout:"centered",docs:{description:{component:"An opinionated toast component for React."}}}},s=()=>{const o=()=>{t("Toast title")};return n.jsx(e,{onClick:o,children:"Click me"})},r=()=>{const o=()=>{t("Toast will dismiss in 5 seconds",{duration:5e3})};return n.jsx(e,{onClick:o,children:"Click me"})},i=()=>{const o=()=>{t("Toast will be here forever, unless you dismiss it 🤔",{duration:1/0})};return n.jsx(e,{onClick:o,children:"Click me"})},c=()=>{const o=()=>{t("Toast title",{description:"Toast description"})};return n.jsx(e,{onClick:o,children:"Click me"})},a=()=>{const o=()=>{t("Action clicked")},k=()=>{t("Toast title",{description:"Toast description",action:{label:"Action",onClick:o}})};return n.jsx(e,{onClick:k,children:"Click me"})},l=()=>{const o=()=>{t.success("You are awesome!")};return n.jsx(e,{onClick:o,children:"Click me"})},m=()=>{const o=()=>{t.info("Hello world")};return n.jsx(e,{onClick:o,children:"Click me"})},d=()=>{const o=()=>{t.warning("Event is about to start")};return n.jsx(e,{onClick:o,children:"Click me"})},u=()=>{const o=()=>{t.error("Something went wrong")};return n.jsx(e,{onClick:o,children:"Click me"})},p=()=>{const o=h=>{new Promise(V=>{setTimeout(V,3e3)}).then(()=>{h()})},k=()=>{const h=t.loading("Saving changes...");o(()=>{t.dismiss(h),t.success("Changes saved")})};return n.jsx(e,{onClick:k,children:"Click me"})},C=()=>{const o=()=>{t("Custom toast",{className:"bg-yellow-100 text-black border border-yellow-200",description:"Custom description",action:n.jsx(e,{variant:"ghost",className:"ml-auto",children:"Action"})})};return n.jsx(e,{onClick:o,children:"Click me"})};s.__docgenInfo={description:"",methods:[],displayName:"Example"};r.__docgenInfo={description:"",methods:[],displayName:"WithDuration"};i.__docgenInfo={description:"",methods:[],displayName:"WithInfinityDuration"};c.__docgenInfo={description:"",methods:[],displayName:"WithDescription"};a.__docgenInfo={description:"",methods:[],displayName:"WithAction"};l.__docgenInfo={description:"",methods:[],displayName:"SuccessExample"};m.__docgenInfo={description:"",methods:[],displayName:"InfoExample"};d.__docgenInfo={description:"",methods:[],displayName:"WarningExample"};u.__docgenInfo={description:"",methods:[],displayName:"ErrorExample"};p.__docgenInfo={description:"",methods:[],displayName:"LoadingExample"};C.__docgenInfo={description:"",methods:[],displayName:"CustomExample"};var g,x,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const onClick = () => {
    toast('Toast title');
  };
  return <Button onClick={onClick}>Click me</Button>;
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var E,B,_;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const onClick = () => {
    toast('Toast will dismiss in 5 seconds', {
      duration: 5_000
    });
  };
  return <Button onClick={onClick}>Click me</Button>;
}`,...(_=(B=r.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var y,I,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const onClick = () => {
    toast('Toast will be here forever, unless you dismiss it 🤔', {
      duration: Infinity
    });
  };
  return <Button onClick={onClick}>Click me</Button>;
}`,...(w=(I=i.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var S,T,j;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const onClick = () => {
    toast('Toast title', {
      description: 'Toast description'
    });
  };
  return <Button onClick={onClick}>Click me</Button>;
}`,...(j=(T=c.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var b,A,N;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const onAction = () => {
    toast('Action clicked');
  };
  const onClick = () => {
    toast('Toast title', {
      description: 'Toast description',
      action: {
        label: 'Action',
        onClick: onAction
      }
    });
  };
  return <Button onClick={onClick}>Click me</Button>;
}`,...(N=(A=a.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var W,v,D;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const onClick = () => {
    toast.success('You are awesome!');
  };
  return <Button onClick={onClick}>Click me</Button>;
}`,...(D=(v=l.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var L,H,P;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const onClick = () => {
    toast.info('Hello world');
  };
  return <Button onClick={onClick}>Click me</Button>;
}`,...(P=(H=m.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var R,Y,O;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const onClick = () => {
    toast.warning('Event is about to start');
  };
  return <Button onClick={onClick}>Click me</Button>;
}`,...(O=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};var U,q,z;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const onClick = () => {
    toast.error('Something went wrong');
  };
  return <Button onClick={onClick}>Click me</Button>;
}`,...(z=(q=u.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var F,G,J;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const fakeApiCall = (callback: () => void) => {
    new Promise(resolve => {
      setTimeout(resolve, 3000);
    }).then(() => {
      callback();
    });
  };
  const onClick = () => {
    const toastId = toast.loading('Saving changes...');
    fakeApiCall(() => {
      toast.dismiss(toastId);
      toast.success('Changes saved');
    });
  };
  return <Button onClick={onClick}>Click me</Button>;
}`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,M,Q;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const onClick = () => {
    toast('Custom toast', {
      className: 'bg-yellow-100 text-black border border-yellow-200',
      description: 'Custom description',
      action: <Button variant="ghost" className="ml-auto">
          Action
        </Button>
    });
  };
  return <Button onClick={onClick}>Click me</Button>;
}`,...(Q=(M=C.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};const so=["Example","WithDuration","WithInfinityDuration","WithDescription","WithAction","SuccessExample","InfoExample","WarningExample","ErrorExample","LoadingExample","CustomExample"];export{C as CustomExample,u as ErrorExample,s as Example,m as InfoExample,p as LoadingExample,l as SuccessExample,d as WarningExample,a as WithAction,c as WithDescription,r as WithDuration,i as WithInfinityDuration,so as __namedExportsOrder,eo as default};
