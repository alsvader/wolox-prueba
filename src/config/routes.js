import { lazy } from 'react';
import PATHS from './paths';

const Home = lazy(() => import('../screens/Home/Home'));
const Signup = lazy(() => import('../screens/Signup/Signup'));
const Terms = lazy(() => import('../screens/Terms/Terms'));
const Technologies = lazy(() => import('../screens/Technologies/Technologies'));

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
