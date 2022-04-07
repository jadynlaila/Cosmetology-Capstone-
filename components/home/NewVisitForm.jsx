import React from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Checkbox,
  Form,
  Divider,
} from "semantic-ui-react";


//* form will ONLY collect client info. this will not create a new visit at all, just a new client
//* the form is going to collect a name, email, address, phone number, dob, allergies, relevant medical issues  and then will have a drop down for advanced information
//* then we'll have a drop down if they want to enter the advanced client information
//* all the advanced client information can be found in the schema
// onclick button <button class="ui button">Show Modal</button>
const NewVisitForm = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<div className="new-visit"><h1>New Visit</h1></div>}
    >
      <Modal.Header>
          <h2>New Visit</h2>
          <div class="ui right aligned category search">
            <div class="ui icon input">
              <input class="prompt" type="text" placeholder="Search Clients"></input>
              <i class="search icon"></i>
            </div>
          </div>
      </Modal.Header>
      <Modal.Content>
        {/* FORM FIELD */}
        <Form>
          <div class="results">
            <>
              <div className="person up" id="person">
                <h5 className="name">Person Name</h5>
                <h5 className="email">PersonName@gmail.com</h5>
                <h5 className="phoneNumber">(123) 602-1234</h5>
              </div>
              <span className="underlined"></span>
              <div className="person up" id="person">
                <h5 className="name">Person Name</h5>
                <h5 className="email">PersonName@gmail.com</h5>
                <h5 className="phoneNumber">(123) 602-1234</h5>
              </div>
              <span className="underlined"></span>
              <div className="person up" id="person">
                <h5 className="name">Person Name</h5>
                <h5 className="email">PersonName@gmail.com</h5>
                <h5 className="phoneNumber">(123) 602-1234</h5>
              </div>
              <span className="underlined"></span>
              <div className="person up" id="person">
                <h5 className="name">Person Name</h5>
                <h5 className="email">PersonName@gmail.com</h5>
                <h5 className="phoneNumber">(123) 602-1234</h5>
              </div>
              <span className="underlined"></span>
              <div className="person up" id="person">
                <h5 className="name">Person NameMcNameNamerson</h5>
                <h5 className="email">PersonName@gmail.com</h5>
                <h5 className="phoneNumber">(123) 602-1234</h5>
              </div>
              <span className="underlined"></span>
              <div className="person up" id="person">
                <h5 className="name">Person Name</h5>
                <h5 className="email">PersonName@gmail.com</h5>
                <h5 className="phoneNumber">(123) 602-1234</h5>
              </div>
              <span className="underlined"></span>
              <div className="person up" id="person">
                <h5 className="name">Person Name</h5>
                <h5 className="email">PersonName@gmail.com</h5>
                <h5 className="phoneNumber">(123) 602-1234</h5>
              </div>
              <span className="underlined"></span>
              <div className="person up" id="person">
                <h5 className="name">Person NameMcNameNamerson</h5>
                <h5 className="email">PersonName@gmail.com</h5>
                <h5 className="phoneNumber">(123) 602-1234</h5>
              </div>
              <span className="underlined"></span>
              <div className="person up" id="person">
                <h5 className="name">Person Name</h5>
                <h5 className="email">PersonName@gmail.com</h5>
                <h5 className="phoneNumber">(123) 602-1234</h5>
              </div>
              <span className="underlined"></span>
            </>
          </div>
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
}

export default NewVisitForm;
