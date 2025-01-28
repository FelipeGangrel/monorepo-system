import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { HoverCard } from './hover-card';

describe('HoverCard component', () => {
  it('should render HoverCard component without errors', () => {
    render(
      <HoverCard>
        <HoverCard.Trigger>Open HoverCard</HoverCard.Trigger>
        <HoverCard.Content>HoverCard Content</HoverCard.Content>
      </HoverCard>
    );

    expect(screen.getByText('Open HoverCard')).toBeInTheDocument();
  });

  it('should display Content on hover', async () => {
    const user = userEvent.setup();

    render(
      <HoverCard>
        <HoverCard.Trigger>Open HoverCard</HoverCard.Trigger>
        <HoverCard.Content>HoverCard Content</HoverCard.Content>
      </HoverCard>
    );

    const trigger = screen.getByText('Open HoverCard');

    expect(screen.queryByText('HoverCard Content')).not.toBeInTheDocument();

    await user.hover(trigger);

    await waitFor(() => {
      expect(screen.getByText('HoverCard Content')).toBeInTheDocument();
    });
  });

  it('should forward refs for Content component', () => {
    const contentRef = React.createRef<HTMLDivElement>();

    render(
      <HoverCard open>
        <HoverCard.Content ref={contentRef}>
          HoverCard Content
        </HoverCard.Content>
      </HoverCard>
    );

    expect(contentRef.current).toBeInstanceOf(HTMLDivElement);
  });

  it('should apply custom props to HoverCard.Content', () => {
    render(
      <HoverCard open>
        <HoverCard.Content data-testid="custom-content">
          HoverCard Content
        </HoverCard.Content>
      </HoverCard>
    );

    expect(screen.getByTestId('custom-content')).toBeInTheDocument();
  });
});
