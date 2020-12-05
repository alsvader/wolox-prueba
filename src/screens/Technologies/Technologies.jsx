import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import techType from '../../utils/typesModel';
import getTech from '../../redux/middlewares/listTechMiddleware';
import systemActions from '../../redux/system/systemActions';
import FilterBar from '../../components/FilterBar/FilterBar';
import ListItems from '../../components/ListItems/ListItems';
import ListContext from '../../providers';

import styles from './styles.module.css';

const Technologies = ({
  dispatch,
  isLoading,
  errorMessage,
  listTechFiltered,
}) => {
  useEffect(() => {
    dispatch(getTech());
  }, [dispatch]);

  const setFavorite = (tech, isAdded) => {
    if (isAdded) {
      dispatch(systemActions.deleteFavorite(tech.toLowerCase()));
      return;
    }

    dispatch(systemActions.addFavorite(tech.toLowerCase()));
  };

  return (
    <div className={styles.listContainer}>
      <FilterBar />

      {isLoading && <p>loading...</p>}

      {errorMessage && <p>{errorMessage}</p>}

      <ListContext.Provider value={setFavorite}>
        <ListItems items={listTechFiltered} />
      </ListContext.Provider>

      <p>{listTechFiltered.length}</p>
    </div>
  );
};

Technologies.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  listTechFiltered: PropTypes.arrayOf(techType).isRequired,
};

const mapStateToProps = ({
  system: { isLoading, errorMessage, listTechFiltered },
}) => ({
  isLoading,
  errorMessage,
  listTechFiltered,
});

export default connect(mapStateToProps)(Technologies);
