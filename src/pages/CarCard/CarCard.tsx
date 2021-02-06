import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
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
    <div>
      Card {car?.stockNumber}
    </div>
  );
};

export default CarCardPage;
