import { fireEvent, render, screen } from '@testing-library/react';

import { Accordion } from './accordion';

describe('Accordion Component', () => {
  it('renders without crashing', async () => {
    render(
      <Accordion type="single">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Click me</Accordion.Trigger>
          <Accordion.Content>Hidden content</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    // Ensure the trigger is rendered
    const trigger = screen.getByText('Click me');
    expect(trigger).toBeInTheDocument();
  });

  it('toggles content visibility when trigger is clicked', async () => {
    render(
      <Accordion type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Click me</Accordion.Trigger>
          <Accordion.Content>Hidden content</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    const trigger = screen.getByText('Click me');

    // Initially, content is not visible (not in the DOM)
    let content = screen.queryByText('Hidden content');
    expect(content).not.toBeInTheDocument();

    // Click the trigger to expand
    fireEvent.click(trigger);

    // Now the content should be visible
    content = await screen.findByText('Hidden content');
    expect(content).toBeVisible();

    // Click the trigger again to collapse
    fireEvent.click(trigger);
    expect(content).not.toBeVisible();
  });

  it('applies custom classes correctly', async () => {
    render(
      <Accordion type="single">
        <Accordion.Item value="item-1" className="custom-item-class">
          <Accordion.Trigger className="custom-trigger-class">
            Click me
          </Accordion.Trigger>
          <Accordion.Content className="custom-content-class">
            Hidden content
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    const item = screen.getByText('Click me').closest('div');
    const trigger = screen.getByText('Click me');

    // Open the accordion to render the content
    fireEvent.click(trigger);
    const content = await screen.findByText('Hidden content');

    expect(item).toHaveClass('custom-item-class');
    expect(trigger).toHaveClass('custom-trigger-class');
    expect(content).toHaveClass('custom-content-class');
  });

  it('opens only one item at a time when type is single', async () => {
    render(
      <Accordion type="single">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Item 1</Accordion.Trigger>
          <Accordion.Content>Content 1</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Item 2</Accordion.Trigger>
          <Accordion.Content>Content 2</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    const trigger1 = screen.getByText('Item 1');
    const trigger2 = screen.getByText('Item 2');

    // Open the first item
    fireEvent.click(trigger1);
    const content1 = await screen.findByText('Content 1');
    expect(content1).toBeVisible();

    // Ensure the second item's content is not visible
    let content2 = screen.queryByText('Content 2');
    expect(content2).not.toBeInTheDocument();

    // Open the second item
    fireEvent.click(trigger2);
    content2 = await screen.findByText('Content 2');
    expect(content2).toBeVisible();

    // Ensure the first item's content is now hidden
    expect(content1).not.toBeVisible();
  });

  it('allows multiple items to open when type is multiple', async () => {
    render(
      <Accordion type="multiple">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Item 1</Accordion.Trigger>
          <Accordion.Content>Content 1</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Item 2</Accordion.Trigger>
          <Accordion.Content>Content 2</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    const trigger1 = screen.getByText('Item 1');
    const trigger2 = screen.getByText('Item 2');

    // Open both items
    fireEvent.click(trigger1);
    const content1 = await screen.findByText('Content 1');
    expect(content1).toBeVisible();

    fireEvent.click(trigger2);
    const content2 = await screen.findByText('Content 2');
    expect(content2).toBeVisible();

    // Both contents should be visible
    expect(content1).toBeVisible();
    expect(content2).toBeVisible();
  });
});
