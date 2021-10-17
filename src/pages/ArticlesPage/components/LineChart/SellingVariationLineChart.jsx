import { Flex } from "@chakra-ui/react";
import theme from "components/CustomTheme";
import DateRangePicker from "components/DateRangePicker/DateRangePicker";
import TextField from "components/TextField/TextField";
import {
  ArgumentAxis,
  CommonSeriesSettings,
  Crosshair,
  Format,
  Grid,
  HorizontalLine,
  Label,
  Legend,
  Point,
  Series,
  Tooltip,
} from "devextreme-react/chart";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { info, types } from "./data";
import { StyledChart } from "./LineChart.styles";

const SellingVariationLineChart = ({ fullSize = false }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const customizeTooltip = (pointInfo) => {
    const items = pointInfo.valueText.split("\n");

    items.forEach((item, index) => {
      if (item.indexOf(pointInfo.seriesName) === 0) {
        const element = document.createElement("span");
        element.textContent = item;
        element.style.color = "black";
        element.className = "active";
        items[index] = element.outerHTML;
      }
    });

    return { text: items.join("\n") };
  };

  const getSeriesColor = (item) => {
    switch (item.value) {
      case "MIK":
        return theme.colors.platform.mik;
      case "Marketplace":
        return theme.colors.platform.marketplace;
      case "B2B":
        return theme.colors.platform.b2b;
      default:
        return theme.colors.platform.mik;
    }
  };

  const CustomRangeInput = ({ openCalendar, stringDates }) => {
    setStartDate(stringDates[0] || "");
    setEndDate(stringDates[stringDates.length - 1] || "");
    return (
      <Flex>
        <TextField
          label="Start Date"
          id="startDate"
          type="text"
          value={startDate}
          onFocus={openCalendar}
          placeholder="MM-DD-YY"
          handleChange={() => {}}
          width="40%"
          autoComplete="off"
          marginRight="20px"
        />
        <TextField
          label="End Date"
          id="endDate"
          type="text"
          onFocus={openCalendar}
          value={endDate}
          placeholder="MM-DD-YY"
          handleChange={() => {}}
          autoComplete="off"
          width="40%"
        />
      </Flex>
    );
  };

  CustomRangeInput.propTypes = {
    openCalendar: PropTypes.func,
    stringDates: PropTypes.arrayOf(PropTypes.any),
  };

  return (
    <>
      {fullSize && (
        <Flex flexDir="row">
          <DateRangePicker
            minDate={new Date()}
            customInput={<CustomRangeInput />}
          />
        </Flex>
      )}
      <StyledChart dataSource={info}>
        <CommonSeriesSettings
          argumentField="date"
          type="line"
          MarkerVisibility
        />
        {types.map((item) => {
          return (
            <Series
              key={item.value}
              valueField={item.value}
              name={item.name}
              color={getSeriesColor(item)}
            >
              <Point visible={false} />
            </Series>
          );
        })}
        <ArgumentAxis valueMarginsEnabled={false}>
          <Grid />
        </ArgumentAxis>
        <Crosshair enabled>
          <HorizontalLine visible={false} />
          <Label visible />
        </Crosshair>
        <Legend
          markerSize="10"
          paddingTopBottom="0"
          verticalAlignment="top"
          horizontalAlignment="center"
          itemTextPosition="bottom"
        />
        <Tooltip enabled shared customizeTooltip={customizeTooltip}>
          <Format type="largeNumber" precision={1} />
        </Tooltip>
      </StyledChart>
    </>
  );
};

SellingVariationLineChart.propTypes = {
  fullSize: PropTypes.bool,
};

export default SellingVariationLineChart;
