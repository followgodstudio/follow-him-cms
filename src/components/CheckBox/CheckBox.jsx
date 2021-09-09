import PropTypes from "prop-types";
import {
  CheckBoxText,
  CheckBoxContainer,
  CheckBoxButton,
} from "./CheckBox.styles";

function CheckBox({ text }) {
  return (
    <CheckBoxContainer>
      <CheckBoxButton type="checkbox" />
      <CheckBoxText size="small">{text}</CheckBoxText>
    </CheckBoxContainer>
  );
}
CheckBox.propTypes = {
  text: PropTypes.string.isRequired,
};
export default CheckBox;
