import React, {useState} from 'react'
import UseEffectCleanup from './1-useEffectCleanup';

function EffectButton() {

        const [toggle, setToggle] = useState(false)
    return (
        <div>
            <button onClick={() => setToggle(!toggle) }>Toggle</button>
            
            {toggle && toggle == true ? <UseEffectCleanup /> : <h1>clean up 
                component is unmounted</h1> }
        </div>
    )
}

export default EffectButton
