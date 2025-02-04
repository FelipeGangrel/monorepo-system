interface DictionaryEntry {
  en?: string;
  pt?: string;
  es?: string;
  de?: string;
}

type Dictionary = {
  readonly [key: string]: Readonly<DictionaryEntry>;
};

class IntlHelper<T extends Dictionary> {
  private fallbackLanguage: keyof DictionaryEntry = 'en';
  private constructor(private readonly _baseDictionary: T) {}

  /**
   * Creates an instance of IntlHelper initializing the default dictionary
   */
  public static create<T extends Dictionary>(
    defaultDictionary: T
  ): IntlHelper<T> {
    return new IntlHelper(defaultDictionary);
  }

  /**
   * Sets the fallback language
   */
  public setFallbackLanguage(language: keyof DictionaryEntry) {
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
    language?: keyof DictionaryEntry;
  }) {
    const { dictionary, language = this.fallbackLanguage } = options;

    return (
      key: keyof T,
      replacer?: Record<string, string | number>
    ): string => {
      const value = (dictionary[key] as DictionaryEntry)[language]
        ? (dictionary[key] as DictionaryEntry)[language]
        : (dictionary[key] as DictionaryEntry)[this.fallbackLanguage];

      if (!value) {
        return '';
      }

      if (replacer) {
        return value.replace(/\{(\w+)}/g, (match, replacerKey) => {
          if (replacerKey in replacer) {
            return String(replacer[replacerKey]);
          }
          return match;
        });
      }

      return value;
    };
  }
}

export { IntlHelper };
export type { Dictionary, DictionaryEntry };
