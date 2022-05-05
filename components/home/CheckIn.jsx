import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../pages/util/baseURL";
import { Modal, Form, Button } from "semantic-ui-react";

const CheckIn = ({ visit, setIsActive, isActive, checkIn }) => {
  const [open, setOpen] = useState(false);
  const [errorMsg, seterrorMsg] = useState(null);
  const [openAdvancedInfo, setOpenAdvancedInfo] = useState(false);

  const [checkInInfo, setCheckInInfo] = useState({
    pin,
    visitInfo: visit,
  });

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
            <h5 className="date">{visit.date.toString()}</h5>
          </div>
        }
      >
        <Modal.Header>Client Check In</Modal.Header>
        <Modal.Content>
          <div className="form-container">
            {visit.client.name && <div>Name: {visit.client.name}</div>}
            {visit.client.email && <div>Email: {visit.client.email}</div>}
            {visit.preferredStylist && (
              <div>Prefered Stylist: {visit.client.preferredStylist}</div>
            )}
            {visit.date && <div>Email: {visit.client.email}</div>}
            {visit.style && <div>Requested Style: {visit.style}</div>}
            {visit.notes && <div>Notes: {visit.notes}</div>}
            {visit.client.number && <div>Number: {visit.client.number}</div>}
            {visit.hairCondition && (
              <div>Hair Condition: {visit.hairCondition}</div>
            )}
            {visit.scalpCondition && (
              <div>Scalp Condition: {visit.scalpCondition}</div>
            )}
            {visit.hairTexture && <div>Hair Texture: {visit.hairTexture}</div>}
            {visit.growthPatterns && (
              <div>Growth Patterns: {visit.growthPatterns}</div>
            )}
            {visit.hairDensity && <div>Hair Density: {visit.hairDensity}</div>}
            {visit.hairPorosity && (
              <div>Hair Porosity: {visit.hairPorosity}</div>
            )}
            {visit.hairElasticity && (
              <div>Hair Elasticity: {visit.hairElasticity}</div>
            )}
            {visit.hairLength && <div>Hair Length: {visit.hairLength}</div>}
            {visit.allergies && <div>Allergies: {visit.allergies}</div>}
            {visit.medicalInfo && (
              <div>Relevant Medical Info: {visit.medicalInfo}</div>
            )}
            <Form>
              <Form.Field>
                {console.log(visit)}

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
