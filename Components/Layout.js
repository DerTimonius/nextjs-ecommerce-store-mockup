import Footer from './Footer';
import Header from './Header';

function Layout(props) {
  return (
    <div>
      <Header totalQuantity={props.totalQuantity} />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
