import React, { Component } from 'react';

export default class Keypad extends Component {

    consoleLog = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <input onKeyUp={this.consoleLog} type="password" />
        )
    }
}
