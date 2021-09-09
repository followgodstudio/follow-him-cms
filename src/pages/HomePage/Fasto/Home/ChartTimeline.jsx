import React from "react";
import ReactApexChart from "react-apexcharts";

class ChartTimeline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "New Clients",
          data: [
            300, 450, 600, 600, 400, 450, 410, 470, 480, 800, 600, 900, 400,
          ],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 200,
          stacked: true,
          toolbar: {
            show: false,
          },
          sparkline: {
            // enabled: true
          },
          offsetX: -10,
        },
        plotOptions: {
          bar: {
            borderRadius: 8,
            columnWidth: "30%",
            endingShape: "rounded",
            startingShape: "rounded",
            colors: {
              backgroundBarColors: [
                "#f0f0f0",
                "#f0f0f0",
                "#f0f0f0",
                "#f0f0f0",
                "#f0f0f0",
                "#f0f0f0",
                "#f0f0f0",
                "#f0f0f0",
              ],
              backgroundBarOpacity: 1,
              backgroundBarRadius: 5,
            },
          },
          distributed: true,
        },

        colors: ["#FF4C41"],
        grid: {
          show: false,
        },
        legend: {
          show: false,
        },
        fill: {
          opacity: 1,
        },
        dataLabels: {
          enabled: false,
          colors: ["#000"],
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 1,
            bottom: 0,
            opacity: 1,
          },
        },
        xaxis: {
          categories: [
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
          ],
          labels: {
            style: {
              colors: "#787878",
              fontSize: "14px",
              fontFamily: "poppins",
              fontWeight: 400,
              cssClass: "apexcharts-xaxis-label",
            },
          },
          crosshairs: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          show: false,
          labels: {
            style: {
              colors: "#3e4954",
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: 100,
            },
            formatter: (y) => {
              return `${y.toFixed(0)}k`;
            },
          },
        },
        tooltip: {
          x: {
            show: true,
          },
        },
        responsive: [
          {
            breakpoint: 575,
            options: {
              chart: {
                height: 250,
              },
            },
          },
        ],
      },
    };
  }

  render() {
    const { options, series } = this.state;
    return (
      <div id="chart" className="timeline-chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={200}
        />
      </div>
    );
  }
}

export default ChartTimeline;
