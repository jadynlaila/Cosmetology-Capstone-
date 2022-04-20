import React, { useState, useEffect, useRef } from "react";
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
import VisitFormItems from './VisitFormItems';


// new file that will produce search results. 

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






  return (
    <Modal
      id="stuck-top-modal"
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

        {clients.map((client) => {
          return (
            <div class="results">
              <>
                <VisitFormItems name={client.name} email={client.email} phoneNumber={client.phoneNumber} id={client._id} setOpen={setOpen} />
                {/* we want to be able to toggle the form here */}
                {/* put the form here, have it hidden by the height element, the onclick will edit the height of the elements whose id = client id that is passed on through onclick ( the id will be set to client._id) */}

                <span className="underlined"></span>
              </>
            </div>
          );
        })}

      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        
      </Modal.Actions>
    </Modal>
  );
};

export default NewVisitForm;
