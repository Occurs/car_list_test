import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  container: {
    minHeight: 'inherit',
  }
});

const Page404 = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.container} container direction="column" justify="center" alignItems="center">
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
            You can always go back to the homepage.
          </Box>
        </Typography>
      </Grid>
    </Grid>
    // </Box>
  );
};

export default Page404;
