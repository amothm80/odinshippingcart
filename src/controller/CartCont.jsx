
export const CartCont = () => {
  const cart = new Map();
  const getCart = () => {
    return cart;
  };
  const addProduct = (productId) => {
    let quantity = 1;
    if (cart.has(productId)) {
      quantity = cart.get(productId) + 1;
    }
    cart.set(productId,quantity);
  };
  const modifyProduct = (productId, quantity) => {
    cart.set(productId, quantity);
  };
  const removeProduct = (productId) => {
    cart.delete(productId);
  };
  const getCartLength = () => {
    return cart.size;
  };
  return { getCart, addProduct, modifyProduct, removeProduct, getCartLength };
};
