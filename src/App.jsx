import React from "react";
import { Cards } from "./Cards";

const OPERATIONS = { ADD: "ADD", SUBTRACT: "SUBTRACT" };

function App() {
  const [number, updateNumber] = React.useState(0);

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        updateNumber(0);
        return state + action.payload;
      case "SUBTRACT":
        updateNumber(0);
        return state - action.payload;
      default:
        return state;
    }
  };

  const [state, dispatch] = React.useReducer(reducer, 0);

  /* implement dispatches */
  const add = () => {
    dispatch({ type: OPERATIONS.ADD, payload: number });
  };
  const subtract = () => {
    dispatch({ type: OPERATIONS.SUBTRACT, payload: number });
  };

  const handleNumberChange = (e) => updateNumber(Number(e.target.value));

  return (
    <div>
      <h3>useReducer</h3>
      <div id="result">{state}</div>
      <div>
        <button id="add" onClick={add}>
          Add
        </button>
        <button id="subtract" onClick={subtract}>
          Subtract
        </button>
      </div>
      <div>
        <input type="text" value={number} onChange={handleNumberChange} />
      </div>
      <br />
      <br />
      <Cards amount={5} />
    </div>
  );
}

export default App;
