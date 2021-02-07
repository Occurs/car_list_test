import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
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

const useStyles = makeStyles(() => ({
  formControl: {
    // minWidth: '100%',
    // height: '25px'
  },
}));

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
  const classes = useStyles();
  const { colors, manufacturers } = useContext(FiltersContext);

  return (
    <Box component='div' border={`2px solid ${colorPallette.secondary}`} padding='24px' width='100%'>
      <Typography>Color</Typography>
      <FormControl className={classes.formControl} variant='outlined' size='small' fullWidth>
        <Select
          value={color}
          onChange={onFiltersHandle}
          inputProps={{
            name: 'color',
            id: 'color-select',
          }}
          MenuProps={MenuProps}
          variant='outlined'
        >
          {colors.map(color => (
            <MenuItem key={color} value={color}>
              {color}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography>Manufacturer</Typography>
      <FormControl className={classes.formControl} variant='outlined' size='small' fullWidth>
        <InputLabel htmlFor="manufacturer-select">Manufacturer</InputLabel>
        <Select
          value={manufacturer}
          onChange={onFiltersHandle}
          inputProps={{
            name: 'manufacturer',
            id: 'manufacturer-select',
          }}
          MenuProps={MenuProps}
          variant='outlined'
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
