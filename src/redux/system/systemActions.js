import TYPES from './systemTypes';

const ACTIONS = {
  setLoading: isLoading => ({
    type: TYPES.SET_LOADING,
    payload: isLoading,
  }),
  setError: err => ({
    type: TYPES.SET_ERROR,
    payload: err,
  }),
};

export default ACTIONS