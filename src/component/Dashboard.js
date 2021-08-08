import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";


function Dashboard() {
  return (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
}


export default Dashboard;
