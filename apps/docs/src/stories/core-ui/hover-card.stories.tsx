import { Avatar, Button, HoverCard } from '@felipegangrel/core-ui';
import { Meta, StoryObj } from '@storybook/react';
import { CalendarDaysIcon } from 'lucide-react';

/**
 * For sighted users to preview content available behind a link.
 */
const meta: Meta<typeof HoverCard> = {
  title: 'core-ui/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Example: Story = {
  args: {
    children: (
      <>
        <HoverCard.Trigger>Hover</HoverCard.Trigger>
        <HoverCard.Content>Hover card content here</HoverCard.Content>
      </>
    ),
  },
};

export const CustomTriggerAndContent: Story = {
  args: {
    children: (
      <>
        <HoverCard.Trigger asChild>
          <Button variant="link">@nextjs</Button>
        </HoverCard.Trigger>
        <HoverCard.Content className="docs-w-80">
          <HoverCard.Arrow />
          <div className="docs-flex docs-justify-between docs-space-x-4">
            <Avatar>
              <Avatar.Image src="https://github.com/vercel.png" />
              <Avatar.Fallback>VC</Avatar.Fallback>
            </Avatar>
            <div className="docs-space-y-1">
              <h4 className="docs-text-sm docs-font-semibold">@nextjs</h4>
              <p className="docs-text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="docs-flex docs-items-center docs-pt-2">
                <CalendarDaysIcon className="docs-mr-2 docs-h-4 docs-w-4 docs-opacity-70" />{' '}
                <span className="docs-text-muted-foreground docs-text-xs">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCard.Content>
      </>
    ),
  },
};
