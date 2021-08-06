const dataWithTotal = require("./dataWithTotals");
const getPeriodsLabels = require("./getPeriodsLabels");
const getGraphValues = require("./getGraphValues");
const data = [
  {
    Cheese: 22.2,
    CHOCOLATE: 10.3,
    Impulse: 1.5,
    period: "2021_26",
  },
  {
    Cheese: 21.8,
    CHOCOLATE: 9.8,
    Impulse: 1.5,
    period: "2021_27",
  },
  {
    Cheese: 21.2,
    CHOCOLATE: 9.7,
    Impulse: 1.4,
    period: "2021_28",
  },
];

const borderColors = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
];
const backgroundColors = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
];

const afterAddingTotals = dataWithTotal(data);
test(" Adding totals to each object ", () => {
  expect(afterAddingTotals).toEqual([
    {
      Cheese: 22.2,
      CHOCOLATE: 10.3,
      Impulse: 1.5,
      period: "2021_26",
      total: 11.33,
    },
    {
      Cheese: 21.8,
      CHOCOLATE: 9.8,
      Impulse: 1.5,
      period: "2021_27",
      total: 11.03,
    },
    {
      Cheese: 21.2,
      CHOCOLATE: 9.7,
      Impulse: 1.4,
      period: "2021_28",
      total: 10.77,
    },
  ]);
});

test(" Getting Period Labels", () => {
  expect(getPeriodsLabels(afterAddingTotals)).toEqual([
    "2021_26",
    "2021_27",
    "2021_28",
  ]);
});
test(" gethering values to draw graphs  ", () => {
  expect(
    getGraphValues(afterAddingTotals, backgroundColors, borderColors)
  ).toEqual([
    {
      label: "Cheese",
      data: [22.2, 21.8, 21.2],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
    },
    {
      label: "CHOCOLATE",
      data: [10.3, 9.8, 9.7],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
    },
    {
      label: "Impulse",
      data: [1.5, 1.5, 1.4],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
    },
    {
      label: "total",
      data: [11.33, 11.03, 10.77],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
    },
  ]);
});
