import { css } from '@emotion/react';

const footerStyles = css`
  color: white;
  width: 100%;
`;

function Footer() {
  return (
    <footer css={footerStyles}>
      <h2>copyright by a weird fella called Timon Jurschitsch</h2>
    </footer>
  );
}

export default Footer;
