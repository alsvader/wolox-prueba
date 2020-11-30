import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import routes from '../../config/routes';

const RouterApp = ({ isAuthenticated }) => {
  return (
    <Router>
      <Switch>
        {routes.map(route => {
          const { path, component, exact, isPrivate } = route;

          if (isPrivate) {
            return (
              <PrivateRoute
                isAuthenticated={isAuthenticated}
                path={path}
                component={component}
                exact={exact}
              />
            )
          }
          return <Route path={path} component={component} exact={exact} />
        })}
      </Switch>
    </Router>
  )
}

const mapStateToProps = ({
  user: { isAuthenticated },
}) => ({
  isAuthenticated,
});

RouterApp.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(RouterApp);
