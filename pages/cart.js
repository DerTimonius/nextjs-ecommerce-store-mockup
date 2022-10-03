import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { getAllSpaceships } from '../databases/spaceshipDatabase.ts';
import { getCookies, setCookies } from '../utils/cookies';
import { parsePrice } from '../utils/parsePrice.js';

const cartStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 48px;
  padding: 12px;

  .item {
    background: #d8d8d8;
    width: 720px;
    margin: 12px 24px;
    padding: 8px;
    display: flex;
    flex-direction: row;
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
    background: lightgrey;
    width: 720px;
    height: 80px;
    text-align: right;
  }
  .total span {
    font-size: 2em;
    margin: 12px;
    text-decoration: underline;
  }
`;

function getSumFromCart(spaceships) {
  let totalSum = 0;
  spaceships.map((spaceship) => {
    if (spaceship.quantity > 0) {
      return (totalSum += spaceship.quantity * spaceship.price);
    }
    return totalSum;
  });
  return totalSum;
}

function increaseQuantity(id) {
  const existingCookie = getCookies('cart');
  const correctShip = existingCookie.find((obj) => {
    return obj.id === id;
  });
  correctShip.quantity++;
  setCookies('cart', existingCookie);
}
function decreaseQuantity(id) {
  const existingCookie = getCookies('cart');
  const correctShip = existingCookie.find((obj) => {
    return obj.id === id;
  });
  correctShip.quantity--;
  setCookies('cart', existingCookie);
}

export default function Cart(props) {
  return (
    <div css={cartStyles}>
      <Head>
        <title>Shopping Cart</title>
        <meta name="description" content="Shopping Cart page" />
      </Head>
      <h1>Your shopping cart</h1>

      <div>
        {props.parsed.length ? (
          <>
            {props.spaceships.map((spaceship) => {
              if (spaceship.quantity > 0) {
                return (
                  <section key={`spaceship-${spaceship.id}`} className="item">
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
                      <hr style={{ width: '480px', alignSelf: 'self-end' }} />
                      <div className="quantity-price">
                        <h5>{parsePrice(spaceship.price)}/ship</h5>
                        <p>
                          Quantity:{' '}
                          <button
                            onClick={() => decreaseQuantity(spaceship.id)}
                          >
                            -
                          </button>
                          <b>{spaceship.quantity}</b>
                          <button
                            onClick={() => increaseQuantity(spaceship.id)}
                          >
                            +
                          </button>
                        </p>

                        <h4>
                          {parsePrice(spaceship.quantity * spaceship.price)}
                        </h4>
                      </div>
                    </div>
                  </section>
                );
              } else {
                return null;
              }
            })}{' '}
            <div className="total">
              <h4>
                Your total is €{' '}
                <span>{parsePrice(getSumFromCart(props.spaceships))}</span>
              </h4>
              <button>Proceed to Checkout</button>
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
  );
}

export async function getServerSideProps(context) {
  const parsedCookies =
    context.req.cookies.cart !== undefined
      ? JSON.parse(context.req.cookies.cart)
      : [];
  const spaceships = await getAllSpaceships();
  const parsedSpaceships = spaceships.map((spaceship) => {
    return {
      ...spaceship,
      quantity:
        parsedCookies.find((item) => {
          return item.id === spaceship.id;
        })?.quantity || 0,
    };
  });

  return {
    props: {
      spaceships: parsedSpaceships,
      parsed: parsedCookies,
    },
  };
}
