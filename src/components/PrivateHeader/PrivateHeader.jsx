import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import PATHS from '../../config/paths';

const PrivateHeader = ({ favorites }) => {
  const { t } = useTranslation();
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
    </>
  );
};

PrivateHeader.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({
  system: { favorites },
}) => ({
  favorites,
});

export default connect(mapStateToProps)(PrivateHeader);
