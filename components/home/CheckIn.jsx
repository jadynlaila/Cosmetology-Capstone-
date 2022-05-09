import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../pages/util/baseURL";
import { Modal, Form, Button } from "semantic-ui-react";
import { visitEachChild } from "typescript";

const CheckIn = ({ visit, setIsActive, isActive, checkIn }) => {
  const [open, setOpen] = useState(false);
  const [errorMsg, seterrorMsg] = useState(null);
  const [openAdvancedInfo, setOpenAdvancedInfo] = useState(false);

  const [checkInInfo, setCheckInInfo] = useState({
    pin,
    visitInfo: visit,
  });

  let date = new Date(visit.date).toString().split(':');
  date = date[0] + ':' + date[1];
  date = date.split(' ')
  date = date[0] + ' ' + date[1] + ' ' + date[2] + ' ' + date[4]
  const { pin } = checkInInfo;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckInInfo((prev) => ({ ...prev, [name]: value }));
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
        <Modal.Header>Client Check In</Modal.Header>
        <Modal.Content>
          <div className="form-container">
            {visit.client.name && <div>Name: {visit.client.name}</div>}
            {visit.client.email && <div>Email: {visit.client.email}</div>}
            {visit.preferredStylist && (
              <div>Preferred Stylist: {visit.preferredStylist}</div>
            )}
            {visit.date && <div>Email: {visit.client.email}</div>}
            {visit.style && <div>Requested Style: {visit.style}</div>}
            {visit.notes && <div>Notes: {visit.notes}</div>}
            {visit.client.number && <div>Number: {visit.client.number}</div>}
            {visit.client.hairCondition && (
              <div>Hair Condition: {visit.client.hairCondition}</div>
            )}
            {visit.client.scalpCondition && (
              <div>Scalp Condition: {visit.client.scalpCondition}</div>
            )}
            {visit.client.hairTexture && <div>Hair Texture: {visit.client.hairTexture}</div>}
            {visit.client.growthPatterns && (
              <div>Growth Patterns: {visit.client.growthPatterns}</div>
            )}
            {visit.client.hairDensity && <div>Hair Density: {visit.client.hairDensity}</div>}
            {visit.client.hairPorosity && (
              <div>Hair Porosity: {visit.client.hairPorosity}</div>
            )}
            {visit.client.hairElasticity && (
              <div>Hair Elasticity: {visit.client.hairElasticity}</div>
            )}
            {visit.client.hairLength && <div>Hair Length: {visit.client.hairLength}</div>}
            {visit.client.allergies && <div>Allergies: {visit.client.allergies}</div>}
            {visit.client.medicalInfo && (
              <div>Relevant Medical Info: {visit.client.medicalInfo}</div>
            )}
            <Form>
              <Form.Field>

                <label>Pin</label>

                <input
                  onChange={handleChange}
                  name="pin"
                  placeholder="Enter Pin"
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
            onClick={() => checkIn(checkInInfo, setOpen)}
            //onSubmit={handleSubmit}
            positive
          />
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default CheckIn;
