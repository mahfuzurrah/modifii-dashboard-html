const colorPalette = ["#FF784B", "#2DD4BF"];
var totlaSalesChart = {
  series: [
    {
      name: "Series 1",
      data: [
        10, 20, 15, 25, 30, 40, 35, 45, 50, 60, 55, 65, 70, 75, 80, 90, 85, 95,
        100, 110, 105, 115, 120, 125, 130, 135,
      ],
    },
    {
      name: "Series 2",
      data: [
        5, 15, 10, 18, 25, 30, 28, 35, 40, 50, 45, 55, 60, 65, 70, 75, 80, 85,
        90, 95, 100, 105, 110, 115, 120, 125,
      ],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  stroke: {
    show: true,
    width: 2,
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    line: {
      markers: {
        size: 5,
      },
    },
  },
  yaxis: {
    title: {
      text: "Total Sales (CAD)",
    },
    style: {
      fontSize: "12px",
    },
  },
  xaxis: {
    categories: [
      "01",
      "02",
      "03",
      "04",
      "05",
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
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
    ],
  },
  colors: colorPalette,
  fill: {
    colors: colorPalette,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " units";
      },
    },
  },
  grid: {
    row: {
      colors: ["transparent"],
      opacity: 0.5,
    },
    column: {
      colors: ["transparent"],
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), totlaSalesChart);
chart.render();
