import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PATHS from '../../config/paths';

const Signup = ({ isAuthenticated, history }) => {
  const { t } = useTranslation();

  if (isAuthenticated) {
    return <Redirect to={PATHS.LIST_TECHNOLIGIES} />
  }

  return (
    <div>
      <form>
        <label htmlFor="name">{t('name')}</label>
        <input name="name" type="text" maxLength="3" />
      </form>
    </div>
  );
};

const mapStateToProps = ({
  user: { isAuthenticated },
}) => ({
  isAuthenticated,
});

Signup.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Signup);

