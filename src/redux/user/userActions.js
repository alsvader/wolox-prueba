import TYPES from './userTypes';

const ACTIONS = {
  setUser: user => ({
    type: TYPES.SET_USER,
    payload: user,
  })
};

export default ACTIONS;
