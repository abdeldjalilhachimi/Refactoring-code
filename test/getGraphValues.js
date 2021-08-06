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

const getGraphValues = (array, backgroundColors, borderColors) => {
  const graphValues = [];
  const keys = Object.keys(array[0]);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] !== "period") {
      const temp = {
        label: keys[i],
        data: [],
        backgroundColor: backgroundColors,
        borderColor: borderColors,
      };
      for (let n = 0; n < array.length; n++) {
        temp.data.push(array[n][keys[i]]);
      }
      graphValues.push(temp);
    }
  }

  return graphValues;
};

getGraphValues(data, backgroundColors, borderColors);

module.exports = getGraphValues;
