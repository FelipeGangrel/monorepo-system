import { Chart, type ChartConfig } from '@felipegangrel/core-ui';
import { Meta, StoryObj } from '@storybook/react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

const meta: Meta<typeof Chart> = {
  title: 'core-ui/Chart',
  component: Chart,
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
