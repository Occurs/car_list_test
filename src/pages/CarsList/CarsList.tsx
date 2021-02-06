import React, { useEffect, useState, useContext } from 'react';
import { Link, generatePath } from 'react-router-dom';
import routes from 'router/routes';
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
 
  return (
    <div>
      {cars.length > 0 &&
        cars.map((car: ICar) => (
          <Link  key={car.stockNumber} to={generatePath(routes.carCard, { stockNumber: car.stockNumber })}>
            {car.stockNumber}
          </Link>
          ))
      }
    </div>
  );
};

export default CarsListPage;
