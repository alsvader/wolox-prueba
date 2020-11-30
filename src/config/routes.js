import PATHS from './paths';
import Home from '../screens/Dashboard/Dashboard';
import Signup from '../screens/Signup/Signup';
import Terms from '../screens/Terms/Terms';
import Technologies from '../screens/Technologies/Technologies';

const ROUTES = [
  // PUBLIC ROUTES
  {
    path: PATHS.HOME,
    component: Home,
    exact: true,
    isPrivate: false,
  },
  {
    path: PATHS.SIGNUP,
    component: Signup,
    exact: true,
    isPrivate: false,
  },
  {
    path: PATHS.TERMS_CONDITIONS,
    component: Terms,
    exact: true,
    isPrivate: false,
  },
  // PRIVATE ROUTES
  {
    path: PATHS.LIST_TECHNOLIGIES,
    component: Technologies,
    exact: true,
    isPrivate: true,
  },
];

export default ROUTES;
