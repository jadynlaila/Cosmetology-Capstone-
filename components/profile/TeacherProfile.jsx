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
import IncomingStudents from "./IncomingStudents";
import StudentView from "./StudentView";


const TeacherProfile = () => {
  const [fullscreen, setFullscreen] = useState(false)

  return (
    <>
      <div className="profile-container">

        <div className="content">
          <div className="form-container">
            <div className="profile-header">
              <Image
                avatar
                src={"/defaultAvatar.jpg"}
                alt="logo"
                style={{
                  height: "180px",
                  width: "180px",
                  border: "solid 6px #cccddd",
                }}
              />
              <h1 style={{ margin: "auto", fontSize: "4rem" }}>Student Name</h1>
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


            {!fullscreen ?
              <div className="fullscreen-container">
                <div className="make-fullscreen">
                  <Button icon="expand" floated="right" onClick={() => {
                    setFullscreen(!fullscreen)
                  }}></Button>
                </div>




                <Grid>
                  <Grid.Column width="3" textAlign="center">
                    <div className="year session" style={{}}>
                      {/* {//!these will display the different years and sessions, can be created by the teacher and is just for their organization purposes} */}
                      <StudentDrop />
                      <br />
                      <StudentDrop />
                      <br />
                      <StudentDrop />
                      <br />
                      <Button icon='plus'>Add more</Button>
                    </div>
                  </Grid.Column>
                  <Grid.Column width="10">
                    <StudentView/>
                  </Grid.Column>
                  <Grid.Column width="3" textAlign="center">
                    <div className="incoming-students">
                      <IncomingStudents />
                    </div>
                  </Grid.Column>
                </Grid>
              </div> :
              <div className="fullscreen-container slide" style={{ zIndex: "2" }}
              >
                <div id="center-on-screen" style={{ width: "75vw !important" }}>
                  <div className="make-fullscreen">
                  </div>
                  <Grid>
                    <Grid.Row style={{}}>
                      <Button circular icon="close red large"
                        style={{ margin: '10px auto' }}
                        onClick={() => {
                          setFullscreen(!fullscreen)
                        }}>
                      </Button>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid style={{ marginLeft: "50px" }}>
                        <Grid.Column width="3" textAlign="center">
                          <div className="year session">
                            {/* {//!these will display the different years and sessions, can be created by the teacher and is just for their organization purposes} */}
                            <StudentDrop />
                            <br />
                            <StudentDrop />
                            <br />
                            <StudentDrop />
                            <br />
                          </div>
                        </Grid.Column>
                        <Grid.Column width="12">
                          <StudentView />
                        </Grid.Column>
                      </Grid>
                    </Grid.Row>
                  </Grid>



                </div>
              </div>
            }
          </div>
          <Divider />
        </div>
      </div>
      {/* <Divider /> */}


      {/* </Segment> */}
    </>
  );
};

export default TeacherProfile;
