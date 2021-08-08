/*

  const increment = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy,
  });
  const decrement = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy,
  });

  const reset = ({ resetTo = 0 }) => ({
    type: "RESET",
    resetTo,
  });
  const set = ({ setNo = 12 } = {}) => ({
    type: "SET",
    setNo,
  });

  //1. Reducers are pure functions i.e its outputs depends on the inputs
  //  2. Never change state or action

  const CountReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + action.incrementBy,
        };
      case "DECREMENT":
        return {
          count: state.count - action.decrementBy,
        };
      case "RESET":
        return {
          count: action.resetTo,
        };
      case "SET":
        return {
          count: action.setNo,
        };
      default:
        return state;
    }
  };

  const store = createStore(CountReducer);

  store.subscribe(() => {
    console.log(store.getState());
  });

  store.dispatch(increment());
  store.dispatch(increment({ incrementBy: 5 }));
  store.dispatch(reset({ resetTo: 0 }));
  store.dispatch(decrement());
  store.dispatch(decrement({ decrementBy: 10 }));
  store.dispatch(set({ setNo: 100 }));

  */