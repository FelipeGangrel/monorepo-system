import * as React from 'react';

type DivRef = React.RefAttributes<HTMLDivElement>;
type DivProps = React.HTMLAttributes<HTMLDivElement>;

export type CardComponent = React.ForwardRefExoticComponent<
  DivProps & DivRef
> & {
  Header: React.ForwardRefExoticComponent<DivProps & DivRef>;
  Title: React.ForwardRefExoticComponent<DivProps & DivRef>;
  Description: React.ForwardRefExoticComponent<DivProps & DivRef>;
  Content: React.ForwardRefExoticComponent<DivProps & DivRef>;
  Footer: React.ForwardRefExoticComponent<DivProps & DivRef>;
};
