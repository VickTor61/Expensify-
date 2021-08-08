import moment from "moment";

// Filter expenses;
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const createdAtMoment = moment(expenses.createdAt);
      // console.log(startDate, endDate);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;

      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;

      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      // console.log(startDateMatch, endDateMatch);
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "date":
          return a.createdAt < b.createdAt ? 1 : -1;
        case "amount":
          return a.amount < b.amount ? 1 : -1;
        default:
          return sortBy;
      }
    });
};

export default getVisibleExpenses;
