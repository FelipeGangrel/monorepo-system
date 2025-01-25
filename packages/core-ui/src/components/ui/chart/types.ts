import * as React from 'react';
import * as RechartsPrimitive from 'recharts';

import { THEMES } from './constants';

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

export type ChartContextProps = {
  config: ChartConfig;
};

export type ChartRef = HTMLDivElement;
export type ChartProps = React.ComponentProps<'div'> & {
  config: ChartConfig;
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >['children'];
};

export type ChartStyleProps = {
  id: string;
  config: ChartConfig;
};

export type ChartTooltipContentRef = HTMLDivElement;
export type ChartTooltipContentProps = React.ComponentProps<
  typeof RechartsPrimitive.Tooltip
> &
  React.ComponentProps<'div'> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: 'line' | 'dot' | 'dashed';
    nameKey?: string;
    labelKey?: string;
  };

export type ChartLegendContentRef = HTMLDivElement;
export type ChartLegendContentProps = React.ComponentProps<'div'> &
  Pick<RechartsPrimitive.LegendProps, 'payload' | 'verticalAlign'> & {
    hideIcon?: boolean;
    nameKey?: string;
  };

export type ChartComponent = React.ForwardRefExoticComponent<
  ChartProps & React.RefAttributes<ChartRef>
> & {
  Style: React.FunctionComponent<ChartStyleProps>;
  Tooltip: typeof RechartsPrimitive.Tooltip;
  TooltipContent: React.ForwardRefExoticComponent<
    ChartTooltipContentProps & React.RefAttributes<ChartTooltipContentRef>
  >;
  Legend: typeof RechartsPrimitive.Legend;
  LegendContent: React.ForwardRefExoticComponent<
    ChartLegendContentProps & React.RefAttributes<ChartLegendContentRef>
  >;
};
