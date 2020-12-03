import TYPES from './userTypes';
import { getInitialUserState } from '../../utils/systemUtils';
import { GLOBAL_STATE } from '../../config/constants';

const initialState = getInitialUserState();

const reducer = (state = initialState, { type, payload }) => { // NOSONAR
  switch (type) {
    case TYPES.SET_USER:
      return { user: payload, isAuthenticated: true };
    case TYPES.LOGOUT: {
      localStorage.removeItem(GLOBAL_STATE);
      return { user: null, isAuthenticated: false };
    }
    default:
      return state;
  }
};

export default reducer;
