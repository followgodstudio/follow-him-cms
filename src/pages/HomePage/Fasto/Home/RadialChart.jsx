import React from "react";
import ReactApexChart from "react-apexcharts";

class RadialChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [60],
      options: {
        chart: {
          height: 230,
          type: "radialBar",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 20,
              size: "65%",
              background: "#fff",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 10,
                opacity: 0.1,
              },
            },

            track: {
              background: "#F8F8F8",
              strokeWidth: "100%",
              margin: 0, // margin is in pixels
            },
            dataLabels: {
              show: true,
              value: {
                offsetY: -7,
                color: "#111",
                fontSize: "20px",
                show: true,
              },
            },
          },
        },
        stroke: {},
        fill: {
          colors: ["#FF4C41"],
        },
        labels: [""],
      },
    };
  }

  render() {
    const { options, series } = this.state;
    return (
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height={230}
        />
      </div>
    );
  }
}
export default RadialChart;
