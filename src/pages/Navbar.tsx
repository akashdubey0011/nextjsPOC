'use-client';
import { useReducer } from "react"

const Navbar = () => {
    const initialState = 0;

    const reducer =(state:any, action:any)=> {
        console.log(state, action)
        if(action.type === 'Increment') {
            return state + 1
        }
        if(action.type === "Decrement") {
            if (state > 0) {
                return state - 1;
            } else {
                return state;
            }
        }
        if(action.type === "Reset") {
            return 0;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <>
        <p>Count : {state}</p>
        <button className="px-2 mx-2 increment bg-blue-300 rounded border-solid" onClick={()=>dispatch({type: 'Increment'})}>+</button>
        <button className="px-2 mx-2 decrement bg-blue-300 rounded border-solid" onClick={()=>dispatch({type: 'Decrement'})}>-</button>
        <button className="px-2 mx-2 reset bg-blue-300 rounded border-solid" onClick={()=>dispatch({type: 'Reset'})}>reset</button>
    </>
  )
}

export default Navbar