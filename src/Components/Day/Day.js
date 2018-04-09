import React, { Component } from 'react';
import EventInput from '../EventInput/EventInput';

class Day extends Component {
  constructor() {
    super();
    this.state = {
      Weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      clicked: false,
      events:{}

    }
  }

  diplayDayOptions() {
    if (this.state.clicked === false){
      this.setState({clicked: true})
    } else {
      this.setState({clicked: false})
    }
  }



  render (){
    if(!this.state.clicked){
      return (
        <td onClick={() => this.diplayDayOptions()}>
          {this.props.day}
        </td>
      )
    } else {
      return (
        <td onClick={() => this.diplayDayOptions(this.props.day, this.state.Weekdays[this.props.weekday])}>
          {this.props.day}
          <EventInput/>
        </td>
        
      )
    }
   
  }

}

export default Day