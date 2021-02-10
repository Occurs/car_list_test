import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import routes from "router/routes";
import { colors } from "styles/variables";

const useStyles = makeStyles({
  image: {
    width: "inherit",
    height: "inherit",
    objectFit: "contain",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <Box
      component="header"
      height="80px"
      borderBottom={`2px solid ${colors.secondary}`}
    >
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Link underline="none" component={NavLink} to={routes.carsList}>
              <Box component="div" height="60px" width="180px">
                <img
                  alt="logo"
                  src="https://auto1-js-task-api--mufasa71.repl.co/images/logo.png"
                  className={classes.image}
                />
              </Box>
            </Link>
          </Grid>
          <Grid item>
            <Typography>
              <Box
                component="span"
                height="80px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="14px"
              >
                <Link underline="none" component={NavLink} to={routes.carsList}>
                  <Box color={colors.font} component="span" marginLeft="24px">
                    Purchase
                  </Box>
                </Link>
                <Link
                  underline="none"
                  component={NavLink}
                  to={routes.favorites}
                >
                  <Box color={colors.font} component="span" marginLeft="24px">
                    Favorites
                  </Box>
                </Link>
                <Link underline="none" component={NavLink} to="/sell">
                  <Box color={colors.font} component="span" marginLeft="24px">
                    Sell
                  </Box>
                </Link>
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
