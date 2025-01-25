import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

const CollapsibleRoot = CollapsiblePrimitive.Root;
CollapsibleRoot.displayName = 'Collapsible.Root';

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
CollapsibleTrigger.displayName = 'Collapsible.Trigger';

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
CollapsibleContent.displayName = 'Collapsible.Content';

export const Collapsible = {
  Root: CollapsibleRoot,
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent,
};
