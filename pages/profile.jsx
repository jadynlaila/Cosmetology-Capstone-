// this will be to display the students profile only

import React, {useState} from 'react'
import {Grid, Form, Divider} from "semantic-ui-react"
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/layout/Navbar'

const personalProfile = () => {
  const [isTeacher, setIsTeacher] = useState(false)
  return (<>
    <Navbar/>

    
    </>
  );
};

export default personalProfile;
