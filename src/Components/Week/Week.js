import React from 'react';

const Week = (props) => {
  console.log(props)
  const mappedDays= props.week.map((day) => {
    return <td>{day}</td>
  })
  return (
    <tr>
      {mappedDays}
    </tr>
  )
}

export default Week