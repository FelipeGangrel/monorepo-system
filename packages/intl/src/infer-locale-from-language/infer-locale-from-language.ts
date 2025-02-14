import { de, enUS as en, es, Locale, ptBR as pt } from 'date-fns/locale';

import type { LanguageOption } from '#/translation-manager';

/**
 * Infers the date-fns locale object based on the provided language option.
 *
 * @param {LanguageOption} language - The language option to infer locale for.
 *                                     Supported values: 'en', 'de', 'es', 'pt'.
 * @returns {Locale} The corresponding date-fns locale object for the given language.
 */
function inferLocaleFromLanguage(language: LanguageOption): Locale {
  switch (language) {
    case 'en':
      return en;
    case 'de':
      return de;
    case 'es':
      return es;
    case 'pt':
    default:
      return pt;
  }
}

export { inferLocaleFromLanguage };
