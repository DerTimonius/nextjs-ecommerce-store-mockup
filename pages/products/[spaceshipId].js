import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getSingleSpaceshipById } from '../../databases/spaceshipDatabase.ts';
import { buttonStyles } from '../../styles/buttonStyles';
import { getCookies, setCookies } from '../../utils/cookies';
import { parsePrice } from '../../utils/parsePrice.js';

const productPageStyle = css`
  .container {
    color: #ddd;
    padding: 24px;
    height: max-content;
  }
  .product-top {
    display: flex;
    justify-content: space-around;
  }
  .product-img h1 {
    margin-bottom: 16px;
  }
  .product-cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    font-size: 24px;
  }
  .product-bottom {
    width: 1080px;
    margin-left: 160px;
    padding-top: 24px;
    height: max-content;
    backdrop-filter: blur(8px);
    border-radius: 4px;
    line-height: 24px;
  }
  p span {
    font-size: 1.1rem;
    font-style: italic;
  }
`;

export default function Spaceship({ error, spaceship, addToTotal }) {
  const [quantity, setQuantity] = useState(1);
  if (error) {
    return (
      <>
        <Head>
          <title>Error, not found</title>
          <meta name="description" content="Spaceship not found" />
        </Head>
        <h3>{error}</h3>
        <p>
          Sorry, the item you are looking for does not exist. Please take a look
          at the <Link href="/products">Products page</Link> to find some
          inspiration!
        </p>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>
          {spaceship.name}, from {spaceship.knownFrom}
        </title>
        <meta name="description" content={`${spaceship.name} product page`} />
      </Head>
      <main css={[productPageStyle, buttonStyles]}>
        <div className="container">
          <div className="product-top">
            <div className="product-img">
              <h1>{spaceship.name}</h1>
              <Image
                src={`/img/${spaceship.id}-${spaceship.name
                  .toLowerCase()
                  .split(' ')
                  .join('-')}.jpg`}
                width={600}
                height={400}
                alt={`${spaceship.name} in space`}
                data-test-id="product-image"
              />{' '}
            </div>
            <div className="product-cart">
              <p>Known from: {spaceship.knownFrom}</p>
              <div>
                <p>Quantity: {quantity}</p>
                <button onClick={() => setQuantity(quantity + 1)} id="btn-add">
                  +
                </button>
                <button
                  id="btn-subtract"
                  onClick={() => {
                    if (quantity >= 2) {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  -
                </button>
              </div>
              <br />
              <button
                id="btn-cart"
                data-test-id="product-add-to-cart"
                onClick={() => {
                  addToTotal(quantity);
                  const existingCookie = getCookies('cart');
                  if (existingCookie === undefined) {
                    setCookies('cart', [
                      { id: spaceship.id, quantity: quantity },
                    ]);
                    return;
                  } else {
                    const shipAlreadyInCart = existingCookie.find((obj) => {
                      return obj.id === spaceship.id;
                    });
                    if (!shipAlreadyInCart) {
                      existingCookie.push({
                        id: spaceship.id,
                        quantity: quantity,
                      });
                    } else {
                      shipAlreadyInCart.quantity += quantity;
                    }
                    setCookies('cart', existingCookie);
                  }
                }}
              >
                Add to cart
              </button>
              <p data-test-id="product-price">
                Price: {parsePrice(spaceship.price)}{' '}
              </p>
            </div>
          </div>
          <br />
          <hr />
          <div className="product-bottom">
            <p>
              Condition: <span>{spaceship.condition}</span>
            </p>
            <p>First appearence: {spaceship.firstAppearence}</p>
            <p>{spaceship.description}</p>{' '}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const spaceshipId = parseInt(context.query.spaceshipId);

  const foundShip = await getSingleSpaceshipById(spaceshipId);

  if (typeof foundShip === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Spaceship not in stock',
      },
    };
  }

  return {
    props: {
      spaceship: foundShip,
    },
  };
}
