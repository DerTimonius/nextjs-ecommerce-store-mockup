import '../styles/globals.css';
import { css, Global } from '@emotion/react';
import Layout from '../Components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Global
        styles={css`
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
            margin: 12px;
            padding: 12px 24px;
          }
          a {
            text-decoration: underline 0.15em rgba(255, 255, 255, 0);
            transition: text-decoration-color 0.1s ease-in;
          }
          a:hover {
            text-decoration-color: rgba(255, 255, 255, 0.8);
          }
        `}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
