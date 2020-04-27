import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const _datePickerConfigs = {
  showTimeSelect: true,
  timeFormat: 'HH:mm',
  timeIntervals: 15,
  minDate: new Date(),
  dateFormat: 'MMMM d, yyyy. h:mm aa',
  timeCaption: 'Time',
  showDisabledMonthNavigation: true,
}

const AddEvent = ({}) => {
  const [eventName, setEventName] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const handleSubmitEvent = (event) => {
    event.preventDefault()
  }

  const handleClear = () => {
    setEventName('')
    setStartDate(new Date())
    setEndDate(new Date())
  }

  return (
    <div className="container">
      <h1 className="display-4">Add a New Event</h1>

      <form className="form-group mt-5" onSubmit={handleSubmitEvent}>
        <label>Event Name</label>
        <input
          type="text"
          placeholder="Peel some apples..."
          className="form-control"
          value={eventName}
          onChange={(event) => setEventName(event.target.value)}
        />

        <div className="mt-4">
          <label>Start Date</label>
          <DatePicker
            {..._datePickerConfigs}
            onChange={(newDate) => setStartDate(newDate)}
            placeholderText="Start Date"
            selected={startDate}
            className="ml-2 pl-1"
          />
        </div>

        <div>
          <label>End Date</label>
          <DatePicker
            {..._datePickerConfigs}
            onChange={(newDate) => setEndDate(newDate)}
            placeholderText="End Date"
            selected={endDate}
            className="ml-3 pl-1 mt-2"
          />
        </div>

        <div className="mt-5">
          <button className="btn btn-success btn-block">Add Event</button>
          <button
            className="btn btn-danger btn-block mt-2"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddEvent
