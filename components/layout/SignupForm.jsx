import React, {useState} from "react";
import { Input, UI, Fluid, Icon, Container, Header, Form, Label, Divider, Button} from "semantic-ui-react";
import SlideInMenu from "../Signup/SlideInMenu";
import TeacherDropdown from "../Signup/TeacherDropdown";
// import {setOutOfFocus} from "../Signup/SlideInMenu"

const Signup = () => {
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
};

export default Signup;
