'use client';

import { GripVertical } from 'lucide-react';
import * as ResizablePrimitive from 'react-resizable-panels';

import { cn } from '@/lib/utils';

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      'core-flex core-h-full core-w-full data-[panel-group-direction=vertical]:core-flex-col',
      className
    )}
    {...props}
  />
);
ResizablePanelGroup.displayName = 'Resizable.PanelGroup';

const ResizablePanel = ResizablePrimitive.Panel;
ResizablePanel.displayName = 'Resizable.Panel';

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      'core-relative core-flex core-w-px core-items-center core-justify-center core-bg-border after:core-absolute after:core-inset-y-0 after:core-left-1/2 after:core-w-1 after:core--translate-x-1/2 focus-visible:core-outline-none focus-visible:core-ring-1 focus-visible:core-ring-ring focus-visible:core-ring-offset-1 data-[panel-group-direction=vertical]:core-h-px data-[panel-group-direction=vertical]:core-w-full data-[panel-group-direction=vertical]:after:core-left-0 data-[panel-group-direction=vertical]:after:core-h-1 data-[panel-group-direction=vertical]:after:core-w-full data-[panel-group-direction=vertical]:after:core--translate-y-1/2 data-[panel-group-direction=vertical]:after:core-translate-x-0 [&[data-panel-group-direction=vertical]>div]:core-rotate-90',
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="core-z-10 core-flex core-h-4 core-w-3 core-items-center core-justify-center core-rounded-sm core-border core-bg-border">
        <GripVertical className="core-h-2.5 core-w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);
ResizableHandle.displayName = 'Resizable.Handle';

export const Resizable = {
  PanelGroup: ResizablePanelGroup,
  Panel: ResizablePanel,
  Handle: ResizableHandle,
};
