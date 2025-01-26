import { fireEvent, render, screen } from '@testing-library/react';

import { ContextMenu } from './context-menu';

describe('ContextMenu Component', () => {
  it('renders ContextMenu trigger correctly', () => {
    render(
      <ContextMenu>
        <ContextMenu.Trigger>Open Menu</ContextMenu.Trigger>
      </ContextMenu>
    );

    const trigger = screen.getByText('Open Menu');
    expect(trigger).toBeInTheDocument();
  });

  it('renders ContextMenu content on trigger click', async () => {
    render(
      <ContextMenu>
        <ContextMenu.Trigger>Open Menu</ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item>Item 1</ContextMenu.Item>
          <ContextMenu.Item>Item 2</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>
    );

    const trigger = screen.getByText('Open Menu');
    fireEvent.contextMenu(trigger); // Simulate right-click

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders submenu correctly', () => {
    render(
      <ContextMenu>
        <ContextMenu.Trigger>Open Menu</ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger>Submenu</ContextMenu.SubTrigger>
            <ContextMenu.SubContent data-testid="submenu-content">
              <ContextMenu.Item>Sub Item 1</ContextMenu.Item>
              <ContextMenu.Item>Sub Item 2</ContextMenu.Item>
            </ContextMenu.SubContent>
          </ContextMenu.Sub>
        </ContextMenu.Content>
      </ContextMenu>
    );

    const trigger = screen.getByText('Open Menu');
    fireEvent.contextMenu(trigger);

    const submenuTrigger = screen.getByText('Submenu');
    // Did not get to work with mouseEnter or mouseOver
    fireEvent.click(submenuTrigger);

    expect(screen.getByText('Sub Item 1')).toBeInTheDocument();
    expect(screen.getByText('Sub Item 2')).toBeInTheDocument();
  });

  it('renders separator correctly', () => {
    render(
      <ContextMenu>
        <ContextMenu.Trigger>Open Menu</ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item>Item 1</ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Item>Item 2</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>
    );

    const trigger = screen.getByText('Open Menu');
    fireEvent.contextMenu(trigger);

    const item1 = screen.getByText('Item 1');
    expect(item1).toBeInTheDocument();

    const separator = screen.getByRole('separator');
    expect(separator).toBeInTheDocument();

    const item2 = screen.getByText('Item 2');
    expect(item2).toBeInTheDocument();
  });
});
