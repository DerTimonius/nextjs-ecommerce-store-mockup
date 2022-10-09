import { css } from '@emotion/react';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const drawerStyles = css`
  width: 200px;
  background-color: white;
`;

function Layout(props) {
  const [isOpen, setIsOpen] = useState(false);

  function openDrawer() {
    setIsOpen(true);
  }

  return (
    <div>
      <Header totalQuantity={props.totalQuantity} openDrawer={openDrawer} />
      <Drawer
        anchor="left"
        open={isOpen}
        css={drawerStyles}
        onClose={() => setIsOpen(false)}
      />

      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
