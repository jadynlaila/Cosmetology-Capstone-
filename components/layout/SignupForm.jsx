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
// import {setOutOfFocus} from "../Signup/SlideInMenu"

const Signup = () => {
<<<<<<< HEAD
  const [teacherSignedIn, setTeacherSignedIn] = useState(true)
  const [outOfFocus, setOutOfFocus] = useState(true)

  return <>

        <Header>&nbsp;</Header>
        {/* FORM FIELD */}
        <div className="form-container">
          {teacherSignedIn ?
            <>
              <Label>
                <h3>
                  Who is your Teacher?
                </h3>
              </Label>
              <div style={{margin: "10px"}}>
              <TeacherDropdown />
              </div>
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
        <Divider fitted/>
        <footer>
          <Button
            content="Next"
            labelPosition="right"
            icon="arrow right"
            onClick={() => setOutOfFocus(true)}
            positive
          />
        </footer>

        <SlideInMenu/>
      
  </>;
=======
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
>>>>>>> 854c924ad0f7f13d8980337ab2ded1f3f5a3901b
};

export default Signup;
