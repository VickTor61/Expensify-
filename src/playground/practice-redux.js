
// const Redux = () => {
//   // action generators for expenses and filters



 

//   store.subscribe(() => {
//     const state = store.getState();
//     const getExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(getExpenses);
//   });

//   const expenseOne = store.dispatch(
//     addExpense({ id: 1, description: "Code", amount: 200, createdAt: 1000 })
//   );
//   const expenseTwo = store.dispatch(
//     addExpense({
//       id: 2,
//       description: "rent",
//       amount: 600,
//       note: "Just gotta add removeExpense action generator and reducer",
//       createdAt: -1000,
//     })
//   );

//   // store.dispatch(removeExpense({ id: expenseOne.expense.id }));
//   // store.dispatch(editExpense(expenseTwo.expense.id, { amount: 1000 }));
//   // store.dispatch(SET_TEXT_FILTER("code"));
//   store.dispatch(sortByAmount());
//   // store.dispatch(sortByDate());
//   // store.dispatch(setStartDate(825));
//   // store.dispatch(setStartDate());
//   // store.dispatch(setEndDate(1250));

//   /*

//   const demoState = {
//     expenses: [{
//       id: "kajfka",
//       description: 'January Rent',
//       note: 'This was the final payment for that address',
//       amount: 8439,
//       createdAt: 0
//     }],
//     filters: {
//       text: "rent",
//       sortBy: "amount", // Date or amount
//       startDate: undefined,
//       endDate: undefined
//     }
//   }
//   */

//   return (
//     <div>
//       <h1>practice</h1>
//     </div>
//   );
// };

// export default Redux;
