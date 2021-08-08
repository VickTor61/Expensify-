import React from "react";


import { Link } from "react-router-dom";

function ExpenseListItem({ description, amount, createdAt, id }) {
  return (
    <div>
     <Link to={`/edit/${id}`}>
     <h4>{description}</h4>
     </Link>
      <span>
        Amount: {amount} <br />
        Date: {createdAt}
      </span>
      
    </div>
  );
}

export default ExpenseListItem;
