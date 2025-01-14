import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./view/Header";
import Footer from "./view/Footer";
import { CartCont } from "./controller/CartCont.jsx";
import { ShopContext } from "./controller/ShopContext.jsx";



function App() {
  const cartCont = CartCont();
  return (
    <>
      <ShopContext.Provider value={{ cartCont }}>
        <Header/>
        <Outlet />
        <Footer />
      </ShopContext.Provider>
    </>
  );
}

export default App;
