// import React from "react";
// import { createStore, combineReducers } from "redux";

// const Redux = () => {
//   // ADD_EXPENSE
//   const addExpense = ({
//     description = "",
//     id,
//     note = "",
//     amount = 0,
//     createdAt = 0,
//   } = {}) => ({
//     type: "ADD_EXPENSE",
//     expense: {
//       id,
//       description: description.toLowerCase(),
//       note,
//       createdAt,
//       amount,
//     },
//   });

//   // REMOVE_EXPENSE
//   const removeExpense = (id) => ({
//     type: "REMOVE_EXPENSE",
//     expenseToRemove: {
//       id,
//     },
//   });

//   // EDIT_EXPENSE
//   const editExpense = (id, updates) => ({
//     type: "EDIT_EXPENSE",
//     id,
//     updates,
//   });

//   // SET_TEXT_FILTER
//   const setTextFilter = (text = "") => ({
//     type: "SET_TEXT",
//     text: text.toLowerCase(),
//   });
//   // SORT_BY_DATE
//   const sortByAmount = (amount = "amount") => ({
//     type: "SORT_BY_DATE",
//     sortBy: amount,
//   });
//   // SORT_BY_AMOUNT
//   const sortByDate = (date = "date") => ({
//     type: "SORT_BY_AMOUNT",
//     sortBy: date,
//   });
//   // SET_START_DATE
//   const setStartDate = (date = "Date must be defined") => ({
//     type: "SET_START_DATE",
//     date,
//   });
//   // SET_END_DATE
//   const setEndDate = (date = "Date must be defined") => ({
//     type: "SET_END_DATE",
//     date,
//   });
//   //  Expenses Reducer
//   const expenseReducerDefaultState = [];

//   const expensesReducer = (state = expenseReducerDefaultState, action) => {
//     switch (action.type) {
//       case "ADD_EXPENSE":
//         return [...state, action.expense];
//       case "REMOVE_EXPENSE":
//         return state.filter(({ id }) => id !== action.expenseToRemove.id);
//       case "EDIT_EXPENSE":
//         return state.map((expense) => {
//           if (expense.id === action.id) {
//             return {
//               ...expense,
//               ...action.updates,
//             };
//           } else {
//             return expense;
//           }
//         });
//       default:
//         return state;
//     }
//   };
//   const getVisibleExpenses = (
//     expenses,
//     { text, sortBy, startDate, endDate }
//   ) => {
//     return expenses.filter((expense) => {
//       const startDateMatch =
//         typeof startDate !== "number" || expense.createdAt >= startDate;
//       const endDateMatch =
//         typeof endDate !== "number" || expense.createdAt <= endDate;
//       const textMatch = expense.description.includes(text)
        

//       return startDateMatch && endDateMatch && textMatch;
//     }).sort((a, b) => {
//       if(sortBy === "date") {
//         return a.createdAt < b.createdAt ? 1 : -1
//       } else if(sortBy === "amount") {
//         return a.amount < b.amount ? 1 : -1
//       }
//     })
//   };

//   // Filters Reducer default state
//   const filtersReducerDefaultState = {
//     id: "12345",
//     text: "",
//     sortBy: "date",
//     startDate: undefined,
//     endDate: undefined,
//   };

//   const FiltersReducer = (state = filtersReducerDefaultState, action) => {
//     switch (action.type) {
//       case "SET_TEXT":
//         return {
//           ...state,
//           text: action.text,
//         };
//       case "SORT_BY_DATE":
//         return {
//           ...state,
//           sortBy: action.sortBy,
//         };
//       case "SORT_BY_AMOUNT":
//         return {
//           ...state,
//           sortBy: action.sortBy,
//         };
//       case "SET_START_DATE":
//         return {
//           ...state,
//           startDate: action.date,
//         };
//       case "SET_END_DATE":
//         return {
//           ...state,
//           endDate: action.date,
//         };
//       default:
//         return state;
//     }
//   };
//   // store creation

//   const store = createStore(
//     combineReducers({
//       expenses: expensesReducer,
//       filters: FiltersReducer,
//     })
//   );

//   store.subscribe(() => {
//     const state = store.getState();
//     const showExpense = getVisibleExpenses(state.expenses, state.filters);
//     console.log(showExpense);
//   });

//   const expenseOne = store.dispatch(
//     addExpense({ description: "FOod", amount: 100, id: "id one", createdAt: -1000 })
//   );
//   const expenseTwo = store.dispatch(
//     addExpense({ description: "Buy my mifi", amount: 14000, id: "id two", createdAt: -30 })
//   );

//   // store.dispatch(removeExpense(expenseOne.expense.id));
//   store.dispatch(editExpense(expenseTwo.expense.id, { amount: 400 }));

//   // store.dispatch(setTextFilter("foo"));

//   store.dispatch(sortByAmount());
//   //  store.dispatch(sortByDate());

//   // store.dispatch(setStartDate(125));
//   // store.dispatch(setStartDate());
//   // store.dispatch(setEndDate(-250));
//   return (
//     <div>
//       <h3>The header</h3>
//     </div>
//   );
// };

// // export default Redux;
