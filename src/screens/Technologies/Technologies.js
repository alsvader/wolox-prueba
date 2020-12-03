import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { techType } from '../../utils/typesModel';
import getTech from '../../redux/middlewares/listTechMiddleware';
import FilterBar from '../../components/FilterBar/FilterBar';
import ListItems from '../../components/ListItems/ListItems';

const Technologies = ({
  dispatch,
  isLoading,
  errorMessage,
  listTechFiltered,
}) => {
  useEffect(() => {
    dispatch(getTech());
  }, [dispatch]);

  return (
    <div>
      <FilterBar />

      <ListItems items={listTechFiltered} />

      <p>{listTechFiltered.length}</p>
    </div>
  )
}

Technologies.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  listTechFiltered: PropTypes.arrayOf(techType).isRequired,
};

const mapStateToProps = ({
  system: { isLoading, errorMessage, listTechFiltered }
}) => ({
  isLoading,
  errorMessage,
  listTechFiltered,
});

export default connect(mapStateToProps)(Technologies);
