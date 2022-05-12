import React, { useState, useEffect, useRef } from "react";
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

// Idk if I got this wrong or something but don't we need to add the clients the stylists have "styled in their model or is there another way to do it?



const ClientProfile = () => {
  const [clientTabOpen, setClientTabOpen] = useState(false)
  return (
    <div style={{borderRadius: "10px", border: "1px solid lightgrey", padding: "10px" }}>
      <Header style={{borderRadius: "10px" }}>Client</Header>

      <Grid columns={3} divided style={{border: "1px solid lightgrey", margin: "5px", borderRadius: "10px" }}>
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
          color="green"
          content="Edit"
          labelPosition="edit"
          icon="edit"
          negative
        />
      </footer>
    </div>
  )
};


export default ClientProfile;
