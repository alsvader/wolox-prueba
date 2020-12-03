import React from 'react';
import PropTypes from 'prop-types';
import techType from '../../utils/typesModel';
import Item from '../Item/Item';

const ListItems = ({ items }) => (
  <div>
    {items.map((item, key) => <Item key={key} item={item} />)}
  </div>
);

ListItems.propTypes = {
  items: PropTypes.arrayOf(techType).isRequired,
};

export default ListItems;
