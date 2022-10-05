import { css } from '@emotion/react';

const footerStyles = css`
  background-color: darkblue;
  color: white;
`;

function Footer() {
  return (
    <footer css={footerStyles}>
      <h6>copyright by a weird fella called Timon Jurschitsch</h6>
    </footer>
  );
}

export default Footer;
