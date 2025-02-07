import { flexRender, Header } from '@tanstack/react-table';
import { ArrowDownIcon, ArrowUpDownIcon, ArrowUpIcon } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Table } from '@/components/ui/table';
import { DataTableMetaHelper } from '@/utils/data-table';

type HeadProps = React.ComponentPropsWithoutRef<typeof Table.Head> & {
  header: Header<any, unknown>;
};

const SortableHead = ({ header }: HeadProps) => {
  if (header.isPlaceholder) {
    return <Table.Head />;
  }

  const content = flexRender(
    header.column.columnDef.header,
    header.getContext()
  );

  if (!header.column.getCanSort()) {
    return <Table.Head>{content}</Table.Head>;
  }

  const SortIcon: React.FunctionComponent<
    React.ComponentPropsWithoutRef<typeof ArrowUpIcon>
  > = (props) => {
    switch (header.column.getIsSorted()) {
      case 'asc':
        return <ArrowUpIcon {...props} />;
      case 'desc':
        return <ArrowDownIcon {...props} />;
      default:
        return <ArrowUpDownIcon {...props} />;
    }
  };

  const columnMeta = DataTableMetaHelper.getColumnMeta(header.column);

  return (
    <Table.Head className={columnMeta?.headerClassName}>
      <Button
        variant={'ghost'}
        className="core-px-[0px] hover:core-bg-transparent"
        onClick={() =>
          header.column.toggleSorting(header.column.getIsSorted() === 'asc')
        }
      >
        {content} <SortIcon />
      </Button>
    </Table.Head>
  );
};

export { SortableHead };
