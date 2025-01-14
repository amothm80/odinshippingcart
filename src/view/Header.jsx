import styles from "./Header.module.css";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import logo from '../assets/Ocropped.png'


import Nav from "./Nav";
import useCartCount from "../controller/useCartCount";

import { useContext } from "react";
import { ShopContext } from "../controller/ShopContext.jsx";


function CartIcon() {
  const { cartCont } = useContext(ShopContext); 
  const { counter } = useCartCount(cartCont);
 
  return (
    <div className={styles.cartSection}>
      <Link className={styles.cartIcon} to="cart">
        <ShoppingCart color="white" size={30} />
      </Link>
      {counter ? (
        counter < 10 ? (
          <div className={styles.cartCountNormal}>{counter}</div>
        ) : (
          <div className={styles.cartCountFill}></div>
        )
      ) : (
        ""
      )}
    </div>
  );
}


export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.shopLogo} to="/">
        <img className={styles.shopImg} src={logo} />
      </Link>
      <Nav />
      <CartIcon />
    </header>
  );
}


