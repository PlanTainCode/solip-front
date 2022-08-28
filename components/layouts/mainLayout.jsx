import Head from 'next/head';
import Header from '../modules/header';
import Footer from '../modules/footer';

export default function MainLayout({children}) {
  return (
    <div className="container">
      {/* <Head></Head> */}

      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  );
}