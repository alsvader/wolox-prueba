import { GLOBAL_STATE, FAVORITES_KEY } from '../config/constants';

const setStateToStorage = data => localStorage.setItem(GLOBAL_STATE, JSON.stringify(data));

const getInitialUserState = () => {
  const userState = localStorage.getItem(GLOBAL_STATE);
  const initialState = {
    user: null,
    isAuthenticated: false,
  };

  if (userState) {
    initialState.user = JSON.parse(userState);
    initialState.isAuthenticated = true;
  }

  return initialState;
};

const getInitialSystemState = () => {
  const favorites = localStorage.getItem(FAVORITES_KEY);

  const initialState = {
    isLoading: false,
    errorMessage: '',
    listTech: [],
    listTechFiltered: [],
    favorites: [],
  };

  if (favorites) {
    initialState.favorites = JSON.parse(favorites);
  }

  return initialState;
};

export { setStateToStorage, getInitialUserState, getInitialSystemState };
