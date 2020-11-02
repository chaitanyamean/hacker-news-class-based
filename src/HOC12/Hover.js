import React, {Component} from 'react'
import CountComponent from './withCount';


class HoverOne extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }


    handleChange = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        
        console.log('hover')
        return(
            <div>
                <h2 onMouseOver={this.props.handleChange}>Hovered {this.props.count} Times</h2>
            </div>
        )
    }

}


export default CountComponent(HoverOne)