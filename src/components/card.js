import React, { Component } from 'react'

export default class card extends Component {

    render() {
        return (
             <div className='w3-panel w3-card-4 w3-margin w3-center w3-theme-l3'>
                 {this.props.children}
             </div>
        )
    }
}
