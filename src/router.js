import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { FilmDetails, Home } from './containers';
import { Routes } from './routes/routes';
import { ErrorBoundary } from './components';

export class Router extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Switch>
          <Route path={Routes.home} component={Home} exact />
          <Route path={Routes.filmDetail} component={FilmDetails} exact />
        </Switch>
      </ErrorBoundary>
    );
  }
}
