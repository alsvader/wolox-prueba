/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import PATHS from '../../config/paths';

function PrivateRoute({
  isAuthenticated,
  path,
  component: Component,
  exact,
}) {
  return (
    <Route
      path={path}
      exact={exact}
      component={() => (isAuthenticated ? <Component />
        : <Redirect to={PATHS.SIGNUP} />)}
    />
  );
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired,
  exact: PropTypes.bool.isRequired,
};

export default PrivateRoute;
