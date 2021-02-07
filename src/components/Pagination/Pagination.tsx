import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const Pagination = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      width="70%"
      margin="24px auto 0 auto"
    >
      <Button size="small" color="primary">
        First
      </Button>
      <Button size="small" color="primary">
        Previous
      </Button>
      <Typography>
        <Box fontSize="12px">Page 2 of 10</Box>
      </Typography>
      <Button size="small" color="primary">
        Next
      </Button>
      <Button size="small" color="primary">
        Last
      </Button>
    </Box>
  );
};

export default Pagination;
