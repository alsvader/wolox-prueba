import React from 'react';
import PropTypes from 'prop-types';
import techType from '../../utils/typesModel';
import Item from '../Item/Item';

import styles from '../../screens/Technologies/styles.module.css';

const ListItems = ({ items }) => (
  <div className={styles.cardContainer}>
    {items.map((item, key) => <Item key={key} item={item} />)}
  </div>
);

ListItems.propTypes = {
  items: PropTypes.arrayOf(techType).isRequired,
};

export default ListItems;
