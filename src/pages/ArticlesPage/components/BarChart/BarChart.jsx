import theme from "components/CustomTheme";
import {
  CommonSeriesSettings,
  Format,
  Label,
  Legend,
  Series,
  Tooltip,
} from "devextreme-react/chart";
import React from "react";
import { StyledChart } from "./BarChart.styles";
import { grossProductData } from "./BarChartData";

const DetailBarChart = () => {
  const onLegendClick = (e) => {
    return e.target.isVisible() ? e.target.hide() : e.target.show();
  };

  const getText = (item, text) => {
    return `${item.valueText} - ${text}`;
  };

  const customizeTooltip = (arg) => {
    return {
      text: getText(arg, arg.valueText),
    };
  };

  const onPointClick = (e) => {
    e.target.select();
  };

  return (
    <StyledChart
      id="chart"
      dataSource={grossProductData}
      onPointClick={onPointClick}
      onLegendClick={onLegendClick}
    >
      <Tooltip enabled customizeTooltip={customizeTooltip} cornerRadius={8} />
      <CommonSeriesSettings
        argumentField="state"
        type="bar"
        hoverMode="allArgumentPoints"
        selectionMode="allArgumentPoints"
      >
        <Label visible={false}>
          <Format type="fixedPoint" precision={0} />
        </Label>
      </CommonSeriesSettings>
      <Series
        argumentField="state"
        valueField="year2018"
        name="FGM"
        color={theme.colors.platform.marketplace}
      />
      <Series
        valueField="year2017"
        name="B2B"
        color={theme.colors.platform.b2b}
      />
      <Series
        valueField="year2016"
        name="MIK"
        color={theme.colors.platform.mik}
      />
      <Legend verticalAlignment="top" horizontalAlignment="center" />
    </StyledChart>
  );
};

export default DetailBarChart;
