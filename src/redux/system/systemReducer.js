import TYPES from './systemTypes';
import { getSortFunc, filterByName } from '../../utils/sorting';

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
    case TYPES.SORT_BY_NAME: {

      const sortFunc = getSortFunc(payload);
      const { listTechFiltered } = state;
      const result = listTechFiltered.sort(sortFunc);
      console.log(result);

      return { ...state, listTechFiltered };
    }
    case TYPES.FILTER_BY_NAME: {
      const { listTech } = state;
      const filtered = filterByName(listTech, payload);
      return { ...state, listTechFiltered: filtered };
    }
    default:
      return state;
  }
};

export default reducer;