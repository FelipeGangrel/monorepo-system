import { faker } from '@faker-js/faker';
import {
  DataTable,
  DataTableContent,
  DataTablePagination,
} from '@felipegangrel/core-ui';
import type { Meta } from '@storybook/react';
import { ColumnDef } from '@tanstack/react-table';

const meta: Meta<typeof DataTable> = {
  title: 'core-ui/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
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

const payments: Payment[] = Array.from({ length: 100 }).map(() => {
  return {
    id: faker.string.uuid(),
    amount: faker.number.float({ min: 20, max: 200 }),
    status: faker.helpers.arrayElement([
      'pending',
      'processing',
      'success',
      'failed',
    ]),
    email: faker.internet.email().toLowerCase(),
  };
});

export const Default = () => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={payments}>
        <DataTableContent />
        <DataTablePagination />
      </DataTable>
    </div>
  );
};
