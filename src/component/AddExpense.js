import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { addExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

function AddExpense({ dispatch }) {
  const history = useHistory();

  return (
    <div>
      <h1>Add expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          dispatch(addExpense(expense));
          history.push("/");
        }}
      />
    </div>
  );
}

export default connect()(AddExpense);
