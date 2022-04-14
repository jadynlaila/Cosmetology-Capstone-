import React, {useState, useEffect} from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Checkbox,
  Form,
  Divider,
} from "semantic-ui-react";
import axios from 'axios';
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
  const [openNewVisitForm, setOpenNewVisitForm] = useState(false)

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
    console.log(id);
    return id;
  }

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
                  <div className="person up" id={`person ${client._id}`} onClick={() => openForm(client._id)}>
                    <h5 className="name">{client.name}</h5>
                    <h5 className="email">{client.email}</h5>
                    <h5 className="phoneNumber">{client.phone}</h5>
                  </div>
                  <div>
                    
                  </div>
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
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default NewVisitForm;
