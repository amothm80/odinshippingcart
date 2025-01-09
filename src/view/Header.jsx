import styles from './Header.module.css';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router';

import Nav from './Nav';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.shopLogo} to="/">
        <img className={styles.shopImg} src='/src/assets/Ocropped.png'/>
      </Link>
      <Nav />
      <Link to="cart">
        <ShoppingCart color="white" size={30} />
      </Link>
    </header>
  );
}
