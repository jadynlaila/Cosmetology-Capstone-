import React from "react";
import StudentDrop from "./StudentDrop";
import { Table,Form, Container, Button, Divider } from "semantic-ui-react";
import Image from "next/image";

const StudentProfile = () => {
  return (
    <>
      <Container>
        <Image
          className="logo profile-logo"
          src={"/bigChung.webp"}
          alt="logo"
          height="64"
          width="64"
          style="padding: 10px;"
        />

        <Form>
          <Form.Group inline>
            <Form.Field>
              <label>First & Last Name</label>
              <label>Email</label>
              <label>Teacher</label>
              <label>Hours</label>
            </Form.Field>
          </Form.Group>
        </Form>

        <br/>

        <Form>
          <Form.Group widths="equal">
            <Form.Field label="Name" placeholder="Name" />
            <Form.Field label="Email" placeholder="Email" />
            <Form.Field label="Teacher" placeholder="Teacher" />
            <Form.Field label="Hours" placeholder="Hours" />
          </Form.Group>
          
        </Form>
      </Container>
    </>
  );
};

export default StudentProfile;
