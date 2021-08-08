import React, { useState } from "react";
import moment from "moment";
import { DatePicker } from "antd";
import "antd/dist/antd.css";

import "react-day-picker/lib/style.css";

function ExpenseForm({ onSubmit, expense }) {
  const [description, setDescription] = useState({
    description: expense ? expense.description : "",
    note: expense ? expense.note : "",
    amount: expense ? expense.amount.toString() : "",
    createdAt: expense ? moment(expense.createdAt) : moment(),
    error: "",
  });

  const amountHandler = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/gm)) {
      setDescription({
        ...description,
        amount,
      });
    }
  };

  const onDateChange = (createdAt) => {
    if (createdAt) {
      setDescription({
        ...description,
        createdAt: createdAt,
      });
    }
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!description.description || !description.amount) {
      setDescription((prevState) => {
        return {
          ...prevState,
          error: "Please provide description and amount",
        };
      });
    } else {
      setDescription((prevState) => {
        return {
          ...prevState,
          error: "",
        };
      });
      onSubmit({
        description: description.description,
        amount: parseFloat(description.amount, 10),
        createdAt: description.createdAt.valueOf(),
        note: description.note,
      });
    }
  };

  return (
    <div>
      {description.error && <p>{description.error}</p>}

      <form action="" onSubmit={submitFormHandler}>
        <input
          type="text"
          placeholder="description"
          autoFocus
          value={description.description}
          onChange={(e) => {
            setDescription({
              ...description,
              description: e.target.value,
            });
          }}
        />
        <input
          type="text"
          placeholder="Amount"
          onChange={amountHandler}
          value={description.amount}
        />

        <DatePicker onChange={onDateChange} value={description.createdAt} />

        <textarea
          name="Note"
          id=""
          cols="30"
          rows="10"
          placeholder="Add a note (optional) "
          value={description.note}
          onChange={(e) => {
            setDescription({
              ...description,
              note: e.target.value,
            });
          }}
        ></textarea>

        <button>Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
