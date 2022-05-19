import React, { useState, useEffect, useRef } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import { baseURL } from "../../pages/util/baseURL";

const VisitFormItems = ({ client, setOpen, id }) => {
  const [isActive, setIsActive] = useState(false);
  const [clients, setClients] = useState([]);
  const [openNewVisitForm, setOpenNewVisitForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVisit((prev) => ({ ...prev, [name]: value }));
  };

  const [newVisit, setNewVisit] = useState({
    preferredStylist: "",
    date: Date,
    style: "",
    notes: "",
    clientId: id,
  });

  const { preferredStylist, date, style, notes } = newVisit;

  useEffect(() => {
    const getClients = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/v1/client`);
        setClients(res.data.clients);
      } catch (error) {
        console.log(error);
      }
    };
    getClients();
  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      console.log(newVisit);
      const res = await axios.post(`${baseURL}/api/v1/visit`, { newVisit });
      console.log(res.data);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  
};

  const handleClick = async (req, res) => {
    setIsActive(!isActive);
    console.log(client.name, client.email, client.phone);
  };

  return (
    <>
      <div className="person up" onClick={() => handleClick()}>
        <h5 className="name">{client.name}</h5>
        <h5 className="email">{client.email}</h5>
        <h5 className="phoneNumber">{client.phoneNumber}</h5>
      </div>

      {isActive ? (
        <div className="scaling">
          <Form className="transition-person">
            <Form.Field>
              <label>Preferred Stylist:</label>
              <input
                required="true"
                onChange={handleChange}
                name="preferredStylist"
                placeholder="Preferred Stylist"
                value={preferredStylist}
              />
            </Form.Field>
            <Form.Field>
              <label>Date:</label>
              <input
                required="true"
                onChange={handleChange}
                name="date"
                // placeholder="Date of Appointment" does nothing anymore
                value={date}
                type="datetime-local"
                required="true"
              />
            </Form.Field>
            <Form.Field>
              <label>Style:</label>
              <input
                required="true"
                onChange={handleChange}
                name="style"
                placeholder="Style"
                value={style}
              />
            </Form.Field>
            <Form.Field>
              <label>Notes:</label>
              <input
                required="true"
                onChange={handleChange}
                name="notes"
                placeholder="Notes"
                value={notes}
              />
            </Form.Field>
            <div className="submit-button-container" style={{ height: "50px" }}>
              <Button
                // right
                style={{ margin: " 0 10px 10px 10px" }}
                content="Submit"
                floated="right"
                icon="checkmark"
                onClick={handleSubmit}
                positive
              />
            </div>
          </Form>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default VisitFormItems;
