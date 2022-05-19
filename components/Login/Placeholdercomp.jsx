import React from "react";
import { Form, Image, Popup, Card, Rating } from "semantic-ui-react";

const Placeholdercomp = () => {
  return (
    <div>
      {/* <Form>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" size="small"/>
        <Form.Input style={{color: "red"}}>Congratulations!</Form.Input>
        <Form.Input>Please check your Email for your PIN</Form.Input>
      </Form> */}

      <Card style={{backgroundColor: "#f2f2f2"}}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png"
          size="small"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <Card.Content>
          <Card.Header style={{ textAlign: "center" }}>
            Congratulations!
          </Card.Header>
          <Card.Description>
            Your account has been successfully created. Please check your email
            for your PIN.
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Placeholdercomp;
