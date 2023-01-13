import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';

class Mainpage extends Component {
    render() {
        return (
            <>
               <Header/>
               <div className='container'>

               <Outlet/>
               </div>
               testing 
            </>
        );
    }
}

export default Mainpage;