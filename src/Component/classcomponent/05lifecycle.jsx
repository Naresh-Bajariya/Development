
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state={data:"something"}
    }
    
    
    // componentWillMount() {
    //     console.log("componentWillMount");
    // }
    
    componentDidMount() {
        console.log("componentDidMount");    
    }
    
    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps");    
    // }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        // return false;
        return true;
        
    }
    
    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate");     
    // }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        
    }
    
    componentWillUnmount() {
        console.log("componentWillUnmount");
        
    }
    clickHandle=()=>{
        this.setState({data:"checked"})
    }
    
    render() {
        console.log("render");
        return (
            <>
                return
                <br/>
                <input type="text" name='' id='' />
                {this.state.data}
                <button onClick={this.clickHandle}>click</button>

            </>
        );
    }
}

// Lifecycle.propTypes = {

// };

export default Lifecycle;
