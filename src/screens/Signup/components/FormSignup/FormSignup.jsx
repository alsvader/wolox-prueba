import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { inputModel } from '../../../../utils/typesModel';
import { DEFAULT_SELECT } from '../../../../config/constants';
import PATHS from '../../../../config/paths';
import countries from '../../../../api/__mock__/countries.json';
import styles from '../../styles.module.css';

function FormSignup({
  inputName,
  inputLastname,
  inputEmail,
  countrySelected,
  provinceSelected,
  phoneNumber,
  password,
  repeatedPassword,
  checkBoxTerms,
  handleInputChange,
  handleCountryChange,
  handleProvinceChange,
  handleRepeatedPasswd,
  handleCheckboxChange,
  handleFormSubmit,
  isBtnDisabled,
  listProvinces,
  errorMessage,
}) {
  const { t } = useTranslation();

  return (
    <div className={styles.formContainer}>
      <h1>{t('signupTitle')}</h1>
      {errorMessage && (
        <p className={styles.formError}>{errorMessage}</p>
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
            !isBtnDisabled ? styles.disabled : '',
          ].join(' ')}
          type="submit"
          disabled={!isBtnDisabled}
        >
          {t('submit')}
        </button>
      </form>
    </div>
  );
}

FormSignup.propTypes = {
  inputName: inputModel.isRequired,
  inputLastname: inputModel.isRequired,
  inputEmail: inputModel.isRequired,
  countrySelected: inputModel.isRequired,
  provinceSelected: inputModel.isRequired,
  phoneNumber: inputModel.isRequired,
  password: inputModel.isRequired,
  repeatedPassword: inputModel.isRequired,
  checkBoxTerms: inputModel.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleCountryChange: PropTypes.func.isRequired,
  handleProvinceChange: PropTypes.func.isRequired,
  handleRepeatedPasswd: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  isBtnDisabled: PropTypes.bool.isRequired,
  listProvinces: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default FormSignup;
