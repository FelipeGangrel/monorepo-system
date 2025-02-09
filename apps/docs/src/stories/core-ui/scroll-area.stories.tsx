import { ScrollArea, Separator } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * Augments native scroll functionality for custom, cross-browser styling.
 */
const meta: Meta<typeof ScrollArea> = {
  title: 'Core UI/ScrollArea',
  component: ScrollArea,
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

type Story = StoryObj<typeof ScrollArea>;

const TagsComponent = () => {
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  return (
    <div className="p-4">
      <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
      {tags.map((tag) => (
        <div key={tag}>
          <div className="text-sm">{tag}</div>
          <Separator className="my-2" />
        </div>
      ))}
    </div>
  );
};

const ArtworksComponent = () => {
  type Artwork = {
    artist: string;
    art: string;
  };

  const works: Artwork[] = [
    {
      artist: 'Ornella Binni',
      art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
    },
    {
      artist: 'Tom Byrom',
      art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
    },
    {
      artist: 'Vladimir Malyavko',
      art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
    },
  ];

  return (
    <div className="flex w-max space-x-4 p-4">
      {works.map((artwork) => (
        <figure key={artwork.artist} className="shrink-0">
          <div className="overflow-hidden rounded-md">
            <img
              src={artwork.art}
              alt={`Photo by ${artwork.artist}`}
              className="aspect-[3/4] h-fit w-fit object-cover"
              width={300}
              height={400}
            />
          </div>
          <figcaption className="pt-2 text-xs text-muted-foreground">
            Photo by{' '}
            <span className="font-semibold text-foreground">
              {artwork.artist}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export const Example: Story = {
  args: {
    className: 'h-72 w-48 rounded-md border',
    children: (
      <>
        <TagsComponent />
        <ScrollArea.ScrollBar />
      </>
    ),
  },
};

export const WithCustomScrollbar: Story = {
  args: {
    className: 'h-72 w-48 rounded-md border',
    children: (
      <>
        <TagsComponent />
        <ScrollArea.ScrollBar className="bg-foreground" />
      </>
    ),
  },
};

export const WithCustomThumb: Story = {
  args: {
    className: 'h-72 w-48 rounded-md border',
    children: (
      <>
        <TagsComponent />
        <ScrollArea.ScrollBar>
          <ScrollArea.ScrollBarThumb className="bg-foreground" />
        </ScrollArea.ScrollBar>
      </>
    ),
  },
};

export const WithHorizontalScroll: Story = {
  args: {
    className: 'w-96 whitespace-nowrap rounded-md border',
    children: (
      <>
        <ArtworksComponent />
        <ScrollArea.ScrollBar orientation="horizontal" />
      </>
    ),
  },
};
