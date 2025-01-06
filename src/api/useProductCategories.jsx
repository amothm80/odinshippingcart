import useSWR from 'swr';
import { productsFetcher } from './fetchers.js';

export function useProductCategories() {
  const { data, error, isLoading } = useSWR(`categories`, productsFetcher);
  return { categories: data, isLoading, error };
}
