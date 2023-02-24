import React, { Component } from 'react'

export default class Header2 extends Component {
    constructor(props){

        super(props)
    }
    
    render(){

        return (
          <div>
            <h1>wELCOME, {this.props.username}</h1>
          </div>
        )
    }
}
