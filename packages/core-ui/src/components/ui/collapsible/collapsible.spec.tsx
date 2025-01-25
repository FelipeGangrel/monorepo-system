import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';

import { Collapsible } from './collapsible';

describe('Collapsible Component', () => {
  it('should render the Collapsible without crashing', () => {
    render(
      <Collapsible>
        <Collapsible.Trigger>Toggle</Collapsible.Trigger>
        <Collapsible.Content>Content Here</Collapsible.Content>
      </Collapsible>
    );

    const trigger = screen.getByRole('button', {
      name: /toggle/i,
    });
    expect(trigger).toBeInTheDocument();

    fireEvent.click(trigger);

    const content = screen.getByText('Content Here');
    expect(content).toBeInTheDocument();
  });

  it('should toggle content visibility when Trigger is clicked', async () => {
    render(
      <Collapsible>
        <Collapsible.Trigger>Toggle</Collapsible.Trigger>
        <Collapsible.Content>Content here</Collapsible.Content>
      </Collapsible>
    );

    const trigger = screen.getByRole('button', {
      name: /toggle/i,
    });

    let content = screen.queryByText('Content here');

    // Content should be hidden initially
    expect(content).not.toBeInTheDocument();

    // Simulate click to open
    fireEvent.click(trigger);

    content = await screen.findByText('Content here');
    expect(content).toBeVisible();

    // Simulate click to close
    fireEvent.click(trigger);
    expect(content).not.toBeVisible();
  });

  it('should work with defaultOpen property', () => {
    render(
      <Collapsible defaultOpen>
        <Collapsible.Trigger>Toggle</Collapsible.Trigger>
        <Collapsible.Content>Content here</Collapsible.Content>
      </Collapsible>
    );

    const content = screen.getByText('Content here');
    // Content should be visible due to defaultOpen
    expect(content).toBeVisible();
  });

  it('should open and close in controlled mode', async () => {
    const ControlledCollapsible = () => {
      const [open, setOpen] = React.useState(false);
      return (
        <Collapsible open={open} onOpenChange={setOpen}>
          <Collapsible.Trigger>Toggle</Collapsible.Trigger>
          <Collapsible.Content>Content here</Collapsible.Content>
        </Collapsible>
      );
    };

    render(<ControlledCollapsible />);

    const trigger = screen.getByRole('button', {
      name: /toggle/i,
    });

    let content = screen.queryByText('Content here');

    // Content should be hidden initially
    expect(content).not.toBeInTheDocument();

    // Simulate click to open
    fireEvent.click(trigger);

    content = await screen.findByText('Content here');
    expect(content).toBeVisible();

    // Simulate click to close
    fireEvent.click(trigger);
    expect(content).not.toBeVisible();
  });
});
