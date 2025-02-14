import { cn } from '#/lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'core-animate-pulse core-rounded-md core-bg-primary/10',
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
