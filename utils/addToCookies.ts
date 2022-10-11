import { getCookies, setCookies } from './cookies';

export function addToCookies(id: number, quantity: number) {
  const existingCookie = getCookies('cart');
  if (existingCookie === undefined) {
    setCookies('cart', [{ id: id, quantity: quantity }]);
    return;
  } else {
    const shipAlreadyInCart = existingCookie.find((obj) => {
      return obj.id === id;
    });
    if (!shipAlreadyInCart) {
      existingCookie.push({
        id: id,
        quantity: quantity,
      });
    } else {
      shipAlreadyInCart.quantity += quantity;
    }
    setCookies('cart', existingCookie);
  }
}
