import React from 'react'

function SearchComp({query, handleQuery}) {
   
    return (
        <div>
      <input type="text" value={query} onChange={handleQuery} />
    </div>
    )
}

export default SearchComp
