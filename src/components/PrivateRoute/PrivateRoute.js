import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import PATHS from '../../config/paths';

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
          : <Redirect to={PATHS.SIGNUP} />
      }
    />
  );

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired,
  exact: PropTypes.bool.isRequired,
};

export default PrivateRoute;
