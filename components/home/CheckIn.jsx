import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../pages/util/baseURL";
import { Modal, Form, Button } from "semantic-ui-react";

const CheckIn = ({visit, setIsActive, isActive, checkIn}) => {
  const [open, setOpen] = useState(false);
  const [errorMsg, seterrorMsg] = useState(null);
  const [openAdvancedInfo, setOpenAdvancedInfo] = useState(false);

  const [checkInInfo, setCheckInInfo] = useState({
    pin,
    visitInfo: visit
  })

  const {pin} = checkInInfo
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setCheckInInfo((prev) => ({ ...prev, [name]: value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(checkInInfo);
      const res = await axios.put(`${baseURL}/api/v1/visit/checkIn`, { checkInInfo });
      console.log(res.data);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        // className="client-form-scroll"
        id="check-in"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <div
            className="person up"
            onClick={() => checkIn(visit, setIsActive, isActive)}
          >
            <h5 className="name">{visit.client.name}</h5>
            <h5 className="email">{visit.client.email}</h5>
            <h5 className="date">{visit.date}</h5>
          </div>
        }
      >
        <Modal.Header>Client Check In</Modal.Header>
        <Modal.Content>
          <div className="form-container">
            <Form>
            <Form.Field>
              <label>Pin</label>
              <input onChange={handleChange} name="pin" placeholder="Enter Pin" value={pin} tabIndex="0" autoFocus />
            </Form.Field>
            </Form>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            
            content="Submit"
            labelPosition="right"
            icon="checkmark"
            onClick={handleSubmit}
            //onSubmit={handleSubmit}
            positive
          />
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default CheckIn;
