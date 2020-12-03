import React from 'react';
import { useTranslation } from 'react-i18next';
import { AVAILABLE_LNG } from '../../config/constants';

const ChangeLng = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = e => i18n.changeLanguage(e.target.value);

  return (
    <div className="select">
      <select name="languages" onChange={changeLanguage}>
        {AVAILABLE_LNG.map(
          (lng, key) => <option key={key} value={lng.value}>{t(lng.value)}</option>,
        )}
      </select>
      <div className="select_arrow" />
    </div>
  );
};

export default ChangeLng;
