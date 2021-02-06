import React, { useEffect, useState } from 'react';
import { getList } from 'client/http'
import { ICar } from 'types/types';

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
        list.map((car: ICar) => <span key={car.stockNumber}>{car.stockNumber}</span>)
      }
    </div>
  );
};

export default ListPage;
