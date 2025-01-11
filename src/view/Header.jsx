import styles from "./Header.module.css";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import PropTypes from 'prop-types';


import Nav from "./Nav";
import useCartCount from "../controller/useCartCount";

function CartIcon({cartCont}) {
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

CartIcon.propTypes = {
  cartCont : PropTypes.object
}

export default function Header({cartCont}) {
  return (
    <header className={styles.header}>
      <Link className={styles.shopLogo} to="/">
        <img className={styles.shopImg} src="/src/assets/Ocropped.png" />
      </Link>
      <Nav />
      <CartIcon cartCont={cartCont} />
    </header>
  );
}

Header.propTypes = {
  cartCont : PropTypes.object
}

