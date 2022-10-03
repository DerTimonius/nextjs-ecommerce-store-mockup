import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

const headerStyles = css`
  background-color: #333333;
  color: white;
  padding: 15px;
  border-bottom: 1px solid pink;
  display: flex;
  justify-content: space-around;
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
  a + a {
    margin-left: 20px;
  }
`;

function Header() {
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
      <nav>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/history">History</Link>
        <Link href="/about">About</Link>
        <Link href="/cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;
