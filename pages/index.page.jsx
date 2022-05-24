import React, { useState } from 'react'
import { Grid, Form, Divider } from "semantic-ui-react"
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/layout/Navbar'
// import NewVisitForm from '../components/layout/NewVisitForm'
import ActiveClients from '../components/home/ActiveClients'
import UpcomingClients from '../components/home/UpcomingClients'
import NewClientForm from '../components/home/NewClientForm'
import NewVisitForm from '../components/home/NewVisitForm'
import ClientList from '../components/home/ClientList'


const Index = ({ name }) => {
  //! What is name? 
  //? Is that the for the pin for clocking in?

  //* UseStates//
  const [open, setOpen] = useState(false);
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
        
          <NewClientForm open={open} setOpen={setOpen}/>
          
          <NewVisitForm open={open} setOpen={setOpen}/>
          {/* This needs to have an onClick to render the form for new clients ~~~~ This is if they aren't in the system from a previous visit*/}
        </div>


        <div className="client-lists">
          <ClientList />
        </div>

      </main>
    </>
  )
}

export default Index