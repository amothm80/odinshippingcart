import "./App.css";
import { useProductsForCategory } from "./api/useProductsForCategory";
import { useProduct } from "./api/useProduct";

function App() { 
  const {product , isLoading, isError } = useProduct("1");
  if (isError) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  console.log(product)
  return <>{product.id}, {product.title}, {product.price}, {product.description}, {product.category} <img src={product.image}/> </>;
}

export default App;
