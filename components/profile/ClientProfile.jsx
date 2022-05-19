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



const ClientProfile = ({selectedClient, selectClient}) => {
  const [clientTabOpen, setClientTabOpen] = useState(false)
  const [open, setOpen] = useState(false)
  console.log(selectedClient);
  return (
    <div style={{borderRadius: "10px", border: "1px solid lightgrey", padding: "10px" }}>
      <Header style={{borderRadius: "10px" }}>Client</Header>

      <Grid columns={3} divided style={{border: "1px solid lightgrey", margin: "5px", borderRadius: "10px" }}>
        <Grid.Row>
          <Grid.Column>
            <p>Name: {selectedClient.name}</p>
          </Grid.Column>
          <Grid.Column>
            <p>Hair Texture: {selectedClient.hairTexture}</p>
          </Grid.Column>
          <Grid.Column>
            <p>Medical Info: {selectedClient.medicalInfo}</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <p>Email: {selectedClient.email}</p>
          </Grid.Column>
          <Grid.Column>
            <p>Hair Density: {selectedClient.hairDensity}</p>
          </Grid.Column>
          <Grid.Column>
            <p>Allergies: {selectedClient.allergies}</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <p>Address: {selectedClient.address}</p>
          </Grid.Column>
          <Grid.Column>
            <p>Hair Porosity: {selectedClient.hairPorosity}</p>
          </Grid.Column>
          <Grid.Column>
            <p>Hair Condition: {selectedClient.hairCondition}</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <p>Phone: {selectedClient.phone}</p>
          </Grid.Column>
          <Grid.Column>
            <p>Hair Elasticity: {selectedClient.hairElasticity}</p>
          </Grid.Column>
          <Grid.Column>
            <p>Scalp Condition: {selectedClient.scalpCondition}</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <p>DoB: {selectedClient.dob}</p>
          </Grid.Column>
          <Grid.Column>
            <p>Hair Length: {selectedClient.hairLength}</p>
          </Grid.Column>
          <Grid.Column>
            <p>Growth Pattern: {selectedClient.growthPatterns}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider />
      {selectedClient.visits.map((visit) => {
        console.log(visit);
        return (
          <>
          <VisitDrop visit={visit} open={open} setOpen={setOpen}/>
          <br />
          </>
        )
      })}

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
