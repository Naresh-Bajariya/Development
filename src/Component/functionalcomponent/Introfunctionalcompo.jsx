import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const IntroFunctionalCompo = () => {
    return (
        <>
           <div className="row">
                <div className="col-md-4 offset-md-8">
                    <Link to="usestate"></Link>
                </div>
                <Outlet/>
            </div>  
        </>
    );
};

export default IntroFunctionalCompo;

