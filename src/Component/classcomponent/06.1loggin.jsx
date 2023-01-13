import React, { Component } from 'react';

class Loggin extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    // ----------- one function create -----------------

    // handleLogin = () => {
    //     this.setState({ isLoggedIn: !this.state.isLoggedIn });
    // }
    
    handleLogin = () => {
        this.setState({ isLoggedIn: true });
    }

    handleLogout = () => {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <>
                <div>
                    The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
                </div>
                {isLoggedIn
                    ? <button onClick={this.handleLogout}>LogOut</button>
                    : <button onClick={this.handleLogin}>Login</button>
                }
            </>
        );
    }
}

export default Loggin;