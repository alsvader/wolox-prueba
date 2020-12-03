import systemActions from '../system/systemActions';
import userActions from '../user/userActions';
import { setStateToStorage } from '../../utils/systemUtils';
import signup from '../../api/signup';

const signupMiddleware = (body) => (dispatch) => {
  dispatch(systemActions.setLoading(true));

  signup(body)
    .then(() => {
      setStateToStorage(body);
      dispatch(systemActions.setLoading(false));
      dispatch(userActions.setUser(body));
    })
    .catch(err => {
      dispatch(systemActions.setError(err.message));
    });
};

export default signupMiddleware;
