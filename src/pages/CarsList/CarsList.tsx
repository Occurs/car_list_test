import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import EmptyListItem from './EmptyListItem';
import ListItem from './ListItem';
import Filter from './Filter';
import { getCars } from 'client/http'
import { ICar, ICarFilters } from 'types/types';


const emptyList = new Array(10).fill(0).map((_, index) => index);

const CarsListPage = () => {
  const [cars, setCars] = useState<Array<ICar>>([]);
  const [filters, setFilters] =
    useState<ICarFilters>({ color: '', manufacturer: '' });
  const [flag, searchTrigger] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
 
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      let cars = [];
      try {
        cars = await getCars(filters.manufacturer, filters.color, 'asc', 1);
      } finally {
        setIsLoading(false);
      }
      setCars(cars);
    };
    fetchData();
  }, [flag]);

  function onFiltersHandle(event: React.ChangeEvent<{ name?: string | undefined, value: unknown }>) {
    const { value, name } = event.target;
    if (typeof value === 'string' && name !== undefined) {
      const updatedFilter = { ...filters };
      updatedFilter[name] = value;
      setFilters(updatedFilter);
    }
  };

  function onApplyFilters() {
    searchTrigger(!flag);
  }
 
  return (
    <Grid
      container
      direction='row'
      justify='space-between'
      alignItems='stretch'
    >
      <Grid item xs={4}>
        <Filter
          applyFilters={onApplyFilters}
          onFiltersHandle={onFiltersHandle}
          color={filters.color}
          manufacturer={filters.manufacturer}
        />
      </Grid>
      <Grid item xs={8}>
        <Box component='div' paddingLeft='24px'>
          <Typography>
            <Box component='span' fontSize='18px' fontWeight='bold'>Available cars</Box>
          </Typography>
          <Typography>
            <Box component='span' fontSize='18px'>Showing 10 of 100 results</Box>
          </Typography>
          {cars.length === 0 || isLoading ?
            emptyList.map((item) => <EmptyListItem key={item} />)
            : 
            cars.map((car: ICar) => <ListItem key={car.stockNumber} car={car}/>)
          }
        </Box>
      </Grid>
    </Grid>
  );
};

export default CarsListPage;
