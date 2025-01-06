import useSWR from "swr";

const fetcher = (key) =>
  fetch(`https://fakestoreapi.com/products/${key}`).then((res) =>
    res.json()
  );

export function useProductsForCategory(category) {
  const {data, error, isLoading} =useSWR(`category/${category}`, fetcher);
  return{products: data, isLoading, isError: error}
} 
