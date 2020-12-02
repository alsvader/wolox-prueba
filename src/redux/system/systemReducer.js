import TYPES from './systemTypes';
import filterSearch from '../../utils/sorting';

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
    case TYPES.INIT_FILTER: {

      const { listTech } = state;
      const finalList = filterSearch(listTech, payload);

      return { ...state, listTechFiltered: finalList };
    }
    default:
      return state;
  }
};

export default reducer;