import PropTypes from "prop-types";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please specify a valid email address.";
  }
  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

validate.propTypes = {
  values: PropTypes.string.isRequired,
};
export default validate;
