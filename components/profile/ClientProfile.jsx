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

// useEffect(() => {
//   const asyncFunction = async () => {

//     const res = await axios.get(`${baseURL}/api/v1/client`);
//     console.log('banana', res.data.clients);
//     setResults(res.data.clients);
//   }
//   asyncFunction()
// }, [])

// useEffect(() => {
//   const getClients = async () => {
//     try {
//       const res = await axios.get(`${baseURL}/api/v1/client`);
//       setClients(res.data.clients);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   getClients();
// }, []);

const ClientProfile = () => {
  // {results.map((client) => {
  return (
    <>
      <div id="slideInModal" >
        <Header>Client</Header>

        <Grid columns={3} divided style={{margin: "5px"}}>
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
          <Button
          color="green"
            content="Edit"
            labelPosition="edit"
            icon="edit"
            // onClick={() => setOutOfFocus(true)}
            negative
          />
        </footer>
      </div>
    </>
    //     <div class="results">
    //       <>
    //         <VisitFormItems client={client} setOpen={setOpen} id={client._id}  />
    //         <span className="underlined"></span>
    //       </>
    //     </div>
  );
  // })}
};

export default ClientProfile;
