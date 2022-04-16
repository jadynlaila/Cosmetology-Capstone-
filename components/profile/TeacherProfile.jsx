import React from "react";
import StudentDrop from "./StudentDrop";
import {
  Table,
  Form,
  Container,
  Button,
  Divider,
  Segment,
  Image,
} from "semantic-ui-react";
import ClientDrop from "./ClientDrop";

const TeacherProfile = () => {
  return (
    <>
      <div className="content">
        <div className="form-container">
          <Segment
            textAlign="center"
            style={{ borderTop: "solid 3rem #f3941c" }}
          >
            <Image
              avatar
              src={"/bigChung.webp"}
              alt="logo"
              style={{
                height: "180px",
                width: "180px",
                border: "solid 5px #f3941c",
              }}
            />

            <Divider />

            <Form>
              <Form.Group widths="equal">
                <Form.Field label="Name" placeholder="Name" />
                <Form.Field label="Email" placeholder="Email" />
              </Form.Group>
            </Form>

            <Divider />

            <StudentDrop />
            <br />
            <StudentDrop />
            <br />
            <StudentDrop />
            <br />
          </Segment>
        </div>
      </div>
    </>
  );
};

export default TeacherProfile;
