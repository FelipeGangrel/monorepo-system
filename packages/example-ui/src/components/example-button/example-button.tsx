import { Button, cn } from '@felipegangrel/core-ui';
import * as React from 'react';

type Props = React.HTMLAttributes<HTMLButtonElement>;

const ExampleButton = ({ className, ...props }: Props) => {
  return (
    <Button
      className={cn('ex-bg-amber-500 hover:ex-bg-amber-400', className)}
      {...props}
    />
  );
};

export { ExampleButton };
