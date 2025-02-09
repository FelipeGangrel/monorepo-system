import { ScrollArea, Separator } from '@felipegangrel/core-ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ScrollArea> = {
  title: 'core-ui/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;

const TagsComponent = () => {
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  return (
    <div className="docs-p-4">
      <h4 className="docs-mb-4 docs-text-sm docs-font-medium docs-leading-none">
        Tags
      </h4>
      {tags.map((tag) => (
        <div key={tag}>
          <div className="docs-text-sm">{tag}</div>
          <Separator className="docs-my-2" />
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
    <div className="docs-flex docs-w-max docs-space-x-4 docs-p-4">
      {works.map((artwork) => (
        <figure key={artwork.artist} className="docs-shrink-0">
          <div className="docs-overflow-hidden docs-rounded-md">
            <img
              src={artwork.art}
              alt={`Photo by ${artwork.artist}`}
              className="docs-aspect-[3/4] docs-h-fit docs-w-fit docs-object-cover"
              width={300}
              height={400}
            />
          </div>
          <figcaption className="docs-pt-2 docs-text-xs docs-text-muted-foreground">
            Photo by{' '}
            <span className="docs-font-semibold docs-text-foreground">
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
    className: 'docs-h-72 docs-w-48 docs-rounded-md docs-border',
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
    className: 'docs-h-72 docs-w-48 docs-rounded-md docs-border',
    children: (
      <>
        <TagsComponent />
        <ScrollArea.ScrollBar className="docs-bg-foreground" />
      </>
    ),
  },
};

export const WithCustomThumb: Story = {
  args: {
    className: 'docs-h-72 docs-w-48 docs-rounded-md docs-border',
    children: (
      <>
        <TagsComponent />
        <ScrollArea.ScrollBar>
          <ScrollArea.ScrollBarThumb className="docs-bg-foreground" />
        </ScrollArea.ScrollBar>
      </>
    ),
  },
};

export const WithHorizontalScroll: Story = {
  args: {
    className: 'docs-w-96 docs-whitespace-nowrap docs-rounded-md docs-border',
    children: (
      <>
        <ArtworksComponent />
        <ScrollArea.ScrollBar orientation="horizontal" />
      </>
    ),
  },
};
