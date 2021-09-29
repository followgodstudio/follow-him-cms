import { Switch as S } from "@chakra-ui/react";
import styled from "@emotion/styled/macro";
import theme from "components/CustomTheme";

const Switch = styled(S)`
  & .chakra-switch__track[data-focus] {
    outline: 0;
    box-shadow: none;
  }
  & .chakra-switch__track[data-disabled] {
    opacity: 0.33;
  }
  & .chakra-switch__track {
    background: ${(props) => props.UncheckedBGColor ?? theme.colors.gray[500]};
  }
  & .chakra-switch__track:hover {
    background: ${(props) =>
      props.UncheckedBGColorHover ?? theme.colors.gray[300]};
  }
  & .chakra-switch__track[data-checked] {
    background: ${(props) => props.CheckedBGColor ?? "#26C2A5"};
  }
  & .chakra-switch__track[data-checked]:hover {
    background: ${(props) =>
      props.CheckedBGColorHover ?? theme.colors.semantics.success};
  }
  & .chakra-switch__thumb::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    transition: all 120ms ease 0s;
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22${(
      props
    ) => {
      switch (props.size) {
        case "sm":
          return "6%206%2024%2024";
        case "md":
          return "6%206%2018%2018";
        case "lg":
          return "4%204%2016%2016";
        default:
          return "6%206%2018%2018";
      }
    }}%22%20stroke-width%3D%221.75%22%20stroke%3D%22${(props) =>
      props.UncheckedColor
        ? encodeURIComponent(props.UncheckedColor)
        : encodeURIComponent(
            theme.colors.gray[500]
          )}%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cline%20x1%3D%2214%22%20y1%3D%2210%22%20x2%3D%2210%22%20y2%3D%2214%22%2F%3E%3Cline%20x1%3D%2210%22%20y1%3D%2210%22%20x2%3D%2214%22%20y2%3D%2214%22%2F%3E%3C%2Fsvg%3E");
  }
  & .chakra-switch__thumb[data-checked]::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    transition: all 120ms ease 0s;
    background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22${(
      props
    ) => {
      switch (props.size) {
        case "sm":
          return "6%206%2024%2024";
        case "md":
          return "6%206%2018%2018";
        case "lg":
          return "3%203%2018%2018";
        default:
          return "6%206%2018%2018";
      }
    }}%22%20stroke-width%3D%222%22%20stroke%3D%22${(props) =>
      props.CheckedColor
        ? encodeURIComponent(props.CheckedColor)
        : encodeURIComponent(
            theme.colors.semantics.success
          )}%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M9%2012l2%202l4%20-4%22%2F%3E%3C%2Fsvg%3E");
  }
`;

export default Switch;
