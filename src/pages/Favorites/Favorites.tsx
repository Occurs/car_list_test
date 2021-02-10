import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ListItem from "components/ListItem/ListItem";
import { ICar } from "types/types";

const FavoritieCarsPage = () => {
  const [favoriteCars, setFavoriteCars] = useState<Array<ICar>>([]);

  useEffect(() => {
    const favoriteCarsList = localStorage.getItem("favoriteCarsList");
    if (favoriteCarsList !== null) {
      const parsedList = JSON.parse(favoriteCarsList);
      setFavoriteCars(parsedList);
    }
  }, []);

  return (
    <Box component="div">
      <Typography>
        <Box component="span" fontSize="18px" fontWeight="bold">
          Favorite cars
        </Box>
      </Typography>
      {favoriteCars.length > 0
        ? favoriteCars.map((car: ICar) => (
            <ListItem key={car.stockNumber} car={car} />
          ))
        : "You have no favorites"}
    </Box>
  );
};

export default FavoritieCarsPage;
