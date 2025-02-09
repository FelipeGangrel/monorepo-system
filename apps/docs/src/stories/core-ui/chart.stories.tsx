import { Chart, type ChartConfig } from '@felipegangrel/core-ui';
import { Meta, StoryObj } from '@storybook/react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

/**
 * Beautiful charts. Built using Recharts. Copy and paste into your apps.
 */
const meta: Meta<typeof Chart> = {
  title: 'Core UI/Chart',
  component: Chart,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const barChartConfig: ChartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#60a5fa',
  },
};

const barChartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
];

type Story = StoryObj<typeof Chart>;

/**
 * A simple bar chart example displaying data for "Desktop" and "Mobile".
 * The chart is rendered using the `Chart` component with data visualization
 * powered by Recharts.
 */
export const BarChartExample: Story = {
  args: {
    config: barChartConfig,
    className: 'min-h-[200px] w-screen max-w-[400px]',
    children: (
      <BarChart accessibilityLayer data={barChartData}>
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    ),
  },
  render: (args) => <Chart {...args} />,
};

/**
 * A bar chart example with added grid lines for better data visualization.
 * This chart displays data for "Desktop" and "Mobile" categories, with
 * grid lines to enhance readability. It uses the `CartesianGrid` component
 * from Recharts. Try this example to see how grid lines affect data presentation.
 */
export const BarChartExampleWithGrid: Story = {
  args: {
    config: barChartConfig,
    className: 'min-h-[200px] w-screen max-w-[400px]',
    children: (
      <BarChart accessibilityLayer data={barChartData}>
        <CartesianGrid vertical={false} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    ),
  },
  render: (args) => <Chart {...args} />,
};

/**
 * A bar chart example with both grid lines and an X-axis for enhanced readability and data organization.
 * This chart provides a monthly breakdown for "Desktop" and "Mobile" metrics, using the `CartesianGrid` and `XAxis` components
 * from Recharts. The X-axis ticks are formatted to display only the first three letters of the month.
 */
export const BarChartExampleWithXAxis: Story = {
  args: {
    config: barChartConfig,
    className: 'min-h-[200px] w-screen max-w-[400px]',
    children: (
      <BarChart accessibilityLayer data={barChartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    ),
  },
  render: (args) => <Chart {...args} />,
};

/**
 * A bar chart example with a legend included to enhance data comprehension.
 * This chart provides a monthly breakdown for "Desktop" and "Mobile" metrics, utilizing the
 * `CartesianGrid`, `XAxis`, `Chart.Tooltip`, and `Chart.Legend` components from Recharts.
 * The legend helps conveniently identify data categories, improving readability.
 */
export const BarChartExampleWithTooltip: Story = {
  args: {
    config: barChartConfig,
    className: 'min-h-[200px] w-screen max-w-[400px]',
    children: (
      <BarChart accessibilityLayer data={barChartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Chart.Tooltip content={<Chart.TooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    ),
  },
  render: (args) => <Chart {...args} />,
};

/**
 * A bar chart example with a legend and tooltip for comprehensive data interpretation.
 * This chart provides a monthly breakdown for "Desktop" and "Mobile" metrics, leveraging several components
 * from Recharts including `CartesianGrid`, `XAxis`, `Chart.Tooltip`, and `Chart.Legend`. The legend offers a clear
 * identification of data categories, while the tooltip enables detailed insights into each data point when hovered.
 * Use this example to demonstrate advanced charting features for improved data readability and interaction.
 */
export const BarChartExampleWithLegend: Story = {
  args: {
    config: barChartConfig,
    className: 'min-h-[200px] w-screen max-w-[400px]',
    children: (
      <BarChart accessibilityLayer data={barChartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Chart.Tooltip content={<Chart.TooltipContent />} />
        <Chart.Legend content={<Chart.LegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    ),
  },
  render: (args) => <Chart {...args} />,
};
