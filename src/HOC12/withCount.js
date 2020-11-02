import React, {Component} from 'react'

const CountComponent = (WrappedComponent) => {

    class WithCount extends Component {

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
            return (
                <WrappedComponent 
                {...this.props}
                count = {this.state.count}
                handleChange={this.handleChange}
                />
            )
        }
    }

    return WithCount

}

export default CountComponent