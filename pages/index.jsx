import React, {useState} from 'react'
import {Grid, Form, Divider} from "semantic-ui-react"
import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/layout/Navbar'


const index = ({name}) => {

    //* UseStates//
    const [media, setMedia] = useState(null);
    const [mediaPreview, setMediaPreview] = useState(null);

    //* handlers //
    const handleChange = (e) => {
        const { name, value, files } = e.target;
    
        if(name === "media" && files.length){
          setMedia(files[0])
          setMediaPreview(() => URL.createObjectURL(files[0]))
        } else {
          setUser((prev) => ({ ...prev, [name]: value }));
        }
    
      };


  return (
    <>
    <Navbar/>
    <Grid>
        <Grid.Column>
            <Form>
                <Form.Input 
                label="Name"
                required
                placeholder="Name"
                value={name}
                onChange={handleChange}
                icon="user"
                iconPosition="left"
                />
            </Form>
        </Grid.Column>
    </Grid>
    </>
  )
}

export default index