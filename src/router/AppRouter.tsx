import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CarsListPage from 'pages/CarsList/CarsList';
import CarCardPage from 'pages/CarCard/CarCard';
import routes from './routes';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.carsList} component={CarsListPage} />
        <Route exact path={routes.carCard} component={CarCardPage} />
        {/* 404 */}
        <Route component={() => <>Page not found</>} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
