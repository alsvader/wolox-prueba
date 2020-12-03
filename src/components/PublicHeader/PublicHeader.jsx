import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PATHS from '../../config/paths';

const PublicHeader = () => {
  const { t } = useTranslation();

  return (
    <>
      <li>
        <Link to="/">{t('benefits')}</Link>
      </li>
      <li>
        <Link className="primaryButton" to={PATHS.SIGNUP}>{t('signup_btn')}</Link>
      </li>
    </>
  );
};

export default PublicHeader;
