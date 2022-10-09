import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getAllSpaceships } from '../../databases/spaceshipDatabase.ts';
import { parsePrice } from '../../utils/parsePrice.js';

const productsStyle = css`
  padding: 12px 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .product {
    cursor: pointer;
    display: flex;
    width: 360px;
    height: 420px;
    flex-direction: column;
    justify-content: space-around;
    border-bottom: 1.5px solid black;
    align-items: center;
    padding: 24px;
    margin: 24px;
    backdrop-filter: blur(24px);
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
  }
  .product-hero {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .product-hero a {
    font-size: 30px;
  }
  .product-overview {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    color: #ddd;
    gap: 4px;
    font-weight: 500px;
    font-size: 1.1em;
  }
  .product-link {
    width: 120px;
    height: 36px;
    padding: 4px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    transition: all 0.2s linear;
  }
  .product-link:hover {
    background-color: #ddd;
  }
  img {
    filter: none;
    -webkit-filter: grayscale(70%);
    -moz-filter: grayscale(70%);
    -ms-filter: grayscale(70%);
    -o-filter: grayscale(70%);
    cursor: pointer;
    transition: all 0.5s ease;
  }
  img:hover {
    filter: none;
    -webkit-filter: grayscale(0%);
    -moz-filter: grayscale(0%);
    -ms-filter: grayscale(0%);
    -o-filter: grayscale(0%);
  }
`;

export default function Spaceships({ spaceships }) {
  return (
    <div>
      <Head>
        <title>Our spaceships</title>
        <meta name="description" content="Overview of the spaceships offered" />
      </Head>
      <main>
        <div css={productsStyle}>
          <h1>Our Spaceships</h1>
          <div className="grid">
            {spaceships.map((spaceship) => {
              return (
                <Link
                  href={`/products/${spaceship.id}`}
                  key={`spaceship-id-${spaceship.id}`}
                  data-test-id={`product-${spaceship.id}`}
                >
                  <div key={`spaceship-id-${spaceship.id}`} className="product">
                    <div className="product-hero">
                      <h2>{spaceship.name}</h2>
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
                        Known from <strong>{spaceship.knownFrom}</strong>
                      </p>

                      <p>
                        Price <i>{parsePrice(spaceship.price)}</i>
                      </p>
                    </div>
                    <div className="product-link">View ship!</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
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
