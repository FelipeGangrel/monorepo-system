import { format, type FormatOptions } from 'date-fns';

import { inferLocaleFromLanguage } from '@/infer-locale-from-language';
import type { LanguageOption } from '@/translation-manager';

/**
 * Creates a date formatter function specific to a given language.
 *
 * @param {LanguageOption} language - The language option used to infer the locale for formatting.
 * @returns {(date: number | string | Date, dateStr: string, formatOptions?: FormatOptions) => string}
 *          A function that formats a date based on the specified date string and format options.
 *
 * The returned function takes three arguments:
 * - `date`: The date to format (can be a `number`, `string`, or `Date` object).
 * - `dateStr`: The format string specifying how the date should be formatted.
 * - `formatOptions` (optional): Additional options for formatting the date.
 */
function makeDateFormatter(
  language: LanguageOption
): (
  date: number | string | Date,
  dateStr: string,
  formatOptions?: FormatOptions
) => string {
  const locale = inferLocaleFromLanguage(language);
  return function (
    date: number | string | Date,
    dateStr: string,
    formatOptions?: FormatOptions
  ) {
    return format(date, dateStr, {
      locale,
      ...formatOptions,
    });
  };
}

export { makeDateFormatter };
