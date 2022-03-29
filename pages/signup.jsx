import React, { useState } from "react";
import { Grid, Form, Divider, Button } from "semantic-ui-react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Signup from "../components/layout/signup";
import Login from "../components/layout/login";


const signup = () => {
  return (
    <>
      <Navbar />

      <div className="login/signup">
        <div className="login"><Login/></div>
        <div className="signup"><Signup/></div>
      </div>
    </>
  );
};

export default signup;
