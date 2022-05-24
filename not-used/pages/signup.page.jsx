import React, { useState } from "react";
import { Grid, Form, Divider, Button, Icon, Ui, Fluid, Input, Container, Modal, Dropdown, Header, Content, Actions, Label } from "semantic-ui-react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
// import Signup from "../components/layout/SignupForm";
import Signup from "../components/layout/SignupForm";

// import background from "../public/school-background.svg"




const signup = () => {

  return (
    <>


      <Navbar />
      <div className="background-hairbrushes"
        style={{position:"absolute",bottom: "0", right:"0", width: '300px', height:"400px", backgroundImage: `url(/pexelimg2.png)`, backgroundSize:"cover", backgroundBlendMode: "saturation" }}
        ></div>
      
      <div className="signupPage">
        <Signup/>
      </div>
    </>
  );
};

export default signup;
