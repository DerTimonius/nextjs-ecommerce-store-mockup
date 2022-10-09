import { css } from '@emotion/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { buttonStyles } from '../styles/buttonStyles';
import { checkNumberLength } from '../utils/checkFormData';
import { deleteCookies } from '../utils/cookies';

const checkoutStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  .forms {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  form {
    backdrop-filter: blur(12px);
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    width: 320px;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    margin: 12px;
    border: 1px solid lightblue;
  }
  .btn {
    margin-top: 12px;
  }
  .expiration-date {
    text-align: center;
  }
  .expiration-date input {
    width: 50px;
  }
`;

export default function Checkout({ deleteTotal }) {
  const [confirmed, setConfirmed] = useState(false);
  const [formData, setFormData] = useState({});
  const [isCardNumberCorrect, setIsCardNumberCorrect] = useState(true);
  const randomNumber = Math.floor(Math.random() * 10000000);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    if (!checkNumberLength(formData.creditCardNumber, 16)) {
      // e.preventDefault();
      setIsCardNumberCorrect(false);
    }
    if (isCardNumberCorrect) {
      setConfirmed(true);
    }
  };
  useEffect(() => setIsCardNumberCorrect(true), [formData.creditCardNumber]);
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
            <div className="forms">
              <form className="form-personal-info">
                <h2>Personal information</h2>
                <label htmlFor="first-name">First name</label>
                <input
                  name="first-name"
                  id="firstName"
                  data-test-id="checkout-first-name"
                  onChange={handleChange}
                  pattern="[a-zA-Z]*"
                  required
                />
                <label htmlFor="last-name">Last name</label>
                <input
                  name="last-name"
                  id="lastName"
                  data-test-id="checkout-last-name"
                  pattern="[a-zA-Z]*"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="e-mail">E-Mail</label>
                <input
                  type="email"
                  name="e-mail"
                  id="email"
                  data-test-id="checkout-email"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="address">Address</label>
                <input
                  name="address"
                  id="address"
                  data-test-id="checkout-address"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="city">City</label>
                <input
                  name="city"
                  id="city"
                  data-test-id="checkout-city"
                  pattern="[a-zA-Z]*"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="postal-code">Postal Code</label>
                <input
                  type="number"
                  name="postal-code"
                  id="postalCode"
                  data-test-id="checkout-postal-code"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="country">Country</label>
                <input
                  name="country"
                  id="country"
                  data-test-id="checkout-country"
                  pattern="[a-zA-Z]*"
                  onChange={handleChange}
                  required
                />
              </form>
              <form className="credit-card-info">
                <h2>Credit card information</h2>

                <label htmlFor="credit-card-number">Credit Card number</label>
                <input
                  type="number"
                  name="credit-card-number"
                  id="creditCardNumber"
                  data-test-id="checkout-credit-card"
                  onChange={handleChange}
                  minLength={16}
                  maxLength={16}
                  required
                  // style={!isCardNumberCorrect && { border: '1px solid red' }}
                />
                <div className="expiration-date">
                  <label htmlFor="expiration-date">Expiration date</label>{' '}
                  <br />
                  <input
                    type="number"
                    name="expiration-date"
                    id="expirationDateMonth"
                    data-test-id="checkout-expiration-date"
                    min={1}
                    max={12}
                    onChange={handleChange}
                    required
                  />{' '}
                  /
                  <input
                    type="number"
                    name="expiration-date"
                    id="expirationDateYear"
                    min={0}
                    max={99}
                    data-test-id="checkout-expiration-date"
                    onChange={handleChange}
                    required
                  />
                </div>
                <label htmlFor="security-code">Security code</label>
                <input
                  type="number"
                  name="security-code"
                  id="securityCode"
                  max={999}
                  onChange={handleChange}
                  required
                  data-test-id="checkout-security-code"
                />
              </form>
            </div>
            <button
              className="btn"
              data-test-id="checkout-confirm-order"
              onClick={(e) => {
                handleSubmit(e);
                deleteCookies('cart');
                deleteTotal();
              }}
            >
              Confirm order!
            </button>{' '}
          </>
        )}
      </main>
    </>
  );
}
