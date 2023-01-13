import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class Exampleintro extends Component {
  render() {
    return (
      <>
        <Link to = "statefun">statefun</Link>
        <Outlet/>
      </>
    )
  }
}
