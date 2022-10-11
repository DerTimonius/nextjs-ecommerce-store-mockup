import { SpaceshipInCartType } from '../pages/cart';

export function getSumFromCart(spaceships: SpaceshipInCartType[]) {
  let totalSum = 0;
  spaceships.map((spaceship) => {
    if (spaceship.quantity > 0) {
      return (totalSum += spaceship.quantity * spaceship.price);
    }
    return totalSum;
  });
  return totalSum;
}
