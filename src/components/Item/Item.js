import { useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { techType } from '../../utils/typesModel';
import ListContext from '../../providers';

const Item = ({ favorites, item }) => {
  const addFavorite = useContext(ListContext);
  const { tech, logo } = item;

  const isFavorite = favorites.find(x => x === tech.toLowerCase());

  return (
    <div>
      <h1>{tech}</h1>
      <img src={logo} alt={tech} />
      <button onClick={() => addFavorite(tech, isFavorite)}>
        {isFavorite ? 'favorito' : 'agregar'}
      </button>
    </div>
  )
};

Item.propType = {
  favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
  item: techType.isRequired,
};

const mapStateToProps = ({
  system: { favorites }
}) => ({
  favorites,
});

export default connect(mapStateToProps)(Item);
