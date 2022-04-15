import React, { useState, useEffect } from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Checkbox,
  Form,
  Divider,
} from "semantic-ui-react";
import axios from "axios";
import { baseURL } from "../../pages/util/baseURL";
import SearchComp from "../layout/SearchComp";

//* form will ONLY collect client info. this will not create a new visit at all, just a new client
//* the form is going to collect a name, email, address, phone number, dob, allergies, relevant medical issues  and then will have a drop down for advanced information
//* then we'll have a drop down if they want to enter the advanced client information
//* all the advanced client information can be found in the schema
// onclick button <button class="ui button">Show Modal</button>
const NewVisitForm = () => {
  const [open, setOpen] = useState(false);
  const [clients, setClients] = useState([]);
  const [openNewVisitForm, setOpenNewVisitForm] = useState(false);

  const [newVisit, setNewVisit] = useState({
    preferredStylist: "",
    date: Date,
    time: Date,
    style: "",
    notes: "",
  });

  //!for now it captures the clients email, so in the controller we're gonna have to use the client email to find the client from the models
  //!this can be reworked a different way if anyone thinks of something better, this is just how i did it for now

  const { preferredStylist, date, time, style, notes } = newVisit;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVisit((prev) => ({ ...prev, [name]: value }));
  };

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

  const openForm = (id) => {
    // changes the height of the div with the id that is passed through params by the onclick button
  };

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

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <div className="new-visit">
          <h1>New Visit</h1>
        </div>
      }
    >
      <Modal.Header>
        <h2>New Visit</h2>
        <div class="ui right aligned category search">
          <SearchComp clients={clients} />
          {/* <div class="ui icon input">
            <input
              class="prompt"
              type="text"
              placeholder="Search Clients"
            ></input>
            <i class="search icon"></i>
          </div> */}
        </div>
      </Modal.Header>
      <Modal.Content>
        {/* FORM FIELD */}
        <Form>
          {clients.map((client) => {
            return (
              <div class="results">
                <>
                  <div
                    className="person up"
                    id={client._id}
                    onClick={() => openForm(client._id)}
                  >
                    <h5 className="name">{client.name}</h5>
                    <h5 className="email">{client.email}</h5>
                    <h5 className="phoneNumber">{client.phone}</h5>
                  </div>
                  <Form>
                    <Form.Field>
                      <label>Preferred Stylist:</label>
                      <input
                        onChange={handleChange}
                        name="preferredStylist"
                        placeholder="Preferred Stylist"
                        value={preferredStylist}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Date:</label>
                      <input
                        onChange={handleChange}
                        name="date"
                        placeholder="Date of Appointment"
                        value={date}
                        type='datetime-local'
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Time:</label>
                      <input
                        onChange={handleChange}
                        name="time"
                        placeholder="Time of Appointment"
                        value={time}
                        type="date"
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Style:</label>
                      <input
                        onChange={handleChange}
                        name="style"
                        placeholder="Style"
                        value={style}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Notes:</label>
                      <input
                        onChange={handleChange}
                        name="notes"
                        placeholder="Notes"
                        value={notes}
                      />
                    </Form.Field>
                  </Form>
                  <Button
                    content="Submit"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={handleSubmit}
                    positive
                  />
                  {/* we want to be able to toggle the form here */}
                  {/* put the form here, have it hidden by the height element, the onclick will edit the height of the elements whose id = client id that is passed on through onclick ( the id will be set to client._id) */}

                  <span className="underlined"></span>
                </>
                {/* {client._id == openForm(client._id) ? (<>hello</>) : (<>no</>)} */}
                {/* {openNewVisitForm ? (<> hello</>): (<> </>)} */}
                {/* check that says if client id equals whwat is returned from the openform , then the extra modal opens */}
              </div>
            );
          })}
        </Form>
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
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default NewVisitForm;
