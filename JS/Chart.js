const xValues = [50, 60, 70, 80, 90, 100, 110,];
const yValues = [7, 8, 8, 9, 9, 9, 10, 11,];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "white",
        borderColor: "#BF7208",
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 6, max: 16 } }],
      text: "World Wide Wine Production"

    },
  },
});