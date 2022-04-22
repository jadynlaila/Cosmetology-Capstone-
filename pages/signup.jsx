import React, { useState } from "react";
import { Grid, Form, Divider, Button, Icon, Ui, Fluid, Input, Container, Modal, Dropdown, Header, Content, Actions, Label } from "semantic-ui-react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Signup from "../components/layout/SignupForm";
import NumPad from "../components/layout/numpad";
import TeacherDropdown from "../components/Signup/TeacherDropdown";
import Stylist from "../components/layout/Stylist";
import { urlAlphabet } from "nanoid";
// import background from "../public/school-background.svg"




const signup = () => {
  
  return (
    <div style={{height: "100vh", backgroundImage: `linear-gradient(black, black), url(/school-background.svg)`, backgroundBlendMode: "saturation"}}>
      <Navbar />
      <div className="signupPage">
      <Signup/>
      </div>
    </div>
  );
};

export default signup;
