import useSWR from "swr";

const fetcher = (key) =>
  fetch(`https://fakestoreapi.com/products/${key}`).then((res) =>
    res.json()
  );

export function useProduct(product) {
  const {data, error, isLoading} =useSWR(`${product}`, fetcher);
  return{product: data, isLoading, isError: error}
} 
