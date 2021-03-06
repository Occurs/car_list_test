import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { IChildren } from "types/types";

const headerAndFooterHeight = 80 + 80;
const paddingsHeight = 24 + 24;

const useStyles = makeStyles({
  wrapper: {
    minHeight: `calc(100vh - ${headerAndFooterHeight}px)`,
  },
  container: {
    minHeight: `calc(100vh - ${headerAndFooterHeight + paddingsHeight}px)`,
  }
});

const Layout = ({ children }: IChildren) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Box component="div" className={classes.wrapper} padding="24px 0">
        <Container className={classes.container} maxWidth="md">{children}</Container>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
