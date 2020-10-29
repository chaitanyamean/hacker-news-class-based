import React, {useState, useEffect} from 'react'

function UseEffectCleanup() {

    const [size, setsize] = useState(window.innerWidth)

    const resize = () => {
        console.log('resize')
        setsize(window.innerWidth);
    }

    useEffect(() => {
        console.log('Called')
        window.addEventListener('resize', resize)

        return () => {
            window.removeEventListener('resize', resize);
        }
        
    }, [])

    return (
        <div>
            <h1>Window</h1>
            <h2>{size} PX</h2>
        </div>
    )
}

export default UseEffectCleanup
