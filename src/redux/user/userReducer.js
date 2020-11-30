import TYPES from './userTypes';

const initialState = {
  data: null,
  isAuthenticated: false,
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
