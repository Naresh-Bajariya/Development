// import React, { Component } from 'react';
// import { Link, Outlet } from 'react-router-dom';

// class IntroClassCompo extends Component {
//     render() {
//         return (
//             <>
//                 <div className="row">
//                     <div className="col-md-4 offset-md-4">
//                         <ul>
//                             <li>
//                                 <Link to="constructor">Construct</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col">
//                         <h1> ghjgiu</h1>
//                     </div>
//                 <Outlet></Outlet>
//                 </div>
//             </>
//         );
//     }
// }

// export default introClassCompo;
import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class IntroClassCompo extends Component {
    render() {
        return (
            <div>
                 <div className="row">
                    <div className="col col-md-4 offset-md-4">
                        <h1> ghjgiu</h1>
                        <p>class means : It is a colection of data member and member function only</p>
                      
                    </div>
                </div>
            
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <ul>
                            <li><Link to="constructor">Construct</Link></li>
                            <li><Link to="state">State</Link></li>
                            <li><Link to="props">Props</Link></li>
                            <li><Link to="lifecycle" >Lifecycle</Link></li>
                            <li><Link to="conditionalcompo" >Conditional Render</Link></li>
                            <li><Link to="loggin" >Conditional Render Loggin</Link></li>
                            {/* <li><Link to="listkey" >ListKey</Link></li> */}
                            <li><Link to="lifting" >Lifting</Link></li>

                            <li><Link to="hoc">HOC</Link></li>
                                
                        </ul>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
        )
    }
}
