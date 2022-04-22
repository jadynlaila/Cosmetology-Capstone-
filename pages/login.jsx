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


const login = () => {

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
  }, [user])

  useEffect(() => {
    const getTeachers = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`${baseURL}/api/v1/teacher/`)
        setStylist(res.data)
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
    }
    getTeachers()
  }, [])





  return (
    <div id="login"  style={{height: "100vh",backgroundImage: `url(/hair-background3.png)`, backgroundSize: "cover" , backgroundBlendMode: "saturation"}}>
      <Navbar />
      <Segment>
        <Grid columns={2} centered >
          <Grid.Column column={1} centered>
            <div className="split-screen-container">
              {/* <Signup /> */}
              
            </div>
          </Grid.Column>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          <Grid.Column column={2} >
            <div className="split-screen-container">
              {/* <LoginForm /> */}
              <Stylist />
            </div>
          </Grid.Column>
        </Grid>

        <Divider vertical fitted >
          <Icon  fitted name="arrow right" />
        </Divider>
      </Segment>
    </div>

  );
};

export default login;
