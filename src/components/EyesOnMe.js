import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    focus = () => {
        console.log('Good!')
    }
    blur = () => {
        console.log('Hey! Eyes on me!')
    }
    render(){
        return(
            <button onFocus={(e) => this.focus(e)} onBlur={(e) => this.blur(e)}></button>
        )
    }
}