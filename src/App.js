import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Month from './Components/Month/Month';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Month: '',
      Day: null,
      Year: null
    }
  }

  componentWillMount(){
    let date = (new Date).toDateString()
    let dateArray = date.split(' ')
    this.setState({Month: dateArray[1], Year: parseInt(dateArray[3]), Day: parseInt(dateArray[2])})
  }
  render() {
    return (
      <div className="App">
      <h1>Calendar</h1>
      <Month month = {this.state.Month}/>
      </div>
    );
  }
}

export default App;
