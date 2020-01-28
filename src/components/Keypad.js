// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

    keyUpAction = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <input onKeyUp={this.keyUpAction} type='password' />
        )
    }

}

export default Keypad;