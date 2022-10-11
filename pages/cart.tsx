import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  getAllSpaceships,
  SpaceshipType,
} from '../databases/spaceshipDatabase';
import { buttonStyles } from '../styles/buttonStyles';
import {
  CookieType,
  deleteCookies,
  getCookies,
  setCookies,
} from '../utils/cookies';
import { parsePrice } from '../utils/parsePrice';

const cartStyles = css`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ddd;
    height: 100vh;
  }
  .item {
    backdrop-filter: blur(12px);
    background: rgba(51, 51, 51, 0.2);
    width: 720px;
    height: 160px;
    margin: 12px 24px;
    padding: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
  }
  .name-description {
    margin: 0px 12px 12px 20px;
  }
  .quantity-price {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .total {
    backdrop-filter: blur(12px);
    background: rgba(51, 51, 51, 0.2);
    width: 720px;
    height: 80px;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .total span {
    font-size: 2em;
    margin: 12px;
    text-decoration: underline;
  }
  p span {
    font-weight: bold;
    margin: 12px;
  }
  hr {
    width: 540px;
    margin-bottom: 12px;
    margin-left: 20px;
  }
  .delete-button {
    background-color: orangered;
    margin-left: 8px;
  }
`;
//
type SpaceshipInCartType = SpaceshipType & {
  quantity: number;
};
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

function increaseQuantity(
  id: number,
  setCart: Function,
  cart: SpaceshipInCartType[],
) {
  const correctShip = cart.find((obj) => {
    return obj.id === id;
  });
  if (correctShip) {
    setCart((prev: SpaceshipInCartType[]) => {
      return prev.map((item) =>
        item.id === correctShip.id
          ? { ...item, quantity: correctShip.quantity + 1 }
          : item,
      );
    });
  }
}
function decreaseQuantity(
  id: number,
  setCart: Function,
  cart: SpaceshipInCartType[],
) {
  const correctShip = cart.find((obj) => {
    return obj.id === id;
  });
  if (correctShip) {
    setCart((prev: SpaceshipInCartType[]) => {
      return prev.map((item) =>
        item.id === correctShip.id
          ? { ...item, quantity: correctShip.quantity - 1 }
          : item,
      );
    });
  }
}
function deleteAll(setCart: Function) {
  setCart([]);
  deleteCookies('cart');
}
function removeItem(
  cart: SpaceshipInCartType[],
  setCart: Function,
  id: number,
) {
  const newCart = cart.filter((item) => item.id !== id);
  setCart(newCart);
  const cookie = getCookies('cart');
  if (!cookie) {
    return;
  }
  const cookieWithoutItem = cookie.filter((item) => item.id !== id);
  setCookies('cart', cookieWithoutItem);
}
function updateCookies(cart: SpaceshipInCartType[]) {
  const existingCookie = getCookies('cart');
  if (!existingCookie) return null;
  cart.map((cartItem) => {
    return existingCookie.map((cookieItem) => {
      if (cartItem.id === cookieItem.id) {
        cookieItem.quantity = cartItem.quantity;
        return cookieItem;
      }
      return null;
    });
  });
  setCookies('cart', existingCookie);
}

type Props = {
  spaceships: SpaceshipInCartType[];
  parsedCookie: CookieType[];
  deleteTotal: Function;
  decreaseOne: Function;
  addOne: Function;
  removeFromTotal: Function;
};
export default function Cart(props: Props) {
  const [cart, setCart] = useState<SpaceshipInCartType[]>(props.spaceships);

  useEffect(() => {
    if (getCookies('cart')) {
      updateCookies(cart);
    }
  }, [cart]);
  return (
    <>
      <Head>
        <title>Shopping Cart</title>
        <meta name="description" content="Shopping Cart page" />
      </Head>
      <main css={[cartStyles, buttonStyles]}>
        <div className="container">
          <h1>Your shopping cart</h1>
          <div className="container">
            {props.parsedCookie.length ? (
              <>
                <button
                  className="delete-button"
                  onClick={() => {
                    deleteAll(setCart);
                    props.deleteTotal();
                  }}
                >
                  Remove all
                </button>
                {cart.map((spaceship) => {
                  if (spaceship.quantity > 0) {
                    return (
                      <div key={`spaceship-${spaceship.id}`} className="item">
                        <div>
                          <Image
                            src={`/img/${spaceship.id}-${spaceship.name
                              .toLowerCase()
                              .split(' ')
                              .join('-')}.jpg`}
                            width={150}
                            height={150}
                            alt={`${spaceship.name} in space`}
                          />
                        </div>
                        <div className="item-description">
                          <div className="name-description">
                            <h2>{spaceship.name}</h2>
                            <p>{spaceship.description.slice(0, 100)}...</p>
                          </div>
                          <hr />
                          <div className="quantity-price">
                            <h5>{parsePrice(spaceship.price)}/ship</h5>
                            <p>
                              Quantity:{' '}
                              <button
                                id="btn-subtract"
                                onClick={() => {
                                  decreaseQuantity(spaceship.id, setCart, cart);
                                  props.decreaseOne();
                                }}
                              >
                                -
                              </button>
                              <span>{spaceship.quantity}</span>
                              <button
                                id="btn-add"
                                onClick={() => {
                                  increaseQuantity(spaceship.id, setCart, cart);
                                  props.addOne();
                                }}
                              >
                                +
                              </button>
                            </p>

                            <h4>
                              {parsePrice(spaceship.quantity * spaceship.price)}
                            </h4>
                          </div>
                        </div>
                        <button
                          className="delete-button"
                          onClick={() => {
                            removeItem(cart, setCart, spaceship.id);
                            props.removeFromTotal(spaceship.quantity);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}{' '}
                <div className="total">
                  <h4>
                    Your total is €{' '}
                    <span data-test-id="cart-total">
                      {parsePrice(getSumFromCart(cart))}
                    </span>
                  </h4>
                  <Link href="/checkout">
                    <button id="btn-checkout" data-test-id="cart-checkout">
                      Proceed to Checkout
                    </button>
                  </Link>
                </div>
              </>
            ) : (
              <div>
                <h4>No items in cart</h4>
                <p>Add items to your cart to be able to proceed to checkout!</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const parsedCookies =
    context.req.cookies.cart !== undefined
      ? JSON.parse(context.req.cookies.cart)
      : [];
  const spaceships = await getAllSpaceships();
  const parsedSpaceships: SpaceshipInCartType[] = spaceships.map(
    (spaceship) => {
      return {
        ...spaceship,
        quantity:
          parsedCookies.find((item: CookieType) => {
            return item.id === spaceship.id;
          })?.quantity || 0,
      };
    },
  );
  return {
    props: {
      spaceships: parsedSpaceships,
      parsedCookie: parsedCookies,
    },
  };
}
