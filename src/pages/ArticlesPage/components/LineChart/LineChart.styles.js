import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled/macro";
import theme from "components/CustomTheme";
import { Chart } from "devextreme-react/chart";
import { Calendar } from "react-multi-date-picker";

export const StyledChart = styled(Chart)`
  width: 100%;
  height: 90%;
`;

export const Wrapper = styled(Flex)`
  padding: 12px 16px;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  flex-direction: column;
  border: 1px solid ${theme.colors.gray[200]};
  border-radius: 6px;
`;

export const StyledCalendar = styled(Calendar)`
  box-shadow: unset;
  margin: 12px auto;

  .rmdp-wrapper {
    box-shadow: unset;
  }

  .rmdp-calendar {
    width: 400px;
  }

  .rmdp-header-values {
    & > span {
      font-weight: 800;
    }
  }

  .rmdp-arrow {
    border: solid ${theme.colors.semantics.default};
    border-width: 0 2px 2px 0;
    width: 10px;
    height: 10px;
  }

  .rmdp-arrow-container:hover {
    background-color: ${theme.colors.gray[400]};
    box-shadow: 0 0 3px ${theme.colors.gray[50]};
  }

  .rmdp-day-picker {
    padding: unset;
    .rmdp-week {
      width: 400px;
    }
  }
  .rmdp-week-day {
    color: ${theme.colors.semantics.default};
    font-weight: 700;
  }

  .rmdp-day,
  .rmdp-week-day {
    width: 48px;
    height: 48px;
  }

  .rmdp-day.rmdp-selected span:not(.highlight) {
    background-color: ${theme.colors.secondary[4]};
    color: ${theme.colors.semantics.default};
    font-weight: 700;
  }

  .rmdp-today > span {
    text-decoration: underline;
    text-decoration-color: ${theme.colors.secondary[4]};
  }

  .rmdp-day:not(.rmdp-selected):not(.rmdp-day-hidden) span {
    background-color: unset;
    color: ${theme.colors.semantics.default};
    font-weight: 700;
  }
`;
