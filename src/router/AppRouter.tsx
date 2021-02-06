import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CarsListPage from 'pages/CarsList/CarsList';
import CarCardPage from 'pages/CarCard/CarCard';
import Layout from 'layouts/Layout';
import routes from './routes';

type IComponent = () => JSX.Element

const LayoutWrapper = (Component: IComponent, props: any) => (
  <Layout>
    <Component {...props} />
  </Layout>
);

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.carsList} component={(props: any) => LayoutWrapper(CarsListPage, props)} />
        <Route exact path={routes.carCard} component={(props: any) => LayoutWrapper(CarCardPage, props)} />
        {/* 404 */}
        <Route component={() => <>Page not found</>} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
