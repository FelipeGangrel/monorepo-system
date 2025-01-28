import { Avatar, Button, HoverCard } from '@felipegangrel/core-ui';
import { Meta, StoryObj } from '@storybook/react';
import { CalendarDaysIcon } from 'lucide-react';

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

export const Default: Story = {
  args: {
    children: (
      <>
        <HoverCard.Trigger>Hover</HoverCard.Trigger>
        <HoverCard.Content>Hover card content here</HoverCard.Content>
      </>
    ),
  },
};

export const Example: Story = {
  args: {
    children: (
      <>
        <HoverCard.Trigger asChild>
          <Button variant="link">@nextjs</Button>
        </HoverCard.Trigger>
        <HoverCard.Content className="w-80">
          <HoverCard.Arrow />
          <div className="flex justify-between space-x-4">
            <Avatar>
              <Avatar.Image src="https://github.com/vercel.png" />
              <Avatar.Fallback>VC</Avatar.Fallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@nextjs</h4>
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="flex items-center pt-2">
                <CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
                <span className="text-muted-foreground text-xs">
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
