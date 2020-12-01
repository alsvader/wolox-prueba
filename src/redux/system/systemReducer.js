import TYPES from './systemTypes';

const initialState = {
  isLoading: false,
  errorMessage: '',
  listTech: [],
  listTechFiltered: [],
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.SET_LOADING:
      return { ...state, isLoading: payload, errorMessage: '' };
    case TYPES.SET_ERROR:
      return { ...state, isLoading: false, errorMessage: payload };
    case TYPES.SET_LIST_TECH:
      return { ...state, listTech: payload, listTechFiltered: payload };
    default:
      return state;
  }
};

export default reducer;