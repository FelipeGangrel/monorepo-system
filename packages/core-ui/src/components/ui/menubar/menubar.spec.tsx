import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Menubar } from './menubar';

describe('Menubar Component', () => {
  it('renders the Menubar root component', () => {
    render(<Menubar data-testid="menubar-root" />);
    const menubarElement = screen.getByTestId('menubar-root');
    expect(menubarElement).toBeInTheDocument();
    expect(menubarElement).toHaveClass('core-bg-background');
  });

  it('renders a Menu with Trigger and Content', async () => {
    const user = userEvent.setup();

    render(
      <Menubar>
        <Menubar.Menu>
          <Menubar.Trigger data-testid="menu-trigger">Menu</Menubar.Trigger>
          <Menubar.Content data-testid="menu-content">
            <Menubar.Item>Item 1</Menubar.Item>
            <Menubar.Item>Item 2</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar>
    );

    const menuTrigger = screen.getByTestId('menu-trigger');
    expect(menuTrigger).toBeInTheDocument();

    // Initially, the content should not be visible
    const menuContent = screen.queryByTestId('menu-content');
    expect(menuContent).not.toBeInTheDocument();

    // Simulate clicking the trigger
    await user.click(menuTrigger);

    // The content should now be visible
    const visibleContent = screen.getByTestId('menu-content');
    expect(visibleContent).toBeInTheDocument();
    expect(visibleContent).toHaveClass('core-bg-popover');
  });

  it('renders a Submenu with SubTrigger and SubContent', async () => {
    const user = userEvent.setup();

    render(
      <Menubar>
        <Menubar.Menu>
          <Menubar.Trigger data-testid="menu-trigger">Menu</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Sub>
              <Menubar.SubTrigger data-testid="submenu-trigger">
                Submenu
              </Menubar.SubTrigger>
              <Menubar.SubContent data-testid="submenu-content">
                <Menubar.Item>Sub Item 1</Menubar.Item>
                <Menubar.Item>Sub Item 2</Menubar.Item>
              </Menubar.SubContent>
            </Menubar.Sub>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar>
    );

    await user.click(screen.getByTestId('menu-trigger'));

    expect(screen.queryByTestId('submenu-trigger')).toBeInTheDocument();
    expect(screen.queryByTestId('submenu-content')).not.toBeInTheDocument();

    await user.click(screen.getByTestId('submenu-trigger'));

    expect(screen.queryByTestId('submenu-content')).toBeInTheDocument();
  });
});
