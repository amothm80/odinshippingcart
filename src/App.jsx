import './App.css';
import { useProductsForCategory } from './api/useProductsForCategory';
import Products from './view/Products';

function App() {
  return (
    <>
      {/* {product.id}, {product.title}, {product.price}, {product.description},{' '}
      {product.category} <img src={product.image} />{' '} */}
      <Products />
    </>
  );
}

export default App;
