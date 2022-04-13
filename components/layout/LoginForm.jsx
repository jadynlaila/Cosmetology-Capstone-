import React, {useState} from "react";
import { Input, UI, Fluid, Icon, Container, Header, Form, Label, Divider, Button} from "semantic-ui-react";


const LoginForm = () => {
    const [teacherSignedIn, setTeacherSignedIn] = useState(true)
    const [isFilled, setIsFilled] = useState(false)
    return <>
          <Header>Login</Header>
          {/* FORM FIELD */}
          <div className="form-container">
              <Form>
                <Form.Field>
                  <label>Username</label>
                  <input placeholder="Email" />
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
              {...isFilled ? ""  : " disabled"}
              positive
            />
          </footer>
        
    </>;
  };
  
export default LoginForm