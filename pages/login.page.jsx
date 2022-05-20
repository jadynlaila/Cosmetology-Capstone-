import React, { useState, useEffect } from "react";
import { Grid, Form, Divider, Button, Segment, Message, Label, Item, Dropdown, Icon } from "semantic-ui-react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import NumPad from "../components/layout/numpad";
import Signup from "../components/layout/SignupForm";
import fill from "fill-range";
import LoginForm from "../components/layout/LoginForm";
import axios from "axios";
import TeacherDropdown from "../components/Signup/TeacherDropdown";
import Stylist from "../components/layout/Stylist";
import { baseURL } from './util/baseURL';


const Login = () => {

  //*================================STATES==============//
  const [user, setUser] = useState({
    email: "", 
    pin: ""
  })
  const [pinInput, setPinInput] = useState('')
  const [showPin, setShowPin] = useState(false)
  const [errMsg, seterrMsg] = useState(null)
  const [formLoading, setFormLoading] = useState(false)
  const [submitDisable, setSubmitDisable] = useState(true)
  const [loading, setLoading] = useState(false)


  const { email, pin } = user;
  //*===================================HANDLERS==============//

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }))

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true)
    console.log("Test Submit", user);
    try {
      const res = await axios.post('/api/v1/signup/login', { user })
      console.log("Signup Test", res);
    } catch (error) {
      seterrMsg(error)
    }
  }

  useEffect(() => {
    setSubmitDisable(!(email && pin));
  }, [user, email, pin])

  // useEffect(() => {
  //   const getTeachers = async () => {
  //     setLoading(true)
  //     try {
  //       const res = await axios.get(`${baseURL}/api/v1/teacher/`)
  //       setStylist(res.data)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setLoading(false)
  //   }
  //   getTeachers()
  // }, [])





  return (
    <>
      <div className="background-hairbrushes"
        style={{ position: "absolute", bottom: "0", right: "0", width: '300px', height: "400px", backgroundImage: `url(/pexelimg2.png)`, backgroundSize: "cover", backgroundBlendMode: "saturation" }}
      ></div>
      <Navbar />
      {/* <Segment style={{ background: "transparent" }}> */}
      <div style={{padding: "50px"}}>
        <Grid columns='equal' hidden centered padded>
          <Grid.Row hidden divided textAlign="center">
            <Grid.Column centered>
              <div className="split-screen-container" >
                <Signup />

              </div>
            </Grid.Column>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <Grid.Column >
              <div className="split-screen-container">
                <LoginForm />
                {/* <Stylist /> */}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
        {/* <Divider vertical fitted >
          <Icon fitted name="arrow right" />
        </Divider> */}
      {/* </Segment> */}
      
    </>
  );
};

export default Login;
