import { useEffect } from 'react';
import { connect } from 'react-redux';
import getTech from '../../redux/middlewares/listTechMiddleware';
import FilterBar from '../../components/FilterBar/FilterBar';

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
