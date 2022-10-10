import Footer from './Footer';
import Header from './Header';

type Props = {
  totalQuantity: number;
  children: JSX.Element;
};
function Layout({ totalQuantity, children }: Props) {
  return (
    <div>
      <Header totalQuantity={totalQuantity} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
