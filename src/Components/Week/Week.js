import React from 'react';
import Day from '../Day/Day'

const Week = (props) => {
  const mappedDays= props.week.map((day, index) => {
    return <Day day={day} weekday={index} clickedDayFunction = {props.clickedDayFunction}/>
  })
  return (
    <tr>
      {mappedDays}
    </tr>
  )
}

export default Week