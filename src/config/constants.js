const LANGUAGES_KEY = {
  ES: 'es',
  EN: 'en',
};

const AVAILABLE_LNG = [
  { label: 'spanish_lng', value: LANGUAGES_KEY.ES },
  { label: 'english_lng', value: LANGUAGES_KEY.EN },
]

const DEFAULT_SELECT = 'DEFAULT';

const EMAIL_FORMAT = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const PHONE_FORMAT = /^[0-9]{10}$/i;

const PASSWORD_FORMAT = /^[A-Z0-9]{6,}$/i;

const GLOBAL_STATE = 'GLOBAL_STATE';

const FAVORITES_KEY = 'FAVORITES';

const TYPES_SORT = {
  SORT_ASC: 'asc',
  SORT_DESC: 'desc',
};

export {
  AVAILABLE_LNG,
  LANGUAGES_KEY,
  DEFAULT_SELECT,
  EMAIL_FORMAT,
  PHONE_FORMAT,
  PASSWORD_FORMAT,
  GLOBAL_STATE,
  TYPES_SORT,
  FAVORITES_KEY,
};