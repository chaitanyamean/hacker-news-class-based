import React, {Component} from 'react'
import CountComponent from './withCount';



class CounterOne extends Component {
    constructor(props){
        super(props)
        
    }


    render() {
        // console.log(this.props);
        return(

            <div>
                <p>{this.props.name}</p>
                <button onClick={this.props.handleChange}>Clicked {this.props.count} Times</button>
            </div>
        )
    }

}


export default CountComponent(CounterOne)