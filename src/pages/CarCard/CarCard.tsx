import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { getCar } from "client/http";
import { ICar } from "types/types";
import { capitalize } from "utils/capitalize";
import { colors as colorPallette } from "styles/variables";

type ParamTypes = {
  stockNumber: string;
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

const CarCardPage = () => {
  let { stockNumber: paramStockNumber } = useParams<ParamTypes>();
  const [car, setCar] = useState<ICar | null>(null);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const carInfo = await getCar(Number(paramStockNumber));
      setCar(carInfo);
    };
    fetchData();
  }, [paramStockNumber]);
  return (
    <>
      {car !== null && (
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
                    component="p"
                    fontSize="32px"
                    fontWeight="bold"
                    margin="12px 0"
                  >
                    {`${car.manufacturerName} ${car.modelName}`}
                  </Box>
                </Typography>
                <Typography>
                  <Box component="p" fontSize="18px" margin="12px 0">
                    {`Stock # ${car.stockNumber} - ${
                      car.mileage.number
                    } ${car.mileage.unit.toUpperCase()} - ${
                      car.fuelType
                    } - ${capitalize(car.color)}`}
                  </Box>
                </Typography>
                <Typography>
                  <Box component="p" fontSize="14px">
                    This car is currently available and can be delivered as soon
                    as tomorrow morning. Please be aware that delivery times
                    shown in this page are not definitive and may change due to
                    bad weather conditions.
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
                  <Box component="p" fontSize="14px">
                    If you like this car, click the button and save it in your
                    collection of favourite items.
                  </Box>
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {}}
                  className={classes.button}
                >
                  Save
                </Button>
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default CarCardPage;
