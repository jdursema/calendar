import React, { Component } from 'react';


class Month extends Component {
  constructor() {
    super();
    this.state = {
      Months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      currentMonth: ''
    }
  }

  componentWillMount() {
    let fullMonth = this.state.Months.find((month) => {
      return month.includes(this.props.month)
    })
    this.setState({currentMonth: fullMonth})

    }

  render () {
    return (
      <div>
        <h2>{this.state.currentMonth}</h2>
      </div>
    )
  }

}

export default Month;