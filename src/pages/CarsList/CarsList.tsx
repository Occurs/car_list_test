import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import EmptyListItem from './EmptyListItem';
import ListItem from './ListItem';
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
          {cars.length ?
            cars.map((car: ICar) => <ListItem key={car.stockNumber} car={car}/>)
            : emptyList.map((item) => <EmptyListItem key={item} />)
          }
        </Box>
      </Grid>
    </Grid>
  );
};

export default CarsListPage;
