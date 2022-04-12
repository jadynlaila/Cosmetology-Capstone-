import React, { useState } from "react";
import { Grid, Form, Divider, Button, Icon, Ui, Fluid, Input, Container, Modal, Dropdown, Header, Content, Actions, Label } from "semantic-ui-react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Signup from "../components/layout/signup";
import NumPad from "../components/layout/numpad";
import TeacherDropdown from "../components/Signup/Dropdown";




const signup = () => {
  const [teacherSignedIn, setTeacherSignedIn] = useState(true)
  return (
    <>
      <Navbar />

      <div className="signupPage">
        <Header>Signup</Header>
        {/* FORM FIELD */}
        <div className="form-container">
          {teacherSignedIn ?
            <>
              <Label>
                <h3>
                  Who is your Teacher?
                </h3>
              </Label>
              <TeacherDropdown />
            </>
            :
            <Form>
              <Form.Field>
                <label>Email:</label>
                <input placeholder="Email" />
              </Form.Field>
              <Form.Field>
                <label>Password:</label>
                <input placeholder="Password" />
              </Form.Field>
              <Form.Field>
                <label>Phone Number:</label>
                <input placeholder="Phone Number..." />
              </Form.Field>
              <Form.Field>
                <label>DOB:</label>
                <input placeholder="DOB..." />
              </Form.Field>
            </Form>
          }
        </div>
        <Divider />
        <footer>
          <Button
            content="Next"
            labelPosition="right"
            icon="arrow right"
            // onClick={() => setOpen(false)}
            positive
          />
        </footer>
      </div>
    </>
  );
};

export default signup;
