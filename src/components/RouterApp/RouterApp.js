import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const RouterApp = ({ isAuthenticated }) => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <PrivateRoute isAuthenticated={isAuthenticated} component={Dashboard} path="/dashboard" />
      </Switch>
    </Router>
  )
}

const mapStateToProps = ({ }) => ({});

RouterApp.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(RouterApp);
