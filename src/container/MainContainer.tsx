import WrapperContainer from '@/container/WrapperContainer/WrapperContainer';
import Head from 'next/head';
import React from 'react';

interface MainContainerProps {
  title: string;
}

const MainContainer = ({ title }: MainContainerProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WrapperContainer>
        <header />
        <p>Main</p>
      </WrapperContainer>
    </>
  );
};

export default MainContainer;
