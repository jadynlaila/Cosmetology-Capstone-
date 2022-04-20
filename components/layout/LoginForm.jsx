import React, { useState } from "react";
import { Input, UI, Fluid, Icon, Container, Header, Form, Label, Divider, Button } from "semantic-ui-react";
import StudentDropdown from "../Login/StudentDropdown";


const LoginForm = () => {
  const [teacherSignedIn, setTeacherSignedIn] = useState(true)
  const [isFilled, setIsFilled] = useState(false)
  return <>
    <Header>Your Info</Header>
    {/* FORM FIELD */}
    <div className="form-container">
      <Form>
        <Form.Field>
          <StudentDropdown/>
        </Form.Field>
        <Form.Field>
          <label>Password:</label>
          <input placeholder="Password" />
        </Form.Field>
      </Form>
    </div>
    <Divider fitted />
    <footer>
      <Button
        content="Next"
        labelPosition="right"
        icon="arrow right"
        {...isFilled ? "" : " disabled"}
        positive
      />
    </footer>


  </>;
};

export default LoginForm