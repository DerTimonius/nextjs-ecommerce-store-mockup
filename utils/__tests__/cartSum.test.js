import { getSumFromCart } from '../../pages/cart';

test('check cart sum function', () => {
  const input1 = [
    { id: 1, quantity: 2, price: 12 },
    { id: 2, quantity: 1, price: 24 },
    { id: 3, quantity: 3, price: 1 },
  ];
  const input2 = [
    { id: 1, quantity: 2, price: 32 },
    { id: 2, quantity: 1, price: 41 },
    { id: 3, quantity: 3, price: 12 },
  ];
  expect(getSumFromCart(input1)).toBe(51);
  expect(getSumFromCart(input2)).not.toBe(51);
});
