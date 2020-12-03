import { techType } from '../../utils/typesModel';

const Item = ({ item }) => {
  const { tech, logo } = item;

  return (
    <div>
      <h1>{tech}</h1>
      <img src={logo} alt={tech} />
    </div>
  )
};

Item.propType = {
  item: techType.isRequired,
};

export default Item
