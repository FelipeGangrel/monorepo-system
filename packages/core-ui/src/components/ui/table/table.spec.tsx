import { render, screen } from '@testing-library/react';

import { Table } from './table';

describe('Table Component', () => {
  it('renders the Table component', () => {
    render(<Table data-testid="my-table" />);
    const tableElement = screen.getByTestId('my-table');
    expect(tableElement).toBeInTheDocument();
    expect(tableElement.tagName).toBe('TABLE');
  });

  it('adds custom className to Table', () => {
    const customClassName = 'custom-class';
    render(<Table className={customClassName} data-testid="my-table" />);
    const tableElement = screen.getByTestId('my-table');
    expect(tableElement).toHaveClass(customClassName);
  });

  it('renders the Table.Header component', () => {
    render(
      <Table>
        <Table.Header data-testid="table-header" />
      </Table>
    );
    const headerElement = screen.getByTestId('table-header');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.tagName).toBe('THEAD');
  });

  it('renders the Table.Body component', () => {
    render(
      <Table>
        <Table.Body data-testid="table-body">
          <Table.Row>
            <Table.Cell>Cell 1</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
    const bodyElement = screen.getByTestId('table-body');
    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement.tagName).toBe('TBODY');
    expect(screen.getByText('Cell 1')).toBeInTheDocument();
  });

  it('renders the Table.Footer component', () => {
    render(
      <Table>
        <Table.Footer data-testid="table-footer">
          <Table.Row>
            <Table.Cell>Footer Cell</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
    const footerElement = screen.getByTestId('table-footer');
    expect(footerElement).toBeInTheDocument();
    expect(footerElement.tagName).toBe('TFOOT');
    expect(screen.getByText('Footer Cell')).toBeInTheDocument();
  });

  it('renders the Table.Row component', () => {
    render(
      <Table>
        <Table.Body>
          <Table.Row data-testid="table-row">
            <Table.Cell>Row Cell</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
    const rowElement = screen.getByTestId('table-row');
    expect(rowElement).toBeInTheDocument();
    expect(rowElement.tagName).toBe('TR');
    expect(screen.getByText('Row Cell')).toBeInTheDocument();
  });

  it('renders the Table.Head component', () => {
    render(
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head data-testid="table-head">Header 1</Table.Head>
          </Table.Row>
        </Table.Header>
      </Table>
    );
    const headElement = screen.getByTestId('table-head');
    expect(headElement).toBeInTheDocument();
    expect(headElement.tagName).toBe('TH');
    expect(screen.getByText('Header 1')).toBeInTheDocument();
  });

  it('renders the Table.Cell component', () => {
    render(
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell data-testid="table-cell">Body Cell</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
    const cellElement = screen.getByTestId('table-cell');
    expect(cellElement).toBeInTheDocument();
    expect(cellElement.tagName).toBe('TD');
    expect(screen.getByText('Body Cell')).toBeInTheDocument();
  });

  it('renders the Table.Caption component', () => {
    const captionText = 'Table Caption';
    render(
      <Table>
        <Table.Caption data-testid="table-caption">{captionText}</Table.Caption>
      </Table>
    );
    const captionElement = screen.getByTestId('table-caption');
    expect(captionElement).toBeInTheDocument();
    expect(captionElement.tagName).toBe('CAPTION');
    expect(screen.getByText(captionText)).toBeInTheDocument();
  });
});
