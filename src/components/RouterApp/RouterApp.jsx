import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from '../../screens/NotFound/NotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Header from '../Header/Header';
import routes from '../../config/routes';

const RouterApp = ({ isAuthenticated }) => (
  <main className="container">
    <Router>
      <Header />
      <Switch>
        {routes.map((route, key) => {
          const {
            path,
            component,
            exact,
            isPrivate,
          } = route;

          if (isPrivate) {
            return (
              <PrivateRoute
                key={key}
                isAuthenticated={isAuthenticated}
                path={path}
                component={component}
                exact={exact}
              />
            );
          }
          return <Route key={key} path={path} component={component} exact={exact} />;
        })}
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </main>
);

const mapStateToProps = ({
  user: { isAuthenticated },
}) => ({
  isAuthenticated,
});

RouterApp.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(RouterApp);
