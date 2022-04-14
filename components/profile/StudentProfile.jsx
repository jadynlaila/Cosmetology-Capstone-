import React from "react";
import StudentDrop from "./StudentDrop";
import { Table,Form, Container, Button, Divider } from "semantic-ui-react";
import Image from "next/image";

const StudentProfile = () => {
  return (
    <>
      <div className="form-container">
        <Segment textAlign="center">
          <Image
            className="logo profile-logo"
            src={"/bigChung.webp"}
            alt="logo"
            height="180"
            width="180"
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

          <ClientDrop />
          <br />
          <ClientDrop />
          <br />
          <ClientDrop />
          <br />
        </Segment>
      </div>
    </>
  );
};

export default StudentProfile;
