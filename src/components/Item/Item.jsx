import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faUserAlt,
  faBuilding,
  faCode,
  faLaptopCode,
  faHeart as HeartBold,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as HeartRegular } from '@fortawesome/free-regular-svg-icons';
import techType from '../../utils/typesModel';
import ListContext from '../../providers';

import styles from '../../screens/Technologies/styles.module.css';

const Item = ({ favorites, item }) => {
  const addFavorite = useContext(ListContext);
  const { tech, logo } = item;

  const isFavorite = favorites.find(x => x === tech.toLowerCase());

  return (
    <div className={styles.card}>
      <img src={logo} alt={tech} />
      <div className={styles.container}>
        <span
          className={[
            styles.badge,
            styles.badgePill,
            styles.badgePrimary,
          ].join(' ')}
        >
          <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />
          {item.year}
        </span>
        <span
          className={[
            styles.badge,
            styles.badgePill,
            styles.badgeSuccess,
          ].join(' ')}
        >
          <FontAwesomeIcon icon={faUserAlt} className={styles.icon} />
          {item.author}
        </span>
        <span
          className={[
            styles.badge,
            styles.badgePill,
            styles.badgeDanger,
          ].join(' ')}
        >
          <FontAwesomeIcon icon={faBuilding} className={styles.icon} />
          {item.license}
        </span>
        <span
          className={[
            styles.badge,
            styles.badgePill,
            styles.badgeWarning,
          ].join(' ')}
        >
          <FontAwesomeIcon icon={faCode} className={styles.icon} />
          {item.language}
        </span>
        <span
          className={[
            styles.badge,
            styles.badgePill,
            styles.badgeInfo,
          ].join(' ')}
        >
          <FontAwesomeIcon icon={faLaptopCode} className={styles.icon} />
          {item.type}
        </span>
      </div>
      <h1>{tech}</h1>
      <FontAwesomeIcon
        icon={isFavorite ? HeartBold : HeartRegular}
        color={isFavorite ? 'red' : 'inherit'}
        size="2x"
        className={styles.heartIcon}
        onClick={() => addFavorite(tech, isFavorite)}
      />
    </div>
  );
};

Item.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
  item: techType.isRequired,
};

const mapStateToProps = ({
  system: { favorites },
}) => ({
  favorites,
});

export default connect(mapStateToProps)(Item);
