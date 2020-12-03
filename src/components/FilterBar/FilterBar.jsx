import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { DEFAULT_SELECT } from '../../config/constants';
import systemActions from '../../redux/system/systemActions';

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
    <div>
      <label htmlFor="term">{t('searchLabel')}</label>
      <input
        name="term"
        type="text"
        value={term}
        onChange={handleOnchange}
      />

      <input
        type="checkbox"
        name="backend"
        value={backend}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="backend">{t('backend')}</label>

      <input
        type="checkbox"
        name="frontend"
        value={frontend}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="frontend">{t('frontend')}</label>

      <input
        type="checkbox"
        name="mobile"
        value={mobile}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="mobile">{t('mobile')}</label>

      <label htmlFor="orderBy">{t('orderBy')}</label>
      <select
        name="orderBy"
        value={orderBy}
        onChange={handleOnchange}
      >
        <option value={DEFAULT_SELECT}>{t('select_option')}</option>
        <option value="asc">{t('nameAsc')}</option>
        <option value="desc">{t('nameDesc')}</option>
      </select>
    </div>
  );
};

FilterBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = ({ dispatch }) => ({ dispatch });

export default connect(null, mapDispatchToProps)(FilterBar);
