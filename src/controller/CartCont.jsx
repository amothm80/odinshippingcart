
export const CartCont = () => {
  const cart = new Map();
  const getCart = () => {
    return cart;
  };
  const addProduct = (productId, price) => {
    let quantity = 1;
    if (cart.has(productId)) {
      quantity = cart.get(productId).quantity + 1;
    }
    cart.set(productId, {quantity,price});
  };
  const modifyProduct = (productId, quantity) => {
    let price = cart.get(productId).price;
    cart.set(productId, {quantity,price});
  };
  const removeProduct = (productId) => {
    cart.delete(productId);
  };
  const getCartLength = () => {
    return cart.size;
  };
  return { getCart, addProduct, modifyProduct, removeProduct, getCartLength };
};
