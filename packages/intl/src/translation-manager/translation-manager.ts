interface DictionaryEntry {
  en?: string;
  pt?: string;
  es?: string;
  de?: string;
}

type LanguageOption = keyof DictionaryEntry;

type Dictionary = {
  readonly [key: string]: Readonly<DictionaryEntry>;
};

class TranslationManager<T extends Dictionary> {
  private fallbackLanguage: LanguageOption = 'en';

  private constructor(private readonly _baseDictionary: T = {} as T) {}

  /**
   * Creates an instance of IntlHelper initializing the default dictionary
   */
  public static create<T extends Dictionary>(
    defaultDictionary?: T
  ): TranslationManager<T> {
    return new TranslationManager(defaultDictionary);
  }

  /**
   * Sets the fallback language
   */
  public setFallbackLanguage(language: LanguageOption) {
    this.fallbackLanguage = language;
    return this;
  }

  /**
   * Access the value for the base dictionary
   */
  public get baseDictionary() {
    return this._baseDictionary;
  }

  /**
   * Makes a dictionary based on the base dictionary
   */
  public makeDictionaryExtension<T extends Dictionary>(
    dictionary: T
  ): typeof this.baseDictionary & T {
    return {
      ...this.baseDictionary,
      ...this.makeDictionary(dictionary),
    };
  }

  /**
   * Makes a new dictionary
   */
  public makeDictionary<T extends Dictionary>(dictionary: T): T {
    return dictionary;
  }

  /**
   * Makes a translator function
   */
  public makeTranslator<T extends Dictionary>(options: {
    dictionary: T;
    language?: LanguageOption;
  }) {
    const { dictionary, language = this.fallbackLanguage } = options;

    const findValue = (key: keyof T) => {
      return (dictionary[key] as DictionaryEntry)[language]
        ? (dictionary[key] as DictionaryEntry)[language]
        : (dictionary[key] as DictionaryEntry)[this.fallbackLanguage];
    };

    const replaceValue = (
      value: string,
      replacer: Record<string, string | number>
    ) => {
      return value.replace(/\{(\w+)}/g, (match, replacerKey) => {
        if (replacerKey in replacer) {
          return String(replacer[replacerKey]);
        }
        return match;
      });
    };

    return (
      key: keyof T,
      replacer?: Record<string, string | number>
    ): string => {
      const value = findValue(key);

      if (!value) {
        return '';
      }

      return replacer ? replaceValue(value, replacer) : value;
    };
  }
}

export { TranslationManager };
export type { Dictionary, DictionaryEntry, LanguageOption };
