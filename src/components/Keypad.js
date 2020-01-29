// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

  state = {

  }
  callback = () => console.log('Entering password...')


  render() {
    return (
      <div>

        <input onKeyUp={this.callback} type="password"></input>

      </div>

    )
  }

}