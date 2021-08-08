import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./component/Help";
import Header from "./component/Header";
import Dashboard from "./component/Dashboard";
import Portfolio from "./component/CreateExpense";
import PortfolioData from "./component/PortfolioData";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expense";
import EditExpensePage from "./component/EditExpensePage";
import moment from "moment";


function App() {
  const store = configureStore;

  store.dispatch(
    addExpense({
      description: "water bill",
      createdAt:moment(-5000).valueOf(),
      amount: 300,
    })
  );
  store.dispatch(
    addExpense({ description: "food bill", amount: 2000, createdAt: moment(40000).valueOf() })
  );
  const state = store.getState();
  const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpense);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/portfolio/:id" component={PortfolioData} />
          <Route path="/contact" component={Contact} />
          <Route path="/edit/:id" component={EditExpensePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
