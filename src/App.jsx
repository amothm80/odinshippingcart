import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './view/Header';
import Footer from './view/Footer';
import { CartCont } from "./controller/CartCont.jsx";


function App() {
  const cartCont = CartCont();
  return (
    <>
      <Header cartCont={cartCont} />
      <Outlet context={cartCont}/>
      <Footer />
    </>
  );
}

export default App;
