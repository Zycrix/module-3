import React, { useReducer } from "react";

const initialState = { enemyHitPoints: 100 };
function crit() {
  const hit = Math.floor(Math.random() * 2) === 1 ? 20 : 10;
  return hit;
}
const reducer = (state, action) => {
  switch (action.type) {
    case "attack":
      return {
        enemyHitPoints: state.enemyHitPoints - crit(),
      };
    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <label>Enemy hit points: {state.enemyHitPoints}</label>
      <br />
      <button onClick={() => dispatch({ type: "attack" })}>Attack</button>
    </div>
  );
}

export default App;
