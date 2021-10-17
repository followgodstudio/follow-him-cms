import theme from "components/CustomTheme";
import { Connector, Label, Legend, Series } from "devextreme-react/pie-chart";
import React from "react";
import { StyledPieChart } from "./PieChart.styles";

const dataSource = [
  {
    platform: "B2B",
    contribution: 47000,
  },
  {
    platform: "MIK",
    contribution: 85000,
  },
  {
    platform: "Marketplace",
    contribution: 32000,
  },
];
const PieChart = () => {
  const palette = [
    theme.colors.platform.b2b,
    theme.colors.platform.mik,
    theme.colors.platform.marketplace,
  ];

  return (
    <StyledPieChart
      id="pie"
      palette={palette}
      type="doughnut"
      dataSource={dataSource}
    >
      <Series argumentField="platform" valueField="contribution">
        <Label visible format="thousands">
          <Connector visible />
        </Label>
      </Series>
      <Legend
        position="inside"
        horizontalAlignment="right"
        verticalAlignment="top"
      />
    </StyledPieChart>
  );
};

export default PieChart;
