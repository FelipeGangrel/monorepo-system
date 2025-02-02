import { faker } from '@faker-js/faker';
import { DataTable } from '@felipegangrel/core-ui';
import type { Meta } from '@storybook/react';
import { ColumnDef } from '@tanstack/react-table';
import * as React from 'react';

const meta: Meta<typeof DataTable> = {
  title: 'core-ui/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4">
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
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];

const payments: Payment[] = Array.from({ length: 1000 }).map(() => {
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

const language: React.ComponentProps<typeof DataTable>['language'] = 'ptBR';

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
      <div className="flex justify-between gap-4">
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

export const WithFilter = () => {
  return (
    <DataTable {...defaultProps} columns={columns} data={payments}>
      <div className="flex justify-between gap-4">
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
      <div className="flex justify-between gap-4">
        <DataTable.FuzzyFilter placeholder={'Fuzzy filter'} />
        <DataTable.ViewOptions />
      </div>
      <DataTable.Content />
      <DataTable.Pagination />
    </DataTable>
  );
};

export const WithSelectionByPage = () => {
  return (
    <DataTable
      {...defaultProps}
      selectBy="page"
      columns={columns}
      data={payments}
    >
      <DataTable.Content />
      <DataTable.Pagination />
    </DataTable>
  );
};

export const WithSelectionByAll = () => {
  return (
    <DataTable
      {...defaultProps}
      selectBy="all"
      columns={columns}
      data={payments}
    >
      <DataTable.Content />
      <DataTable.Pagination />
    </DataTable>
  );
};
