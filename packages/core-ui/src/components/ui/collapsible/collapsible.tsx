import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

import type { CollapsibleComponent } from './types';

const Collapsible = CollapsiblePrimitive.Root as CollapsibleComponent;
Collapsible.displayName = 'Collapsible';

Collapsible.Trigger = CollapsiblePrimitive.CollapsibleTrigger;
Collapsible.Trigger.displayName = 'Collapsible.Trigger';

Collapsible.Content = CollapsiblePrimitive.CollapsibleContent;
Collapsible.Content.displayName = 'Collapsible.Content';

export { Collapsible };
