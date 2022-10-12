import { addToCookies } from '../addToCookies';
import { deleteCookies, getCookies } from '../cookies';

test('testing adding to cookie function', () => {
  deleteCookies('cart');
  expect(getCookies('cart')).toBeUndefined();
  addToCookies(1, 2);
  expect(getCookies('cart')).toStrictEqual([{ id: 1, quantity: 2 }]);
  addToCookies(4, 1);
  addToCookies(4, 1);
  expect(getCookies('cart')).toStrictEqual([
    { id: 1, quantity: 2 },
    { id: 4, quantity: 2 },
  ]);
  deleteCookies('cart');
  expect(getCookies('cart')).toBeUndefined();
});
