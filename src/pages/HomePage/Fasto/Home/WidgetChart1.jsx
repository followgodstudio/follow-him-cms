import React from "react";
import ReactApexChart from "react-apexcharts";

class WidgetChart1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Desktops",
          data: [30, 40, 30, 50, 40],
        },
      ],
      options: {
        chart: {
          height: 270,
          type: "line",
          zoom: {
            enabled: true,
          },
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#FF4C41"],
        legend: {
          show: false,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: undefined,
          align: "left",
        },
        grid: {
          trokeDashArray: 5,
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0,
          },
        },
        yaxis: {
          show: false,
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May"],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            style: {
              colors: "#828690",
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: 100,
            },
          },
        },
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
          type="line"
          height={270}
        />
      </div>
    );
  }
}

export default WidgetChart1;
