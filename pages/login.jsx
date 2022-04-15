import React, { useState } from "react";
import { Grid, Form, Divider, Button, Segment } from "semantic-ui-react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import NumPad from "../components/layout/numpad";
import Signup from "../components/layout/SignupForm";
import fill from "fill-range";
import LoginForm from "../components/layout/LoginForm";

const login = () => {
  const [pinInput, setPinInput] = useState('')
  return (
    <div id="login">
      <Navbar />
      <Segment>
        <Grid columns={2} centered >
          <Grid.Column column={1} width={"fill"} centered>
            <div className="split-screen-container">
              <Signup />
            </div>
          </Grid.Column>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          <Grid.Column column={2} width={'fill'}>
            <div className="split-screen-container">
              <LoginForm />
            </div>
          </Grid.Column>
        </Grid>

        <Divider vertical fitted ></Divider>
      </Segment>
    </div>
  );
};

export default login;
