import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from '../../screens/NotFound/NotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicHeader from '../PublicHeader/PublicHeader';
import PrivateHeader from '../PrivateHeader/PrivateHeader';
import routes from '../../config/routes';

const RouterApp = ({ isAuthenticated }) => {
  return (
    <>
      {isAuthenticated ? <PrivateHeader /> : <PublicHeader />}
      <Router>
        <Switch>
          {routes.map((route, key) => {
            const { path, component, exact, isPrivate } = route;

            if (isPrivate) {
              return (
                <PrivateRoute
                  key={key}
                  isAuthenticated={isAuthenticated}
                  path={path}
                  component={component}
                  exact={exact}
                />
              )
            }
            return <Route key={key} path={path} component={component} exact={exact} />
          })}
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
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
