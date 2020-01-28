import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    consoleLogF = () => {
        console.log("Good!")
    }

    consoleLogB = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button onFocus={this.consoleLogF} onBlur={this.consoleLogB}>

            </button>
        )
    }

}
