import{j as e}from"./index-ChoN-ss6.js";import{T as a,B as i}from"./index-Bo_9io7Q.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DYwZEShM.js";import"./index-B5OHeJSP.js";const u={title:"core-ui/Table",component:a,tags:["autodocs"],parameters:{layout:"centered"}},t=[{id:1,name:"Alice Johnson",email:"alice.johnson@example.com",role:"Admin"},{id:2,name:"Bob Smith",email:"bob.smith@example.com",role:"Editor"},{id:3,name:"Charlie Brown",email:"charlie.brown@example.com",role:"Viewer"}],n={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.Head,{children:"User Name"}),e.jsx(a.Head,{children:"Email"}),e.jsx(a.Head,{children:"Role"}),e.jsx(a.Head,{children:"Actions"})]})}),e.jsx(a.Body,{children:t.map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:l.name}),e.jsx(a.Cell,{children:l.email}),e.jsx(a.Cell,{children:l.role}),e.jsxs(a.Cell,{className:"flex justify-end gap-2",children:[e.jsx(i,{variant:"outline",size:"sm",onClick:()=>alert(`Viewing details for ${l.name}`),children:"View"}),e.jsx(i,{variant:"outline",size:"sm",onClick:()=>alert(`Editing ${l.name}`),children:"Edit"})]})]},l.id))})]})}};var r,s,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(s=n.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const x=["Default"];export{n as Default,x as __namedExportsOrder,u as default};
