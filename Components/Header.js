import { css } from '@emotion/react';
import { Badge } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

const headerStyles = css`
  background-color: #333333;
  color: white;
  padding: 15px;
  border-bottom: 1px solid pink;
  position: fixed;
  width: 100vw;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  /* font-family: 'Expletus Sans', cursive; */
  font-family: 'Revalia', cursive;
  div {
    display: flex;
    flex-direction: row;
  }
  div img {
    display: inline-block;
    vertical-align: middle;
    padding-left: 12px;
    cursor: pointer;
  }
  h4 {
    cursor: pointer;
  }

  a {
    margin: 0 20px;
  }
  #shopping-cart {
    cursor: pointer;
    background: #ddd;
  }
  #shopping-cart:hover {
    height: 40px;
    width: 40px;
  }
`;

function Header({ totalQuantity, openDrawer }) {
  return (
    <header css={headerStyles}>
      <Link href="/">
        <div>
          <Image
            src="/img/rocket.svg"
            width={30}
            height={30}
            alt="Icon of a rocket"
          />
          <h4>StarTravelHub</h4>
        </div>
      </Link>
      {/* <button onClick={openDrawer}>Drawer</button> */}
      <nav>
        <Link href="/">Home</Link>
        <Link href="/products" data-test-id="products-link">
          Our Spaceships
        </Link>
        <Link href="/about">About</Link>
        <Link href="/cart" data-test-id="cart-link">
          <Badge
            badgeContent={totalQuantity}
            color="error"
            data-test-id="cart-count"
          >
            <Image
              src="/img/rocket.png"
              width={30}
              height={30}
              alt="Shopping cart"
              id="shopping-cart"
            />
          </Badge>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
