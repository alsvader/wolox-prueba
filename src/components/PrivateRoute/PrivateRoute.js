import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  isAuthenticated,
  path,
  component: Component,
  exact,
}) => (
    <Route
      path={path}
      exact={exact}
      component={(props) =>
        isAuthenticated ? <Component {...props} />
          : <Redirect to="/login" />
      }
    />
  );

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  exact: PropTypes.bool.isRequired,
};

export default PrivateRoute;
