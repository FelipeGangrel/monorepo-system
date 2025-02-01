import * as React from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

import { DataTableContext } from '../context';

type Props = React.ComponentProps<typeof Input>;

const GlobalFilter: React.FunctionComponent<Props> = ({
  className,
  ...props
}) => {
  const { table } = React.useContext(DataTableContext);

  const updateGlobalFilter = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      table.setGlobalFilter(event.target.value);
    },
    1000
  );

  return (
    <Input
      className={cn('w-full', className)}
      {...props}
      value={table.getState().globalFilter || ''}
      onChange={updateGlobalFilter}
    />
  );
};
GlobalFilter.displayName = 'DataTable.GlobalFilter';

export { GlobalFilter };
