import { css } from '@emotion/react';
import Head from 'next/head';
import ImageCarousel from '../Components/Carousel';

const landingStyles = css`
  h1 {
    font-family: 'Revalia', Arial, cursive;
    animation-name: fadeInTop;
    animation-duration: 2s;
    color: #ddd;
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
    height: 100vh;
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
`;

export default function Home(props) {
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
          Want to travel the stars? Buy a renowned spaceship with StarTravelHub!
        </h2>
        <br />
        <ImageCarousel className="carousel" />
      </main>
    </div>
  );
}
