import {
  Table,
  Form,
  Container,
  Button,
  Divider,
  Segment,
  Image,
  Header,
  Grid,
} from "semantic-ui-react";
import VisitDrop from "./VisitDrop";
import React, { useState, useEffect, useRef } from "react";

const ClientProfile = ({ outOfFocus, setOutOfFocus, active, setActive }) => {
  return (
    <div
      className="slide"
      style={{ zIndex: !outOfFocus || isTeacher ? "5" : "-1" }}
    >
      {!active ? (
        <div
          id="slideInModal"
          style={{
            marginTop: "50px",
            marginRight: outOfFocus ? "3000px" : "0px",
          }}
        >
          <Header>Client</Header>

          <Grid columns={3} divided style={{ margin: "5px" }}>
            <Grid.Row>
              <Grid.Column>
                <p>Name</p>
              </Grid.Column>
              <Grid.Column>
                <p>Hair Texture:</p>
              </Grid.Column>
              <Grid.Column>
                <p>Medical Info:</p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <p>Email</p>
              </Grid.Column>
              <Grid.Column>
                <p>Hair Density:</p>
              </Grid.Column>
              <Grid.Column>
                <p>Allergies:</p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <p>Adress</p>
              </Grid.Column>
              <Grid.Column>
                <p>Hair Porosity:</p>
              </Grid.Column>
              <Grid.Column>
                <p>Hair Condition:</p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <p>Phone</p>
              </Grid.Column>
              <Grid.Column>
                <p>Hair Elasticity:</p>
              </Grid.Column>
              <Grid.Column>
                <p>Scalp Condition:</p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <p>DoB</p>
              </Grid.Column>
              <Grid.Column>
                <p>Hair Length:</p>
              </Grid.Column>
              <Grid.Column>
                <p>Growth Pattern:</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Divider />

          <VisitDrop />
          <br />
          <VisitDrop />
          <br />
          <VisitDrop />

          <Divider />
          <footer>
            <Button
              content="Back"
              labelPosition="left"
              icon="arrow left"
              // onClick={() => setOutOfFocus(true)}
              negative
            />
            <Button
              color="green"
              content="Edit"
              labelPosition="edit"
              icon="edit"
              negative
            />
          </footer>
        </div>
      ) : (
        <div
          id="slideInModal"
          style={{
            marginTop: "50px",
            marginRight: outOfFocus ? "3000px" : "0px",
          }}
        >
          <Header>Client</Header>

          <Grid columns={3} divided style={{ margin: "5px" }}>
            <Grid.Row>
              <Grid.Column>
                <p>Name</p>
              </Grid.Column>
              <Grid.Column>
                <p>Hair Texture:</p>
              </Grid.Column>
              <Grid.Column>
                <p>Medical Info:</p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <p>Email</p>
              </Grid.Column>
              <Grid.Column>
                <p>Hair Density:</p>
              </Grid.Column>
              <Grid.Column>
                <p>Allergies:</p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <p>Adress</p>
              </Grid.Column>
              <Grid.Column>
                <p>Hair Porosity:</p>
              </Grid.Column>
              <Grid.Column>
                <p>Hair Condition:</p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <p>Phone</p>
              </Grid.Column>
              <Grid.Column>
                <p>Hair Elasticity:</p>
              </Grid.Column>
              <Grid.Column>
                <p>Scalp Condition:</p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <p>DoB</p>
              </Grid.Column>
              <Grid.Column>
                <p>Hair Length:</p>
              </Grid.Column>
              <Grid.Column>
                <p>Growth Pattern:</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Divider />

          <VisitDrop />
          <br />
          <VisitDrop />
          <br />
          <VisitDrop />

          <Divider />
          <footer>
            <Button
              content="Back"
              labelPosition="left"
              icon="arrow left"
              onClick={() => setActive(false)}
              // onClick={() => setOutOfFocus(true)}
              negative
            />
            <Button
              content="Edit"
              labelPosition="edit"
              icon="edit"
              negative
              color="green"
            />
          </footer>
        </div>
      )
      
      }
    </div>
  );
};

export default ClientProfile;
