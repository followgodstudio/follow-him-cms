import { Flex } from "@chakra-ui/react";
import Button from "components/Button/Button";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { StyledDatePicker } from "./DateRangePicker.styles";

const DateRangePicker = ({
  value,
  onChange,
  minDate,
  maxDate,
  modal,
  customInput,
  update = false,
}) => {
  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const datePickerRef = useRef();

  const handleOutsideClick = (event) => {
    if (!datePickerRef.current?.contains(event.target)) {
      datePickerRef.current?.closeCalendar();
    }
  };

  useEffect(() => {
    modal?.addEventListener("click", handleOutsideClick);

    return () => {
      modal?.removeEventListener("click", handleOutsideClick);
    };
  });

  return (
    <StyledDatePicker
      ref={datePickerRef}
      value={value}
      onChange={onChange}
      format="YYYY-MM-DD"
      weekDays={weekDays}
      weekStartDayIndex={1}
      range
      eachDaysInRange
      showOtherDays
      arrow={false}
      minDate={minDate}
      maxDate={maxDate}
      render={customInput}
    >
      <Flex w="100%" justifyContent="flex-end" p="0px 24px 8px 24px">
        <Button
          variant="primary-2"
          size="medium"
          my="18px"
          onClick={() => datePickerRef.current?.closeCalendar()}
        >
          {update ? "Update" : "Done"}
        </Button>
      </Flex>
    </StyledDatePicker>
  );
};

DateRangePicker.propTypes = {
  value: PropTypes.arrayOf(PropTypes.any),
  onChange: PropTypes.func,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  customInput: PropTypes.node.isRequired,
  modal: PropTypes.node,
  update: PropTypes.bool,
};

export default DateRangePicker;
