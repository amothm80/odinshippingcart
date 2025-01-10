import styles from "./Cart.module.css";
import { Link, useOutletContext } from "react-router";
import { useProduct } from "/src/api/useProduct";

function CartEntry({ entry }) {
  const { product, isLoading, error } = useProduct(entry[0]);
  if (error) return <div>Failed to Load...</div>;
  if (isLoading) return <div>loadin...</div>;
  return (
    <div>
      <div>{product.title}</div>
      <div>{product.price}</div>
      <div>{entry[1]}</div>
    </div>
  );
}

export default function Cart() {
  const cartCont = useOutletContext();
  const cart = cartCont.getCart();
  return cartCont.getCartLength() > 0 ? (
    Array.from(cart).map((entry) => {
      return <CartEntry key={entry[0]} entry={entry} />;
    })
  ) : (
    <h1>add some products</h1>
  );
}
