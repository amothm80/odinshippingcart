import useSWR from 'swr';
import { productsFetcher } from './fetchers.js';
import { useState } from 'react';
// export function useProductsForCategory(category) {

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
export function useProductsForCategory() {
  const [category, setCategory] = useState(`electronics`);

  const { data, error, isLoading } = useSWR(
    `category/${category}`,
    productsFetcher
  );

  return { products: data, isLoading, error, setCategory };
}
