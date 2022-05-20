import React from "react";
import { Form, Image, Popup, Card, Rating, Button } from "semantic-ui-react";

const Placeholdercomp = () => {
  return (
    <div>
      {/* <Form>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" size="small"/>
        <Form.Input style={{color: "red"}}>Congratulations!</Form.Input>
        <Form.Input>Please check your Email for your PIN</Form.Input>
      </Form> */}

      <Card style={{ backgroundColor: "orange", width: "30em", margin: "auto" }}>
        <Image
          src="https://media.istockphoto.com/vectors/thumb-up-winking-emoticon-vector-id1015429508"
          // ^  Just a placeholder, thought it was funny lol
          size="small"
          alt="img"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <Card.Content>
          <Card.Description>
            Congratulations
            <br />
            Your account has been successfully created. Please check your email
            for your PIN.

            <Button>Go To Profile</Button>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Placeholdercomp;
