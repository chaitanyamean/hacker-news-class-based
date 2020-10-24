import React from 'react'

function Stories({story}) {
    return (
        <div>
            <p>{story.data.title}</p>
        </div>
    )
}

export default Stories
