import { faker } from '@faker-js/faker';
import { DataTable, DataTableMetaHelper } from '@felipegangrel/core-ui';
import type { Meta } from '@storybook/react';
import { ColumnDef } from '@tanstack/react-table';
import * as React from 'react';

const meta: Meta<typeof DataTable> = {
  title: 'core-ui/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="docs-flex docs-flex-col docs-gap-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
  name: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    meta: DataTableMetaHelper.makeColumnMeta({
      headerClassName: 'docs-text-right',
    }),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const content = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="docs-text-right">{content}</div>;
    },
  },
];

const payments: Payment[] = Array.from({ length: 100 }).map(() => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    id: faker.string.uuid(),
    amount: faker.number.float({ min: 20, max: 200 }),
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({ firstName, lastName }).toLowerCase(),
    status: faker.helpers.arrayElement([
      'pending',
      'processing',
      'success',
      'failed',
    ]),
  };
});

const language: React.ComponentProps<typeof DataTable>['language'] = 'en';

const defaultProps = {
  language,
};

export const Default = () => {
  return (
    <DataTable {...defaultProps} columns={columns} data={payments.slice(0, 10)}>
      <DataTable.Content />
    </DataTable>
  );
};

export const WithViewOptions = () => {
  return (
    <DataTable {...defaultProps} columns={columns} data={payments.slice(0, 10)}>
      <div className="docs-flex docs-justify-between docs-gap-4">
        <DataTable.ViewOptions />
      </div>
      <DataTable.Content />
    </DataTable>
  );
};

export const WithPagination = () => {
  return (
    <DataTable {...defaultProps} columns={columns} data={payments}>
      <DataTable.Content />
      <DataTable.Pagination />
    </DataTable>
  );
};

export const WithCustomPageSizeAndOptions = () => {
  return (
    <DataTable {...defaultProps} columns={columns} data={payments}>
      <DataTable.Content />
      <DataTable.Pagination pageSizeOptions={[5, 10]} pageSize={5} />
    </DataTable>
  );
};

export const WithFilter = () => {
  return (
    <DataTable {...defaultProps} columns={columns} data={payments}>
      <div className="docs-flex docs-justify-between docs-gap-4">
        <DataTable.Filter filterBy={'name'} placeholder={'Filter by name'} />
      </div>
      <DataTable.Content />
      <DataTable.Pagination />
    </DataTable>
  );
};

export const WithFuzzyFilter = () => {
  return (
    <DataTable {...defaultProps} columns={columns} data={payments}>
      <div className="docs-flex docs-justify-between docs-gap-4">
        <DataTable.FuzzyFilter placeholder={'Fuzzy filter'} />
        <DataTable.ViewOptions />
      </div>
      <DataTable.Content />
      <DataTable.Pagination />
    </DataTable>
  );
};

export const WithSelectionByRow = () => {
  return (
    <DataTable
      {...defaultProps}
      selectionMode="row"
      columns={columns}
      data={payments}
    >
      <DataTable.Content />
      <DataTable.Pagination />
    </DataTable>
  );
};

export const WithSelectionByPage = () => {
  return (
    <DataTable
      {...defaultProps}
      selectionMode="page"
      columns={columns}
      data={payments}
    >
      <DataTable.Content />
      <DataTable.Pagination />
    </DataTable>
  );
};

export const WithSelectionByTable = () => {
  return (
    <DataTable
      {...defaultProps}
      selectionMode="table"
      columns={columns}
      data={payments}
    >
      <DataTable.Content />
      <DataTable.Pagination />
    </DataTable>
  );
};

export const WithHiddenSelectionInfo = () => {
  return (
    <DataTable
      {...defaultProps}
      selectionMode="row"
      columns={columns}
      data={payments}
    >
      <DataTable.Content />
      <DataTable.Pagination hideSelectionInfo />
    </DataTable>
  );
};

export const WithHiddenPageSizeSelector = () => {
  return (
    <DataTable {...defaultProps} columns={columns} data={payments}>
      <DataTable.Content />
      <DataTable.Pagination hidePageSizeSelector />
    </DataTable>
  );
};
