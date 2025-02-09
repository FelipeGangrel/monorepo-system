import { faker } from '@faker-js/faker';
import { DataTable, DataTableMetaHelper } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';
import { ColumnDef } from '@tanstack/react-table';

/**
 * Powerful table and datagrids built using TanStack Table.
 */
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
  args: {
    language: 'pt',
  },
  argTypes: {
    columns: {
      control: false,
    },
    data: {
      control: false,
    },
    language: {
      control: { type: 'radio' },
      options: ['en', 'pt', 'es', 'de'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof DataTable>;

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
      headerClassName: 'text-right',
    }),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const content = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="text-right">{content}</div>;
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

/**
 * A comprehensive example of the `DataTable` component showcasing various features,
 * including filters, pagination, and data rendering.
 * It uses a dataset of mock payment data and provides customizable options
 * such as table columns and language.
 */
export const Example: Story = {
  args: {
    columns,
    data: payments,
  },
  render: (args) => (
    <DataTable {...args}>
      <div className="flex justify-between gap-4">
        <DataTable.Filter filterBy={'name'} placeholder={'Filter by name'} />
        <DataTable.ViewOptions />
      </div>
      <DataTable.Content />
      <DataTable.Pagination />
    </DataTable>
  ),
};

export const WithViewOptions: Story = {
  args: {
    columns,
    data: payments.slice(0, 10),
  },
  render: (args) => (
    <DataTable {...args}>
      <div className="flex justify-between gap-4">
        <DataTable.ViewOptions />
      </div>
      <DataTable.Content />
    </DataTable>
  ),
};

export const WithPagination: Story = {
  args: {
    columns,
    data: payments,
  },
  render: (args) => (
    <DataTable {...args}>
      <DataTable.Content />
      <DataTable.Pagination />
    </DataTable>
  ),
};

export const WithCustomPageSizeAndOptions: Story = {
  args: {
    columns,
    data: payments,
  },
  render: (args) => (
    <DataTable {...args}>
      <DataTable.Content />
      <DataTable.Pagination pageSizeOptions={[5, 10]} pageSize={5} />
    </DataTable>
  ),
};

export const WithFilter: Story = {
  args: {
    columns,
    data: payments,
  },
  render: (args) => (
    <DataTable {...args}>
      <div className="flex justify-between gap-4">
        <DataTable.Filter filterBy={'name'} placeholder={'Filter by name'} />
      </div>
      <DataTable.Content />
      <DataTable.Pagination />
    </DataTable>
  ),
};

export const WithFuzzyFilter: Story = {
  args: {
    columns,
    data: payments,
  },
  render: (args) => (
    <DataTable {...args}>
      <div className="flex justify-between gap-4">
        <DataTable.FuzzyFilter placeholder={'Fuzzy filter'} />
        <DataTable.ViewOptions />
      </div>
      <DataTable.Content />
      <DataTable.Pagination />
    </DataTable>
  ),
};

export const WithSelectionByRow: Story = {
  args: {
    columns,
    data: payments,
    selectionMode: 'row',
  },
  render: (args) => (
    <DataTable {...args}>
      <DataTable.Content />
      <DataTable.Pagination />
    </DataTable>
  ),
};

export const WithSelectionByPage: Story = {
  args: {
    columns,
    data: payments,
    selectionMode: 'page',
  },
  render: (args) => (
    <DataTable {...args}>
      <DataTable.Content />
      <DataTable.Pagination />
    </DataTable>
  ),
};

export const WithSelectionByTable: Story = {
  args: {
    columns,
    data: payments,
    selectionMode: 'table',
  },
  render: (args) => (
    <DataTable {...args}>
      <DataTable.Content />
      <DataTable.Pagination />
    </DataTable>
  ),
};

export const WithHiddenSelectionInfo: Story = {
  args: {
    columns,
    data: payments,
    selectionMode: 'row',
  },
  render: (args) => (
    <DataTable {...args}>
      <DataTable.Content />
      <DataTable.Pagination hideSelectionInfo />
    </DataTable>
  ),
};

export const WithHiddenPageSizeSelector: Story = {
  args: {
    columns,
    data: payments,
  },
  render: (args) => (
    <DataTable {...args}>
      <DataTable.Content />
      <DataTable.Pagination hidePageSizeSelector />
    </DataTable>
  ),
};
