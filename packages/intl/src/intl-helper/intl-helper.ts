interface TValues {
  enUS: string;
  ptBR?: string;
}

type TDictionary = {
  readonly [key: string]: Readonly<TValues>;
};

class IntlHelper<T extends TDictionary> {
  private constructor(private readonly _defaultDictionary: T) {}

  /**
   * Creates an instance of IntlHelper initializing the default dictionary
   */
  public static create<T extends TDictionary>(
    defaultDictionary: T
  ): IntlHelper<T> {
    return new IntlHelper(defaultDictionary);
  }

  /**
   * Access the value for the default dictionary
   */
  public get defaultDictionary() {
    return this._defaultDictionary;
  }

  /**
   * Makes a dictionary based on the default dictionary
   */
  public makeDictionaryExtension<T extends TDictionary>(
    dictionary: T
  ): typeof this.defaultDictionary & T {
    return {
      ...this.defaultDictionary,
      ...this.makeDictionary(dictionary),
    };
  }

  /**
   * Makes a new dictionary
   */
  public makeDictionary<T extends TDictionary>(dictionary: T): T {
    return dictionary;
  }

  /**
   * Makes a translator function
   */
  public makeTranslator<T extends TDictionary>(options: {
    dictionary: T;
    language?: keyof TValues;
  }) {
    const { dictionary, language = 'enUS' } = options;

    return (
      key: keyof T,
      replacer?: Record<string, string | number>
    ): string => {
      const value = (dictionary[key] as TValues)[language]
        ? (dictionary[key] as TValues)[language]
        : (dictionary[key] as TValues).enUS;

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
export type { TDictionary, TValues };
