import Head from 'next/head';
import Header from '../modules/header';
import Footer from '../modules/footer';

export default function MainLayout({children}) {
  return (
    <>
      <Header/>
      <div className="container flex flex-col min-h-screen">
        {/* <Head></Head> */}

        <main>
          {children}
        </main>
        <Footer/>
      </div>
    </>
  );
}