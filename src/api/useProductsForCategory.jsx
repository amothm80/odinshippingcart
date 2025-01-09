import useSWR from 'swr';
import { productsFetcher } from './fetchers.js';
import { useState } from 'react';

export function useProductsForCategory(category) {
  const { data, error, isLoading } = useSWR(
    `category/${category}`,
    productsFetcher
  );

  return { products: data, isLoading, error };
}
