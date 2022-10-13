import { css } from '@emotion/react';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import {
  getSingleSpaceshipById,
  SpaceshipType,
} from '../../databases/spaceshipDatabase';
import { buttonStyles } from '../../styles/buttonStyles';
import { addToCookies } from '../../utils/addToCookies';
import { parseFromContextQuery } from '../../utils/contextQuery';
import { parsePrice } from '../../utils/parsePrice';

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
  input {
    border-radius: 5px;
    font-family: inherit;
    width: 64px;
    margin-left: 8px;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
type ConditionalProps =
  | {
      error: string;
    }
  | {
      spaceship: SpaceshipType;
    };
type Props =
  | {
      changeBoolean: Function;
    } & ConditionalProps;
export default function Spaceship(props: Props): JSX.Element {
  const [quantity, setQuantity] = useState(1);
  if ('error' in props) {
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
        <meta
          name="description"
          content={`${props.spaceship.name} product page`}
        />
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
                data-test-id="product-image"
              />{' '}
            </div>
            <div className="product-cart">
              <p>Known from: {props.spaceship.knownFrom}</p>
              <div>
                <div>
                  <p>
                    Quantity:
                    <input
                      type="number"
                      data-test-id="product-quantity"
                      value={quantity}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        setQuantity(event.target.valueAsNumber)
                      }
                    />{' '}
                  </p>
                </div>
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
                  addToCookies(props.spaceship.id, quantity);
                  props.changeBoolean();
                }}
              >
                Add to cart
              </button>
              <p>
                {' '}
                Price:{' '}
                <span data-test-id="product-price">
                  {parsePrice(props.spaceship.price)}
                </span>
              </p>
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

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<ConditionalProps>> {
  // Get spaceship id from query
  const spaceshipId = parseFromContextQuery(context.query.spaceshipId);
  // Check if input was correct
  if (typeof spaceshipId === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Spaceship not in stock',
      },
    };
  }
  // Fetch from database and check if response is okay
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
