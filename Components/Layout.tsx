import Footer from './Footer';
import Header from './Header';

type Props = {
  children: JSX.Element;
  cartQuantity: number;
};
function Layout({ children, cartQuantity }: Props) {
  return (
    <div>
      <Header cartQuantity={cartQuantity} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
