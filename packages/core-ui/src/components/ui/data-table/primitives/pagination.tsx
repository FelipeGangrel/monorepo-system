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
    <div
      className={cn('core-flex core-items-center core-px-2', className)}
      {...props}
    >
      {selectionMode && !hideSelectionInfo && (
        <div className="core-text-muted-foreground core-flex-1 core-text-sm">
          {t('countOfTotalRowsSelected', {
            count: table.getFilteredSelectedRowModel().rows.length,
            total: table.getFilteredRowModel().rows.length,
          })}
        </div>
      )}
      <div className="core-ml-auto core-flex core-items-center core-space-x-6 lg:core-space-x-8">
        {!hidePageSizeSelector && (
          <div className="core-flex core-items-center core-space-x-2">
            <p className="core-text-sm core-font-medium">{t('rowsPerPage')}</p>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value));
              }}
            >
              <Select.Trigger className="core-h-8 core-w-[70px]">
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
        <div className="core-flex core-w-[110px] core-items-center core-justify-center core-text-sm core-font-medium">
          {t('currentPageOfTotal', {
            current: table.getState().pagination.pageIndex + 1,
            total: table.getPageCount(),
          })}
        </div>
        <div className="core-flex core-items-center core-space-x-2">
          <Button
            variant="outline"
            className="core-hidden core-h-8 core-w-8 core-p-0 lg:core-flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="core-sr-only">Go to first page</span>
            <ChevronsLeft />
          </Button>
          <Button
            variant="outline"
            className="core-h-8 core-w-8 core-p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="core-sr-only">Go to previous page</span>
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            className="core-h-8 core-w-8 core-p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="core-sr-only">Go to next page</span>
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            className="core-hidden core-h-8 core-w-8 core-p-0 lg:core-flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="core-sr-only">Go to last page</span>
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
Pagination.displayName = 'DataTable.Pagination';

export { Pagination };
