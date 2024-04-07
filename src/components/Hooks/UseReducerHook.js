import { useReducer } from "react";

const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
    }
}

const UseReducerHook = () =>{
    const [state, dispatch] = useReducer(reducer, {count:0})
    const increment = () => {
        dispatch({type: 'increment'})
    }
    const decrement = () =>{
        dispatch({type: 'decrement'})
    }
    return <>
        <button onClick={increment}>Increment</button>
        {state.count}
        <button onClick={decrement}>Decrement</button>
    </>
}

export default UseReducerHook;