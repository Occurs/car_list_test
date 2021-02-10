import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CarsListPage from "pages/CarsList/CarsList";
import CarCardPage from "pages/CarCard/CarCard";
import FavoriteCars from "pages/Favorites/Favorites";
import Page404 from "pages/Page404/Page404";
import Layout from "layouts/Layout";
import routes from "./routes";

type IComponent = () => JSX.Element;

const LayoutWrapper = (Component: IComponent, props: any) => (
  <Layout>
    <Component {...props} />
  </Layout>
);

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={routes.carsList}
          component={(props: any) => LayoutWrapper(CarsListPage, props)}
        />
        <Route
          exact
          path={routes.carCard}
          component={(props: any) => LayoutWrapper(CarCardPage, props)}
        />
        <Route
          exact
          path={routes.favorites}
          component={(props: any) => LayoutWrapper(FavoriteCars, props)}
        />
        <Route component={(props: any) => LayoutWrapper(Page404, props)} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
