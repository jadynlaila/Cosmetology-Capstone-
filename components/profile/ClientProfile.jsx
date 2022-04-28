import React from "react";
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
            <Header>Client</Header>

            <Grid columns={3} divided>
              <Grid.Row>
                <Grid.Column>
                  <p>Name</p>
                </Grid.Column>
                <Grid.Column>
                  <p>Hair Texture</p>
                </Grid.Column>
                <Grid.Column>
                  <p>Medical Info</p>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <p>Email</p>
                </Grid.Column>
                <Grid.Column>
                  <p>Hair Density</p>
                </Grid.Column>
                <Grid.Column>
                  <p>Allergies</p>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <p>Adress</p>
                </Grid.Column>
                <Grid.Column>
                  <p>Hair Porosity</p>
                </Grid.Column>
                <Grid.Column>
                  <p>Hair Condition</p>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <p>Phone</p>
                </Grid.Column>
                <Grid.Column>
                  <p>Hair Elasticity</p>
                </Grid.Column>
                <Grid.Column>
                  <p>Scalp Condition</p>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <p>DoB</p>
                </Grid.Column>
                <Grid.Column>
                  <p>Hair Length</p>
                </Grid.Column>
                <Grid.Column>
                  <p>Growth Pattern</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            
            {/* <div className="form-container">
            </div> */}

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
                onClick={() => setOutOfFocus(true)}
                negative
              />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientProfile;
