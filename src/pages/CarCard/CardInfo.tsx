import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { ICar } from "types/types";
import { capitalize } from "utils/capitalize";
import { colors as colorPallette } from "styles/variables";

type ICardInfo = {
  car: ICar;
};

const useStyles = makeStyles({
  image: {
    width: "100%",
    height: "inherit",
    maxHeight: "300px",
    objectFit: "contain",
  },
  button: {
    marginLeft: "auto",
    marginRight: "0px",
    display: "block",
    color: "#FFFFFF !important",
    width: "128px",
  },
});

const CarCardPage = ({ car }: ICardInfo) => {
  const classes = useStyles();
  const [favoriteCars, setFavoriteCars] = useState<Array<ICar>>([]);

  useEffect(() => {
    const favoriteCarsList = localStorage.getItem("favoriteCarsList");
    if (favoriteCarsList !== null) {
      const parsedList = JSON.parse(favoriteCarsList);
      setFavoriteCars(parsedList);
    }
  }, [car.stockNumber]);

  function addToLocalStorage() {
    const updatedFavoriteCars = [...favoriteCars, car];
    setFavoriteCars(updatedFavoriteCars);
    localStorage.setItem(
      "favoriteCarsList",
      JSON.stringify(updatedFavoriteCars)
    );
  }

  function removeFromLocalStorage() {
    const favCars = [...favoriteCars];
    const index = favCars.findIndex(
      (favoriteCar) => favoriteCar.stockNumber === car.stockNumber
    );
    if (index > -1) {
      favCars.splice(index, 1);
      setFavoriteCars(favCars);
      localStorage.setItem("favoriteCarsList", JSON.stringify(favCars));
    }
  }

  function checkInFavorites() {
    return (
      favoriteCars.filter(
        (favoriteCar) => favoriteCar.stockNumber === car.stockNumber
      ).length > 0
    );
  }

  return (
    <>
      <img
        alt={`${car.stockNumber}`}
        src={car.pictureUrl}
        className={classes.image}
      />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="stretch"
      >
        <Grid item xs={8}>
          <Box
            component="div"
            marginLeft="12px"
            marginTop="24px"
            height="100%"
            display="flex"
            alignItems="flex-start"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography>
              <Box
                component="span"
                fontSize="32px"
                fontWeight="bold"
                margin="12px 0"
              >
                {`${car.manufacturerName} ${car.modelName}`}
              </Box>
            </Typography>
            <Typography>
              <Box component="span" fontSize="18px" margin="12px 0">
                {`Stock # ${car.stockNumber} - ${
                  car.mileage.number
                } ${car.mileage.unit.toUpperCase()} - ${
                  car.fuelType
                } - ${capitalize(car.color)}`}
              </Box>
            </Typography>
            <Typography>
              <Box component="span" fontSize="14px">
                This car is currently available and can be delivered as soon as
                tomorrow morning. Please be aware that delivery times shown in
                this page are not definitive and may change due to bad weather
                conditions.
              </Box>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            component="div"
            border={`2px solid ${colorPallette.secondary}`}
            padding="24px"
            width="100%"
            marginLeft="24px"
            marginTop="24px"
          >
            <Typography>
              <Box component="span" fontSize="14px">
                If you like this car, click the button and save it in your
                collection of favourite items.
              </Box>
            </Typography>
            {checkInFavorites() ? (
              <Button
                variant="contained"
                color="primary"
                onClick={removeFromLocalStorage}
                className={classes.button}
              >
                Remove
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={addToLocalStorage}
                className={classes.button}
              >
                Save
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CarCardPage;
