// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

    focusAction = () => {
        console.log('Good!')
    }

    blurAction = () => {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return (
            <button onFocus={this.focusAction} onBlur={this.blurAction}>Press Me</button>
        )
    }


}

export default EyesOnMe;