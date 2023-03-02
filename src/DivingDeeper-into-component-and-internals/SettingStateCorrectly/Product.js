import React, { Component } from 'react';
import './Product.css';

export default class Product extends Component {

state={
    cart:[],
    total:0
}
currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }

  getTotal = () => {
    return this.state.total.toLocaleString(undefined, this.currencyOptions)
  }
Add=()=>{
    this.setState({
        cart:['ice cream'],
        total:5
    })
}

remove=()=>{
    this.setState({
        cart:[],
        total:0
    })
}


  render() {
    return(
      <div className="wrapper">
        <div>
          Shopping Cart: {this.state.cart.length} total items.
        </div>
        <div>Total: {this.state.total}</div>

        <div className="product"><span role="img" aria-label="ice cream">🍦</span></div>
        <button onClick={this.Add}>Add</button> <button onClick={this.remove}>Remove</button>
      </div>
    )
  }
}