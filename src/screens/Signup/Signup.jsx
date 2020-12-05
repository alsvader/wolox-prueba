import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import PATHS from '../../config/paths';
import { DEFAULT_SELECT } from '../../config/constants';
import { validateInput, isFormValid } from '../../utils/inputValidation';
import mapDataToSignup from '../../utils/mapDataToBody';
import countries from '../../api/__mock__/countries.json';

import signup from '../../redux/middlewares/signupMiddleware';

import styles from './styles.module.css';

const initialState = {
  value: '',
  errMessage: '',
  isValid: false,
};

const Signup = ({
  dispatch,
  isAuthenticated,
  isLoading,
  errorMessage,
}) => {
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
          errMessage: 'select_country',
          isValid: false,
        },
      });
      setListProvinces([]);
      return;
    }

    const { provinces } = countries.find(x => x.value === value);

    setstate({
      ...state,
      countrySelected: {
        value,
        errMessage: '',
        isValid: true,
      },
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
          errMessage: 'select_province',
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
      },
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
      },
    });
  };

  const handleCheckboxChange = e => {
    const { name, checked } = e.target;
    setstate({
      ...state,
      [name]: {
        isValid: checked,
        errMessage: !checked ? 'termsError' : '',
      },
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const body = mapDataToSignup(state);
    dispatch(signup(body));
  };

  if (isAuthenticated) {
    return <Redirect to={PATHS.LIST_TECHNOLIGIES} />;
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
    <>
      <div className={styles.formContainer}>
        <h1>{t('signupTitle')}</h1>
        {errorMessage && (
          <span>{errorMessage}</span>
        )}
        <form onSubmit={handleFormSubmit}>

          <div className={styles.halfInput}>
            {inputName.errMessage
              && (
                <span className={styles.error}>
                  <FontAwesomeIcon icon={faExclamationTriangle} color="red" />
                  {t(inputName.errMessage)}
                </span>
              )}
            <input
              className={styles.input}
              name="inputName"
              type="text"
              maxLength="30"
              placeholder={t('name')}
              value={inputName.value}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.halfInput}>
            {inputLastname.errMessage
              && (
                <span className={styles.error}>
                  <FontAwesomeIcon icon={faExclamationTriangle} color="red" />
                  {t(inputLastname.errMessage)}
                </span>
              )}
            <input
              className={styles.input}
              name="inputLastname"
              type="text"
              maxLength="30"
              placeholder={t('lastname')}
              value={inputLastname.value}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.select}>
            {countrySelected.errMessage
              && (
                <span className={styles.error}>
                  <FontAwesomeIcon icon={faExclamationTriangle} color="red" />
                  {t(countrySelected.errMessage)}
                </span>
              )}

            <select
              name="country"
              defaultValue={DEFAULT_SELECT}
              onChange={handleCountryChange}
              required
            >
              <option value={DEFAULT_SELECT}>{t('select_country')}</option>
              {countries.map(
                (item, key) => <option key={key} value={item.value}>{item.label}</option>,
              )}
            </select>
          </div>

          <div className={styles.select}>
            {provinceSelected.errMessage
              && (
                <span className={styles.error}>
                  <FontAwesomeIcon icon={faExclamationTriangle} color="red" />
                  {t(provinceSelected.errMessage)}
                </span>
              )}
            <select
              name="province"
              defaultValue={DEFAULT_SELECT}
              onChange={handleProvinceChange}
              required
            >
              <option value={DEFAULT_SELECT}>{t('select_province')}</option>
              {listProvinces.map(
                (item, key) => <option key={key} value={item.value}>{item.label}</option>,
              )}
            </select>
          </div>

          <div className={styles.halfInput}>
            {inputEmail.errMessage
              && (
                <span className={styles.error}>
                  <FontAwesomeIcon icon={faExclamationTriangle} color="red" />
                  {t(inputEmail.errMessage)}
                </span>
              )}
            <input
              className={styles.input}
              name="inputEmail"
              type="email"
              placeholder={t('email')}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.halfInput}>
            {phoneNumber.errMessage
              && (
                <span className={styles.error}>
                  <FontAwesomeIcon icon={faExclamationTriangle} color="red" />
                  {t(phoneNumber.errMessage)}
                </span>
              )}
            <input
              className={styles.input}
              name="phoneNumber"
              type="tel"
              placeholder={t('phoneNumber')}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.fullInput}>
            {password.errMessage
              && (
                <span className={styles.error}>
                  <FontAwesomeIcon icon={faExclamationTriangle} color="red" />
                  {t(password.errMessage)}
                </span>
              )}
            <input
              className={styles.input}
              name="password"
              type="password"
              placeholder={t('password')}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.fullInput}>
            {repeatedPassword.errMessage
              && (
                <span className={styles.error}>
                  <FontAwesomeIcon icon={faExclamationTriangle} color="red" />
                  {t(repeatedPassword.errMessage)}
                </span>
              )}
            <input
              className={styles.input}
              name="repeatedPassword"
              type="password"
              placeholder={t('repeatPassword')}
              onChange={handleRepeatedPasswd}
              required
            />
          </div>

          <label className={styles.labelCheckbox} htmlFor="checkBoxTerms">
            <input
              className={styles.checkbox}
              type="checkbox"
              name="checkBoxTerms"
              onChange={handleCheckboxChange}
            />
            <Link to={PATHS.TERMS_CONDITIONS} target="_blank">{t('checkboxTerms')}</Link>
            {checkBoxTerms.errMessage
              && (
                <span className={styles.error}>
                  <FontAwesomeIcon icon={faExclamationTriangle} color="red" />
                  {t(checkBoxTerms.errMessage)}
                </span>
              )}
          </label>

          <button
            className={[
              styles.btn,
              styles.info,
              styles.btnSignup,
            ].join(' ')}
            type="submit"
            disabled={!isBtnDisabled}
          >
            {t('submit')}
          </button>
        </form>
      </div>
      { isLoading && <p>loading...</p>}
    </>
  );
};

const mapStateToProps = ({
  user: { isAuthenticated },
  system: { isLoading, errorMessage },
}) => ({
  isAuthenticated,
  isLoading,
  errorMessage,
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
