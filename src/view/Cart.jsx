import styles from "./Cart.module.css";
import { useOutletContext } from "react-router";
import { useProduct } from "/src/api/useProduct";
import { useState } from "react";
import PropTypes from 'prop-types';



function CartEntry({ entry, cartCont, refreshCart, subtotals }) {
  const [quantity, setQuantity] = useState(entry[1]);
  const { product, isLoading, error } = useProduct(entry[0]);
  function deleteCart(e) {
    console.log(`deleted product ${e.target.id}`);
    cartCont.removeProduct(e.target.id);
    refreshCart();
  }

  function onValueChange(e) {
    setQuantity(e.target.value);
    cartCont.modifyProduct(entry[0], parseInt(e.target.value));
    refreshCart();
    // calculateTotal(cartCont.getCart())
  }
  if (error) return <div>Failed to Load...</div>;
  if (isLoading) return <div>loadin...</div>;
  subtotals.push( quantity * product.price)
  return (
    <>
      <img src={product.image} className={styles.image} alt="" />
      <h3>{product.title}</h3>
      <input type="number" value={quantity} onChange={onValueChange} />
      <h3>{product.price}</h3>
      <h4>subtotal:</h4>
      <h3>${quantity * product.price}</h3>
      <button id={product.id} onClick={deleteCart} className="button">
        delete
      </button>
    </>
  );
}

CartEntry.propTypes ={
  entry: PropTypes.array,
  cartCont: PropTypes.object,
  deleteCart: PropTypes.func,
  refreshCart: PropTypes.func,
  subtotals: PropTypes.number,
}

function CartTotal({subtotals}) {
  const total = subtotals.reduce((prev,cur)=>prev+cur,0)
  return (
    <>
      <div></div>
      <div></div>

      <div></div>
      <div></div>
      <h4>Total:</h4>
      <h3>${total}</h3>
      <div></div>
    </>
  );
}

CartTotal.propTypes ={
  subtotals: PropTypes.number,
}

export default function Cart() {
  const cartCont = useOutletContext();
  const [cart, setCart] = useState(cartCont.getCart());
  let subtotals = [];
  function refreshCart() {
    let newCart = cartCont.getCart();
    setCart(new Map(newCart));
  }

  console.log("cart mounted");
  console.log(cart);
  return cartCont.getCartLength() > 0 ? (
    <div className={styles.cartLine}>
      {Array.from(cart).map((entry) => {
        return (
          <CartEntry
            key={entry[0]}
            entry={entry}
            cartCont={cartCont}
            refreshCart={refreshCart}
            subtotals = {subtotals}
          />
        );
      })}
      <CartTotal subtotals={subtotals} />
    </div>
  ) : (
    <div className={styles.emptyCart}>
      <h1>Add Some Products</h1>
    </div>
  );
}
