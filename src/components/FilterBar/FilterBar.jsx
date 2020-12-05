import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { DEFAULT_SELECT } from '../../config/constants';
import systemActions from '../../redux/system/systemActions';

import styles from '../../screens/Signup/styles.module.css';
import filterStyles from './styles.module.css';

const FilterBar = ({ dispatch }) => {
  const [filters, setFilters] = useState({
    term: '',
    backend: false,
    frontend: false,
    mobile: false,
    orderBy: DEFAULT_SELECT,
  });

  const { t } = useTranslation();

  const initSearch = (state) => {
    const data = {
      types: [
        { type: 'back-end', value: state.backend },
        { type: 'front-end', value: state.frontend },
        { type: 'mobile', value: state.mobile },
      ],
      term: state.term,
      orderBy: state.orderBy,
    };
    dispatch(systemActions.initFilter(data));
  };

  const handleOnchange = e => {
    const { name, value } = e.target;

    const stateUpdated = { ...filters };
    stateUpdated[name] = value;
    initSearch(stateUpdated);

    setFilters({ ...filters, [name]: value });
  };

  const handleCheckboxChange = e => {
    const { name, checked } = e.target;

    const stateUpdated = { ...filters };
    stateUpdated[name] = checked;
    initSearch(stateUpdated);

    setFilters({ ...filters, [name]: checked });
  };

  const {
    backend,
    frontend,
    mobile,
    term,
    orderBy,
  } = filters;

  return (
    <div className={filterStyles.filterContainer}>
      <input
        name="term"
        type="text"
        value={term}
        onChange={handleOnchange}
        placeholder={t('searchLabel')}
        className={styles.input}
      />

      <div className={filterStyles.checkContainer}>
        <input
          className={styles.checkbox}
          type="checkbox"
          name="backend"
          value={backend}
          onChange={handleCheckboxChange}
        />
        <label className={filterStyles.label} htmlFor="backend">{t('backend')}</label>
      </div>

      <div className={filterStyles.checkContainer}>
        <input
          className={styles.checkbox}
          type="checkbox"
          name="frontend"
          value={frontend}
          onChange={handleCheckboxChange}
        />
        <label className={filterStyles.label} htmlFor="frontend">{t('frontend')}</label>
      </div>

      <div className={filterStyles.checkContainer}>
        <input
          className={styles.checkbox}
          type="checkbox"
          name="mobile"
          value={mobile}
          onChange={handleCheckboxChange}
        />
        <label className={filterStyles.label} htmlFor="mobile">{t('mobile')}</label>
      </div>

      <div className={[styles.select, filterStyles.order].join(' ')}>
        <select
          name="orderBy"
          value={orderBy}
          onChange={handleOnchange}
        >
          <option value={DEFAULT_SELECT}>{t('orderBy')}</option>
          <option value="asc">{t('nameAsc')}</option>
          <option value="desc">{t('nameDesc')}</option>
        </select>
      </div>
    </div>
  );
};

FilterBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(FilterBar);
