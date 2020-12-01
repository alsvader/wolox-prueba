import TYPES from './systemTypes';
import { getSortFunc } from '../../utils/sorting';

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
      listTechFiltered.sort(sortFunc);

      return { ...state };
    }
    default:
      return state;
  }
};

export default reducer;