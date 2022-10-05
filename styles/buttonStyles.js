import { css } from '@emotion/react';

export const buttonStyles = css`
  button {
    width: 120px;
    color: black;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.7);
    height: 24px;
    box-shadow: none;
    transition: box-shadow 0.2s ease;
  }
  button:active {
    background-color: rgba(255, 255, 255, 1);
  }
  #btn-add,
  #btn-subtract {
    width: 60px;
  }
  #btn-add:hover {
    box-shadow: 10px 5px 5px green;
  }
  #btn-subtract:hover {
    box-shadow: 10px 5px 5px red;
  }
  #btn-cart:hover {
    box-shadow: 10px 5px 5px blue;
  }
  #btn-checkout {
    width: 240px;
  }
  #btn-checkout:hover {
    box-shadow: 10px 5px 5px blue;
  }
`;
