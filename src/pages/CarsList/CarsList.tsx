import React, { useEffect, useState } from 'react';
import { NavLink, generatePath } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import EmptyListItem from './EmptyListItem';
import routes from 'router/routes';
import { getCars } from 'client/http'
import { ICar } from 'types/types';
import { colors } from 'styles/variables';

const emptyList = new Array(10).fill(0).map((_, index) => index);

const CarsListPage = () => {
  const [cars, setCars] = useState<Array<ICar>>([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const cars = await getCars();
      setCars(cars);
    };
    fetchData();
  }, []);
  console.log('AZAZA', emptyList)
  return (
    <Grid
      container
      direction='row'
      justify='space-between'
      alignItems='stretch'
    >
      <Grid item xs={4}>hello</Grid>
      <Grid item xs={8}>
        <Box component='div' paddingLeft='24px'>
          <Typography>
            <Box component='span' fontSize='18px' fontWeight='bold'>Available cars</Box>
          </Typography>
          <Typography>
            <Box component='span' fontSize='18px'>Showing 10 of 100 results</Box>
          </Typography>
          { emptyList.map((item) => <EmptyListItem key={item} />)}
        </Box>
        {/* {cars.length > 0 &&
          cars.map((car: ICar) => (
            <NavLink  key={car.stockNumber} to={generatePath(routes.carCard, { stockNumber: car.stockNumber })}>
              {car.stockNumber}
            </NavLink>
            ))
        } */}
      </Grid>
    </Grid>
  );
};

export default CarsListPage;
