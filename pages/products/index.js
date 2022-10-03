import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getAllSpaceships } from '../../databases/spaceshipDatabase.ts';
import { parsePrice } from '../../utils/parsePrice.js';

const productsStyle = css`
  padding: 12px 24px;
  margin: 24px;
  .product {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: 1.5px solid black;
    align-items: center;
    padding: 24px;
    margin: 24px;
  }
  .product-hero {
    display: flex;
    flex-direction: column;
    /* margin: 36px; */
  }
  .product-overview {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }
`;

export default function Spaceships({ spaceships }) {
  return (
    <div css={productsStyle}>
      <Head>
        <title>Our spaceships</title>
        <meta name="description" content="Overview of the spaceships offered" />
      </Head>
      <h1>Our Spaceships</h1>
      <div>
        {spaceships.map((spaceship) => {
          return (
            <div key={`spaceship-id-${spaceship.id}`} className="product">
              <div className="product-hero">
                <h2>
                  <Link href={`/products/${spaceship.id}`}>
                    {spaceship.name}
                  </Link>
                </h2>
                <Image
                  src={`/img/${spaceship.id}-${spaceship.name
                    .toLowerCase()
                    .split(' ')
                    .join('-')}.jpg`}
                  width={300}
                  height={200}
                  alt={`${spaceship.name} in space`}
                />
              </div>
              <div className="product-overview">
                <p>
                  Known from: <strong>{spaceship.knownFrom}</strong>
                </p>
                <p>
                  First appearence: <strong>{spaceship.firstAppearence}</strong>
                </p>
                <p>
                  Price: <i>{parsePrice(spaceship.price)}</i>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const spaceships = await getAllSpaceships();
  return {
    props: {
      spaceships: spaceships,
    },
  };
}
