import React from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Checkbox,
  Form,
} from "semantic-ui-react";

//* form will ONLY collect client info. this will not create a new visit at all, just a new client
//* the form is going to collect a name, email, address, phone number, dob, allergies, relevant medical issues  and then will have a drop down for advanced information
//* then we'll have a drop down if they want to enter the advanced client information
//* all the advanced client information can be found in the schema
// onclick button <button class="ui button">Show Modal</button>
const NewClientForm = () => {
  const [open, setOpen] = React.useState(false)
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
              <input placeholder="Name" />
            </Form.Field>
            <Form.Field>
              <label>Email:</label>
              <input placeholder="Last Name" />
            </Form.Field>
            <Form.Field>
              <label>Address:</label>
              <input placeholder="Address..." />
            </Form.Field>
            <Form.Field>
              <label>Phone Number:</label>
              <input placeholder="Phone Number..." />
            </Form.Field>
            <Form.Field>
              <label>DOB:</label>
              <input placeholder="DOB..." />
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
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default NewClientForm;
