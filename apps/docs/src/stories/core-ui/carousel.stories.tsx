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
    className: 'docs-w-full docs-max-w-sm',
    opts: { align: 'start' },
    children: (
      <>
        <Carousel.Content>
          {Array.from({ length: 5 }).map((_, index) => (
            <Carousel.Item
              key={index}
              className="md:docs-basis-1/2 lg:docs-basis-1/3"
            >
              <div className="docs-p-1">
                <Card>
                  <Card.Content className="docs-flex docs-aspect-square docs-items-center docs-justify-center docs-p-6">
                    <span className="docs-text-3xl docs-font-semibold">
                      {index + 1}
                    </span>
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
    className: 'docs-w-full docs-max-w-sm',
    opts: { align: 'start', loop: true },
    children: (
      <>
        <Carousel.Content className="docs-max-h-[200px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Carousel.Item key={index} className="docs-pt-1 md:docs-basis-1/2">
              <div className="docs-p-1">
                <Card>
                  <Card.Content className="docs-flex docs-items-center docs-justify-center docs-p-6">
                    <span className="docs-text-3xl docs-font-semibold">
                      {index + 1}
                    </span>
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
    <div className="docs-my-6">
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
    <div className="docs-mx-auto docs-max-w-xs">
      <Carousel setApi={setApi} className="docs-w-full docs-max-w-xs">
        <Carousel.Content>
          {Array.from({ length: 5 }).map((_, index) => (
            <Carousel.Item key={index}>
              <Card>
                <Card.Content className="docs-flex docs-aspect-square docs-items-center docs-justify-center docs-p-6">
                  <span className="docs-text-4xl docs-font-semibold">
                    {index + 1}
                  </span>
                </Card.Content>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </Carousel>
      <div className="docs-text-muted-foreground docs-py-2 docs-text-center docs-text-sm">
        Slide {current} of {count}
      </div>
    </div>
  );
};
