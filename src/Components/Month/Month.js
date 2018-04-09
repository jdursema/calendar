import React, { Component } from 'react';


class Month extends Component {
  constructor() {
    super();
    this.state = {
      Months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      Weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      currentMonth: '',
      currentMonthNumber: null
    }
  }

  componentWillMount() {
    let fullMonth = this.state.Months.find((month, index) => {
      return month.includes(this.props.month)
    })
    this.setState({currentMonth: fullMonth})
    }

  changeMonth (event){ 
    let monthIndex = this.state.Months.indexOf(this.state.currentMonth)
    if(event.target.value === 'back'){
      this.setState({currentMonth: this.state.Months[monthIndex-1] })
    } else {
      this.setState({currentMonth: this.state.Months[monthIndex+1] })
    }
  }

  

  render () {
    return (
      <div>
        <button onClick={(event) => this.changeMonth(event)} value='back'>Back</button>
        <h2>{this.state.currentMonth}</h2>
        <button onClick={(event) => this.changeMonth(event)} value='next'>Next</button>
        <table>

        </table>
      </div>
    )
  }

}

export default Month;