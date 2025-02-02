import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { intl } from '@/lib/intl';
import { cn } from '@/lib/utils';

import { DataTableContext } from '../context';

const dictionary = intl.makeDictionary({
  countOfTotalRowsSelected: {
    enUS: '{count} of {total} row(s) selected',
    ptBR: '{count} de {total} linha(s) selecionada(s)',
  },
  rowsPerPage: {
    enUS: 'Rows per page',
    ptBR: 'Linhas por página',
  },
  currentPageOfTotal: {
    enUS: 'Page {current} of {total}',
    ptBR: 'Página {current} de {total}',
  },
} as const);

type Props = React.HTMLAttributes<HTMLDivElement> & {
  pageSizes?: number[];
};

const Pagination: React.FunctionComponent<Props> = ({
  className,
  pageSizes = [10, 20, 30, 40, 50],
  ...props
}) => {
  const { table, language } = React.useContext(DataTableContext);
  const t = intl.makeTranslator({
    dictionary,
    language,
  });

  return (
    <div
      className={cn('flex items-center justify-between px-2', className)}
      {...props}
    >
      <div className="text-muted-foreground flex-1 text-sm">
        {t('countOfTotalRowsSelected', {
          count: table.getFilteredSelectedRowModel().rows.length,
          total: table.getFilteredRowModel().rows.length,
        })}
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">{t('rowsPerPage')}</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <Select.Trigger className="h-8 w-[70px]">
              <Select.Value
                placeholder={table.getState().pagination.pageSize}
              />
            </Select.Trigger>
            <Select.Content side="top">
              {pageSizes.map((pageSize) => (
                <Select.Item key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </Select.Item>
              ))}
            </Select.Content>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          {t('currentPageOfTotal', {
            current: table.getState().pagination.pageIndex + 1,
            total: table.getPageCount(),
          })}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
Pagination.displayName = 'DataTable.Pagination';

export { Pagination };
