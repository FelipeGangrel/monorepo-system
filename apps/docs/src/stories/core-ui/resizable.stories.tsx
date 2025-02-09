import { Resizable } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * Accessible resizable panel groups and layouts with keyboard support.
 */
const meta: Meta<typeof Resizable> = {
  title: 'core-ui/Resizable',
  component: Resizable,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Resizable>;

export const Example: Story = {
  args: {
    direction: 'vertical',
    className: 'min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]',
    children: (
      <>
        <Resizable.Panel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Header</span>
          </div>
        </Resizable.Panel>
        <Resizable.Handle />
        <Resizable.Panel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </Resizable.Panel>
      </>
    ),
  },
};

export const WithHandle: Story = {
  args: {
    direction: 'horizontal',
    className: 'max-w-md rounded-lg border md:min-w-[450px]',
    children: (
      <>
        <Resizable.Panel defaultSize={50}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </div>
        </Resizable.Panel>
        <Resizable.Handle withHandle />
        <Resizable.Panel defaultSize={50}>
          <Resizable direction="vertical">
            <Resizable.Panel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </Resizable.Panel>
            <Resizable.Handle withHandle />
            <Resizable.Panel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </Resizable.Panel>
          </Resizable>
        </Resizable.Panel>
      </>
    ),
  },
};
