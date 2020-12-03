import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import PATHS from '../../config/paths';
import userActions from '../../redux/user/userActions';

const PrivateHeader = ({ history, dispatch, favorites }) => {
  const { t } = useTranslation();

  const handleLogout = () => {
    dispatch(userActions.logout(), () => {
      history.push(PATHS.HOME);
    });
  };

  return (
    <>
      <li>
        <Link to={PATHS.LIST_TECHNOLIGIES}>{t('technologies')}</Link>
      </li>
      {favorites.length > 0 && (
        <li>
          <FontAwesomeIcon icon={faHeart} color="red" />
          <span className="totalFavs">{favorites.length}</span>
        </li>
      )}
      <li>
        <FontAwesomeIcon icon={faSignOutAlt} size="lg" onClick={handleLogout} />
      </li>
    </>
  );
};

PrivateHeader.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({
  system: { favorites },
}) => ({
  favorites,
});

export default withRouter(
  connect(mapStateToProps)(PrivateHeader),
);
