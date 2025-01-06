import "./App.css";
import { useProductsForCategory } from "./api/useProductsForCategory";
import Aside from "./view/Aside";
import Products from "./view/Products";

function App() {
  return (
    <>
      <Aside />
      <Products />
    </>
  );
}

export default App;
