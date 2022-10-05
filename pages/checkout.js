import { css } from '@emotion/react';
import Head from 'next/head';
import { useState } from 'react';
import { buttonStyles } from '../styles/buttonStyles';

const checkoutStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  form {
    backdrop-filter: blur(12px);
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    margin: 12px;
    border: 1px solid lightblue;
  }
`;

export default function Checkout() {
  const [confirmed, setConfirmed] = useState(false);
  const randomNumber = Math.floor(Math.random() * 10000000);
  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Checkout page at StarTravelHub" />
      </Head>
      <main css={[checkoutStyles, buttonStyles]}>
        {confirmed ? (
          <>
            <h2>Thank you for your order</h2>
            <p>Your order number is {randomNumber}.</p>
          </>
        ) : (
          <>
            <h2>Just one more step!</h2>
            <form action="put" className="form-personal-info">
              <label htmlFor="first-name">First name</label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                data-test-id="checkout-first-name"
                required
              />
              <label htmlFor="last-name">Last name</label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                data-test-id="checkout-last-name"
                required
              />
              <label htmlFor="e-mail">E-Mail</label>
              <input
                type="email"
                name="e-mail"
                id="e-mail"
                data-test-id="checkout-email"
                required
              />
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                data-test-id="checkout-address"
                required
              />
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                data-test-id="checkout-city"
                required
              />
              <label htmlFor="postal-code">Postal Code</label>
              <input
                type="number"
                name="postal-code"
                id="postal-code"
                data-test-id="checkout-postal-code"
                required
              />
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                id="country"
                data-test-id="checkout-country"
                required
              />
              <label htmlFor="credit-card-number">Credit Card number</label>
              <input
                type="number"
                name="credit-card-number"
                id="credit-card-number"
                data-test-id="checkout-credit-card"
                required
              />
              <label htmlFor="expiration-date">Expiration date</label>
              <input
                type="text"
                name="expiration-date"
                id="expiration-date-month"
                data-test-id="checkout-expiration-date"
                required
              />{' '}
              /
              <input
                type="text"
                name="expiration-date"
                id="expiration-date-year"
                data-test-id="checkout-expiration-date"
                required
              />
              <label htmlFor="security-code">Security code</label>
              <input
                type="number"
                name="security-code"
                id="security-code"
                required
                data-test-id="checkout-security-code"
              />
              <button
                className="btn"
                data-test-id="checkout-confirm-order"
                onClick={() => setConfirmed(true)}
              >
                Confirm order!
              </button>{' '}
            </form>
          </>
        )}
      </main>
    </>
  );
}
