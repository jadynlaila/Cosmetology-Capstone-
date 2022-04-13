import React, { useState } from "react";
import { Grid, Form, Divider, Button, Segment } from "semantic-ui-react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import NumPad from "../components/layout/numpad";
import Signup from "../components/layout/Signup";
import fill from "fill-range";

const login = () => {
  const [pinInput, setPinInput] = useState('')
  return (
    <div id="login">
      <Navbar />
      <Segment>
        <Grid columns={2} width={fill}>
          <Grid.Column width={8}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Signup />
            </div>
          </Grid.Column>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          <Grid.Column width={8}>
            {/* <Login/> */}
          </Grid.Column>
        </Grid>

        <Divider vertical >OR</Divider>
      </Segment>
    </div>
  );
};

export default login;
