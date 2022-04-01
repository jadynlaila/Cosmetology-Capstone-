import React, { useState } from "react";
import { Grid, Form, Divider, Button } from "semantic-ui-react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import NumPad from "../components/layout/numpad";

const login = () => {
  const [pinInput, setPinInput] = useState('')
  return (
    <>
      <Navbar />
      {/* <Form>
      </Form> */}
      <NumPad pinInput={pinInput} setPinInput={setPinInput}/>
      <input type="text" value={pinInput} />
      
    </>
  );
};

export default login;
