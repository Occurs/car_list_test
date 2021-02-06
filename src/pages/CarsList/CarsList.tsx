import React, { useEffect, useState } from 'react';
import { getCars } from 'client/http'
import { ICar } from 'types/types';

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
    <div>
      {cars.length > 0 &&
        cars.map((car: ICar) => <span key={car.stockNumber}>{car.stockNumber}</span>)
      }
    </div>
  );
};

export default CarsListPage;
