import styles from './Header.module.css';
import { ShoppingCart } from 'lucide-react';

import Nav from './Nav';

export default function Header({ setCategory }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.shopName}>Odin's Store</h1>
      <Nav setCategory={setCategory} />
      <ShoppingCart color="white" size={30} />
    </header>
  );
}
