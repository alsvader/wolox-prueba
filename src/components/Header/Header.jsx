import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PATHS from '../../config/paths';
import PublicHeader from '../PublicHeader/PublicHeader';
import PrivateHeader from '../PrivateHeader/PrivateHeader';
import ChangeLng from '../ChangeLng/ChangeLng';
import logo from '../../assets/images/logo_full_color.svg';

const Header = ({ isAuthenticated }) => {
  const { t } = useTranslation();
  return (
    <nav className="header">
      <img className="img" src={logo} alt="wolox logo" />
      <ul>
        <li>
          <Link to={PATHS.HOME}>{t('home')}</Link>
        </li>
        {isAuthenticated ? <PrivateHeader /> : <PublicHeader />}
        <li className="lngComponent">
          <ChangeLng />
        </li>
      </ul>
    </nav>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({
  user: { isAuthenticated },
}) => ({
  isAuthenticated,
});

export default connect(mapStateToProps)(Header);
