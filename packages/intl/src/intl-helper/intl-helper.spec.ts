import { IntlHelper } from './intl-helper';

const intl = IntlHelper.create({
  globalKey: {
    en: 'English global value',
    pt: 'Portuguese global value',
  },
} as const).setFallbackLanguage('en');

describe('IntlHelper class', () => {
  it('returns a intl of IntlHelper when calling create', () => {
    expect(intl).toBeInstanceOf(IntlHelper);
  });

  it('creates a dictionary that extends the base dictionary', () => {
    const dictionary = intl.makeDictionaryExtension({
      localKey: {
        en: 'English local value',
        pt: 'Portuguese local value',
      },
    });

    expect(dictionary?.globalKey).toBeDefined();
    expect(dictionary?.localKey).toBeDefined();
  });

  it('creates a translation function', () => {
    const dictionary = intl.makeDictionaryExtension({
      localKey: {
        en: 'English local value',
        pt: 'Portuguese local value',
      },
    });

    const t = intl.makeTranslator({
      dictionary,
    });

    expect(t('globalKey')).toBe('English global value');
    expect(t('localKey')).toBe('English local value');
  });

  describe('translation function', () => {
    it('replaces strings using the replacer object', () => {
      const dictionary = intl.makeDictionary({
        hello: {
          en: 'Hello {name}!',
        },
      });

      const t = intl.makeTranslator({
        dictionary,
        language: 'en',
      });

      expect(t('hello', { name: 'World' })).toBe('Hello World!');
    });

    it('shows the fallback language translation if the desired language is not defined', () => {
      const dictionary = intl.makeDictionary({
        testingKey: {
          en: 'English value',
        },
      });

      const t = intl.makeTranslator({
        dictionary,
        language: 'pt',
      });

      expect(t('testingKey')).toBe('English value');
    });
  });
});
