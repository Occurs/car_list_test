import React, { useEffect, useState } from 'react';
import { getList } from 'client/http'

interface ICar {
  stockNumber: number,
  manufacturerName: string,
  modelName: string,
  color: string,
  mileage: {
    number: number,
    unit: string
  },
  fuelType: string,
  pictureUrl: string
}

const ListPage = () => {
  const [list, setList] = useState<Array<ICar>>([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const cars = await getList();
 
      setList(cars);
    };
 
    fetchData();
  }, []);

  return (
    <div>
      {list.length > 0 &&
        list.map((car: any) => <span key={car.stockNumber}>{car.stockNumber}</span>)
      }
    </div>
  );
};

export default ListPage;
