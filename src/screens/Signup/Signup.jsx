import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PATHS from '../../config/paths';
import { DEFAULT_SELECT } from '../../config/constants';
import { validateInput, isFormValid } from '../../utils/inputValidation';
import mapDataToSignup from '../../utils/mapDataToBody';
import countries from '../../api/__mock__/countries.json';

import signup from '../../redux/middlewares/signupMiddleware';
import FormSignup from './components/FormSignup/FormSignup';
import Loader from '../../components/Loader/Loader';

import styles from './styles.module.css';

const initialState = {
  value: '',
  errMessage: '',
  isValid: false,
};

function Signup({
  dispatch,
  isAuthenticated,
  isLoading,
  errorMessage,
}) {
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

  if (isAuthenticated) {
    return <Redirect to={PATHS.LIST_TECHNOLIGIES} />;
  }

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <Loader />
      </div>
    );
  }

  return (
    <FormSignup
      inputName={inputName}
      inputLastname={inputLastname}
      inputEmail={inputEmail}
      countrySelected={countrySelected}
      provinceSelected={provinceSelected}
      phoneNumber={phoneNumber}
      password={password}
      repeatedPassword={repeatedPassword}
      checkBoxTerms={checkBoxTerms}
      handleInputChange={handleInputChange}
      handleCountryChange={handleCountryChange}
      handleProvinceChange={handleProvinceChange}
      handleRepeatedPasswd={handleRepeatedPasswd}
      handleCheckboxChange={handleCheckboxChange}
      handleFormSubmit={handleFormSubmit}
      isBtnDisabled={isBtnDisabled}
      listProvinces={listProvinces}
      errorMessage={errorMessage}
    />
  );
}

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
