import React from 'react';
import {Form} from 'semantic-ui-react';


//* form will ONLY collect client info. this will not create a new visit at all, just a new client
//* the form is going to collect a name, email, address, phone number, dob, allergies, relevant medical issues  and then will have a drop down for advanced information
//* then we'll have a drop down if they want to enter the advanced client information
//* all the advanced client information can be found in the schema

const NewClientForm = () => {
  return (
    <Form>
    <Form.Group>
      <Form.Input label='Full name' placeholder='Full Name' width={6} required />
      <Form.Input label='Email' placeholder='Email' width={4} required />
      <Form.Input label='Phone Number' placeholder='Phone Number' width={6} required/>
    </Form.Group>
    <Form.Group>
      <Form.Input placeholder='Address' width={2} />
      <Form.Input placeholder='DOB' width={12} />
      <Form.Input placeholder='Allergies' width={2} />
    </Form.Group>
    <Form.Group>
      <Form.Input placeholder='Relevant Medical Info' width={8} />
      <Form.Input placeholder='Notes' width={6} />
      <Form.Input placeholder='2 Wide' width={2} />
    </Form.Group>
  </Form>
  )
}

export default NewClientForm