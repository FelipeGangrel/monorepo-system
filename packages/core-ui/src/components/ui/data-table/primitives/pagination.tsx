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
    en: '{count} of {total} row(s) selected',
    pt: '{count} de {total} linha(s) selecionada(s)',
  },
  rowsPerPage: {
    en: 'Rows per page',
    pt: 'Linhas por página',
  },
  currentPageOfTotal: {
    en: 'Page {current} of {total}',
    pt: 'Página {current} de {total}',
  },
} as const);

type Props = React.HTMLAttributes<HTMLDivElement> & {
  pageSize?: number;
  /**
   * The Options to show on the page size selector.
   */
  pageSizeOptions?: number[];
  /**
   * Determines if the `{selected} of {total} row(s) selected` should be hidden.
   * It is shown by default when `selectionMode` is used.
   */
  hideSelectionInfo?: boolean;
  /**
   * Determines if the `rows per page` selector should be hidden.
   * It is shown by default.
   */
  hidePageSizeSelector?: boolean;
};

const Pagination: React.FunctionComponent<Props> = ({
  className,
  pageSize = 10,
  pageSizeOptions = [10, 20, 30, 40, 50],
  hideSelectionInfo = false,
  hidePageSizeSelector = false,
  ...props
}) => {
  const { table, language, selectionMode } = React.useContext(DataTableContext);
  const t = intl.makeTranslator({
    dictionary,
    language,
  });

  React.useEffect(() => {
    if (table.getState().pagination.pageSize !== pageSize) {
      table.setPageSize(pageSize);
    }
  }, [pageSize, table]);

  if (!pageSizeOptions.includes(pageSize)) {
    console.warn(
      'pageSizeOptions must include pageSize for a better user experience.'
    );
  }

  return (
    <div className={cn('flex items-center px-2', className)} {...props}>
      {selectionMode && !hideSelectionInfo && (
        <div className="text-muted-foreground flex-1 text-sm">
          {t('countOfTotalRowsSelected', {
            count: table.getFilteredSelectedRowModel().rows.length,
            total: table.getFilteredRowModel().rows.length,
          })}
        </div>
      )}
      <div className="ml-auto flex items-center space-x-6 lg:space-x-8">
        {!hidePageSizeSelector && (
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
                {pageSizeOptions.map((pageSize) => (
                  <Select.Item key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select>
          </div>
        )}
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
