import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import getTech from '../../redux/middlewares/listTechMiddleware';
import { DEFAULT_SELECT } from '../../config/constants';
import systemActions from '../../redux/system/systemActions';

const Technologies = ({
  dispatch,
  isLoading,
  errorMessage,
  listTechFiltered,
}) => {
  const [orderBy, setoOderBy] = useState(DEFAULT_SELECT);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getTech());
  }, [dispatch]);

  const handleOrderChange = e => {
    setoOderBy(e.target.value);
    dispatch(systemActions.sortByName(e.target.value));
  };

  const filterBynName = e => {
    dispatch(systemActions.filterByName(e.target.value));
  };

  return (
    <div>
      <label htmlFor="">{t('searchLabel')}</label>
      <input type="text" onChange={filterBynName} />

      <label htmlFor="orderedBy">{t('orderBy')}</label>
      <select
        name="orderedBy"
        value={orderBy}
        onChange={handleOrderChange}
      >
        <option value={DEFAULT_SELECT}>{t('select_option')}</option>
        <option value="asc">{t('nameAsc')}</option>
        <option value="desc">{t('nameDesc')}</option>
      </select>

      {listTechFiltered.map((item, key) => {
        return <div key={key}>
          <h1>{item.tech}</h1>
          <img src={item.logo} alt={item.tech} />
        </div>
      })}
    </div>
  )
}

const mapStateToProps = ({
  system: { isLoading, errorMessage, listTechFiltered }
}) => ({
  isLoading,
  errorMessage,
  listTechFiltered,
});

export default connect(mapStateToProps)(Technologies);
