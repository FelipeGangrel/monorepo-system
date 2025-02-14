import * as React from 'react';

import { Input } from '#/components/ui/input';

type Props = Omit<React.ComponentProps<typeof Input>, 'onChange'> & {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
};

const DebouncedInput: React.FunctionComponent<Props> = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) => {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [debounce, onChange, value]);

  return (
    <Input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export { DebouncedInput };
