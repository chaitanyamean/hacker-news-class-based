import React, { Component } from 'react'
import  ChildComponent from './ChildComp'

import axios from 'axios';
import Stories from './Stories';

class ParentClass extends Component{
    constructor(){
        super()
        this.state = {
            count:0,
            text: '',
            apiStr: 'topstories',
            stories: [],
            isLoading: false
        }

        this.increment = this.increment.bind(this);

    }


    // https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty


    componentDidMount() {
            // called the top story

            // couple of lines code for fetching data

            this.fetchStoriesApi(this.state.apiStr);
    }

    componentDidUpdate(prevProp, prevState) {
            // couple of lines code for fetching data

            // prevProp
            // prevState

            // topstories --- i click askstories, this will be my current state

            // prevstate is askstories --- current also askstories

            if(this.state.apiStr !== prevState.apiStr){
                
                this.fetchStoriesApi(this.state.apiStr)
            }
    }

    // We need to write one method and we need to call in 2 places


    fetchStoriesApi = (str) => {
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
                            this.setState({stories: data})
                     })

                 })

    } 

    increment() { // loses this bonding

            console.log('before increment click', this.state.count); // 0

            this.setState({count: this.state.count + 1}, () => {
                console.log('after increment click', this.state.count);  // 0 
            });
    }



    decrement = () => {
        this.setState({count: this.state.count - 1})
    }


    handleClick = (e) => {

           this.setState({text: e.target.value }) 
    }


    topStories = () => {
        this.setState({apiStr: 'topstories'})
    }

    askStories = () => {
        this.setState({apiStr: 'askstories'})
    }

  


    render(){
        return(
            <div className="counter-div">

                <button 
                className="btn-cls"
                onClick={this.decrement}
                >Decrement</button>
                    <span> {this.state.count} </span>
                <button 
                className="btn-cls"
                onClick={this.increment}
                >Increment</button>

                <input onChange={this.handleClick}/>

                <p>{this.state.text}</p>
                

                <ChildComponent 
                count={this.state.count}
                
                 handleIncrement = {this.increment}/>


        

                    <button onClick={this.topStories}>Top Stories</button>
                    <button onClick ={this.askStories}>Ask Stories</button>


            {/* <Stories story={this.state.stories}/> */}

            {this.state.stories.map((item, idx) => 
                <Stories story={item} key={idx}/>
            )}


            </div>
        )
    }
}

export default ParentClass

// how can i send my state to child component


// this.state = {
    // count: undefined,
    // handleIncrement: function handleIncrement() {}
// }


// counter App 2 buttons increment and decrement and a label or span