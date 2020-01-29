// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {

  state = {

  }

  callbackOne = () => console.log("Good!")
  callbackTwo = () => console.log('Hey! Eyes on me!')

  render() {
    return (
      <div>
        <input onFocus={this.callbackOne} onBlur={this.callbackTwo}></input>
        <button onFocus={this.callbackOne} onBlur={this.callbackTwo}>BUTTON</button>
      </div>
    )
  }

}