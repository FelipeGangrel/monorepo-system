import { cva } from 'class-variance-authority';

export const alertVariants = cva(
  'core-relative core-w-full core-rounded-lg core-border core-px-4 core-py-3 core-text-sm [&>svg+div]:core-translate-y-[-3px] [&>svg]:core-absolute [&>svg]:core-left-4 [&>svg]:core-top-4 [&>svg]:core-text-foreground [&>svg~*]:core-pl-7',
  {
    variants: {
      variant: {
        default: 'core-bg-background core-text-foreground',
        destructive:
          'core-border-destructive/50 core-text-destructive dark:core-border-destructive [&>svg]:core-text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
