import React from "react";
import ReactApexChart from "react-apexcharts";

class WidgetChart2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Net Profit",
          data: [500, 500, 400, 400, 600, 600, 300, 300, 500, 500, 700, 700],
        },
      ],
      options: {
        chart: {
          height: 80,
          type: "area",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
          sparkline: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#43DC80"],
        legend: {
          show: false,
        },
        markers: {
          shape: "circle",
        },
        stroke: {
          show: true,
          width: 4,
          curve: "smooth",
          colors: ["#43DC80"],
        },
        states: {
          normal: {
            filter: {
              type: "none",
              value: 0,
            },
          },
          hover: {
            filter: {
              type: "none",
              value: 0,
            },
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: "none",
              value: 0,
            },
          },
        },
        grid: {
          show: false,
          borderColor: "#eee",
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
        yaxis: {
          show: false,
        },
        xaxis: {
          categories: [
            "Jan",
            "feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            style: {
              fontSize: "12px",
            },
          },
          crosshairs: {
            show: false,
            position: "front",
            stroke: {
              width: 1,
              dashArray: 3,
            },
          },
          tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
              fontSize: "12px",
            },
          },
        },
        fill: { opacity: 0.0, type: "solid", colors: "#FAC7B6" },
        tooltip: {
          style: { fontSize: "12px" },
          y: {
            formatter: (val) => {
              return `$${val} thousands`;
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={80}
        />
      </div>
    );
  }
}

export default WidgetChart2;
