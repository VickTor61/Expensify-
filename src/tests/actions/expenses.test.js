import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("Setup test to remove expense", () => {
  const action = removeExpense({ id: "12345" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "12345",
  });
});

test("Setup to edit expense", () => {
  const action = editExpense("123", { note: "The latest update" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    updates: {
      note: "The latest update",
    },
  });
});

test("should setup assertion for the addExpence action generator", () => {
  const expenseData = {
    description: "rent",
    amount: 10095,
    createdAt: 1000,
    note: "This was last months rent",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("should dispatch addExpense action with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      amount: 0,
      note: "",
      createdAt: 0,
    },
  });
});
