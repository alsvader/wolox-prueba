import {
  EMAIL_FORMAT,
  PHONE_FORMAT,
  PASSWORD_FORMAT,
} from '../config/constants';

function validateInput(name, value) {
  let errMessage = '';
  let isValid = true;

  switch (name) {
    case 'inputName':
    case 'inputLastname':
      if (!value || value.length > 30) {
        isValid = false;
      }
      break;
    case 'inputEmail':
      if (!EMAIL_FORMAT.test(value)) {
        isValid = false;
      }
      break;
    case 'phoneNumber':
      if (!PHONE_FORMAT.test(value)) {
        isValid = false;
      }
      break;
    case 'password':
      if (!PASSWORD_FORMAT.test(value)) {
        isValid = false;
      }
      break;
    default:
      break;
  }

  errMessage = isValid ? '' : `${name}Error`;
  return errMessage;
}

export { validateInput }