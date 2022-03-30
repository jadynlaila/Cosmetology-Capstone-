import React, { useState, useEffect } from "react";
import { baseURL } from "../../pages/util/baseURL";
import axios from 'axios';
import {Segment} from 'semantic-ui-react';

const ActiveClients = () => {
  const [clients, setClients] = useState([]);
  const [activeClients, setActiveClients] = useState([])

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
    console.log(clients);
  }, []);

  



  return (
    <>
      {clients.map((client) => {
        return (
          <>
            <Segment.Group horizontal>
              <Segment>{client.name}</Segment>

            </Segment.Group>
          </>
        );
      })}
    </>
  );
};

export default ActiveClients;
