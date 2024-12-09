import "@/styles/library.css";
import "@/styles/preview.css";
import type {Preview} from "@storybook/react";
import {themes} from "@storybook/theming";
import { withThemeByClassName } from "@storybook/addon-themes";
import {ThemeProvider} from "@/providers/theme-provider";

const preview: Preview = {
    parameters: {
        darkMode: {
            classTarget: 'html',
            stylePreview: true,
            darkClass: 'dark',
            lightClass: 'light',
            dark: {...themes.dark},
            light: {...themes.normal},
            current: 'dark'
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export const decorators = [
    (Story) => (
        <ThemeProvider>
            <Story/>
        </ThemeProvider>
    ),
    withThemeByClassName({
        themes: {
            light: 'light',
            dark: 'dark',
        },
        defaultTheme: 'dark',
    }),
];

export default preview;
