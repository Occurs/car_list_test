import React, { useEffect, useState } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import routes from 'router/routes';
import { getCars } from 'client/http'
import { ICar } from 'types/types';

const useStyles = makeStyles({
  root: {
    minHeight: 'calc(100vh - 160px)',
  },
});

const CarsListPage = () => {
  const classes = useStyles();
  const [cars, setCars] = useState<Array<ICar>>([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const cars = await getCars();
      setCars(cars);
    };
    fetchData();
  }, []);
 
  return (
    <>
      <Box component='div' className={classes.root}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="stretch"
        >
          <Grid item xs={4}>hello</Grid>
          <Grid item xs={8}>
            {cars.length > 0 &&
              cars.map((car: ICar) => (
                <Link  key={car.stockNumber} to={generatePath(routes.carCard, { stockNumber: car.stockNumber })}>
                  {car.stockNumber}
                </Link>
                ))
            }
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CarsListPage;
