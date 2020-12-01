import TYPES from './systemTypes';

const initialState = {
  isLoading: false,
  errorMessage: ''
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.SET_LOADING:
      return { ...state, isLoading: payload, errorMessage: '' };
    case TYPES.SET_ERROR:
      return { ...state, isLoading: false, errorMessage: payload };
    default:
      return state;
  }
};

export default reducer;