import moment from "moment";
import getVisibleExpenses from "../../selectors/expense";

const expenses = [
  {
    id: "1",
    description: "car",
    amount: 2000,
    createdAt: moment(0).valueOf(),
    note: "A car expense note",
  },
  {
    id: "2",
    description: "crypto",
    amount: 120,
    createdAt: moment(0).add(4, "days").valueOf(),
    note: "crypto expense list",
  },
  {
    id: "3",
    description: "real estate",
    amount: 40000,
    createdAt: moment(0).subtract(5, "days").valueOf(),
    note: "value of my real estate buildings",
  },
];

test("should filter the expenses by text", () => {
  const action = getVisibleExpenses(expenses, { text: "a" });
  expect(action).toEqual([expenses[0], expenses[2]]);
});

test("should filter the expenses by their amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const action = getVisibleExpenses(expenses, filters);
  expect(action).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("Should filter by end date object dispatch", () => {
    const filters = {
      text: "",
      sortBy: "date",
      endDate: moment(0).valueOf(),
      startDate: undefined,
    };
    const action = getVisibleExpenses(expenses, filters);
    expect(action).toEqual([expenses[2], expenses[]]);
  });
  

test("Should filter by start date object dispatch", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0).valueOf(),
    endDate: undefined,
  };
  const action = getVisibleExpenses(expenses, filters);
  expect(action).toEqual([expenses[1], expenses[0]]);
});

test("Should sort by date object dispatch", () => {
    const filters = {
      text: "",
      sortBy: "date",
      startDate: undefined,
      endDate: undefined,
    };
    const action = getVisibleExpenses(expenses, filters);
    expect(action).toEqual([expenses[1], expenses[0], expenses[2]]);
  });
  