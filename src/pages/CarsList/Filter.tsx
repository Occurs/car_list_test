import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { FiltersContext } from 'context/filtersDictionary/FiltersProvider';
import { colors as colorPallette } from 'styles/variables';

type IFilterComponent = {
  applyFilters: () => void,
  onFiltersHandle: ((event: React.ChangeEvent<{
    name?: string | undefined;
    value: unknown;
    }>, child: React.ReactNode) => void) | undefined,
  color: string,
  manufacturer: string,
}

const MenuProps = {
  PaperProps: {
    style: {
      border: `solid 2px ${colorPallette.secondary}`,
      borderTop: 'none',
      borderRdius: '2px',
      width: 'inherit',
      marginTop: '50px'
    },
  },
};

const Filter = ({ applyFilters, onFiltersHandle, color, manufacturer }: IFilterComponent) => {
  const { colors, manufacturers } = useContext(FiltersContext);

  return (
    <Box component='div' border={`2px solid ${colorPallette.secondary}`} padding='24px' width='100%'>
      <FormControl>
        <InputLabel htmlFor="color-select">Color</InputLabel>
        <Select
          value={color}
          onChange={onFiltersHandle}
          inputProps={{
            name: 'color',
            id: 'color-select',
          }}
          MenuProps={MenuProps}
        >
          {colors.map(color => (
            <MenuItem key={color} value={color}>
              {color}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="manufacturer-select">Manufacturer</InputLabel>
        <Select
          value={manufacturer}
          onChange={onFiltersHandle}
          inputProps={{
            name: 'manufacturer',
            id: 'manufacturer-select',
          }}
          MenuProps={MenuProps}
        >
          {manufacturers.map(manufacturer => (
            <MenuItem key={manufacturer.name} value={manufacturer.name}>
              {manufacturer.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={applyFilters}>
        Filter
      </Button>
    </Box>
  );
};

export default Filter;
