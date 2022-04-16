import React from "react";
import StudentDrop from "./StudentDrop";
import {
  Table,
  Form,
  Container,
  Button,
  Divider,
  Segment,
  Image
} from "semantic-ui-react";
import ClientDrop from "./ClientDrop";

const StudentProfile = () => {
  return (
    <>
    <div className="content">
      <div className="form-container" >
        <Segment textAlign="center" style={{"border-top":"solid 3rem #f3941c"}}>
          <Image
            avatar
            src={"/bigChung.webp"}
            alt="logo"
            style={{height:"180px", width: "180px"}}
          />

          <Form>
            <Form.Group widths="equal">
              <Form.Field label="Name" placeholder="Name" />
              <Form.Field label="Email" placeholder="Email" />
              <Form.Field label="Teacher" placeholder="Teacher" />
              <Form.Field label="Hours" placeholder="Hours" />
            </Form.Group>
          </Form>

          <ClientDrop />
          <br />
          <ClientDrop />
          <br />
          <ClientDrop />
          <br />
        </Segment>
      </div>
      </div>
    </>
  );
};

export default StudentProfile;
