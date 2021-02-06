import React from 'react';
import Container from '@material-ui/core/Container';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { IChildren } from 'types/types';

const Layout = ({ children }: IChildren) => {
  return (
    <>
    <Header />
    <Container maxWidth='md'>
      { children }
    </Container>
    <Footer />
    </>
  );
};

export default Layout;
