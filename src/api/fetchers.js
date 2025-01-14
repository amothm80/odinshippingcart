export  async function productsFetcher(key){
  return fetch(`https://fakestoreapi.com/products/${key}`).then((res) => {
    
    if (res.status >= 400) {
      throw new Error(`Status ${res.status}`);
    }
    return res.json();
  })};
