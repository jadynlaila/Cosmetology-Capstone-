import React, { useState } from "react";
import { Grid, Form, Divider, Button, Icon, Ui, Fluid, Input, Container, Modal } from "semantic-ui-react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Signup from "../components/layout/signup";
import NumPad from "../components/layout/numpad";


const signup = () => {
  const [teacherSignedIn, setTeacherSignedIn] = useState(true)
  return (
    <>
      <Navbar />

      <Modal
        open="true"      >
        <Modal.Header>New Client</Modal.Header>
        <Modal.Content>
          {/* FORM FIELD */}
          <div className="form-container">
            {teacherSignedIn ?
              <Form>
                <Form.Field>
                  <label>Teacher</label>
                  <div class="ui fluid selection dropdown">
                    <input type="hidden" name="user">
                      <i class="dropdown icon"></i>
                      <div class="default text">Select Friend</div>
                      <div class="menu">
                        <div class="item" data-value="jenny">
                          Jenny Hess
                        </div>
                        <div class="item" data-value="elliot">

                          Elliot Fu
                        </div>
                        <div class="item" data-value="stevie">

                          Stevie Feliciano
                        </div>
                        <div class="item" data-value="christian">

                          Christian
                        </div>
                        <div class="item" data-value="matt">
                          Matt
                        </div>
                        <div class="item" data-value="justen">

                          Justen Kitsune
                        </div>
                      </div>
                      
                      
                  </div>
                </Form.Field>
              </Form>
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
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            content="Submit"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>

    </>
  );
};

export default signup;
