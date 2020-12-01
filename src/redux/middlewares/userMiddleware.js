import { GLOBAL_STATE } from '../../config/constants';

const getUser = () => {
  return (dispatch) => {
    const userState = localStorage.getItem(GLOBAL_STATE);
    let initialState = {
      user: null,
      isAuthenticated: false,
    };

    if (userState) {
      initialState.user = JSON.parse(userState)
      initialState.isAuthenticated = true;
    }

    return initialState;
  }
}

export default getUser;