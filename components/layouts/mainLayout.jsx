import Head from 'next/head';
import Header from '../modules/header';
import Footer from '../modules/footer';

export default function MainLayout({children}) {
  return (
    <>
      <Header/>
      <div className="container">
        {/* <Head></Head> */}

        <main>
          {children}
        </main>
        <Footer/>
      </div>
    </>
  );
}