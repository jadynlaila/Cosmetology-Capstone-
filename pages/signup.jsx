import React, { useState } from "react";
import { Grid, Form, Divider, Button, Icon, Ui, Fluid, Input, Container } from "semantic-ui-react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Signup from "../components/layout/signup";
import NumPad from "../components/layout/numpad";


const signup = () => {
  return (
    <>
      <Navbar />

      <div className="login/signup">
        <div className="signup">
          <Signup />
          <NumPad/>
        </div>
      </div>

    </>
  );
};

export default signup;
