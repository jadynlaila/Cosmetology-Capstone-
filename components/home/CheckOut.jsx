import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../pages/util/baseURL";
import { Modal, Form, Button } from "semantic-ui-react";

const CheckOut = ({ visit, setIsActive, isActive, checkOut }) => {
  const [open, setOpen] = useState(false);
  const [errorMsg, seterrorMsg] = useState(null);
  const [openAdvancedInfo, setOpenAdvancedInfo] = useState(false);

  const [checkOutInfo, setCheckOutInfo] = useState({
    pin,
    visitInfo: visit,
  });

  const { pin } = checkOutInfo;
  let date = new Date(visit.date).toString().split(':');
  date = date[0] + ':' + date[1];
  date = date.split(' ')
  date = date[0] + ' ' + date[1] + ' ' + date[2] + ' ' + date[4]



  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckOutInfo((prev) => ({ ...prev, [name]: value }));
    console.log(visit.date);
    console.log(visit.date.toString());
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
          >
            <h5 className="name">{visit.client.name}</h5>
            <h5 className="email">{visit.client.email}</h5>
            <h5 className="date">{date.toString()}</h5>
          </div>
        }
      >
        <Modal.Header>Client Check Out</Modal.Header>
        <Modal.Content>
          <div className="form-container">
            <Form>
              <Form.Field>
                <label>Stylist Pin</label>
                <input
                  onChange={handleChange}
                  name="pin"
                  placeholder="1234"
                  value={pin}
                  tabIndex="0"
                  autoFocus
                />
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
            onClick={() => checkOut(checkOutInfo, setOpen)}
            //onSubmit={handleSubmit}
            positive
          />
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default CheckOut;
