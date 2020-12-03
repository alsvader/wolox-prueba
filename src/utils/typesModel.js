import PropTypes from 'prop-types';

const { string, shape } = PropTypes;

const techType = shape({
  tech: string,
  year: string,
  author: string,
  license: string,
  language: string,
  type: string,
  logo: string,
});

export {
  techType
}