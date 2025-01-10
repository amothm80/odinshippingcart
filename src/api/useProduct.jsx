import useSWR from 'swr';
import { productsFetcher } from './fetchers.js';

export function useProduct(id) {
  const { data, error, isLoading } = useSWR(`${id}`, productsFetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  return { product: data, isLoading, error };
}
