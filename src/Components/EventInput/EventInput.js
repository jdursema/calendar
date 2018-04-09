import React, {Component} from 'react';
import './EventInput.css'

 class EventInput extends Component{
   constructor(){
     super();
     this.state = {
        eventInput: '',
        timeStartInput: '',
        timeEndInput: ''
     }
   }

   AddInputToState(event){
     this.setState({[event.target.name]: event.target.value})
   }

   passEventToDay(event, name, start, end){
     event.preventDefault()
     this.props.addEvent(name, start, end)
   }


   render(){
    return(
      <div className='event-input'>
        <form>
          <label for='event-name'>Event Name:</label>
          <input type='text' className='event-name' name='eventInput' onChange={(event) => this.AddInputToState(event)}/>
          <label for='time-input'>Event Name:</label>
          <form className='time-input'>
            <input type='text' name='timeStartInput' onChange={(event) => this.AddInputToState(event)}/>
            <p>-</p>
            <input type='text' name='timeEndInput' onChange={(event) => this.AddInputToState(event)}/>
          </form>
          <button onClick={(event) => this.passEventToDay(event, this.state.eventInput, this.state.timeStartInput, this.state.timeEndInput)}>Add Event</button>
          <button onClick={(event) => this.props.closeAddEvent(event)}>Close</button>
        </form>
        
      </div>
    )
   }
    
  
}

export default EventInput;