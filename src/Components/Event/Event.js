import React, { useState } from 'react'
import { Button } from 'antd'

import './Event.css'

const Event = ({}) => {
  const [eventName, setEventName] = useState('Birthday')
  const [timeFormat, setTimeFormat] = useState('default')

  const handleSwitchTimeFormat = (newFormat) => setTimeFormat(newFormat)

  return (
    <div className="eventContainer">
      <p className="timeLeftText">
        Time Left Until <b>{eventName}</b>
      </p>

      <h1 className="time">21:23:45</h1>

      <div className="timeButtons">
        <Button
          type={timeFormat === 'default' ? 'primary' : 'ghost'}
          onClick={() => handleSwitchTimeFormat('default')}
        >
          Default Format
        </Button>

        <Button
          type={timeFormat === 'default' ? 'ghost' : 'primary'}
          onClick={() => handleSwitchTimeFormat('milliseconds')}
        >
          Milliseconds
        </Button>
      </div>

      <div className="controls">
        <Button type="danger" className="resetButton">
          Delete Event
        </Button>
      </div>
    </div>
  )
}

export default Event
