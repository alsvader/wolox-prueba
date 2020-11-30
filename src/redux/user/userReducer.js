import TYPES from './userTypes';

const initialState = {
  isAuthenticated: false,
  user: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.SET_USER:
      return { ...payload };
    default:
      return state;
  }
};

export default reducer;
