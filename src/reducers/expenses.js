// Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (
  state = expensesReducerDefaultState,
  { type, id, expense, updates }
) => {
  switch (type) {
    case "ADD_EXPENSE":
      return [...state, expense];
    case "REMOVE_EXPENSE":
      return state.filter((expense) => expense.id !== id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === id) {
          return {
            ...expense,
            ...updates,
          };
        } else {
          return state;
        }
      });
    default:
      return state;
  }
};

export default expensesReducer;