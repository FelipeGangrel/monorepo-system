import{j as e}from"./index-B6zMoDbo.js";import{t as a,B as i}from"./index-MWPviQxN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFkskS4.js";import"./index-Dxs5m6lS.js";const x={title:"Core UI/Table",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A responsive table component."}}}},t=[{id:1,name:"Alice Johnson",email:"alice.johnson@example.com",role:"Admin"},{id:2,name:"Bob Smith",email:"bob.smith@example.com",role:"Editor"},{id:3,name:"Charlie Brown",email:"charlie.brown@example.com",role:"Viewer"}],n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"User Name"}),e.jsx(a.Head,{children:"Email"}),e.jsx(a.Head,{children:"Role"}),e.jsx(a.Head,{children:"Actions"})]})}),e.jsx(a.Body,{children:t.map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:l.name}),e.jsx(a.Cell,{children:l.email}),e.jsx(a.Cell,{children:l.role}),e.jsxs(a.Cell,{className:"flex justify-end gap-2",children:[e.jsx(i,{variant:"outline",size:"sm",onClick:()=>alert(`Viewing details for ${l.name}`),children:"View"}),e.jsx(i,{variant:"outline",size:"sm",onClick:()=>alert(`Editing ${l.name}`),children:"Edit"})]})]},l.id))})]})}};var r,o,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: <>
        <Table.Header>
          <Table.Row>
            <Table.Head>User Name</Table.Head>
            <Table.Head>Email</Table.Head>
            <Table.Head>Role</Table.Head>
            <Table.Head>Actions</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.map(user => <Table.Row key={user.id}>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.role}</Table.Cell>
              <Table.Cell className="flex justify-end gap-2">
                <Button variant={'outline'} size={'sm'} onClick={() => alert(\`Viewing details for \${user.name}\`)}>
                  View
                </Button>
                <Button variant={'outline'} size={'sm'} onClick={() => alert(\`Editing \${user.name}\`)}>
                  Edit
                </Button>
              </Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </>
  }
}`,...(s=(o=n.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const T=["Example"];export{n as Example,T as __namedExportsOrder,x as default};
