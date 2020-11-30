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

    </Provider>
  );
}

export default App;
