import axios from "axios";
import React, {useState} from "react";
import { baseURL } from "../../pages/util/baseURL";


import {
  Button,
  Header,
  Image,
  Modal,
  Checkbox,
  Form,
  Divider
} from "semantic-ui-react";
import { date } from "language-tags";

//* form will ONLY collect client info. this will not create a new visit at all, just a new client
//* the form is going to collect a name, email, address, phone number, dob, allergies, relevant medical issues  and then will have a drop down for advanced information
//* then we'll have a drop down if they want to enter the advanced client information
//* all the advanced client information can be found in the schema



// onclick button <button class="ui button">Show Modal</button>
const NewClientForm = () => {
  const [open, setOpen] = useState(false);
  const [errorMsg, seterrorMsg] = useState(null);
  const [openAdvancedInfo, setOpenAdvancedInfo] = useState(false)

  const [newClient, setNewClient] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    dob: Date,
    medicalInfo: '',
    allergies: '',
    hairCondition: '',
    scalpCondition: '',
    hairTexture: '',
    growthPatterns: '',
    hairDensity: '',
    hairPorosity: '',
    hairElasticity: '',
    hairLength: ''
  })

  const {name, email, address, phone, dob, medicalInfo, allergies, hairCondition, scalpCondition, hairTexture, growthPatterns, hairDensity, hairPorosity, hairElasticity, hairLength} = newClient
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setNewClient((prev) => ({ ...prev, [name]: value}));
  }
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      console.log(newClient);
      const res = await axios.post(`${baseURL}/api/v1/client`, {newClient})
      console.log(res.data);
      setOpen(false);
    }catch (error){
      console.log(error);
    }
  }

  return (
    <Modal
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    trigger={<div className="new-client"><h1>New Client</h1></div>}
    >
      <Modal.Header>New Client</Modal.Header>
      <Modal.Content>
        {/* FORM FIELD */}
        <div className="form-container">
          <Form>
            <Form.Field>
              <label>Name:</label>
              <input onChange={handleChange} name="name" placeholder="Name" value={name}/>
            </Form.Field>
            <Form.Field>
              <label>Email:</label>
              <input onChange={handleChange} name="email" placeholder="Email" value={email}  />
            </Form.Field>
            <Form.Field>
              <label>Address:</label>
              <input onChange={handleChange} name="address" placeholder="Address..." value={address} />
            </Form.Field>
            <Form.Field>
              <label>Phone Number:</label>
              <input onChange={handleChange} name="phone" placeholder="Phone Number..." value={phone} />
            </Form.Field>
            <Form.Field>
              <label>DOB:</label>
              <input onChange={handleChange} name="dob" placeholder="DOB..." value={dob} type="date" />
            </Form.Field>
            <Form.Field>
              <label>Allergies:</label>
              <input onChange={handleChange} name='allergies' placeholder='Allergies...' value={allergies} />
            </Form.Field>
            <Form.Field>
              <label>Medical Info:</label>
              <input onChange={handleChange} name='medicalInfo' placeholder='Relevant Medical Info...' value={medicalInfo} />
            </Form.Field>

            {/* make a button that changes a state from true to false
              make a check for if true then it shows the rest of the Form.fields
              */}

              <Button onClick={() => setOpenAdvancedInfo(!openAdvancedInfo)}>{!openAdvancedInfo ? "Open advanced Info" : "Close Advanced Info"}</Button>
              {openAdvancedInfo ? (<>
                <Divider />
                <Form.Field>
                  <label>Hair Condition</label>
                  <input onChange={handleChange} name='hairCondition' placeholder='Hair Condition' value={hairCondition} />
                </Form.Field>
                <Form.Field>
                  <label>Scalp Condition</label>
                  <input onChange={handleChange} name='scalpCondition' placeholder='Scalp Condition' value={scalpCondition} />
                </Form.Field>
                <Form.Field>
                  <label>Hair Texture</label>
                  <input onChange={handleChange} name='hairTexture' placeholder='Hair Texture' value={hairTexture} />
                </Form.Field>
                <Form.Field>
                  <label>Growth Patterns</label>
                  <input onChange={handleChange} name='growthPatterns' placeholder='Growth Patterns' value={growthPatterns} />
                </Form.Field>
                <Form.Field>
                  <label>Hair Density</label>
                  <input onChange={handleChange} name='hairDensity' placeholder='Hair Density' value={hairDensity} />
                </Form.Field>
                <Form.Field>
                  <label>Hair Porosity</label>
                  <input onChange={handleChange} name='hairPorosity' placeholder='Hair Porosity' value={hairPorosity} />
                </Form.Field>
                <Form.Field>
                  <label>Hair Elasticity</label>
                  <input onChange={handleChange} name='hairElasticity' placeholder='Hair Elasticity' value={hairElasticity} />
                </Form.Field>
                <Form.Field>
                  <label>Hair Length</label>
                  <input onChange={handleChange} name='hairLength' placeholder='Hair Length' value={hairLength} />
                </Form.Field>
              </>) : (<></>)}
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
  );
}


export default NewClientForm;
