export const productsFetcher = (key) =>
  fetch(`https://fakestoreapi.com/products/${key}`).then((res) => {
    if (res.status >= 400) {
      console.log(res);
      throw new Error(`Status ${res.status}`);
    }
    return res.json();
  });
