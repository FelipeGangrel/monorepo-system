import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Drawer } from './drawer';

describe('Drawer Component', () => {
  it('renders the Drawer with default props', () => {
    render(
      <Drawer>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Test Title</Drawer.Title>
          </Drawer.Header>
          <Drawer.Description>Test Description</Drawer.Description>
          <Drawer.Footer>Test Footer</Drawer.Footer>
        </Drawer.Content>
      </Drawer>
    );

    const title = screen.queryByText('Test Title');
    const description = screen.queryByText('Test Description');
    const footer = screen.queryByText('Test Footer');

    expect(title).not.toBeInTheDocument();
    expect(description).not.toBeInTheDocument();
    expect(footer).not.toBeInTheDocument();
  });

  it('renders and opens the Drawer when the trigger is clicked', () => {
    render(
      <Drawer>
        <Drawer.Trigger>Open Drawer</Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer is Open</Drawer.Title>
            <Drawer.Description>Some Description</Drawer.Description>
          </Drawer.Header>
        </Drawer.Content>
      </Drawer>
    );

    expect(screen.queryByText('Drawer is Open')).not.toBeInTheDocument();

    const trigger = screen.getByText('Open Drawer');
    fireEvent.click(trigger);

    expect(screen.getByText('Drawer is Open')).toBeInTheDocument();
  });
});
