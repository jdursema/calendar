import React, {Component} from 'react';
import './EventInput.css'

 class EventInput extends Component{
   constructor(){
     super();
     this.state = {
        eventInput: '',
        timeInput: ''
     }
   }

   
   render(){
    return(
      <div className='event-input'>
        <form>
          <label for='event-name'>Event Name:</label>
          <input type='text' className='event-name'/>
          <label for='time-input'>Event Name:</label>
          <form className='time-input'>
            <input type='time'/>
            <p>-</p>
            <input type='time'/>
          </form>
          <button onClick={() => addEventToDay(this.state.eventInput, this.state.timeInput)>Add Event</button>
        </form>
        
      </div>
    )
   }
    
  
}

export default EventInput;