import * as React from 'react';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

import { DataTableContext } from '../context';
import { DebouncedInput } from './debaunced-input';

type Props = Omit<React.ComponentProps<typeof Input>, 'onChange' | 'value'> & {
  debounce?: number;
};

const FuzzyFilter: React.FunctionComponent<Props> = ({
  className,
  ...props
}) => {
  const { table } = React.useContext(DataTableContext);

  return (
    <DebouncedInput
      className={cn('w-full', className)}
      value={String(table.getState().globalFilter)}
      onChange={(value) => table.setGlobalFilter(String(value))}
      {...props}
    />
  );
};
FuzzyFilter.displayName = 'DataTable.GlobalFilter';

export { FuzzyFilter };
