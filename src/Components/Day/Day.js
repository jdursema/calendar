import React, { Component } from 'react';
import EventInput from '../EventInput/EventInput';

class Day extends Component {
  constructor() {
    super();
    this.state = {
      Weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      clicked: false,
      events:[]

    }
  }

  diplayDayOptions() {
    if (this.state.clicked === false){
      this.setState({clicked: true})
    }
  }

  addEvent(name, startTime, endTime) {
    this.setState({events: [...this.state.events, {eventName: name, time: `${startTime}-${endTime}`}]})
  }
  
  closeAddEvent(event){
    event.preventDefault()
    this.setState({clicked: false})
  }



  render (){
    if(!this.state.clicked){
      return (
        <td onClick={() => this.diplayDayOptions()}>
          {this.props.day}
          {this.state.events.map((event)=> {
            return <p>event.name</p>
          })}
        </td>
      )
    } else {
      return (
        <td onClick={() => this.diplayDayOptions(this.props.day, this.state.Weekdays[this.props.weekday])}>
          {this.props.day}
          <EventInput closeAddEvent={() => this.closeAddEvent}addEvent={(name, startTime, endTime) => this.addEvent(name, startTime, endTime)}/>
        </td>
        
      )
    }
   
  }

}

export default Day