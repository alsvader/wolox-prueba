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
  setTech: data => ({
    type: TYPES.SET_LIST_TECH,
    payload: data,
  }),
  initFilter: filters => ({
    type: TYPES.INIT_FILTER,
    payload: filters,
  }),
};

export default ACTIONS