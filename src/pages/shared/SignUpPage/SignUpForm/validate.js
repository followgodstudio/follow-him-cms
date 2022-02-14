import PropTypes from "prop-types";
import validator from "validator";

const validate = (values) => {
  const errors = {};

  // TODO: Rewrite validator using Regex
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 35) {
    errors.firstName = "Must be 35 characters or less";
  } else {
    // allow multiple words with space or dash in between
    const nameRegexp = /^[a-z]+([a-z -]+[a-z]+)*$/i;
    if (!nameRegexp.test(values.firstName)) {
      errors.firstName = "Please enter a valid value.";
    }
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 35) {
    errors.lastName = "Must be 35 characters or less";
  } else {
    // allow multiple words with space or dash in between
    const nameRegexp = /^[a-z]+([a-z -]+[a-z]+)*$/i;
    if (!nameRegexp.test(values.lastName)) {
      errors.lastName = "Please enter a valid value.";
    }
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!validator.isEmail(values.email)) {
    errors.email = "Please specify a valid email address.";
  }

  if (!values.password) {
    errors.password = "Required";
  } else {
    const lowerCaseLettersRegexp = /[a-z]/g;
    const upperCaseLettersRegexp = /[A-Z]/g;
    const numberRegexp = /[0-9]/g;
    if (
      values.password.length < 6 ||
      values.password.length > 14 ||
      !lowerCaseLettersRegexp.test(values.password) ||
      !upperCaseLettersRegexp.test(values.password) ||
      !numberRegexp.test(values.password)
    ) {
      errors.password =
        "6-14 characters with at least 1: uppercase letter, lowercase letter and number.";
    }
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Please confirm your password";
  }

  return errors;
};

validate.propTypes = {
  values: PropTypes.string.isRequired,
};
export default validate;
