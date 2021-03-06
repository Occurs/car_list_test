import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Pagination from "components/Pagination/Pagination";
import EmptyListItem from "./EmptyListItem";
import ListItem from "../../components/ListItem/ListItem";
import Filter from "./Filter";
import { getCars } from "client/http";
import { ICar, ICarFilters } from "types/types";

const emptyList = new Array(10).fill(0).map((_, index) => index);

const CarsListPage = () => {
  const [cars, setCars] = useState<Array<ICar>>([]);
  const [filters, setFilters] = useState<ICarFilters>({
    color: "",
    manufacturer: "",
    page: 1,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalPageCount, setTotalPageCount] = useState<number>(0);

  useEffect(() => {
    async function fetchCarsListData() {
      setIsLoading(true);
      try {
        const { cars, totalPageCount } = await getCars(
          filters.manufacturer,
          filters.color,
          "asc",
          filters.page
        );
        setCars(cars);
        setTotalPageCount(totalPageCount);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCarsListData();
  }, [filters.color, filters.page, filters.manufacturer]);

  function setPage(page: number) {
    const updatedFilter = { ...filters };
    updatedFilter.page = page;
    setFilters(updatedFilter);
  }

  function onApplyFilters({
    color,
    manufacturer,
  }: Pick<ICarFilters, "color" | "manufacturer">) {
    setFilters({ color, manufacturer, page: 1 });
  }

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="stretch"
    >
      <Grid item xs={4}>
        <Filter applyFilters={onApplyFilters} />
      </Grid>
      <Grid item xs={8}>
        <Box component="div" paddingLeft="24px">
          <Typography>
            <Box component="span" fontSize="18px" fontWeight="bold">
              Available cars
            </Box>
          </Typography>
          <Typography>
            <Box component="span" fontSize="18px">
              Showing 10 of 100 results
            </Box>
          </Typography>
          {cars.length === 0 || isLoading
            ? emptyList.map((item) => <EmptyListItem key={item} />)
            : cars.map((car: ICar) => (
                <ListItem key={car.stockNumber} car={car} />
              ))}
          <Pagination
            totalPageCount={totalPageCount}
            page={filters.page}
            setPage={setPage}
            isLoading={isLoading}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default CarsListPage;
