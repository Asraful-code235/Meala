import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, Title }) => {
  return (
    <>
      <Head>
        <title>{Title ? `${Title} | Ecommerce` : 'Ecommerce'}</title>
        <meta name="description" content="An ecommerce app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="z-20">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
