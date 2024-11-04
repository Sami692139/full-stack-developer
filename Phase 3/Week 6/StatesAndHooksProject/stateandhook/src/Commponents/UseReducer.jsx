import React, {useContext, useReducer} from 'react'

//Initalize state
const initialState = { count: 0 };
//Reducer Function 
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
// const { theme } = useContext(ThemeContext);
function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);// It takes  Function and Inital  State
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      
    
    </>
  );
}

export default UseReducer;