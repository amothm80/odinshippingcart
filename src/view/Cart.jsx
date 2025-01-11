import styles from "./Cart.module.css";
import { Link, useOutletContext } from "react-router";
import { useProduct } from "/src/api/useProduct";
import { useState } from "react";

function CartEntry({ entry, cartCont }) {
  const [quantity, setQuantity] = useState(entry[1]);
  const { product, isLoading, error } = useProduct(entry[0]);
  function onValueChange(e){
    setQuantity(e.target.value)
    cartCont.modifyProduct(entry[0],e.target.value)
  }
  if (error) return <div>Failed to Load...</div>;
  if (isLoading) return <div>loadin...</div>;
  const subtotal = quantity * product.price;

  return (
    <div className={styles.cartLine}>
      <h3>{product.title}</h3>
      <input type="number" value={quantity} onChange={onValueChange} />
      <h3>{product.price}</h3>
      <h4>subtotal:</h4>
      <h3>{subtotal}</h3>
      <button>delete</button>
    </div>
  );
}

export default function Cart() {
  const cartCont = useOutletContext();
  const cart = cartCont.getCart();
  return cartCont.getCartLength() > 0 ? (
    Array.from(cart).map((entry) => {
      return <CartEntry key={entry[0]} entry={entry} cartCont={cartCont} />;
    })
  ) : (
    <h1>add some products</h1>
  );
}
