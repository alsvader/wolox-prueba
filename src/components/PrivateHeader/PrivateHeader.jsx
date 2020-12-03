import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChangeLng from '../ChangeLng/ChangeLng';

const PrivateHeader = ({ favorites }) => (
  <div>
    <ChangeLng />
    {favorites.length > 0 && <p>{favorites.length}</p>}
  </div>
);

PrivateHeader.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({
  system: { favorites },
}) => ({
  favorites,
});

export default connect(mapStateToProps)(PrivateHeader);
