import * as React from 'react';

export const getChildrenDisplayNames = (children: React.ReactNode) =>
  React.Children.map(children, (child) =>
    React.isValidElement(child) && child.type && (child.type as any).displayName
      ? (child.type as any).displayName
      : null
  );
