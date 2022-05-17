import React, {useState} from 'react'
import {Button, Form, Label} from 'semantic-ui-react'

const ClockInCard = () => {
    
    const [loading, setLoading] = useState(false)
    const [formLoading, setFormLoading] = useState(false)
    const [stylistHours, setStylistHours] = useState({
        s1Hours: "",
        s2Hours: "",
        s3Hours: "",
        s4Hours: ""
    })
    const [clockedIn, setClockedIn] = useState(true)


  return (
    <>
    {!clockedIn
      (
        <>
        <Form>
         <label>Clock In</label>
      <Form.Input
       required
       label="Time"
       placeholder="12:00am"
       name="time"
       value=""
       onChange=""
       icon="clock"
       iconPosition="left"
      />
      <Form.Input
       required
       label="Date"
       placeholder="dd/mm/yyyy"
       name="date"
       value=""
       onChange=""
       icon="calendar"
       iconPosition="left"
      />
      <Button icon="time" content="Clock In" type='submit' />
    </Form>
      </>
      )
    }

    <Form>
      <label>Clock Out</label>
    <Form.Input
       required
       label="Time"
       placeholder="12:00am"
       name="time"
       value=""
       onChange=""
       icon="clock"
       iconPosition="left"
      />
      <Form.Input
       required
       label="Date"
       placeholder="dd/mm/yyyy"
       name="date"
       value=""
       onChange=""
       icon="calendar"
       iconPosition="left"
      />
      <Button icon="time" content="Clock Out" type='submit' />
    </Form>
   
    </>
  )
}

export default ClockInCard