import PropTypes from "prop-types";
import { ErrorMessage, Input, Label, Wrapper } from "./TextField.styles";
/**
 * Represents an input in forms.
 */
const TextField = ({
  label,
  id,
  type = "text",
  errorMessage = "",
  handleChange,
  handleBlur,
  value,
  width,
  marginRight,
  disableFields,
  ...rest
}) => {
  return (
    <Wrapper width={width} marginRight={marginRight}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        disabled={disableFields}
        {...rest}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Wrapper>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.string,
  marginRight: PropTypes.string,
  disableFields: PropTypes.bool,
};

export default TextField;
