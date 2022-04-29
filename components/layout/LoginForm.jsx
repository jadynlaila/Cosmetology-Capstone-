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
import StudentDropdown from "../Login/StudentDropdown";
// import router from "../../server/routes/signupRoutes";

const LoginForm = () => {
  const [teacherSignedIn, setTeacherSignedIn] = useState(true);
  const [isFilled, setIsFilled] = useState(false);
  return (
    <>
      <Header>Your Info</Header>
      {/* FORM FIELD */}
      <div className="form-container login-form-container">
        <Form>
          <Form.Field>
            <label>Username</label>
            <StudentDropdown />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
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
          {...(isFilled ? "" : " disabled")}
          positive
        />
      </footer>
    </>
  );
};

export default LoginForm;
