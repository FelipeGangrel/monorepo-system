import * as React from 'react';

export type BreadcrumbRef = HTMLElement;
export type BreadcrumbProps = React.ComponentProps<'nav'> & {
  separator?: React.ReactNode;
};

export type BreadcrumbListRef = HTMLOListElement;
export type BreadcrumbListProps = React.ComponentPropsWithoutRef<'ol'>;

export type BreadcrumbItemRef = HTMLLIElement;
export type BreadcrumbItemProps = React.ComponentPropsWithoutRef<'li'>;

export type BreadcrumbLinkRef = HTMLAnchorElement;
export type BreadcrumbLinkProps = React.ComponentPropsWithoutRef<'a'> & {
  asChild?: boolean;
};

export type BreadcrumbPageRef = HTMLSpanElement;
export type BreadcrumbPageProps = React.ComponentPropsWithoutRef<'span'>;

export type BreadcrumbSeparatorProps = React.ComponentProps<'li'>;
export type BreadcrumbEllipsisProps = React.ComponentProps<'span'>;

export type BreadcrumbComponent = React.ForwardRefExoticComponent<
  BreadcrumbProps & React.RefAttributes<BreadcrumbRef>
> & {
  List: React.ForwardRefExoticComponent<
    BreadcrumbListProps & React.RefAttributes<BreadcrumbListRef>
  >;
  Item: React.ForwardRefExoticComponent<
    BreadcrumbItemProps & React.RefAttributes<BreadcrumbItemRef>
  >;
  Link: React.ForwardRefExoticComponent<
    BreadcrumbLinkProps & React.RefAttributes<BreadcrumbLinkRef>
  >;
  Page: React.ForwardRefExoticComponent<
    BreadcrumbPageProps & React.RefAttributes<BreadcrumbPageRef>
  >;
  Separator: React.FunctionComponent<BreadcrumbSeparatorProps>;
  Ellipsis: React.FunctionComponent<BreadcrumbEllipsisProps>;
};
