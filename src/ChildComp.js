import React from 'react';

const ChildComponent = (props) => {
console.log('Child', props)
    return(
        <div>
            <p>{props.count}</p>
            <button onClick={props.handleIncrement}> Increment From child component </button>
        </div>
    )
}

export default ChildComponent
