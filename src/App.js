import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Dashboard from './screens/Dashboard/Dashboard';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <PrivateRoute isAuthenticated={false} component={Dashboard} path="/dashboard" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
