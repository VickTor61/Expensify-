import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Expensify</h1>
      <NavLink exact to="/" activeClassName="selected">
        Dashboard
      </NavLink>
      <NavLink to="/portfolio" activeClassName="selected">
        Create Expense
      </NavLink>
      <NavLink to="/contact" activeClassName="selected">
        contact
      </NavLink>
    </div>
  );
}

export default Header;
