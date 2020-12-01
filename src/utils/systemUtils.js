import { GLOBAL_STATE } from '../config/constants';

const setStateToStorage = data => localStorage.setItem(GLOBAL_STATE, JSON.stringify(data));

const getInitialUserState = () => {
  const userState = localStorage.getItem(GLOBAL_STATE);
  let initialState = {
    user: null,
    isAuthenticated: false,
  };

  if (userState) {
    initialState.user = JSON.parse(userState)
    initialState.isAuthenticated = true;
  }

  return initialState;
};

export { setStateToStorage, getInitialUserState }
