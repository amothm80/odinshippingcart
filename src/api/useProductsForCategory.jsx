import useSWR from 'swr';
import { productsFetcher } from './fetchers.js';

export function useProductsForCategory(category) {
  const { data, error, isLoading } = useSWR(
    `category/${category}`,
    productsFetcher, {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  return { products: data, isLoading, error };
}
