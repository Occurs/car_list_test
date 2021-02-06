import React from 'react';
import Container from '@material-ui/core/Container';
import { IChildren } from 'types/types';

const Layout = ({ children }: IChildren) => {
  return (
  <Container
    maxWidth="sm"
  >
    { children }
  </Container>
  );
};

export default Layout;
