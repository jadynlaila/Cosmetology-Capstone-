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
      <div className="header">
        <h2>Teacher Profile</h2>
      </div>
      <div className="content">
        <div className="form-container">
          <div className="profile-header">
            <Image
              avatar
              src={"/bigChung.webp"}
              alt="logo"
              style={{
                height: "180px",
                width: "180px",
                border: "solid 6px #cccddd",
              }}
            />
            <h1 style={{ margin: "auto", fontSize: "3.5rem" }}>Teacher Name</h1>
          </div>
          <Divider />

          <Form>
            <Form.Group widths="equal">
              <Form.Field label="Email" placeholder="Email" />
              <Form.Field label="Teacher" placeholder="Teacher" />
              <Form.Field label="Hours" placeholder="Hours" />
            </Form.Group>
          </Form>

          <Divider />

          <StudentDrop />
          <br />
          <StudentDrop />
          <br />
          <StudentDrop />
          <br />
        </div>
      </div>
      {/* </Segment> */}
    </>
  );
};

export default TeacherProfile;
