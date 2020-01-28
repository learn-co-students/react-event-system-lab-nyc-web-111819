import React from 'react'

class Keypad extends React.Component {

    handleInputPassword = () => console.log("Entering password...")

    render() {
       return <input onKeyUp={this.handleInputPassword} type="password" />
    }
}

export default Keypad
