import useSWR from 'swr';
import { productsFetcher } from './fetchers.js';

export function useProduct(product) {
  const { data, error, isLoading } = useSWR(`${product}`, productsFetcher);
  return { product: data, isLoading, error };
}
