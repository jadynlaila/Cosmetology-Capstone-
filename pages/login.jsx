import React, { useState } from "react";
import { Grid, Form, Divider, Button } from "semantic-ui-react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import NumPad from "../components/layout/numpad";
import Signup from "../components/layout/Signup";

const login = () => {
  const [pinInput, setPinInput] = useState('')
  return (
    <div id="login">
      <Navbar />

      <div className="grid-container">
        {/* <Form>
      </Form> */}
        <div id="input-field">
          <input id="pinInput" type="password" value={pinInput} />
        </div>
        <span className="divide"></span>
        <div id="signup">
          <Signup />
        </div>
        {/* <NumPad pinInput={pinInput} setPinInput={setPinInput} /> */}
      </div>
    </div>
  );
};

export default login;
