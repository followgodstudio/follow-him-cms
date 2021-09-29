import { theme } from "@chakra-ui/react";
import breakpoints from "./breakpoints";
import colors from "./colors";
import styles from "./styles";
import typography from "./typography";

const customTheme = {
  ...theme,
  styles,
  colors,
  breakpoints,
  ...typography,
};

export default customTheme;
