import { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { DEFAULT_SELECT } from '../../config/constants';
import systemActions from '../../redux/system/systemActions';

const FilterBar = ({ dispatch, listTechFiltered }) => {
  const [orderBy, setoOderBy] = useState(DEFAULT_SELECT);
  const { t } = useTranslation();

  const handleOrderChange = e => {
    const { value } = e.target;
    setoOderBy(value);
    dispatch(systemActions.sortByName(value));
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
    </div>
  )
}

const mapStateToProps = ({
  system: { listTechFiltered }
}) => ({
  listTechFiltered,
});

export default connect(mapStateToProps)(FilterBar);
