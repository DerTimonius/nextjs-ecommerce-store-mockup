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
    /*    background-image: url(/img/Background-2.jpg);
    background-size: cover; */
    color: #ddd;
    padding: 24px;
    height: 100vh;
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
  }
  p span {
    font-size: 1.1rem;
    font-style: italic;
  }
`;

export default function Spaceship(props) {
  const [quantity, setQuantity] = useState(1);
  if (props.error) {
    return (
      <>
        <Head>
          <title>Error, not found</title>
          <meta name="description" content="Spaceship not found" />
        </Head>
        <h3>{props.error}</h3>
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
          {props.spaceship.name}, from {props.spaceship.knownFrom}
        </title>
        <meta name="description" content="Spaceship not found" />
      </Head>
      <main css={[productPageStyle, buttonStyles]}>
        <div className="container">
          <div className="product-top">
            <div className="product-img">
              <h1>{props.spaceship.name}</h1>
              <Image
                src={`/img/${props.spaceship.id}-${props.spaceship.name
                  .toLowerCase()
                  .split(' ')
                  .join('-')}.jpg`}
                width={600}
                height={400}
                alt={`${props.spaceship.name} in space`}
              />{' '}
            </div>
            <div className="product-cart">
              <p>Known from: {props.spaceship.knownFrom}</p>
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
                onClick={() => {
                  const existingCookie = getCookies('cart');
                  if (existingCookie === undefined) {
                    setCookies('cart', [
                      { id: props.spaceship.id, quantity: quantity },
                    ]);
                    return;
                  } else {
                    const shipAlreadyInCart = existingCookie.find((obj) => {
                      return obj.id === props.spaceship.id;
                    });
                    if (!shipAlreadyInCart) {
                      existingCookie.push({
                        id: props.spaceship.id,
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
              <p>Price: {parsePrice(props.spaceship.price)} </p>
            </div>
          </div>
          <br />
          <hr />
          <div className="product-bottom">
            <p>
              Condition: <span>{props.spaceship.condition}</span>
            </p>
            <p>First appearence: {props.spaceship.firstAppearence}</p>
            <p>{props.spaceship.description}</p>{' '}
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
