import {
  DocsContainer as BaseContainer,
  DocsContainerProps,
} from '@storybook/blocks';
import { addons } from '@storybook/preview-api';
import { themes } from '@storybook/theming';
import * as React from 'react';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

const channel = addons.getChannel();

export const DocsContainer: React.FC<
  React.PropsWithChildren<DocsContainerProps>
> = ({ children, context }) => {
  const [isDark, setDark] = React.useState(() => {
    const channel = addons.getChannel();
    // @ts-expect-error data is private
    return (channel.data?.DARK_MODE?.[0] as boolean | undefined) ?? false;
  });

  const theme = React.useMemo(
    () => ({
      ...(isDark ? themes.dark : themes.light),
    }),
    [isDark]
  );

  React.useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channel]);

  return (
    <BaseContainer context={context} theme={theme}>
      {children}
    </BaseContainer>
  );
};
