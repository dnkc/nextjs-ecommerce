export default function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.product) return tally; //product deleted but still in your cart
    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}
