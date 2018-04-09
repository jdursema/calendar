import React, { Component } from 'react';

class Day extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render (){
    console.log(this.props.day)
    return (
      <td>1</td>
    )
  }

}

export default Day