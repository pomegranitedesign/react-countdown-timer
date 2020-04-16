import React, { useState } from 'react'

import './Event.css'

const Event = ({}) => {
  const [eventName, setEventName] = useState('Birthday')

  return (
    <div className="eventContainer">
      <p>
        Time Left Until <b>{eventName}</b>
      </p>
      <h1>21:23:45</h1>
    </div>
  )
}

export default Event
