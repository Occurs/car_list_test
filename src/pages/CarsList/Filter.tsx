import React, { useContext, useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { FiltersContext } from "context/FiltersProvider";
import { colors as colorPallette } from "styles/variables";
import { ICarFilterSimple } from "types/types";

type IFilterComponent = {
  applyFilters: (filters: ICarFilterSimple) => void;
};

const useStyles = makeStyles(() => ({
  formControl: {
    marginBottom: "24px",
  },
  button: {
    marginLeft: "auto",
    marginRight: "0px",
    display: "block",
    color: "#FFFFFF !important",
    width: "128px",
  },
}));

const MenuProps = {
  PaperProps: {
    style: {
      borderTop: "none",
      borderRdius: "2px",
      width: "inherit",
      marginTop: "47px",
    },
  },
};

const Filter = ({ applyFilters }: IFilterComponent) => {
  const classes = useStyles();
  const { colors, manufacturers } = useContext(FiltersContext);
  const [filters, setFilters] = useState<ICarFilterSimple>({
    color: "",
    manufacturer: "",
  });

  function onFiltersHandle(
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) {
    const { value, name } = event.target;
    if (typeof value === "string" && name !== undefined) {
      const updatedFilter = { ...filters };
      updatedFilter[name] = value;
      setFilters(updatedFilter);
    }
  }

  function onApplyHandle() {
    applyFilters(filters);
  }

  return (
    <Box
      component="div"
      border={`2px solid ${colorPallette.secondary}`}
      padding="24px"
      width="100%"
    >
      <Typography>
        <Box component="span" fontSize="12px">
          Color
        </Box>
      </Typography>
      <FormControl
        className={classes.formControl}
        variant="outlined"
        size="small"
        fullWidth
      >
        <Select
          value={filters.color}
          onChange={onFiltersHandle}
          inputProps={{
            name: "color",
            id: "color-select",
          }}
          MenuProps={MenuProps}
          variant="outlined"
          displayEmpty
        >
          <MenuItem key="none" value="">
            All car colors
          </MenuItem>
          {colors.map((color) => (
            <MenuItem key={color} value={color}>
              {color}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography>
        <Box component="span" fontSize="12px">
          Manufacturer
        </Box>
      </Typography>
      <FormControl
        className={classes.formControl}
        variant="outlined"
        size="small"
        fullWidth
      >
        <Select
          value={filters.manufacturer}
          onChange={onFiltersHandle}
          inputProps={{
            name: "manufacturer",
            id: "manufacturer-select",
          }}
          MenuProps={MenuProps}
          variant="outlined"
          displayEmpty
        >
          <MenuItem key="none" value="">
            All manufacturers
          </MenuItem>
          {manufacturers.map((manufacturer) => (
            <MenuItem key={manufacturer.name} value={manufacturer.name}>
              {manufacturer.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={onApplyHandle}
        className={classes.button}
      >
        Filter
      </Button>
    </Box>
  );
};

export default Filter;
