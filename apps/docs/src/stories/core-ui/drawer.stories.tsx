import { Button, Drawer } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';
import { Minus, Plus } from 'lucide-react';
import * as React from 'react';
import { Bar, BarChart, ResponsiveContainer } from 'recharts';

/**
 * A drawer component for React.
 */
const meta: Meta<typeof Drawer> = {
  title: 'core-ui/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Example: Story = {
  args: {
    children: (
      <>
        <Drawer.Trigger asChild>
          <Button>Trigger</Button>
        </Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Are you absolutely sure?</Drawer.Title>
            <Drawer.Description>
              This action cannot be undone.
            </Drawer.Description>
          </Drawer.Header>
          <Drawer.Footer>
            <Button>Submit</Button>
            <Drawer.Close asChild>
              <Button variant="outline">Cancel</Button>
            </Drawer.Close>
          </Drawer.Footer>
        </Drawer.Content>
      </>
    ),
  },
};

export const WithChart = () => {
  const data = [
    { goal: 400 },
    { goal: 300 },
    { goal: 200 },
    { goal: 300 },
    { goal: 200 },
    { goal: 278 },
    { goal: 189 },
    { goal: 239 },
    { goal: 300 },
    { goal: 200 },
    { goal: 278 },
    { goal: 189 },
    { goal: 349 },
  ];

  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <Drawer.Trigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <div className="docs-mx-auto docs-w-full docs-max-w-sm">
          <Drawer.Header>
            <Drawer.Title>Move Goal</Drawer.Title>
            <Drawer.Description>
              Set your daily activity goal.
            </Drawer.Description>
          </Drawer.Header>
          <div className="docs-p-4 docs-pb-0">
            <div className="docs-flex docs-items-center docs-justify-center docs-space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="docs-h-8 docs-w-8 docs-shrink-0 docs-rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
                <Minus />
                <span className="docs-sr-only">Decrease</span>
              </Button>
              <div className="docs-flex-1 docs-text-center">
                <div className="docs-text-7xl docs-font-bold docs-tracking-tighter">
                  {goal}
                </div>
                <div className="docs-text-muted-foreground docs-text-[0.70rem] docs-uppercase">
                  Calories/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="docs-h-8 docs-w-8 docs-shrink-0 docs-rounded-full"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
              >
                <Plus />
                <span className="docs-sr-only">Increase</span>
              </Button>
            </div>
            <div className="docs-mt-3 docs-h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: 'hsl(var(--foreground))',
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <Drawer.Footer>
            <Button>Submit</Button>
            <Drawer.Close asChild>
              <Button variant="outline">Cancel</Button>
            </Drawer.Close>
          </Drawer.Footer>
        </div>
      </Drawer.Content>
    </Drawer>
  );
};
