import React from 'react'
import auth from '../auth';


function Login(props) {

    console.log(props)

    return (
        <div>
            This is login

            <button onClick={() => auth.login(() => {
                    props.history.push("/dashboard")
            })}>Login</button>
        </div>
    )
}

export default Login
