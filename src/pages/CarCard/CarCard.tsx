import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCar } from "client/http";
import CardInfo from "./CardInfo";
import { ICar } from "types/types";

type ParamTypes = {
  stockNumber: string;
};

const CarCardPage = () => {
  let { stockNumber: paramStockNumber } = useParams<ParamTypes>();
  const [car, setCar] = useState<ICar | null>(null);

  useEffect(() => {
    async function fetchCarData(paramStockNum: string) {
      const carInfo = await getCar(Number(paramStockNum));
      setCar(carInfo);
    }
    fetchCarData(paramStockNumber);
  }, [paramStockNumber]);
  return <>{car !== null && <CardInfo car={car} />}</>;
};

export default CarCardPage;
