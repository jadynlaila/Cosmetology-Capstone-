import React, { useState } from "react";
import { Grid, Form, Divider, Button, Icon, Ui, Fluid, Input, Container, Modal, Dropdown, Header, Content, Actions, Label } from "semantic-ui-react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Signup from "../components/layout/SignupForm";
import NumPad from "../components/layout/numpad";
import TeacherDropdown from "../components/Signup/Dropdown";




const signup = () => {
  
  return (
    <>
      <Navbar />
      <div className="signupPage">
      <Signup/>
      </div>
    </>
  );
};

export default signup;
