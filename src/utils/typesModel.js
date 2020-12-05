import PropTypes from 'prop-types';

const { string, shape, bool } = PropTypes;

const techType = shape({
  tech: string,
  year: string,
  author: string,
  license: string,
  language: string,
  type: string,
  logo: string,
});

export const inputModel = shape({
  value: string,
  errMessage: string,
  isValid: bool,
});

export default techType;
