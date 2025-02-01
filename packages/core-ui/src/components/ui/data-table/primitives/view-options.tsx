import { Settings2 } from 'lucide-react';
import * as React from 'react';

import { Button, ButtonProps } from '@/components/ui/button';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

import { DataTableContext } from '../context';

const ViewOptions: React.FunctionComponent<ButtonProps> = ({
  className,
  ...props
}) => {
  const { table } = React.useContext(DataTableContext);

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button
          variant="outline"
          className={cn('ml-auto', className)}
          {...props}
        >
          <Settings2 />
          View
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end" className="w-[150px]">
        <DropdownMenu.Label>Toggle columns</DropdownMenu.Label>
        <DropdownMenu.Separator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== 'undefined' && column.getCanHide()
          )
          .map((column) => {
            return (
              <DropdownMenu.CheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(value)}
              >
                {column.id}
              </DropdownMenu.CheckboxItem>
            );
          })}
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
ViewOptions.displayName = 'DataTable.ViewOptions';

export { ViewOptions };
