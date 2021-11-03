import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const color = this.props.value * 10 - 1
    return this.props.value>2 ? null: (
      <div className="color-box" style={{opacity: 1 /*replace null with the value*/}}>
        <ColorBox value ={color>} />
      </div>
    )
  }

}

