import * as React from 'react';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

import { DataTableContext } from '../context';

type Props = React.ComponentProps<typeof Input> & {
  filterBy: string;
};

const Filter: React.FunctionComponent<Props> = ({
  className,
  filterBy,
  ...props
}) => {
  const { table } = React.useContext(DataTableContext);

  return (
    <Input
      className={cn('w-full', className)}
      {...props}
      value={(table.getColumn(filterBy)?.getFilterValue() as string) ?? ''}
      onChange={(event) => {
        table.getColumn(filterBy)?.setFilterValue(event.target.value);
      }}
    />
  );
};
Filter.displayName = 'DataTable.Filter';

export { Filter };
