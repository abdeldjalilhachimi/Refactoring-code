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

/**
 * function an array of objects  and adding totals of each object
 * addTotalToObjects
 */

const afterAddingTotals = dataWithTotal(data);

function dataWithTotal(data) {
  const result = data?.map((item) => {
    let totals = 0;
    for (const [key, value] of Object.entries(item)) {
      if (key !== "period") {
        totals += value;
      }
    }
    item.total = parseFloat((totals / 3).toFixed(2));
    return item;
  });
  return result;
}

/**
 * function accept an array  and return array contains only periods
 */

function getPeriodsLabels(array) {
  const periods = array?.map((item) => item.period);
  return periods;
}

/**
 * function accept 3 arrays  and draw a graph
 *
 */
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

/**
 * function accept 2 arrays  and type(eg: line) and draw a graph
 *
 */
function drawGraphs(labels, datasets, type = "line") {
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: datasets,
    },
  });
}

// main function

function generateGraph(
  afterAddingTotals,
  backgroundColors,
  borderColors,
  type = "line"
) {
  const periodLabels = getPeriodsLabels(afterAddingTotals);
  const graphValues = getGraphValues(
    afterAddingTotals,
    backgroundColors,
    borderColors
  );
  drawGraphs(periodLabels, graphValues, type);
}

generateGraph(
  afterAddingTotals,
  backgroundColors,
  borderColors,
  (type = "line")
);
