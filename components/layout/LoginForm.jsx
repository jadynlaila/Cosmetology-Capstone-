import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Input,
  UI,
  Fluid,
  Icon,
  Container,
  Header,
  Label,
  Divider,
  Button,
  Form
} from "semantic-ui-react";
import { setToken } from "../../pages/util/authUser";
import { baseURL } from "../../pages/util/baseURL";
import StudentDropdown from "../Login/StudentDropdown";
// import router from "../../server/routes/signupRoutes";

const LoginForm = () => {
  const [teacherSignedIn, setTeacherSignedIn] = useState(true);
  const [isFilled, setIsFilled] = useState(false);
  const [formLoading, setFormLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const [loginPin, setLoginPin] = useState({
    pin: ""
  })

  const { pin } = loginPin

  const handleChange = (e) => {
    const { name, value } = e.target;
  
      setLoginPin((prev) => ({ ...prev, [name]: value }))
      console.log(pin);
  

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true)
    try {
      const res = await axios.post(`${baseURL}/api/v1/signup/login`, {loginPin})
      console.log(res.data);
      setToken(res.data)
      console.log("Login", res.data);
    } catch (error) {
      console.log("Error", error);
    }
    setFormLoading(false)
  }

  return (
    <>
      <Header>Check In</Header>
      {/* FORM FIELD */}
      <div className="form-container login-form-container">
        <Form loading={formLoading} onSubmit={handleSubmit}>
          {/* <Form.Field>
            <label>Username</label>
            <StudentDropdown />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="Password" />
          </Form.Field> */}
          <Form.Input
            required
            label="Pin"
            placeholder="xxxx"
            name="pin"
            value={pin}
            onChange={handleChange}
            icon={{
              name: showPassword ? "eye slash" : "eye",
              link: true,
              circular: true,
              onClick: () => {
                setShowPassword(!showPassword)
              }
            }}
            type={showPassword ? "text" : "password"}
            iconPosition="right"
          />
      <Divider/>
          <Button icon="signup" content="Login" type="submit"  />
        </Form>
      </div>
      {/* <footer>
        <Button
          content="Next"
          labelPosition="right"
          icon="arrow right"
          {...(isFilled ? "" : " disabled")}
          positive
        />
      </footer> */}
    </>
  );
};

export default LoginForm;
