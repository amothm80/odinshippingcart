import './App.css';
import { useProductsForCategory } from './api/useProductsForCategory';
import { Outlet } from 'react-router-dom';
import Products from './view/Products';
import Header from './view/Header';
import Footer from './view/Footer';

function App() {
  const { products, isLoading, error, setCategory } =
    useProductsForCategory(`men's clothing`);
  return (
    <>
      <Header setCategory={setCategory} />

      <Products products={products} isLoading={isLoading} error={error} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
