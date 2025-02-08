import {
  AlertTriangle,
  CheckCircle,
  Info,
  Loader,
  XCircle,
} from 'lucide-react';
import * as React from 'react';
import { Toaster as Sonner } from 'sonner';

import { useTheme } from './useTheme';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:core-bg-background group-[.toaster]:core-text-foreground group-[.toaster]:core-border-border group-[.toaster]:core-shadow-lg',
          description: 'group-[.toast]:core-text-muted-foreground',
          actionButton:
            'group-[.toast]:core-bg-primary group-[.toast]:core-text-primary-foreground',
          cancelButton:
            'group-[.toast]:core-bg-muted group-[.toast]:core-text-muted-foreground',
        },
      }}
      icons={{
        success: (
          <CheckCircle className="core-h-4 core-w-4 core-text-green-500" />
        ),
        info: <Info className="core-h-4 core-w-4 core-text-blue-500" />,
        warning: (
          <AlertTriangle className="core-h-4 core-w-4 core-text-amber-500" />
        ),
        error: <XCircle className="core-h-4 core-w-4 core-text-red-500" />,
        loading: (
          <Loader className="core-h-4 core-w-4 core-animate-spin core-text-gray-500" />
        ),
      }}
      {...props}
    />
  );
};

export { Toaster };
