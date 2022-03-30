import React, { useState, useEffect } from "react";
import { baseURL } from "../../pages/util/baseURL";
import axios from "axios";
import { Segment } from "semantic-ui-react";

const ActiveClients = () => {
  const [clients, setClients] = useState([]);
  const [activeClients, setActiveClients] = useState([]);

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

  return (
    <>
      <div className="header">
        Active Clients
          </div>
        <div className="content">
          {clients.map((client) => {
            return (
              <div className="person">
                <h5 className="name">{client.name}</h5>
                <h5 className="time">11:13 pm</h5>
                <h5 className="date">3/30/2022</h5>
              </div>
            );
          })}
        </div>
    </>
  );
};

export default ActiveClients;
