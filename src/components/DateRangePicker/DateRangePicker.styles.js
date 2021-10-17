import styled from "@emotion/styled";
import theme from "components/CustomTheme";
import DatePicker from "react-multi-date-picker";

export const StyledDatePicker = styled(DatePicker)`
  .rmdp-wrapper {
    border-radius: 8px;
    box-shadow: 0px 4px 15px -4px blue !important;
  }

  .rmdp-calendar {
    padding: 24px 24px 0px 20px;
  }

  .rmdp-header {
    margin-top: 0px;
    height: 24px;
    margin-bottom: 20px;
  }
  .rmdp-header-values {
    & > span {
      font-weight: 700;
      font-size: 16px;
    }
  }

  .rmdp-arrow {
    border: solid ${theme.colors.semantics.default};
    border-width: 0 2px 2px 0;
    width: 10px;
    height: 10px;
  }

  .rmdp-arrow-container {
    &.disabled {
      cursor: not-allowed;
    }
    :hover:not(.disabled) {
      background-color: ${theme.colors.gray[400]};
      box-shadow: 0 0 3px ${theme.colors.gray[50]};
    }
  }

  .rmdp-day-picker {
    padding: unset;
  }

  .rmdp-week-day {
    color: ${theme.colors.semantics.default};
    font-weight: 700;
    font-size: 16px;
  }

  .rmdp-week:not(:last-child) {
    margin-bottom: 12px;
  }

  .rmdp-day,
  .rmdp-week-day {
    width: 40px;
    height: 40px;
  }

  .rmdp-today {
    position: relative;
    > span {
      background-color: unset;
    }
  }
  .rmdp-today > span {
    ::after {
      content: "";
      position: absolute;
      border: 1px solid ${theme.colors.platform.b2b};
      bottom: 8px;
      left: 12px;
      right: 12px;
    }
  }
  .rmdp-today.end,
  .rmdp-today.start > span {
    ::after {
      content: "";
      position: absolute;
      border: 1px solid white;
      bottom: 8px;
      left: 12px;
      right: 12px;
    }
  }

  .rmdp-day {
    font-size: 14px;
    > span {
      font-weight: 700;
      top: 0px;
      bottom: 0px;
      left: 0px;
      right: 0px;
    }
    :hover:not(.rmdp-disabled) {
      > span {
        :hover {
          background-color: ${theme.colors.platform.b2b};
        }
      }
    }
  }
  .rmdp-disabled {
    cursor: not-allowed;
  }

  .rmdp-range {
    box-shadow: unset;
    background-color: ${theme.colors.tertiary[4]};
    :first-child {
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
    }
    :last-child {
      border-top-right-radius: 50%;
      border-bottom-right-radius: 50%;
    }
  }

  .start,
  .end {
    span {
      background-color: ${theme.colors.platform.b2b};
      color: white;
    }
  }

  .rmdp-day:not(.rmdp-day-hidden):not(.rmdp-deactive):not(.rmdp-disabled):not(.start, .end):not(:hover)
    span {
    color: ${theme.colors.semantics.default};
  }
  .rmdp-day.rmdp-deactive > span {
    color: ${theme.colors.semantics.disabled};
  }
`;
