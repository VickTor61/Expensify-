import moment from "moment";
import {
  setEndDate,
  setStartDate,
  SET_TEXT_FILTER,
  sortByAmount,
  sortByDate,
} from "../../actions/filters";

test("Should test the authenticity of the set start date return object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});
test("Should check the test case for the set end date dispatched object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});
test("should sort by amount", () => {
  expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" })
});


test("should sort by date", () => {
  expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});

test("Should filter the texts with arguments passed in", () => {
  const action = SET_TEXT_FILTER("rent");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "rent",
  });
});

test("should filter text with no arguments passed", () => {
  const action = SET_TEXT_FILTER();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});
