import{j as n}from"./index-B6zMoDbo.js";import{useMDXComponents as t}from"./index-CBovsNOA.js";import{M as s}from"./index-4Nn0MjsW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DrFkskS4.js";import"./index-Dxs5m6lS.js";import"./iframe-CEqT-qwZ.js";import"./index-Cu4lwwaE.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function a(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"INTL/Translation Manager"}),`
`,n.jsx(e.h1,{id:"translation-manager",children:"Translation Manager"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.strong,{children:"Translation Manager"})," is a streamlined class designed to simplify the process of managing translations in your application. By initializing the manager with a flexible base dictionary and defining a fallback language, the Translation Manager allows you to deliver consistent and dynamic multilingual experiences."]}),`
`,n.jsx(e.h2,{id:"why-use-translation-manager",children:"Why Use Translation Manager?"}),`
`,n.jsxs(e.p,{children:["Translation can be a tedious aspect of localization in any application. The ",n.jsx(e.strong,{children:"Translation Manager"})," empowers developers by offering:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Scalability"}),": Maintain a clean structure with base dictionaries and extensions."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Reusable Translations"}),": Share base dictionaries across your application, and extend them only where necessary."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Dynamic Flexibility"}),": Replace text dynamically with placeholders for user personalization."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Fallback Language"}),": Always ensure a consistent experience if translations in the desired language are missing."]}),`
`]}),`
`,n.jsx(e.h2,{id:"quick-start",children:"Quick Start"}),`
`,n.jsxs(e.p,{children:["Begin by creating an instance of the ",n.jsx(e.strong,{children:"Translation Manager"})," with a base dictionary—this will act as your foundation for managing global translations."]}),`
`,n.jsx(e.h3,{id:"simple-initialization-example",children:"Simple Initialization Example"}),`
`,n.jsx(e.p,{children:"Here’s how you can craft a robust, reusable translation object for your app-wide usage:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// src/lib/intl.ts
import { TranslationManager } from '@felipegangrel/intl';

const intl = TranslationManager.create({
  cancelButton: {
    en: 'Cancel',
    pt: 'Cancelar',
    es: 'Cancelar',
    de: 'Abbrechen',
  },
} as const).setFallbackLanguage('en'); // Default language is English.

export { intl };
`})}),`
`,n.jsx(e.p,{children:'You’ve now defined a base dictionary containing translations for a "Cancel" button. The fallback ensures an English translation is used, even if a translation for a specific language is unavailable.'}),`
`,n.jsx(e.h3,{id:"generating-translation-functions",children:"Generating Translation Functions"}),`
`,n.jsxs(e.p,{children:["Use the ",n.jsx(e.strong,{children:"Translation Manager"})," to generate a translator function tailored for your dictionary and target language. This can be directly applied within components:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// src/components/MyComponent.tsx
import { intl } from '@/lib/intl';

const MyComponent = () => {
  const t = intl.makeTranslator({
    dictionary: intl.baseDictionary,
    language: 'en', // Language can optionally override the fallback.
  });

  return (
    <main>
      <button>{t('cancelButton')}</button> // Output: Cancel
    </main>
  );
};
`})}),`
`,n.jsx(e.h2,{id:"enhance-specific-components-with-dictionary-extensions",children:"Enhance Specific Components with Dictionary Extensions"}),`
`,n.jsxs(e.p,{children:["Rather than cluttering your base dictionary with contextual translations, you can create ",n.jsx(e.strong,{children:"extensions"}),"—focused dictionaries with translations specific to individual components or modules."]}),`
`,n.jsx(e.h3,{id:"example-using-an-extended-dictionary",children:"Example: Using an Extended Dictionary"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// src/components/MyComponent.tsx
import { intl } from '@/lib/intl';

const dictionary = intl.makeDictionaryExtension({
  submitButton: {
    en: 'Submit',
    pt: 'Enviar',
    es: 'Enviar',
    de: 'Einreichen',
  },
} as const);

const MyComponent = () => {
  const t = intl.makeTranslator({
    dictionary,
    language: 'pt', // Portuguese translation for this component.
  });

  return (
    <main>
      <button>{t('cancelButton')}</button> // Output: Cancelar
      <button>{t('submitButton')}</button> // Output: Enviar
    </main>
  );
};
`})}),`
`,n.jsx(e.p,{children:"Now, the component gains extended functionality while leveraging the translations from the base dictionary."}),`
`,n.jsx(e.h2,{id:"personalizing-text-with-dynamic-replacements",children:"Personalizing Text with Dynamic Replacements"}),`
`,n.jsxs(e.p,{children:["Personalization is a cornerstone of user experience. ",n.jsx(e.strong,{children:"Translation Manager"})," supports text replacements through dynamic placeholders, enabling more context-appropriate and user-specific messages."]}),`
`,n.jsx(e.h3,{id:"how-it-works",children:"How It Works:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Define Placeholders"})," in your translations using curly braces (",n.jsx(e.code,{children:"{}"}),"), e.g., ",n.jsx(e.code,{children:"{name}"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Replace Dynamically"})," by passing an object with the key-value pairs for replacements when calling the translation function."]}),`
`]}),`
`,n.jsx(e.h4,{id:"example-dynamic-message-injection",children:"Example: Dynamic Message Injection"}),`
`,n.jsx(e.p,{children:"In scenarios like greeting customers by name or updating time-sensitive messages, placeholders can be a game-changer:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// src/components/MyComponent.tsx
import { intl } from '@/lib/intl';

const dictionary = intl.makeDictionary({
  clientGreeting: {
    en: \`Hello, {name}. Your purchase has been dispatched.\`,
    pt: \`Olá, {name}. Sua compra foi enviada.\`,
    es: \`Hola, {name}. Su compra ha sido enviada.\`,
    de: \`Hallo, {name}. Ihr Einkauf wurde verschickt.\`,
  },
} as const);

const MyComponent = () => {
  const t = intl.makeTranslator({
    dictionary,
    language: 'pt', // Portuguese for this example.
  });

  return (
    <main>
      <div>{t('clientGreeting', { name: 'John' })}</div>
      // Output: Olá, John. Sua compra foi enviada.
    </main>
  );
};
`})}),`
`,n.jsx(e.h3,{id:"when-to-use-text-replacements",children:"When to Use Text Replacements?"}),`
`,n.jsx(e.p,{children:"This feature is especially useful for:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Personalized Greetings"}),': "Hello, ',n.jsx(e.code,{children:"{name}"}),'!"']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Transactional Updates"}),': "Your order of ',n.jsx(e.code,{children:"{item}"}),' is on the way."']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Notifications"}),': "You have ',n.jsx(e.code,{children:"{count}"}),' unread messages."']}),`
`]}),`
`,n.jsx(e.h2,{id:"closing-thoughts",children:"Closing Thoughts"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.strong,{children:"Translation Manager"})," is designed to handle localization in a modular and intuitive way, enabling scalability, reuse, and flexibility. Whether managing straightforward translations, extending dictionaries, or inserting dynamic values, you are equipped for both simple use cases and complex multilingual interfaces. The manager’s fallback mechanism ensures seamless experiences, even when translations are partial or missing."]})]})}function x(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(a,{...i})}):a(i)}export{x as default};
