import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

export type CollapsibleComponent = typeof CollapsiblePrimitive.Root & {
  Trigger: typeof CollapsiblePrimitive.Trigger;
  Content: typeof CollapsiblePrimitive.Content;
};
