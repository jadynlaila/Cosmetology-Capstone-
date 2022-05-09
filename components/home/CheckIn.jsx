import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../pages/util/baseURL";
import { Modal, Form, Button, Dropdown, Icon} from "semantic-ui-react";
import { visitEachChild } from "typescript";

const CheckIn = ({ visit, setIsActive, isActive, checkIn }) => {
  const [open, setOpen] = useState(false);
  const [errorMsg, seterrorMsg] = useState(null);
  const [openAdvancedInfo, setOpenAdvancedInfo] = useState(false);
  const [manualDropdownOpen, setManualDropdownOpen] = useState(false)
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
          <div className="checkIn-form-container">
            <div className="manual-dropdown"
            >
              {!manualDropdownOpen ?
              <> 
              <Icon name="caret right"  onClick={() => {
                setManualDropdownOpen(!manualDropdownOpen)
              }}></Icon> </>:<>
              
              <Icon name="caret down" 
              onClick={() => {
                setManualDropdownOpen(!manualDropdownOpen)

              }}
              />
              {visit.client.name && <div className="details-checkIn"> <div> Name:</div> <div> {visit.client.name}</div></div>}
              {visit.client.email && <div className="details-checkIn"> <div> Email:</div> <div> {visit.client.email}</div></div>}
              {visit.preferredStylist && (
                <div className="details-checkIn"> <div> Preferred Stylist:</div> <div>{visit.preferredStylist}</div></div>
              )}
              {visit.date && <div className="details-checkIn"> <div> Email:</div> <div>{visit.client.email}</div></div>}
              {visit.style && <div className="details-checkIn"> <div> Requested Style:</div> <div>{visit.style}</div></div>}
              {visit.notes && <div className="details-checkIn"> <div> Notes: </div> <div>{visit.notes}</div></div>}
              {visit.client.number && <div className="details-checkIn" > <div> Number:</div> <div>{visit.client.number}</div></div>}
              {visit.client.hairCondition && (
                <div className="details-checkIn"> <div>Hair Condition:</div> <div> {visit.client.hairCondition}</div></div>
              )}
              {visit.client.scalpCondition && (
                <div className="details-checkIn"> <div> Scalp Condition:</div> <div>{visit.client.scalpCondition}</div></div>
              )}
              {visit.client.hairTexture && <div className="details-checkIn"> <div> Hair Texture:</div> <div> {visit.client.hairTexture}</div></div>}
              {visit.client.growthPatterns && (
                <div className="details-checkIn"> <div> Growth Patterns:</div> <div> {visit.client.growthPatterns}</div></div>
              )}
              {visit.client.hairDensity && <div className="details-checkIn"> <div> Hair Density:</div> <div> {visit.client.hairDensity}</div></div>}
              {visit.client.hairPorosity && (
                <div className="details-checkIn"> <div> Hair Porosity: </div> <div> {visit.client.hairPorosity}</div></div>
              )}
              {visit.client.hairElasticity && (
                <div className="details-checkIn"> <div> Hair Elasticity:</div> <div>{visit.client.hairElasticity}</div></div>
              )}
              {visit.client.hairLength && <div className="details-checkIn"> <div> Hair Length:</div> <div>{visit.client.hairLength}</div></div>}
              {visit.client.allergies && <div className="details-checkIn"> <div> Allergies:</div> <div>{visit.client.allergies}</div></div>}
              {visit.client.medicalInfo && (
                <div className="details-checkIn"><div>Relevant Medical Info:</div>  <div>{visit.client.medicalInfo}</div></div>
              )}
              </>
              }
              </div>
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
