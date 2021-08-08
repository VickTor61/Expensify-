import React from "react";
import { connect } from "react-redux";
import {
  setEndDate,
  setStartDate,
  SET_TEXT_FILTER,
  sortByAmount,
  sortByDate,
} from "../actions/filters";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

function ExpenseListFilters({ filters, dispatch }) {
  const onDatesChangeHandler = ([startDate, endDate]) => {
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
  };

  return (
    <div>
      <input
        type="text"
        value={filters.text}
        onChange={(e) => {
          dispatch(SET_TEXT_FILTER(e.target.value));
        }}
      />
      <select
        name="selectFilteredData"
        id="select"
        onChange={(e) => {
          e.target.value === "date"
            ? dispatch(sortByDate())
            : dispatch(sortByAmount());
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>

      {filters.sortBy === "date" && (
        <RangePicker onChange={onDatesChangeHandler} />
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseListFilters);
