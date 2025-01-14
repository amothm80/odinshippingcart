import styles from "./Cart.module.css";
import { useOutletContext } from "react-router";
import { useProduct } from "/src/api/useProduct";
import { useState } from "react";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { ShopContext } from "../controller/ShopContext.jsx";


function CartEntry({ entry, cartCont, refreshCart }) {
  const [quantity, setQuantity] = useState(entry[1].quantity);
  const { product, isLoading, error } = useProduct(entry[0]);
  function deleteCart(e) {
    cartCont.removeProduct(e.target.id);
    refreshCart();
  }

  function onValueChange(e) {
    setQuantity(parseInt(e.target.value));
    cartCont.modifyProduct(entry[0], parseInt(e.target.value));
    refreshCart();
  }
  if (error) return <div>Failed to Load...</div>;
  if (isLoading) return <div>loadin...</div>;
  return (
    <>
      <img src={product.image} className={styles.image} alt="" />
      <h3>{product.title}</h3>
      <input type="number" value={quantity} onChange={onValueChange} />
      <h3>${product.price}</h3>
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

function CartTotal({cart}) {
  const total = Array.from(cart).reduce((prevTotal, curEl)=>{
   return  prevTotal + ( curEl[1].price * curEl[1].quantity)
  },0)
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
  cart: PropTypes.object,
}

export default function Cart() {
  const { cartCont } = useContext(ShopContext); 
  const [cart, setCart] = useState(cartCont.getCart);
  function refreshCart() {
    let newCart = cartCont.getCart();
    setCart(new Map(newCart));
  }

  return cartCont.getCartLength() > 0 ? (
    <div className={styles.cartLine}>
      {Array.from(cart).map((entry) => {
        return (
          <CartEntry
            key={entry[0]}
            entry={entry}
            cartCont={cartCont}
            refreshCart={refreshCart}
          />
        );
      })}
      <CartTotal cart={cart}/>
    </div>
  ) : (
    <div className={styles.emptyCart}>
      <h1>Add Some Products</h1>
    </div>
  );
}
