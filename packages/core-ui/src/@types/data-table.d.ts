import { RankingInfo } from '@tanstack/match-sorter-utils';

declare module '@tanstack/react-table' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }

  interface SortingFns {
    fuzzy: SortingFn<unknown>;
  }

  interface FilterMeta {
    itemRank: RankingInfo;
  }
}
