import { TranslationManager } from './translation-manager';

const tManager = TranslationManager.create({
  globalKey: {
    en: 'English global value',
    pt: 'Portuguese global value',
  },
} as const).setFallbackLanguage('en');

describe('TranslationManager class', () => {
  it('returns a intl of TranslationManager when calling create', () => {
    expect(tManager).toBeInstanceOf(TranslationManager);
  });

  it('creates a dictionary that extends the base dictionary', () => {
    const dictionary = tManager.makeDictionaryExtension({
      localKey: {
        en: 'English local value',
        pt: 'Portuguese local value',
      },
    } as const);

    expect(dictionary?.globalKey).toBeDefined();
    expect(dictionary?.localKey).toBeDefined();
  });

  it('creates a translation function', () => {
    const dictionary = tManager.makeDictionaryExtension({
      localKey: {
        en: 'English local value',
        pt: 'Portuguese local value',
      },
    } as const);

    const t = tManager.makeTranslator({
      dictionary,
    });

    expect(t('globalKey')).toBe('English global value');
    expect(t('localKey')).toBe('English local value');
  });

  describe('translation function', () => {
    it('replaces strings using the replacer object', () => {
      const dictionary = tManager.makeDictionary({
        hello: {
          en: 'Hello {name}!',
        },
      } as const);

      const t = tManager.makeTranslator({
        dictionary,
        language: 'en',
      });

      expect(t('hello', { name: 'World' })).toBe('Hello World!');
    });

    it('shows the fallback language translation if the desired language is not defined', () => {
      const dictionary = tManager.makeDictionary({
        testingKey: {
          en: 'English value',
        },
      } as const);

      const t = tManager.makeTranslator({
        dictionary,
        language: 'pt',
      });

      expect(t('testingKey')).toBe('English value');
    });
  });
});
