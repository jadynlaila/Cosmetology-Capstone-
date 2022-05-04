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
import ClientProfile from "./ClientProfile";

const StudentProfile = () => {
  return (
    <>
      {/* <Segment
            textAlign="center"
            // style={{ borderTop: "solid 3rem #f3941c" }}
          > */}
      <div className="header">
        <h2>Student Profile</h2>
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
            <h1 style={{ margin: "auto", fontSize: "3.5rem" }}>Student Name</h1>
          </div>
          <Divider />

          <Form>
            <Form.Group widths="equal" style={{ margin: "auto" }}>
              <Form.Field
                style={{ display: "flex", justifyContent: "center" }}
                label="Email"
                placeholder="Email"
              />
              <Form.Field
                style={{ display: "flex", justifyContent: "center" }}
                label="Teacher"
                placeholder="Teacher"
              />
              <Form.Field
                style={{ display: "flex", justifyContent: "center" }}
                label="Hours"
                placeholder="Hours"
              />
            </Form.Group>
          </Form>

          <Divider />

          <Button style={{marginBottom:"2em"}}>Client 1</Button>
          {/* Temporary buttons, subject to change */}

          <ClientProfile />
          <br />
          <Button style={{marginBottom:"2em"}}>Client 2</Button>
          <br />
          <Button style={{marginBottom:"2em"}}>Client 3</Button>
          <br />

          <Button
            content="Next"
            labelPosition="right"
            icon="arrow right"
            onClick={() => setOutOfFocus(false)}
            positive
          />
        </div>
      </div>
      {/* </Segment> */}
    </>
  );
};



export default StudentProfile;
