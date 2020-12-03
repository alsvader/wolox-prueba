const mapDataToSignup = ({
  inputName,
  inputLastname,
  countrySelected,
  provinceSelected,
  inputEmail,
  phoneNumber,
  password,
}) => ({
  name: inputName.value,
  last_name: inputLastname.value,
  country: countrySelected.value,
  province: provinceSelected.value,
  mail: inputEmail.value,
  phone: phoneNumber.value,
  password: password.value,
});

export default mapDataToSignup;
