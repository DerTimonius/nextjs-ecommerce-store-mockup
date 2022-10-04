import { css } from '@emotion/react';
import Head from 'next/head';

const landingStyles = css`
  h1 {
    font-family: 'Revalia', Arial, cursive;
    animation-name: fadeIn;
    animation-duration: 2s;
    color: #ddd;
  }
  main {
    height: 100vh;
    text-align: center;
    padding-top: 48px;
    /*  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
  }
  @keyframes fadeIn {
    0% {
      transform: translateX(500px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
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
        {/* <p>
          Want to travel the stars? Buy a renowned spaceship with StarTravelHub!
        </p> */}
      </main>
    </div>
  );
}
