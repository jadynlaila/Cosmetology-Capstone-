import React, { useState, useEffect } from "react";
import { baseURL } from "../../pages/util/baseURL";
import axios from "axios";
import { Segment } from "semantic-ui-react";
import { func } from "prop-types";

const ActiveClients = () => {
  const [clients, setClients] = useState([]);
  const [activeClients, setActiveClients] = useState([]);
   //! add state for opencheckout here

  useEffect(() => {
    const getClients = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/v1/client`);
        console.log(res.data.clients);
        setClients(res.data.clients);
      } catch (error) {
        console.log(error);
      }
    };
    getClients();
  }, []);

  const checkOut = async (id) => {
    try {
      
      const res = await axios.put(`${baseURL}/api/v1/client/checkOut`, {id})
      console.log(id);
      setClients((prev) => prev.filter((client) => client._id !== id));
      console.log(res.data);
      console.log(clients);
    } catch (error) {
      console.log(error);
    }
  };


  return (

   
    <>
      <div className="header">
        Active Clients
        <button></button>
      </div>
      <div className="content">
        {clients.map((client) => {
          if (client.active) {
            return (
              <>
                <div className="person up" onClick={() => checkOut(client._id)}>
                  //!change that onclick so that instead of running the checkout function, it toggles your 'opencheckout' to be true or false
                  <h5 className="name">{client.name}</h5>
                  <h5 className="time">11:13 pm</h5>
                  <h5 className="date">3/30/2022</h5>
                </div>
                <span className="underlined"></span>
                //!you can do the check for 'opencheckout' here, and then if the opencheckout is true,
                //!it'll have a little input box that asks for the stylists pin and has a 'done' button 
                //!move the onClick={() => checkOut(client._id)} to this button so that this will run when the button is clicked
                //!n the controller that the checkout function makes a call to, add a check that the pin is valid
                //!then leave the rest of the controller as normal!! so it should change their active attribute to false ONLY if the pin is valid 
              </>
            );
          }
        })}
      </div>
    </>
  );
};

export default ActiveClients;
