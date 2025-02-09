import { Button, Label, RadioGroup } from '@felipegangrel/core-ui';
import { Form } from '@felipegangrel/react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

/**
 * A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
 */
const meta: Meta<typeof RadioGroup> = {
  title: 'Core UI/Radio Group',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Example: Story = {
  args: {
    children: (
      <>
        <div className="flex items-center space-x-2">
          <RadioGroup.Item value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroup.Item value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroup.Item value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </>
    ),
  },
};

export const FormExample = () => {
  const FormSchema = z.object({
    type: z.enum(['all', 'mentions', 'none'], {
      required_error: 'You need to select a notification type.',
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast('You submitted the following values:', {
      description: (
        <pre className="mt-2 w-[324px] rounded-md bg-slate-950 p-4">
          <code className="w-full text-white">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[400px] space-y-6"
      >
        <Form.Field
          control={form.control}
          name="type"
          render={({ field }) => (
            <Form.Item className="space-y-3">
              <Form.Label>Notify me about...</Form.Label>
              <Form.Control>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <Form.Item className="flex items-center space-x-3 space-y-0">
                    <Form.Control>
                      <RadioGroup.Item value="all" />
                    </Form.Control>
                    <Form.Label className="font-normal">
                      All new messages
                    </Form.Label>
                  </Form.Item>
                  <Form.Item className="flex items-center space-x-3 space-y-0">
                    <Form.Control>
                      <RadioGroup.Item value="mentions" />
                    </Form.Control>
                    <Form.Label className="font-normal">
                      Direct messages and mentions
                    </Form.Label>
                  </Form.Item>
                  <Form.Item className="flex items-center space-x-3 space-y-0">
                    <Form.Control>
                      <RadioGroup.Item value="none" />
                    </Form.Control>
                    <Form.Label className="font-normal">Nothing</Form.Label>
                  </Form.Item>
                </RadioGroup>
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
