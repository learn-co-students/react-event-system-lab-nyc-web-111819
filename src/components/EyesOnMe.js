// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component{

  handleFocus (e) {
    console.log('Good!')
  }

  handleBlur (e) {
    console.log('Hey! Eyes on me!')
  }

  render(){
    return (
      <button onFocus={this.handleFocus} onBlur={this.handleBlur}/>
    )
  }
}

export default EyesOnMe