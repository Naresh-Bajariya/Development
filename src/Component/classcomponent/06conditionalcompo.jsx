import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Loggin from './06.1loggin';

class ConditionalCompo extends Component {
    constructor(props) {
        super(props)
        this.state = { isLoggedIn: false }
    }
    login = () => {
        console.log("hello");
        this.setState({ isLoggedIn: !this.state.isLoggedIn })
    }
    // logout = () => {
    //     console.log("hello");

    // }
    render() {

        return (
            <>
                {this.state.isLoggedIn ? <h2>Loggedin</h2> : <h2>Loggedout</h2>}
                {this.state.isLoggedIn.toString()}
                <button onClick={this.login}>Click</button>
            </>
        );



        //  if (this.state.isLoggedIn) {
        //         return (
        //             <>
        //                 <h2>Loggedin</h2>
        //               
        //                 {this.state.isLoggedIn.toString()}
        //                 <button onClick={this.login}>Click</button>            
        //             </>
        //         );

        //     } else {
        //         return (
        //             <>
        //                 <h2>Loggedout</h2>
        //                
        //                 {this.state.isLoggedIn.toString()}
        //                 <button onClick={this.login}>Click</button>            
        //             </>
        //         );
        //     }
        
    }
}

export default ConditionalCompo;
