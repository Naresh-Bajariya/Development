import React, { Component } from 'react'

export default class State extends Component {
   SomeData = "called"
  constructor() {
    super();
    console.log("called constructor");
    this.state={data:"something"}
    this.clickfn3 = this.clickfn3.bind(this);
    // this.clickfn1 = this.clickfn1.bind(this);
  }
  // clickfn() {
  //   console.log("clickfn")
  //   console.log(this.SomeData);
  //   this.SomeData="testing";
    
  // }
  clickfn1=()=> {
    // console.log("clickfn1")
    // console.log(this.SomeData);
     this.SomeData="testing1";
    return this.setState({
      data:"some "
    })
  }
  // we are using arrow function then dont need bind other wise need bind
  clickHandleFunction=()=> {
    console.log("clickHandleFunction")
    console.log(this.SomeData);
    // this.SomeData="Testing";
    this.setState({
      data:"new value "
    })
  }

  clickfn3() {
    console.log("clickfn3")
  }
  render() {
    console.log("called render");
    const element = <h1>Hello world!</h1>
    // let SomeData = "called"
    return (
      <div>
        {this.SomeData}
        <br />

        <p>inside class if we are going to build a function we d </p>

        <button onClick={this.clickfn}>click me = never called a function with ()because it will called function directly withot click button </button> <br />
        <p>inside class if we ARE going to build a function we dnst required to specify it with function keyword because of class a=is a collection of data membrer and mrember function only </p>
        <button onClick={this.clickfn1}>click fn1 state.</button>
        <p>this keyword referes its selfs (current object)</p>
        <button onClick={this.clickfn3} >click me fn3</button> <br />
        <button onClick={this.clickHandleFunction} >click me without bind</button>
        <br />
        {this.state.data}
        <br />

      </div>
    )
  }
}

