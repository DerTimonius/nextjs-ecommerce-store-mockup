import { css } from '@emotion/react';
// import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import ImageCarousel from '../Components/Carousel';

const landingStyles = css`
  color: #ddd;
  h1 {
    font-family: 'Revalia', Arial, cursive;
    animation-name: fadeInTop;
    animation-duration: 2s;
  }
  h2 {
    animation-name: fadeInRight;
    animation-duration: 2s;
  }
  .carousel {
    animation-name: fadeInBottom;
    animation-duration: 2s;
  }

  main {
    height: max-content;
    text-align: center;
    padding-top: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @keyframes fadeInRight {
    0% {
      transform: translateX(500px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes fadeInTop {
    0% {
      transform: translateY(-500px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes fadeInBottom {
    0% {
      transform: translateY(500px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .product-link {
    color: black;
    width: 320px;
    height: 36px;
    padding: 4px;
    margin: 24px;
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 4px;
    transition: all 0.2s linear;
  }
  .product-link:hover {
    background-color: #ddd;
  }
`;

export default function Home() {
  return (
    <div css={landingStyles}>
      <Head>
        <title>StarTravelHub</title>
        <meta name="description" content="Buy a spaceship with StarTravelHub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>StarTravelHub</h1>
        <br />
        <h2>
          Want to travel the stars? Buy a famous spaceship with StarTravelHub!
        </h2>
        <br />
        <ImageCarousel className="carousel" />
        {/* <ImageList
          sx={{ width: 760, height: 490 }}
          variant="standard"
          cols={3}
          rowHeight={240}
        >
          <ImageListItem cols={1} rows={1}>
            <img
              src="/img/2-rocinante.jpg"
              alt="Rocinante, spaceship, from The Expanse"
              loading="lazy"
            />
            <ImageListItemBar position="bottom" title="Rocinante" />
          </ImageListItem>
          <ImageListItem cols={1} rows={1}>
            <img
              src="/img/4-avalon.jpg"
              alt="Avalon, spaceship, from Passengers"
              loading="lazy"
            />
            <ImageListItemBar position="bottom" title="Avalon" />
          </ImageListItem>
          <ImageListItem cols={1} rows={1}>
            <img
              src="/img/8-endurance.jpg"
              alt="Endurance, spaceship, from Interstellar"
              loading="lazy"
            />
            <ImageListItemBar position="bottom" title="Endurance" />
          </ImageListItem>
          <ImageListItem cols={1} rows={1}>
            <img
              src="/img/10-discovery-one.jpg"
              alt="Discovery One, spaceship, from 2001- A space odyssey"
              loading="lazy"
            />
            <ImageListItemBar position="bottom" title="Discovery One" />
          </ImageListItem>
          <ImageListItem cols={1} rows={1}>
            <img
              src="/img/7-pods.jpg"
              alt="Pods, spaceship, from Arrival"
              loading="lazy"
            />
            <ImageListItemBar position="bottom" title="Pods" />
          </ImageListItem>
          <ImageListItem cols={1} rows={1}>
            <img
              src="/img/5-serenity.jpg"
              alt="Serenity, spaceship, from Firefly"
              loading="lazy"
            />
            <ImageListItemBar position="bottom" title="Serenity" />
          </ImageListItem>
        </ImageList> */}
        <div className="product-link">
          <Link href="/products">View our ships!</Link>
        </div>
      </main>
    </div>
  );
}
