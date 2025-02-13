import{j as e}from"./index-B6zMoDbo.js";import{p as t}from"./index-MWPviQxN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFkskS4.js";import"./index-Dxs5m6lS.js";const I={title:"Core UI/Select",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Displays a list of options for the user to pick from—triggered by a button."}}}},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t.Trigger,{className:"w-screen max-w-[240px]",children:e.jsx(t.Value,{placeholder:"Theme"})}),e.jsxs(t.Content,{children:[e.jsx(t.Item,{value:"light",children:"Light"}),e.jsx(t.Item,{value:"dark",children:"Dark"}),e.jsx(t.Item,{value:"system",children:"System"})]})]})}},l={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t.Trigger,{className:"w-screen max-w-[240px]",children:e.jsx(t.Value,{placeholder:"Select a timezone"})}),e.jsxs(t.Content,{children:[e.jsxs(t.Group,{children:[e.jsx(t.Label,{children:"North America"}),e.jsx(t.Item,{value:"est",children:"Eastern Standard Time (EST)"}),e.jsx(t.Item,{value:"cst",children:"Central Standard Time (CST)"}),e.jsx(t.Item,{value:"mst",children:"Mountain Standard Time (MST)"}),e.jsx(t.Item,{value:"pst",children:"Pacific Standard Time (PST)"}),e.jsx(t.Item,{value:"akst",children:"Alaska Standard Time (AKST)"}),e.jsx(t.Item,{value:"hst",children:"Hawaii Standard Time (HST)"})]}),e.jsxs(t.Group,{children:[e.jsx(t.Label,{children:"Europe & Africa"}),e.jsx(t.Item,{value:"gmt",children:"Greenwich Mean Time (GMT)"}),e.jsx(t.Item,{value:"cet",children:"Central European Time (CET)"}),e.jsx(t.Item,{value:"eet",children:"Eastern European Time (EET)"}),e.jsx(t.Item,{value:"west",children:"Western European Summer Time (WEST)"}),e.jsx(t.Item,{value:"cat",children:"Central Africa Time (CAT)"}),e.jsx(t.Item,{value:"eat",children:"East Africa Time (EAT)"})]}),e.jsxs(t.Group,{children:[e.jsx(t.Label,{children:"Asia"}),e.jsx(t.Item,{value:"msk",children:"Moscow Time (MSK)"}),e.jsx(t.Item,{value:"ist",children:"India Standard Time (IST)"}),e.jsx(t.Item,{value:"cst_china",children:"China Standard Time (CST)"}),e.jsx(t.Item,{value:"jst",children:"Japan Standard Time (JST)"}),e.jsx(t.Item,{value:"kst",children:"Korea Standard Time (KST)"}),e.jsx(t.Item,{value:"ist_indonesia",children:"Indonesia Central Standard Time (WITA)"})]}),e.jsxs(t.Group,{children:[e.jsx(t.Label,{children:"Australia & Pacific"}),e.jsx(t.Item,{value:"awst",children:"Australian Western Standard Time (AWST)"}),e.jsx(t.Item,{value:"acst",children:"Australian Central Standard Time (ACST)"}),e.jsx(t.Item,{value:"aest",children:"Australian Eastern Standard Time (AEST)"}),e.jsx(t.Item,{value:"nzst",children:"New Zealand Standard Time (NZST)"}),e.jsx(t.Item,{value:"fjt",children:"Fiji Time (FJT)"})]}),e.jsxs(t.Group,{children:[e.jsx(t.Label,{children:"South America"}),e.jsx(t.Item,{value:"art",children:"Argentina Time (ART)"}),e.jsx(t.Item,{value:"bot",children:"Bolivia Time (BOT)"}),e.jsx(t.Item,{value:"brt",children:"Brasilia Time (BRT)"}),e.jsx(t.Item,{value:"clt",children:"Chile Standard Time (CLT)"})]})]})]})}};var n,r,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: <>
        <Select.Trigger className="w-screen max-w-[240px]">
          <Select.Value placeholder="Theme" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="light">Light</Select.Item>
          <Select.Item value="dark">Dark</Select.Item>
          <Select.Item value="system">System</Select.Item>
        </Select.Content>
      </>
  }
}`,...(c=(r=a.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var i,m,s;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: <>
        <Select.Trigger className="w-screen max-w-[240px]">
          <Select.Value placeholder="Select a timezone" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>North America</Select.Label>
            <Select.Item value="est">Eastern Standard Time (EST)</Select.Item>
            <Select.Item value="cst">Central Standard Time (CST)</Select.Item>
            <Select.Item value="mst">Mountain Standard Time (MST)</Select.Item>
            <Select.Item value="pst">Pacific Standard Time (PST)</Select.Item>
            <Select.Item value="akst">Alaska Standard Time (AKST)</Select.Item>
            <Select.Item value="hst">Hawaii Standard Time (HST)</Select.Item>
          </Select.Group>
          <Select.Group>
            <Select.Label>Europe & Africa</Select.Label>
            <Select.Item value="gmt">Greenwich Mean Time (GMT)</Select.Item>
            <Select.Item value="cet">Central European Time (CET)</Select.Item>
            <Select.Item value="eet">Eastern European Time (EET)</Select.Item>
            <Select.Item value="west">
              Western European Summer Time (WEST)
            </Select.Item>
            <Select.Item value="cat">Central Africa Time (CAT)</Select.Item>
            <Select.Item value="eat">East Africa Time (EAT)</Select.Item>
          </Select.Group>
          <Select.Group>
            <Select.Label>Asia</Select.Label>
            <Select.Item value="msk">Moscow Time (MSK)</Select.Item>
            <Select.Item value="ist">India Standard Time (IST)</Select.Item>
            <Select.Item value="cst_china">
              China Standard Time (CST)
            </Select.Item>
            <Select.Item value="jst">Japan Standard Time (JST)</Select.Item>
            <Select.Item value="kst">Korea Standard Time (KST)</Select.Item>
            <Select.Item value="ist_indonesia">
              Indonesia Central Standard Time (WITA)
            </Select.Item>
          </Select.Group>
          <Select.Group>
            <Select.Label>Australia & Pacific</Select.Label>
            <Select.Item value="awst">
              Australian Western Standard Time (AWST)
            </Select.Item>
            <Select.Item value="acst">
              Australian Central Standard Time (ACST)
            </Select.Item>
            <Select.Item value="aest">
              Australian Eastern Standard Time (AEST)
            </Select.Item>
            <Select.Item value="nzst">
              New Zealand Standard Time (NZST)
            </Select.Item>
            <Select.Item value="fjt">Fiji Time (FJT)</Select.Item>
          </Select.Group>
          <Select.Group>
            <Select.Label>South America</Select.Label>
            <Select.Item value="art">Argentina Time (ART)</Select.Item>
            <Select.Item value="bot">Bolivia Time (BOT)</Select.Item>
            <Select.Item value="brt">Brasilia Time (BRT)</Select.Item>
            <Select.Item value="clt">Chile Standard Time (CLT)</Select.Item>
          </Select.Group>
        </Select.Content>
      </>
  }
}`,...(s=(m=l.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const h=["Example","Scrollable"];export{a as Example,l as Scrollable,h as __namedExportsOrder,I as default};
