import React from "react";
import { NavLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import routes from "router/routes";
import { colors } from "styles/variables";

const Header = () => {
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
            <Box component="div">
              <Typography>Logo</Typography>
            </Box>
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
                    My Orders
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
