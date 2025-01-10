import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';
import { productsFetcher } from './fetchers.js';

export function useProductCategories() {
  const { data, error, isLoading } = useSWR(`categories`, productsFetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  return { categories: data, isLoading, error };
}
