import { type ClassValue, clsx } from 'clsx';
import * as React from 'react';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  prefix: 'core-',
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getChildrenDisplayNames(children: React.ReactNode) {
  return React.Children.map(children, (child) =>
    React.isValidElement(child) && child.type && (child.type as any).displayName
      ? (child.type as any).displayName
      : null
  );
}
