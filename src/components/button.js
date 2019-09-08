import React, { Component } from 'react'

class Button extends Component {
    render(){
        return(
            <button onClick={this.props.funcao}>{this.props.valor}</button>
        )
    }
}

export default Button