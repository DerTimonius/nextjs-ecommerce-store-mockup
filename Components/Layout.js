import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Header />
      <Drawer anchor="right" open={isOpen} />

      {/* <button onClick={() => setIsOpen(true)}>Click for Drawer</button> */}

      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
