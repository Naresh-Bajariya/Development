import React, { Component } from 'react'

export default class WithoutHoc2 extends Component {
  state={
    gunshots:0
  };
  handleGunshots=()=>{
    this.setState({gunshots:this.state.gunshots + 1});
  };
  render() {
    return (
      <div>
        <h3 onMouseOver={this.handleGunshots}>Avyan Gunshots:{this.state.gunshots}</h3>
      </div>
    )
  }
}
