import React, {useState} from 'react'
import SearchComp from './searchComp';
import List from './listComp';


const SearchableList = () => {

    const list =[
        {
            id: 1,
            name: 'krishna'
        },
        {
            id: 2,
            name: 'react'
        },
        {
            id: 3,
            name: 'javascript'
        },
        {
            id: 4,
            name: 'soal'
        },
    ]
    
    const [query, setQuery] = useState('');
    
    const handleQuery = event => {
        setQuery(event.target.value);
    };

    
    const byQuery = query => item => !query || item.name.toLowerCase().includes(query.toLowerCase());
    
    const filteredList = list.filter(byQuery(query));

    return (
        <div className="search-cls">

        <SearchComp query={query} handleQuery={handleQuery}/>
        <List list={filteredList}/>
        </div>
    )
} 


  export default SearchableList