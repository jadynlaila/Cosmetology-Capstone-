import React from "react";
import {
  Table,
  Form,
  Container,
  Button,
  Divider,
  Segment,
  Image,
  Header
} from "semantic-ui-react";
import VisitDrop from "./VisitDrop";

const ClientProfile = () => {
  return (
    <>
      <div className="header">
        <h2>Client Profile</h2>
      </div>
      <div className="content">
        <div className="form-container">
          <div className="profile-header">
            <h1 style={{ margin: "auto", fontSize: "3.5rem" }}>Client Name</h1>
          </div>

          <div
            id="slideInModal"
            // style={{ marginRight: outOfFocus ? "3000px" : "0px" }}
          >
            <p> 
              hair density,
              hair porosity, 
              hair elasticity, 
              hair length
            </p>
            <Header>Client</Header>
            <div className="form-container">
              <Form>
                <Form.Field>
                  <label>Name</label>
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                </Form.Field>
                <Form.Field>
                  <label>Adress</label>
                </Form.Field>
                <Form.Field>
                  <label>Phone</label>
                </Form.Field>
                <Form.Field>
                  <label>DoB</label>
                </Form.Field>
                <Form.Field>
                  <label>Medical Info</label>
                </Form.Field>
                <Form.Field>
                  <label>Allergies</label>
                </Form.Field>
                <Form.Field>
                  <label>Hair Condition</label>
                </Form.Field>
                <Form.Field>
                  <label>Scalp Condition</label>
                </Form.Field>
                <Form.Field>
                  <label>Hair texture</label>
                </Form.Field>
                <Form.Field>
                  <label>Growth Pattern</label>
                </Form.Field>
                <Form.Field>
                  <label>Hair Density</label>
                </Form.Field>
                <Form.Field>
                  <label>Hair Porosity</label>
                </Form.Field>
                <Form.Field>
                  <label>Hair Elasticity</label>
                </Form.Field>
                <Form.Field>
                  <label>Hair Length</label>
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

          <Divider />

          <VisitDrop />
          <br />
          <VisitDrop />
          <br />
          <VisitDrop />
          <br />
        </div>
      </div>
    </>
  );
};

export default ClientProfile;
