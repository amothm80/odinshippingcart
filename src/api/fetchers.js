export const productsFetcher = (key) => {
  console.log(`https://fakestoreapi.com/products/${key}`)

  return fetch(`https://fakestoreapi.com/products/${key}`).then((res) => {
    
    if (res.status >= 400) {
      console.log(`response error ${res}`);
      throw new Error(`Status ${res.status}`);
    }
    console.log(`response success ${res}`);
    return res.json();
  })};
