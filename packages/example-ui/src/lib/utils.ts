import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

import twConfig from '../../tailwind.config';

const twMerge = extendTailwindMerge({
  prefix: twConfig.prefix,
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
