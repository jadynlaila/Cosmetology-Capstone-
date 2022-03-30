import React, { useState } from 'react'
import { Grid, Form, Divider } from "semantic-ui-react"
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/layout/Navbar'
// import NewVisitForm from '../components/home/NewVisitForm'
// import NewClientForm from '../components/home/NewClientForm'
import ActiveClients from '../components/home/ActiveClients';
import UpcomingClients from '../components/home/UpcomingClients'


const index = ({ name }) => {
  //! What is name? 
  //? Is that the for the pin for clocking in?

  //* UseStates//
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);

  //* handlers //
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "media" && files.length) {
      setMedia(files[0])
      setMediaPreview(() => URL.createObjectURL(files[0]))
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }

  };


  return (
    <>
      <Navbar />
      <main className="main-container">

        {/* This needs to have an onClick function that renders the dropdown  */}
        <div className="radial-buttons">
          <div className="new-visit">
            <h1>New Visit</h1>
          </div>
          {/* This needs to have an onClick to render the form for new clients ~~~~ This is if they aren't in the system from a previous visit*/}
          <div className="new-client">
            <h1>New Client</h1>
          </div>
        </div>


        <div className="client-lists">
          <div className="active-clients">
            <ActiveClients />
          </div>

          <div className="upcoming-clients">
            <UpcomingClients />
          </div>
        </div>

      </main>
    </>
  )
}

export default index