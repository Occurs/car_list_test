import React, { useEffect, useState, useContext } from 'react';
import { getCars } from 'client/http'
import { FiltersContext } from 'context/filtersDictionary/FiltersProvider';
import { ICar } from 'types/types';

const CarsListPage = () => {
  const { colors, manufacturers } = useContext(FiltersContext);
  const [cars, setCars] = useState<Array<ICar>>([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const cars = await getCars();
      setCars(cars);
    };
    fetchData();
  }, []);
  console.log('AZAZAZAZA', colors, manufacturers)
  return (
    <div>
      {cars.length > 0 &&
        cars.map((car: ICar) => <span key={car.stockNumber}>{car.stockNumber}</span>)
      }
    </div>
  );
};

export default CarsListPage;
