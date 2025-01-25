import { fireEvent, render, screen } from '@testing-library/react';

import { Popover } from './popover';

describe('Popover Component', () => {
  it('renders Popover.Root without crashing', () => {
    render(
      <Popover.Root>
        <Popover.Trigger>Open Popover</Popover.Trigger>
        <Popover.Content>This is Popover Content</Popover.Content>
      </Popover.Root>
    );

    expect(screen.getByText('Open Popover')).toBeInTheDocument();
  });

  it('displays Popover.Content when Popover.Trigger is clicked', () => {
    render(
      <Popover.Root>
        <Popover.Trigger>Open Popover</Popover.Trigger>
        <Popover.Content data-testid="popover-content">
          This is Popover Content
        </Popover.Content>
      </Popover.Root>
    );

    const trigger = screen.getByText('Open Popover');

    expect(screen.queryByTestId('popover-content')).not.toBeInTheDocument();

    fireEvent.click(trigger);

    expect(screen.getByTestId('popover-content')).toBeInTheDocument();
    expect(screen.getByTestId('popover-content')).toHaveTextContent(
      'This is Popover Content'
    );
  });

  it('applies custom class names to Popover.Content', () => {
    render(
      <Popover.Root>
        <Popover.Trigger>Open Popover</Popover.Trigger>
        <Popover.Content data-testid="popover-content" className="custom-class">
          Custom Content
        </Popover.Content>
      </Popover.Root>
    );

    fireEvent.click(screen.getByText('Open Popover'));

    expect(screen.getByTestId('popover-content')).toHaveClass('custom-class');
  });
});
