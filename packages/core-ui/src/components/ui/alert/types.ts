import type { VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { alertVariants } from './variants';

export type AlertRef = HTMLDivElement;
export type AlertProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants>;

export type AlertTitleRef = HTMLParagraphElement;
export type AlertTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export type AlertDescriptionRef = HTMLParagraphElement;
export type AlertDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

export type AlertComponent = React.ForwardRefExoticComponent<
  AlertProps & React.RefAttributes<AlertRef>
> & {
  Title: React.ForwardRefExoticComponent<
    AlertTitleProps & React.RefAttributes<AlertTitleRef>
  >;
  Description: React.ForwardRefExoticComponent<
    AlertDescriptionProps & React.RefAttributes<AlertDescriptionRef>
  >;
};
