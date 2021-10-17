import theme from "components/CustomTheme";
import {
  Label,
  Layer,
  Legend,
  Source,
  Tooltip,
} from "devextreme-react/vector-map";
import * as mapsData from "devextreme/dist/js/vectormap-data/usa";
import React from "react";
import { StyledVectorMap } from "./BubbleMap.styles";
import { markers } from "./data";

const sizeGroups = [0, 8000, 10000, 50000];

const bounds = [-180, 85, 180, -60];

const BubbleMap = () => {
  const customizeTooltip = (arg) => {
    return arg.layer.type === "marker"
      ? { text: arg.attribute("tooltip") }
      : {};
  };

  const customizeText = (arg) => {
    return ["< 8000K", "8000K to 10000K", "> 10000K"][arg.index];
  };

  const customizeItems = (items) => {
    return items.reverse();
  };
  return (
    <StyledVectorMap
      id="vector-map"
      background={{ borderColor: theme.colors.gray[0] }}
      bounds={bounds}
      center={[-100, 40]}
      zoomFactor={10}
    >
      <Layer dataSource={mapsData.usa} hoverEnabled={false} />
      <Layer
        dataSource={markers}
        name="bubbles"
        elementType="bubble"
        dataField="value"
        minSize={20}
        maxSize={40}
        sizeGroups={sizeGroups}
        opacity="0.8"
      >
        <Label enabled={false} />
      </Layer>
      <Tooltip enabled customizeTooltip={customizeTooltip} />
      <Legend
        visible={false}
        markerShape="circle"
        customizeItems={customizeItems}
        customizeText={customizeText}
      >
        <Source layer="bubbles" grouping="size" />
      </Legend>
      <Tooltip enabled customizeTooltip={customizeTooltip} />
    </StyledVectorMap>
  );
};

export default BubbleMap;
