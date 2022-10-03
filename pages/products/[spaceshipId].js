import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getSingleSpaceshipById } from '../../databases/spaceshipDatabase.ts';
import { getCookies, setCookies } from '../../utils/cookies';
import { parsePrice } from '../../utils/parsePrice.js';

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
      <h1>{props.spaceship.name}</h1>
      <div>
        <Image
          src={`/img/${props.spaceship.id}-${props.spaceship.name
            .toLowerCase()
            .split(' ')
            .join('-')}.jpg`}
          width={600}
          height={400}
          alt={`${props.spaceship.name} in space`}
        />
        <p>Price: {parsePrice(props.spaceship.price)} </p>
        <div>Quantity: {quantity}</div>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
        <button
          onClick={() => {
            if (quantity >= 2) {
              setQuantity(quantity - 1);
            }
          }}
        >
          -
        </button>

        <br />
        <button
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
      </div>
      <br />
      <hr />
      <div>
        <p>Known from: {props.spaceship.knownFrom}</p>
        <p>First appearence: {props.spaceship.firstAppearence}</p>
        <p>Condition: {props.spaceship.condition}</p>
        <p>{props.spaceship.description}</p>{' '}
      </div>
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
