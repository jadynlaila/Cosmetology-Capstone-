import React, { useState } from 'react'
import { Header, Label, Button, Divider, Form, Dropdown, Icon } from 'semantic-ui-react'



const SlideInMenu = ({ outOfFocus, setOutOfFocus, isTeacher, setIsTeacher }) => {
  return (
    <>
        <div className="slide" style={{ zIndex: !outOfFocus || isTeacher ? "5" : "-1" }}>
      {!isTeacher ?
          <div id="slideInModal" style={{ marginRight: outOfFocus ? "3000px" : "0px" }}>
            <Header>Student</Header>
            <div className="form-container">
              <Form>
              <Form.Field>
                  <label>Email</label>
                  <input placeholder="Example@west-mec.org" />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input placeholder="Password" />
                </Form.Field>
                <Form.Field>
                  <label>Phone Number</label>
                  <input placeholder="(123)456-7890" />
                </Form.Field>
                <Form.Field>
                  <label>Date of Birth</label>
                  <input type="date" placeholder="mm/dd/yyyy" />
                </Form.Field>
              </Form>
            </div>
            <Divider />
            <footer>
              <Button
                content="Back"
                labelPosition="left"
                icon="arrow left"
                onClick={() => setOutOfFocus(true)}
                negative

              />
              <Button
                content="Next"
                labelPosition="right"
                icon="arrow right"

                positive
              />
            </footer>
          </div>

        :
          <div id="slideInModal" style={{ marginRight: !isTeacher ? "3000px" : "0px" }}>
            <Header>Teacher</Header>
            <div className="form-container">
              <Form>
                <Form.Field>
                  <label>Email</label>
                  <input placeholder="Example@west-mec.org" />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input placeholder="Password" />
                </Form.Field>
                <Form.Field>
                  <label>Phone Number</label>
                  <input placeholder="(123)456-7890" />
                </Form.Field>
                <Form.Field>
                  <label>Date of Birth</label>
                  <input type="date" placeholder="mm/dd/yyyy" />
                </Form.Field>
                <Form.Field>
                  <label>Unique Teacher Code
                  <Dropdown 
                  pointing="left"
                  upward
                  floating
                  icon='question mark blue'
                  >
                    
    <Dropdown.Menu>
      <Dropdown.Item disabled text='This is a code that should be requested from your administrator'/>
    </Dropdown.Menu>
  </Dropdown>


                  </label>
                  <input placeholder="Teacher Code" />
                </Form.Field>
              </Form>
            </div>
            <Divider />
            <footer>
              <Button
                content="Back"
                labelPosition="left"
                icon="arrow left"
                onClick={() => setIsTeacher(false)}
                negative

              />
              <Button
                content="Next"
                labelPosition="right"
                icon="arrow right"

                positive
              />
            </footer>
          </div>
      }
      </div>
    </>
  )
}

export default SlideInMenu