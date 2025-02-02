interface IntlObj {
  enUS: string;
  ptBR?: string;
}

type IntlCollection = {
  readonly [key: string]: Readonly<IntlObj>;
};

class IntlHelper<T extends IntlCollection> {
  private constructor(private readonly globalCollection: T) {}

  public static create<T extends IntlCollection>(collection: T): IntlHelper<T> {
    return new IntlHelper(collection);
  }

  public makeCollection<T extends IntlCollection>(
    collection: T
  ): typeof this.globalCollection & T {
    return { ...this.globalCollection, ...collection };
  }

  public makeTranslator<T = typeof this.globalCollection>(options?: {
    collection?: T;
    language?: keyof IntlObj;
  }) {
    const { collection, language } = options ?? {};
    const resolvedCollection = (collection ?? this.globalCollection) as T;
    const resolvedLanguage = language ?? 'enUS';

    return (
      key: keyof T,
      replacer?: Record<string, string | number>
    ): string => {
      const value = (resolvedCollection[key] as IntlObj)[resolvedLanguage]
        ? (resolvedCollection[key] as IntlObj)[resolvedLanguage]
        : (resolvedCollection[key] as IntlObj).enUS;

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
export type { IntlCollection, IntlObj };
