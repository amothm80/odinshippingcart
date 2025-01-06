import useSWR from "swr";

const fetcher = (key) =>
  fetch(`https://fakestoreapi.com/products/${key}`).then((res) =>
    res.json()
  );

export function useProductCategories() {
  const {data, error, isLoading} =useSWR(`categories`, fetcher);
  return{categories: data, isLoading, isError: error}
} 
