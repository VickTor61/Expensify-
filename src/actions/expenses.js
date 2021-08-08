import { v1 as uuid } from "uuid";

// ADD_EXPENSES
export const addExpense = ({
  description = "",
  note = "",
  createdAt = 0,
  amount = 0,
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuid(),
      description,
      note,
      createdAt,
      amount,
    },
  };
};
// REMOVE_EXPENSES;

export const removeExpense = ({ id }) => {
  return {
    type: "REMOVE_EXPENSE",
    id,
  };
};
// EDIT_EXPENSES

export const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates,
  };
};
