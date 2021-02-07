import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { IChildren } from 'types/types';

const useStyles = makeStyles({
  root: {
    minHeight: 'calc(100vh - 160px)',
  },
});

const Layout = ({ children }: IChildren) => {
  const classes = useStyles();
  return (
    <>
    <Header />
    <Box component='div' className={classes.root} padding='24px 0'>
      <Container maxWidth='md'>
        { children }
      </Container>
    </Box>
    <Footer />
    </>
  );
};

export default Layout;
