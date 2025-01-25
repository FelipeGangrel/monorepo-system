import { render } from '@testing-library/react';

import { Card } from './card';

describe('Card Component', () => {
  it('renders the Card component with children', () => {
    const { getByText } = render(<Card>Test Content</Card>);
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('renders the Card.Header component with children', () => {
    const { getByText } = render(<Card.Header>Header Content</Card.Header>);
    expect(getByText('Header Content')).toBeInTheDocument();
  });

  it('renders the Card.Title component with children', () => {
    const { getByText } = render(<Card.Title>Title Content</Card.Title>);
    expect(getByText('Title Content')).toBeInTheDocument();
  });

  it('renders the Card.Description component with children', () => {
    const { getByText } = render(
      <Card.Description>Description Content</Card.Description>
    );
    expect(getByText('Description Content')).toBeInTheDocument();
  });

  it('renders the Card.Content component with children', () => {
    const { getByText } = render(<Card.Content>Main Content</Card.Content>);
    expect(getByText('Main Content')).toBeInTheDocument();
  });

  it('renders the Card.Footer component with children', () => {
    const { getByText } = render(<Card.Footer>Footer Content</Card.Footer>);
    expect(getByText('Footer Content')).toBeInTheDocument();
  });

  it('renders a fully nested Card component structure', () => {
    const { getByText } = render(
      <Card>
        <Card.Header>
          <Card.Title>Title</Card.Title>
          <Card.Description>Description</Card.Description>
        </Card.Header>
        <Card.Content>Main Content</Card.Content>
        <Card.Footer>Footer Content</Card.Footer>
      </Card>
    );

    expect(getByText('Title')).toBeInTheDocument();
    expect(getByText('Description')).toBeInTheDocument();
    expect(getByText('Main Content')).toBeInTheDocument();
    expect(getByText('Footer Content')).toBeInTheDocument();
  });
});
