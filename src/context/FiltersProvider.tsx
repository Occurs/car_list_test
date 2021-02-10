import React, { useState, useEffect, createContext } from "react";
import { getManufacturers, getColors } from "client/http";
import { IChildren, IManufacturer } from "types/types";

type IContext = { colors: Array<string>; manufacturers: Array<IManufacturer> };
export const FiltersContext = createContext({} as IContext);

export const FiltersProvider = ({ children }: IChildren) => {
  const [colors, setColors] = useState<Array<string>>([]);
  const [manufacturers, setManufacturers] = useState<Array<IManufacturer>>([]);
  useEffect(() => {
    async function fetchFiltersOptions() {
      const [colors, manufacturers] = await Promise.all([
        getColors(),
        getManufacturers(),
      ]);
      setColors(colors);
      setManufacturers(manufacturers);
    }
    fetchFiltersOptions();
  }, []);
  return (
    <FiltersContext.Provider value={{ colors, manufacturers }}>
      {children}
    </FiltersContext.Provider>
  );
};
