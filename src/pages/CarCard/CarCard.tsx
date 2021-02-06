import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { getCar } from 'client/http'
import { ICar } from 'types/types';

type ParamTypes = {
  stockNumber: string
}

const CarCardPage = () => {
  let { stockNumber } = useParams<ParamTypes>();
  const [car, setCar] = useState<ICar | null>(null);
 
  useEffect(() => {
    const fetchData = async () => {
      const carInfo = await getCar(Number(stockNumber));
      setCar(carInfo);
    };
    fetchData();
  }, [stockNumber]);
  return (
    <Typography component='div'>
      <Box fontWeight='fontWeightRegular' m={1}>
        Car {car?.stockNumber}
      </Box>
    </Typography>
  );
};

export default CarCardPage;
