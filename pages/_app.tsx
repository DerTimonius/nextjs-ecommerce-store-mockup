import '../styles/globals.css';
import { css, Global } from '@emotion/react';
import { LinearProgress } from '@mui/material';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Layout from '../Components/Layout';
import { getCookies } from '../utils/cookies';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [cartQuantity, setCartQuantity] = useState<number>(0);
  // This boolean is used to trigger the change of the number shown at the cart (see useEffect below).
  const [changedValue, setChangedValue] = useState(true);
  function updateQuantity() {
    const cartCookie = getCookies('cart');
    if (cartCookie) {
      let quantity = 0;
      cartCookie.map((item) => (quantity += item.quantity));
      setCartQuantity(quantity);
      return;
    }
    setCartQuantity(0);
  }
  useEffect(() => {
    updateQuantity();
    setIsLoading(false);
  }, [changedValue]);
  // This function is called everytime a change is made to the cart (either adding something to the cart at the product page or change the numbers at the cart page)
  function changeBoolean() {
    setChangedValue(!changedValue);
  }

  return (
    <div>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Expletus+Sans:wght@500;700&family=Revalia&display=swap');
          *,
          *::before,
          *::after {
            margin: 0;
            box-sizing: border-box;
          }
          main {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            background-image: url(/img/Background.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            position: absolute;
            top: 61px;
            width: 100vw;
          }
          h1,
          h2 {
            font-family: 'Expletus Sans', Arial, cursive;
          }
          h1 {
            font-size: 72px;
          }
          a {
            opacity: 0.7;
            transition: all 0.15s linear;
            font-size: 18px;
          }
          a:hover {
            opacity: 1;
            font-size: 20px;
          }
          img {
            border-radius: 5px;
          }
        `}
      />
      {isLoading ? (
        <LinearProgress />
      ) : (
        <Layout cartQuantity={cartQuantity}>
          <Component {...pageProps} changeBoolean={changeBoolean} />
        </Layout>
      )}
    </div>
  );
}

export default MyApp;
