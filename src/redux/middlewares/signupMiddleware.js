import systemActions from '../system/systemActions';
import userActions from '../user/userActions';
import { setStateToStorage } from '../../utils/systemUtils';
import { signup } from '../../api/signup';

const signupMiddleware = (body) => {
  return (dispatch) => {
    dispatch(systemActions.setLoading(true));

    signup(body)
      .then(response => {
        setStateToStorage(body);
        dispatch(systemActions.setLoading(false));
        dispatch(userActions.setUser(body));
      })
      .catch(err => {
        dispatch(systemActions.setError(err.message));
      });
  };
};

export default signupMiddleware;