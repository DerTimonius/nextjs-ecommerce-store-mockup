import { css } from '@emotion/react';
import Drawer from '@mui/material/Drawer';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const drawerStyles = css`
  width: 480px;
  background-color: rgba(255, 255, 255, 0.6);
`;

function Layout(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedQuantity, setDisplayedQuantity] = useState(0);
  useEffect(() => {
    setDisplayedQuantity(props.totalQuantity);
  }, [props.totalQuantity]);

  return (
    <div>
      <Header totalQuantity={displayedQuantity} />
      <Drawer anchor="right" open={isOpen} css={drawerStyles} />

      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
