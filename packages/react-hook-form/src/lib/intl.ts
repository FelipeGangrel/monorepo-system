import { type LanguageOption, TranslationManager } from '@felipegangrel/intl';

const intl = TranslationManager.create().setFallbackLanguage('pt');

export { intl };
export type { LanguageOption };
