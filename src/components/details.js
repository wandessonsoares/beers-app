import React, { Component } from 'react'

class Details extends Component {
    render(){
        return(
            <p className={this.props.classeSecundaria}>
                {this.props.text}
            </p>
        )
    }
}

export default Details