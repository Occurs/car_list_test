import React, { useContext } from 'react';
import { FiltersContext } from 'context/filtersDictionary/FiltersProvider';


const Filter = () => {
  const { colors, manufacturers } = useContext(FiltersContext);
  return (
    <>
    </>
  );
};

export default Filter;
