import React, { useState } from "react";
import {
  Input,
  UI,
  Fluid,
  Icon,
  Container,
  Header,
  Form,
  Label,
  Divider,
  Button,
} from "semantic-ui-react";
import TeacherDropdown from "../Signup/TeacherDropdown";

const Signup = () => {
  const [teacherSignedIn, setTeacherSignedIn] = useState(true);
  return (
    <>
      <Header>&nbsp;</Header>
      {/* FORM FIELD */}
      <div className="form-container">
        {teacherSignedIn ? (
          <>
            <Label>
              <h3>Who is your Teacher?</h3>
            </Label>
            <TeacherDropdown />
          </>
        ) : (
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
        )}
      </div>
      <Divider fitted />
      <footer>
        <Button content='u a teacher my guy?' labelPosition="left" icon="lightbulb"/>
        <Button
          content="Next"
          labelPosition="right"
          icon="arrow right" 
          // onClick={() => setOpen(false)}
          positive
        />
      </footer>
    </>
  );
};

export default Signup;
