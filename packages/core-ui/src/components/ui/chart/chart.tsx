import * as React from 'react';
import * as RechartsPrimitive from 'recharts';

import { cn } from '#/lib/utils';

import { THEMES } from './constants';
import type {
  ChartComponent,
  ChartConfig,
  ChartContextProps,
  ChartLegendContentProps,
  ChartLegendContentRef,
  ChartProps,
  ChartRef,
  ChartStyleProps,
  ChartTooltipContentProps,
  ChartTooltipContentRef,
} from './types';

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error('useChart must be used within a <ChartContainer />');
  }

  return context;
}

const Chart = React.forwardRef<ChartRef, ChartProps>(
  ({ id, className, children, config, ...props }, ref) => {
    const uniqueId = React.useId();
    const chartId = `chart-${id || uniqueId.replace(/:/g, '')}`;

    return (
      <ChartContext.Provider value={{ config }}>
        <div
          data-chart={chartId}
          ref={ref}
          className={cn(
            'core-flex core-aspect-video core-justify-center core-text-xs [&_.recharts-cartesian-axis-tick_text]:core-fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke=#ccc]]:core-stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:core-stroke-border [&_.recharts-dot[stroke=#fff]]:core-stroke-transparent [&_.recharts-layer]:core-outline-none [&_.recharts-polar-grid_[stroke=#ccc]]:core-stroke-border [&_.recharts-radial-bar-background-sector]:core-fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:core-fill-muted [&_.recharts-reference-line_[stroke=#ccc]]:core-stroke-border [&_.recharts-sector[stroke=#fff]]:core-stroke-transparent [&_.recharts-sector]:core-outline-none [&_.recharts-surface]:core-outline-none',
            className
          )}
          {...props}
        >
          <ChartStyle id={chartId} config={config} />
          <RechartsPrimitive.ResponsiveContainer>
            {children}
          </RechartsPrimitive.ResponsiveContainer>
        </div>
      </ChartContext.Provider>
    );
  }
) as ChartComponent;
Chart.displayName = 'Chart';

const ChartStyle = ({ id, config }: ChartStyleProps) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color
  );

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join('\n')}
}
`
          )
          .join('\n'),
      }}
    />
  );
};
ChartStyle.displayNeme = 'Chart.Style';
Chart.Style = ChartStyle;

Chart.Tooltip = RechartsPrimitive.Tooltip;
Chart.Tooltip.displayName = 'Chart.Tooltip';

Chart.TooltipContent = React.forwardRef<
  ChartTooltipContentRef,
  ChartTooltipContentProps
>(
  (
    {
      active,
      payload,
      className,
      indicator = 'dot',
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || 'value'}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === 'string'
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return (
          <div className={cn('core-font-medium', labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        );
      }

      if (!value) {
        return null;
      }

      return (
        <div className={cn('core-font-medium', labelClassName)}>{value}</div>
      );
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== 'dot';

    return (
      <div
        ref={ref}
        className={cn(
          'core-grid core-min-w-[8rem] core-items-start core-gap-1.5 core-rounded-lg core-border core-border-border/50 core-bg-background core-px-2.5 core-py-1.5 core-text-xs core-shadow-xl',
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="core-grid core-gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || 'value'}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;

            return (
              <div
                key={item.dataKey}
                className={cn(
                  'core-flex core-w-full core-flex-wrap core-items-stretch core-gap-2 [&>svg]:core-h-2.5 [&>svg]:core-w-2.5 [&>svg]:core-text-muted-foreground',
                  indicator === 'dot' && 'core-items-center'
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            'core-shrink-0 core-rounded-[2px] core-border-[--color-border] core-bg-[--color-bg]',
                            {
                              'h-2.5 w-2.5': indicator === 'dot',
                              'w-1': indicator === 'line',
                              'w-0 border-[1.5px] border-dashed bg-transparent':
                                indicator === 'dashed',
                              'my-0.5': nestLabel && indicator === 'dashed',
                            }
                          )}
                          style={
                            {
                              '--color-bg': indicatorColor,
                              '--color-border': indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        'core-flex core-flex-1 core-justify-between core-leading-none',
                        nestLabel ? 'core-items-end' : 'core-items-center'
                      )}
                    >
                      <div className="core-grid core-gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="core-text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="core-font-mono core-font-medium core-tabular-nums core-text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
Chart.TooltipContent.displayName = 'Chart.TooltipContent';

Chart.Legend = RechartsPrimitive.Legend;
Chart.Legend.displayName = 'Chart.Legend';

Chart.LegendContent = React.forwardRef<
  ChartLegendContentRef,
  ChartLegendContentProps
>(
  (
    { className, hideIcon = false, payload, verticalAlign = 'bottom', nameKey },
    ref
  ) => {
    const { config } = useChart();

    if (!payload?.length) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(
          'core-flex core-items-center core-justify-center core-gap-4',
          verticalAlign === 'top' ? 'core-pb-3' : 'core-pt-3',
          className
        )}
      >
        {payload.map((item) => {
          const key = `${nameKey || item.dataKey || 'value'}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          return (
            <div
              key={item.value}
              className={cn(
                'core-flex core-items-center core-gap-1.5 [&>svg]:core-h-3 [&>svg]:core-w-3 [&>svg]:core-text-muted-foreground'
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="core-h-2 core-w-2 core-shrink-0 core-rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
      </div>
    );
  }
);
Chart.LegendContent.displayName = 'Chart.LegendContent';

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== 'object' || payload === null) {
    return undefined;
  }

  const payloadPayload =
    'payload' in payload &&
    typeof payload.payload === 'object' &&
    payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === 'string'
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === 'string'
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string;
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config];
}

export type { ChartConfig };
export { Chart };
