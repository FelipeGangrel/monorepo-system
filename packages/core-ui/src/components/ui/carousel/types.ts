import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';

export type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

export type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
};

export type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

type DivRef = React.RefAttributes<HTMLDivElement>;
type DivProps = React.HTMLAttributes<HTMLDivElement>;

type ButtonRef = React.RefAttributes<HTMLButtonElement>;
type ButtonProps = React.ComponentProps<typeof Button>;

export type CarouselComponent = React.ForwardRefExoticComponent<
  DivProps & DivRef & CarouselProps
> & {
  Content: React.ForwardRefExoticComponent<DivProps & DivRef>;
  Item: React.ForwardRefExoticComponent<DivProps & DivRef>;
  Previous: React.ForwardRefExoticComponent<ButtonProps & ButtonRef>;
  Next: React.ForwardRefExoticComponent<ButtonProps & ButtonRef>;
};
