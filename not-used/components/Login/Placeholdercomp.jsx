import React, {useState} from "react";
import { Form, Image,Icon, Popup, Card, Rating, Modal } from "semantic-ui-react";

const Placeholdercomp = () => {
    const [open, setOpen] = useState(true)
  return (
    <div>
      {/* <Form>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" size="small"/>
        <Form.Input style={{color: "red"}}>Congratulations!</Form.Input>
        <Form.Input>Please check your Email for your PIN</Form.Input>
      </Form> */}
      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      closeIcon
      >
        <Modal.Header icon style={{ textAlign: "center" }}>
          <h1>Success</h1>
          
          <Icon
          name="check green"
          size="huge"
          />
        </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Your account has been successfully created. Please check your email
          for your PIN.
        </Modal.Description>
      </Modal.Content>
    </Modal>
    </div >
  );
};

export default Placeholdercomp;
