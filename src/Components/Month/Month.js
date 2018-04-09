import React, { Component } from 'react';
import './Month.css'
import Week from '../Week/Week'
import Day from '../Day/Day'


class Month extends Component {
  constructor() {
    super();
    this.state = {
      Months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      Weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      currentMonth: '',
      weeksArray: []
    }
  }

  componentWillMount() {
    let fullMonth = this.state.Months.find((month, index) => {
      return month.includes(this.props.month)
    })

    let daysArray =this.getDaysArray(fullMonth)


    this.setState({currentMonth: fullMonth, weeksArray: daysArray})
    }

  getDaysArray (month) {
    if(month === 'April'){
      return [[1,2,3,4,5,6,7], [8,9,10,11,12,13,14], [15,16,17,18,19,20,21], [22,23,24,25,26,27,28], [29, 30, null, null, null, null, null]]
    } else if (month === 'May'){
      return [[null, null, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18, 19], [20, 21, 22, 23, 24, 25, 26], [27, 28, 29, 30, 31, null, null]]
    } else if (month === 'March'){
      return [[null, null, null, null, 1, 2, 3], [4, 5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17], [18, 19, 20, 21, 22, 23, 24], [25, 26, 27, 28, 29, 30, null]]

    }
  }



  changeMonth (event){ 
    let monthIndex = this.state.Months.indexOf(this.state.currentMonth)
    if(event.target.value === 'back' && monthIndex >= 3){
      this.setState({currentMonth: this.state.Months[monthIndex-1], weeksArray: this.getDaysArray(this.state.Months[monthIndex-1]) })
    } else if (event.target.value === 'next' && monthIndex <= 3) {
      this.setState({currentMonth: this.state.Months[monthIndex+1], weeksArray: this.getDaysArray(this.state.Months[monthIndex+1]) })
    }
  }

  

  render () {
    let mappedWeekdays = this.state.Weekdays.map((day) => {
      return <td>{day}</td>
    })
    return (
      <div>
        <button onClick={(event) => this.changeMonth(event)} value='back'>Back</button>
        <h2>{this.state.currentMonth}</h2>
        <button onClick={(event) => this.changeMonth(event)} value='next'>Next</button>
        <table>
          <tr>
            {mappedWeekdays}
          </tr>
          <Week week= {this.state.weeksArray[0]}/>
          <Week week={this.state.weeksArray[1]}/>
          <Week week={this.state.weeksArray[2]}/>
          <Week week= {this.state.weeksArray[3]}/>
          <Week week= {this.state.weeksArray[4]}/>


        </table>
      </div>
    )
  }

}

export default Month;