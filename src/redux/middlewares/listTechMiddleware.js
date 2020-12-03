import systemActions from '../system/systemActions';
import getListTech from '../../api/listTech';

const listTechMiddleware = () => (dispatch) => {
  dispatch(systemActions.setLoading(true));

  getListTech()
    .then(response => {
      dispatch(systemActions.setLoading(false));
      dispatch(systemActions.setTech(response));
    })
    .catch(err => {
      dispatch(systemActions.setError(err.message));
    });
};

export default listTechMiddleware;
