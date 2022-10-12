import { getCookies, setCookies } from './cookies';

export function addToCookies(id: number, quantity: number) {
  // First check if a "cart" cookie exists
  const existingCookie = getCookies('cart');
  // If not set a new cookie with a new array
  if (existingCookie === undefined) {
    setCookies('cart', [{ id: id, quantity: quantity }]);
    return;
  } else {
    // If a cookie does exist, check if the ship in question is already in the cookies/cart
    const shipAlreadyInCart = existingCookie.find((obj) => {
      return obj.id === id;
    });
    // if not, push the new object to the existing array
    if (!shipAlreadyInCart) {
      existingCookie.push({
        id: id,
        quantity: quantity,
      });
    } else {
      // if it is in the cart change the quantity
      shipAlreadyInCart.quantity += quantity;
    }
    // change the cookie
    setCookies('cart', existingCookie);
  }
}
