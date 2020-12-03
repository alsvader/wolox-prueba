import TYPES from './systemTypes';
import { FAVORITES_KEY } from '../../config/constants';
import filterSearch from '../../utils/sorting';
import { getInitialSystemState } from '../../utils/systemUtils';

const initialState = getInitialSystemState();

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
    case TYPES.ADD_FAVORITE: {

      const { favorites } = state;
      const favs = [...favorites];
      favs.push(payload);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));

      return { ...state, favorites: favs };
    }
    case TYPES.DELETE_FAVORITE: {

      const { favorites } = state;
      const favs = favorites.filter(x => x !== payload);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));

      return { ...state, favorites: favs };
    }
    default:
      return state;
  }
};

export default reducer;