

import React, {useState, useEffect} from 'react'
import axios from 'axios';


const HooksComponent = () => {

    const [count, setCount] = useState(0)
    const [apiStr, setApiStr] = useState('topstories')
    const [stories, setStories] = useState([])

    // to call some thing after ui rendering - api, subscribe, 

        useEffect(() => {
            const fetchApi = () => {
                fetchStoriesApi(apiStr)
            }
            fetchApi()

        }, [apiStr])


        // useEffect(() => {
        //     if(count > 0) document.title = `${count} times clicked`

        // }, [count])




    const fetchStoriesApi = (str) => {
        // we need to call api

        console.log('STORIES', str);

        // https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

        // 1. we will call top stories api

        let requests = []

            axios.get(`https://hacker-news.firebaseio.com/v0/${str}.json`)
                 .then(res => {
                     console.log(res)
                     res.data.map((item, idx) => {
                            if(idx < 20) {
                                // // reducing upto 20 
                                requests.push(
                                    axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
                                )
                            }
                     });

                     // Promise 
                     Promise.all(requests).then(data => {
                         console.log(data)
                            // this.setState({stories: data})
                            setStories(data)
                     })

                 })

                 console.log(stories)

    } 



    return(
        <div>
            This is func component {count}
            <button onClick={() =>setApiStr('askstories')}>Ask stories</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )

}

export default HooksComponent