import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class Hoc extends Component {
  render() {
    return (
      <>
      <div className="row">
                    <div className="col-md-4 offset-md-4 px-5">
                        <ul>
                           
                            <li><Link to="withoutHoc1">WithoutHoc1</Link></li>
                            <li><Link to="withoutHoc2">WithoutHoc2</Link></li>
                            <li><Link to="withhoc">WithHoc</Link></li>
                                
                        </ul>
                    </div>
                </div>
       <div>
        <p>

        </p>
       </div>
        <Outlet></Outlet>
      </>
    )
    
  }
}
