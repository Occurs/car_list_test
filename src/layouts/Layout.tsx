import React from 'react';
import Container from '@material-ui/core/Container';

interface ILayouts {
  children: JSX.Element;
}

const Layout = ({ children }: ILayouts) => {
  return (
  <Container
    maxWidth="sm"
  >
    { children }
  </Container>
  );
};

export default Layout;
