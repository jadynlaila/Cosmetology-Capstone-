import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Checkbox,
  Form,
  Divider,
  Icon,
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
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
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
  useEffect(() => {
    const asyncFunction = async () => {


      const res = await axios.get(`${baseURL}/api/v1/client`);
      console.log('banana', res.data.clients);
      setResults(res.data.clients);
    }
    asyncFunction()
  }, [])
  //!for now it captures the clients email, so in the controller we're gonna have to use the client email to find the client from the models
  //!this can be reworked a different way if anyone thinks of something better, this is just how i did it for now

  const { preferredStylist, date, time, style, notes } = newVisit;

  const handleChange = async (e) => {
    const { value } = e.target;
    if (value === "") {
      // setText(value)
      const res = await axios.get(`${baseURL}/api/v1/client`);
      console.log('banana', res.data.clients);
      setResults(res.data.clients);
    }
    if (value) {
      setLoading(true)
      try {
        const res = await axios.get(`${baseURL}/api/v1/search/${value}`)

        if (res.data.length === 0) {
          setResults([])
          setLoading(false)
          console.log('test1', res.data);
        }
        setResults(res.data)
        console.log("test 2", res.data);

      } catch (error) {
        console.log("Error Searching", error);
      }
    }
    setLoading(false)
  }

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
        <div className="search-container">
          <input type="text" className="search-component" onChange={(e) => handleChange(e)} />
          <Icon name="search"/>
        </div>
        <div class="ui right aligned category search">
        </div>
      </Modal.Header>
      <Modal.Content>
        {/* FORM FIELD */}
        {results.map((client) => {
          return (
            <div class="results">
              <>
                <VisitFormItems name={client.name} email={client.email} phoneNumber={client.phoneNumber} id={client._id} setOpen={setOpen} />
                <span className="underlined"></span>
              </>
            </div>
          );
        })}

        {/* <div>
            {results.map((client) => {
                return (
                    <button key={client._id} onClick={(e) => {
                        e.preventDefault()
                        return <VisitFormItems name={client.name} email={client.email} phoneNumber={client.phoneNumber} id={client._id} setOpen={setOpen} />
                    }} className="button-upcomingClients">
                      <div class="results">
                        <VisitFormItems name={client.name} email={client.email} phoneNumber={client.phoneNumber} id={client._id} setOpen={setOpen} />
                      </div>
                    </button>
                )
            })}
        </div> */}
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
