import '../styles/globals.css';
import { css, Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import Layout from '../Components/Layout';
import { getCookies } from '../utils/cookies';

function MyApp({ Component, pageProps }) {
  // const [cartQuantity, setCartQuantity] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  function updateQuantity() {
    const cartCookie = getCookies('cart');
    if (cartCookie) {
      let quantity = 0;
      cartCookie.map((item) => (quantity += item.quantity));
      setTotalQuantity(quantity);
    }
  }
  useEffect(() => {
    updateQuantity();
  }, []);

  function addToTotal(number) {
    const sum = totalQuantity;
    setTotalQuantity(sum + number);
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
            /* font-family: 'Revalia', cursive; */
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
      <Layout totalQuantity={totalQuantity}>
        <Component {...pageProps} addToTotal={addToTotal} />
      </Layout>
    </div>
  );
}

export default MyApp;
