import { Card, Carousel, type CarouselApi } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

const meta: Meta<typeof Carousel> = {
  title: 'core-ui/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    className: 'w-full max-w-sm',
    opts: { align: 'start' },
    children: (
      <>
        <Carousel.Content>
          {Array.from({ length: 5 }).map((_, index) => (
            <Carousel.Item key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <Card.Content className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </Card.Content>
                </Card>
              </div>
            </Carousel.Item>
          ))}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </>
    ),
  },
  render: (args) => <Carousel {...args} />,
};

export const VerticalOrientationAndLoop: Story = {
  args: {
    orientation: 'vertical',
    className: 'w-full max-w-sm',
    opts: { align: 'start', loop: true },
    children: (
      <>
        <Carousel.Content className="-mt-1 h-[200px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Carousel.Item key={index} className="pt-1 md:basis-1/2">
              <div className="p-1">
                <Card>
                  <Card.Content className="flex items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </Card.Content>
                </Card>
              </div>
            </Carousel.Item>
          ))}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </>
    ),
  },
  render: (args) => (
    <div className="my-6">
      <Carousel {...args} />
    </div>
  ),
};

export const WithApi = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-xs">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <Carousel.Content>
          {Array.from({ length: 5 }).map((_, index) => (
            <Carousel.Item key={index}>
              <Card>
                <Card.Content className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </Card.Content>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        Slide {current} of {count}
      </div>
    </div>
  );
};
