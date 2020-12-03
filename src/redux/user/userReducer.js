import TYPES from './userTypes';
import { getInitialUserState } from '../../utils/systemUtils';

const initialState = getInitialUserState();

const reducer = (state = initialState, { type, payload }) => { // NOSONAR
  switch (type) {
    case TYPES.SET_USER:
      return { user: payload, isAuthenticated: true };
    default:
      return state;
  }
};

export default reducer;
