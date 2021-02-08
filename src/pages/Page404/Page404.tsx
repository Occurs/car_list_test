import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { colors } from "styles/variables";
import routes from "router/routes";

const useStyles = makeStyles({
  container: {
    minHeight: "inherit",
  },
});

const Page404 = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.container}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Typography>
          <Box component="span" fontSize="32px" fontWeight="bold">
            404 - Not Found
          </Box>
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <Box component="span" fontSize="18px">
            Sorry, the page you are looking for does not exist.
          </Box>
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <Box component="span" fontSize="18px">
            {`You can always go back to the `}
            <Link component={NavLink} to={routes.carsList}>
              <Box fontSize="18px" color={colors.primary} component="span">
                homepage
              </Box>
            </Link>
            .
          </Box>
        </Typography>
      </Grid>
    </Grid>
    // </Box>
  );
};

export default Page404;
