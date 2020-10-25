import React from 'react'
import auth from '../auth';

function Dashboard(props) {
    return (
        <div>
            This is Dashboard
            <button onClick={() => auth.logout(() => {
                    props.history.push('/')
            }) }>Logout</button>
        </div>
    )
}

export default Dashboard
