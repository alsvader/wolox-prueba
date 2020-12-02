import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PATHS from '../../config/paths';
import { DEFAULT_SELECT } from '../../config/constants';
import { validateInput, isFormValid } from '../../utils/inputValidation';
import { mapDataToSignup } from '../../utils/mapDataToBody';
import countries from '../../api/__mock__/countries.json';

import signup from '../../redux/middlewares/signupMiddleware';

const initialState = {
  value: '',
  errMessage: '',
  isValid: false,
};

const Signup = ({ dispatch, isAuthenticated, isLoading, errorMessage }) => {
  const [state, setstate] = useState({
    inputName: { ...initialState },
    inputLastname: { ...initialState },
    inputEmail: { ...initialState },
    countrySelected: { ...initialState },
    provinceSelected: { ...initialState },
    phoneNumber: { ...initialState },
    password: { ...initialState },
    repeatedPassword: { ...initialState },
    checkBoxTerms: { ...initialState },
  });
  const [listProvinces, setListProvinces] = useState([]);
  const { t } = useTranslation();

  const handleInputChange = e => {
    const { name, value } = e.target;
    const errMessage = validateInput(name, value);

    setstate({ ...state, [name]: { value, errMessage, isValid: !errMessage } });
  };

  const handleCountryChange = e => {
    const { value } = e.target;

    if (value === DEFAULT_SELECT) {
      setstate({
        ...state,
        countrySelected: {
          value: null,
          errMessage: 'optionMustBeSelected',
          isValid: false,
        },
      });
      setListProvinces([]);
      return;
    }

    const { provinces } = countries.find(x => x.value === value)

    setstate({
      ...state,
      countrySelected: {
        value,
        errMessage: '',
        isValid: true,
      }
    });
    setListProvinces(provinces);
  };

  const handleProvinceChange = e => {
    const { value } = e.target;

    if (value === DEFAULT_SELECT) {
      setstate({
        ...state,
        provinceSelected: {
          value: null,
          errMessage: 'optionMustBeSelected',
          isValid: false,
        },
      });
      return;
    }

    setstate({
      ...state,
      provinceSelected: {
        value,
        errMessage: '',
        isValid: true,
      }
    });
  };

  const handleRepeatedPasswd = e => {
    const { name, value } = e.target;

    const isValid = value === state.password.value;
    const errMessage = !isValid ? 'repPasswordError' : '';

    setstate({
      ...state,
      [name]: {
        value,
        errMessage: isValid ? '' : errMessage,
        isValid,
      }
    });
  };

  const handleCheckboxChange = e => {
    const { name, checked } = e.target;
    setstate({
      ...state,
      [name]: {
        isValid: checked,
        errMessage: !checked ? 'termsError' : ''
      },
    })
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const body = mapDataToSignup(state);
    dispatch(signup(body));
  };

  if (isAuthenticated) {
    return <Redirect to={PATHS.LIST_TECHNOLIGIES} />
  }

  const {
    inputName,
    inputLastname,
    countrySelected,
    provinceSelected,
    inputEmail,
    phoneNumber,
    password,
    repeatedPassword,
    checkBoxTerms,
  } = state;

  const isBtnDisabled = isFormValid(state);

  return (
    <div>
      {errorMessage && (
        <span>{errorMessage}</span>
      )}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="inputName">{t('name')}</label>
        <input
          name="inputName"
          type="text"
          maxLength="30"
          value={inputName.value}
          onChange={handleInputChange}
          required
        />
        {inputName.errMessage && <span>{t(inputName.errMessage)}</span>}

        <label htmlFor="inputLastname">{t('lastname')}</label>
        <input
          name="inputLastname"
          type="text"
          maxLength="30"
          value={inputLastname.value}
          onChange={handleInputChange}
          required
        />
        {inputLastname.errMessage && <span>{t(inputLastname.errMessage)}</span>}

        <label htmlFor="country">{t('country')}</label>
        <select
          name="country"
          defaultValue={DEFAULT_SELECT}
          onChange={handleCountryChange}
          required
        >
          <option value={DEFAULT_SELECT}>{t('select_option')}</option>
          {countries.map((item, key) => <option key={key} value={item.value}>{item.label}</option>)}
        </select>
        {countrySelected.errMessage && <span>{t(countrySelected.errMessage)}</span>}

        <label htmlFor="province">{t('province')}</label>
        <select
          name="province"
          defaultValue={DEFAULT_SELECT}
          onChange={handleProvinceChange}
          required
        >
          <option value={DEFAULT_SELECT}>{t('select_option')}</option>
          {listProvinces.map((item, key) => <option key={key} value={item.value}>{item.label}</option>)}
        </select>
        {provinceSelected.errMessage && <span>{t(provinceSelected.errMessage)}</span>}

        <label htmlFor="inputEmail">{t('email')}</label>
        <input
          name="inputEmail"
          type="email"
          onChange={handleInputChange}
          required
        />
        {inputEmail.errMessage && <span>{t(inputEmail.errMessage)}</span>}

        <label htmlFor="phoneNumber">{t('phoneNumber')}</label>
        <input
          name="phoneNumber"
          type="tel"
          onChange={handleInputChange}
          required
        />
        {phoneNumber.errMessage && <span>{t(phoneNumber.errMessage)}</span>}

        <label htmlFor="password">{t('password')}</label>
        <input
          name="password"
          type="password"
          onChange={handleInputChange}
          required
        />
        {password.errMessage && <span>{t(password.errMessage)}</span>}

        <label htmlFor="repeatedPassword">{t('repeatPassword')}</label>
        <input
          name="repeatedPassword"
          type="password"
          onChange={handleRepeatedPasswd}
          required
        />
        {repeatedPassword.errMessage && <span>{t(repeatedPassword.errMessage)}</span>}

        <input
          type="checkbox"
          name="checkBoxTerms"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="checkBoxTerms">
          <Link to={PATHS.TERMS_CONDITIONS} target="_blank">{t('checkboxTerms')}</Link>
        </label>

        {checkBoxTerms.errMessage && <span>{t(checkBoxTerms.errMessage)}</span>}

        <button type="submit" disabled={!isBtnDisabled}>{t('submit')}</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({
  user: { isAuthenticated },
  system: { isLoading, errorMessage }
}) => ({
  isAuthenticated,
  isLoading,
  errorMessage
});

Signup.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Signup);

