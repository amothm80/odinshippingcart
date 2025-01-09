import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';
import { productsFetcher } from './fetchers.js';

export function useProductCategories() {
  const { data, error, isLoading } = useSWR(`categories`, productsFetcher);
  console.log(data);
  return { categories: data, isLoading, error };
}
