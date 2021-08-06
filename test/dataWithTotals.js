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

function dataWithTotal(array) {
  const result = array?.map((item) => {
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

dataWithTotal(data);

module.exports = dataWithTotal;
