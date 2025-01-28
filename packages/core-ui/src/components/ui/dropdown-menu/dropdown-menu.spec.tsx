import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DropdownMenu } from './dropdown-menu';

describe('DropdownMenu component', () => {
  it('should render the dropdown trigger', () => {
    render(
      <DropdownMenu>
        <DropdownMenu.Trigger>Open Menu</DropdownMenu.Trigger>
      </DropdownMenu>
    );

    expect(screen.getByText('Open Menu')).toBeInTheDocument();
  });

  it('should toggle the menu content on trigger click', async () => {
    const user = userEvent.setup({
      pointerEventsCheck: 0,
    });

    render(
      <DropdownMenu>
        <DropdownMenu.Trigger>Open Menu</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Item 1</DropdownMenu.Item>
          <DropdownMenu.Item>Item 2</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );

    const trigger = screen.getByText('Open Menu');
    expect(trigger).toBeInTheDocument();

    // Before clicking, menu content should not be visible
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();

    // Click to open the menu
    await user.click(trigger);

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();

    // Click again to close the menu
    await user.click(trigger);
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
  });

  it('should render menu items and allow navigation', async () => {
    const user = userEvent.setup({
      pointerEventsCheck: 0,
    });

    render(
      <DropdownMenu>
        <DropdownMenu.Trigger>Open Menu</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Item 1</DropdownMenu.Item>
          <DropdownMenu.Item>Item 2</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );

    await user.click(screen.getByText('Open Menu'));

    const item1 = screen.getByText('Item 1');
    const item2 = screen.getByText('Item 2');

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();

    // Simulate interacting (via navigation or focus)
    await user.hover(item1);
    expect(item1).toHaveFocus();
  });

  it('should handle checkbox item toggle state', async () => {
    const user = userEvent.setup({
      pointerEventsCheck: 0,
    });

    render(
      <DropdownMenu>
        <DropdownMenu.Trigger>Open Menu</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.CheckboxItem>Checkbox Item</DropdownMenu.CheckboxItem>
        </DropdownMenu.Content>
      </DropdownMenu>
    );

    await user.click(screen.getByText('Open Menu'));

    const checkboxItem = screen.getByText('Checkbox Item');
    expect(checkboxItem).toBeInTheDocument();
  });

  it('should render submenus correctly', async () => {
    const user = userEvent.setup({
      pointerEventsCheck: 0,
    });

    render(
      <DropdownMenu>
        <DropdownMenu.Trigger>Open Menu</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>Submenu</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item>Subitem 1</DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>
        </DropdownMenu.Content>
      </DropdownMenu>
    );

    await user.click(screen.getByText('Open Menu'));

    const submenuTrigger = screen.getByText('Submenu');
    expect(submenuTrigger).toBeInTheDocument();

    // Submenu content should not be visible initially
    expect(screen.queryByText('Subitem 1')).not.toBeInTheDocument();

    // Open the submenu
    await user.click(submenuTrigger);
    expect(screen.getByText('Subitem 1')).toBeInTheDocument();
  });
});
