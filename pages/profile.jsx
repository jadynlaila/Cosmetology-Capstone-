// this will be to display the students profile only

<<<<<<< Updated upstream
import React, {useState} from 'react'
import {Grid, Form, Divider} from "semantic-ui-react"
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/layout/Navbar'

const personalProfile = () => {
  const [isTeacher, setIsTeacher] = useState(false)
  return (<>
    <Navbar/>
=======
import React, { useState } from "react";
import { Grid, Form, Divider } from "semantic-ui-react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";

const personalProfile = () => {
  return (
    <>
      <Navbar />
>>>>>>> Stashed changes
    </>
  );
};

export default personalProfile;
