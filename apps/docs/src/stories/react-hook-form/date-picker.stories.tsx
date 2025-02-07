import { Button } from '@felipegangrel/core-ui';
import { DatePicker, Form } from '@felipegangrel/react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

/**
 * Date picker to be used inside the Form component.
 */
const meta: Meta<typeof DatePicker> = {
  title: 'react-hook-form/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        language: 'tsx',
      },
    },
  },
};

export default meta;

export const Example = () => {
  const formSchema = z.object({
    date: z.date(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: Partial<z.infer<typeof formSchema>>) => {
    console.log(data);
  };

  return (
    <div className="docs-w-screen docs-max-w-[400px]">
      <Form {...form}>
        <form
          className="docs-flex docs-flex-col docs-gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Form.Field
            control={form.control}
            name="date"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Date</Form.Label>
                <DatePicker
                  clearable
                  value={field.value}
                  onChange={field.onChange}
                />
                <Form.Message />
              </Form.Item>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};
