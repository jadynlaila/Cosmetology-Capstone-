import React from "react";
import StudentDrop from "./StudentDrop";
import {
  Form,
  Container,
  Button,
  Segment,
  Label,
  Header,
} from "semantic-ui-react";
import Image from "next/image";

const StudentProfile = () => {
  return (
    <>
      <Header>Signup</Header>
      <div className="form-container">
      <Segment textAlign="center">
        <Image
          className="logo profile-logo"
          src={"/bigChung.webp"}
          alt="logo"
          height="64"
          width="64"
          style="padding: 10px;"
        />

        <Form>
          <Form.Group widths="equal">
            <Form.Field label="Name" placeholder="Name" />
            <Form.Field label="Email" placeholder="Email" />
            <Form.Field label="Teacher" placeholder="Teacher" />
            <Form.Field label="Hours" placeholder="Hours" />
          </Form.Group>
        </Form>
        </Segment>
      </div>
    </>
  );
};

export default StudentProfile;
