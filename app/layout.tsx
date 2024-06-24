import React from 'react';
import type { ReactNode } from 'react';
import Head from 'next/head';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import './styles/globals.scss';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Bana Dental Design</title>
        <meta name="description" content="Welcome to Bana Dental Design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
