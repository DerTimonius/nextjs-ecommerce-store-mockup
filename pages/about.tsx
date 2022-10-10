import { css } from '@emotion/react';
import Head from 'next/head';

const aboutStyles = css`
  text-align: center;
  padding: 24px;
  width: 100%;
  height: 100%;
  color: #ddd;
  .container {
    margin-top: 200px;
    line-height: 36px;
  }
  .container > p {
    font-size: 32px;
  }
`;

function About() {
  return (
    <div>
      <Head>
        <title>About us</title>
        <meta name="description" content="What you need to know about us" />
      </Head>
      <main css={aboutStyles}>
        <div className="container">
          <h2>Dear Adventurer!</h2>
          <hr />
          <p>
            Thank you for stumbling across this store. You will probably have
            figured it out by now, but this is of course not a real webstore.
            You can't buy anything here, if you were to actually check out your
            order, nothing would happen. All the input you have given will be
            deleted and not be stored.
          </p>
          <br />
          <p>
            Having said that, this actually has all the functionality of a real
            e-commerce store (aside from it being fake of course). So adding
            stuff to your cart, deleting stuff from your cart, changing the
            quantity of the products, whatever you can imagine from a typical
            store.
          </p>
        </div>
      </main>
    </div>
  );
}

export default About;
