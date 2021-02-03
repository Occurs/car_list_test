import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ListPage from 'pages/List/List';
import CardPage from 'pages/Card/Card';
import routes from './routes';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.list} component={ListPage} />
        <Route exact path={routes.card} component={CardPage} />
        {/* 404 */}
        <Route component={() => <>Page not found</>} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
