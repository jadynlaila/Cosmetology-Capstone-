import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import StudentDrop from "./StudentDrop";
import {
  Search,
  Grid,
  Table,
  Form,
  Container,
  Button,
  Divider,
  Segment,
  Image,
  Modal,
  Icon,
} from "semantic-ui-react";
import ClientDrop from "./ClientDrop";
import ClientProfile from "./ClientProfile";

const StudentProfile = ({ user }) => {
  console.log(`student profile user`, user);

  // const [isActive, setIsActive] = useState(false);
  // const [outOfFocus, setOutOfFocus] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  return (
    <>
      {/* <Segment
            textAlign="center"
            // style={{ borderTop: "solid 3rem #f3941c" }}
          > */}
      {/* <div className="header">
        <h2>Student Profile</h2>
      </div> */}
      <div className="profile-container">
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
              <h1 style={{ margin: "auto", fontSize: "4rem" }}>{user.name}</h1>
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

            {/* Temporary buttons, subject to change */}

            {!fullscreen ? (
              <div className="fullscreen-container">
                <div className="make-fullscreen">
                  <Button
                    icon="expand"
                    floated="right"
                    onClick={() => {
                      setFullscreen(!fullscreen);
                    }}
                  ></Button>
                </div>

                <Grid>
                  <Grid.Column width="3" textAlign="center">
                    {user.clients.map((client) => {
                      return (
                        <div
                          className="clientName"
                          style={{ marginBottom: "2em" }}
                        >
                          {client.name}
                        </div>
                      );
                    })}
                  </Grid.Column>
                  
                  <Grid.Column floated="right" width="13">
                    <ClientProfile />
                  </Grid.Column>
                </Grid>
              </div>
            ) : (
              <div
                className="fullscreen-container slide"
                style={{ zIndex: "2" }}

                // onClick={() => {
                //   setFullscreen(!fullscreen)
                // }}
              >
                <div
                  id="center-on-screen"
                  style={{ margin: "auto", width: "100vw !important" }}
                >
                  <Grid style={{ margin: "auto" }}>
                    {/* <Grid.Column  floated="right" width="16"> */}
                    <Grid.Row style={{}}>
                      <Button
                        circular
                        icon="close red large"
                        style={{ margin: "10px auto" }}
                        onClick={() => {
                          setFullscreen(!fullscreen);
                        }}
                      ></Button>
                      <Search
                        style={{
                          position: "absolute",
                          right: "40px",
                          top: "50px",
                        }}
                      ></Search>
                    </Grid.Row>
                    <ClientProfile />
                    {/* </Grid.Column> */}
                  </Grid>
                </div>
              </div>
            )}
            <Button
              content="Next"
              labelPosition="right"
              icon="arrow right"
              // onClick={() => setOutOfFocus(false)}
              positive
            />
          </div>
          <Divider />
        </div>
      </div>
      {/* </Segment> */}
    </>
  );
};

export default StudentProfile;
