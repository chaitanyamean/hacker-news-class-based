import React, {useReducer, useContext} from 'react'


function ReducerHooks() {

    const initialState = {
        maleCount: 20,
        femaleCount: 30
    }

    const reducer = (state, action) => {
        switch(action.type) {

            case 'IncrementMale':
            return {...state , maleCount: state.maleCount + action.payload}

            case 'Decrement':
            return state - action.payload

            case 'Reset':
            return initialState

            default:
            return state
        }
    }


    // First one is the state(current state) and our updated value


    const  [state, dispatch] = useReducer(reducer, initialState)

            console.log(state)
    return (
        <div>
            <p>FEMALE COUNT: {state.femaleCount}</p> 
            
            <p>MALE COUNT: {state.maleCount}</p>

            <button onClick={() => dispatch({type: 'IncrementMale', payload: 1})}>Increment Only Males</button>
            <button onClick={() => dispatch({type: 'Decrement', payload: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'Reset'})}>Reset</button>
            <button onClick={() => dispatch({type: 'Increment123', payload: 10})}>
            Increment By 10</button>

        </div>
    )
}

export default ReducerHooks
