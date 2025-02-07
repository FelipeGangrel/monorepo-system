import { flexRender, Header } from '@tanstack/react-table';
import { ArrowDownIcon, ArrowUpDownIcon, ArrowUpIcon } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Table } from '@/components/ui/table';
import { intl } from '@/lib/intl';
import { cn } from '@/lib/utils';
import { DataTableMetaHelper } from '@/utils/data-table';

import { DataTableContext } from '../context';

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
        className="core-px-0 hover:core-bg-transparent"
        onClick={() =>
          header.column.toggleSorting(header.column.getIsSorted() === 'asc')
        }
      >
        {content} <SortIcon />
      </Button>
    </Table.Head>
  );
};

type ContentProps = React.HTMLAttributes<HTMLDivElement>;

const Content: React.FunctionComponent<ContentProps> = ({
  className,
  ...props
}) => {
  const { table, language } = React.useContext(DataTableContext);

  const t = intl.makeTranslator({
    dictionary: intl.baseDictionary,
    language,
  });

  return (
    <div className={cn(className)} {...props}>
      <Table>
        <Table.Header>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <SortableHead key={header.id} header={header} />
              ))}
            </Table.Row>
          ))}
        </Table.Header>
        <Table.Body>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <Table.Row
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <Table.Cell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell
                colSpan={table.getAllColumns().length}
                className="core-h-24 core-text-center"
              >
                {t('noResultsFound')}
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};
Content.displayName = 'DataTable.Content';

export { Content };
