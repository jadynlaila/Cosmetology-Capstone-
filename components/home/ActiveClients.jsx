import React, { useState, useEffect } from "react";
import { baseURL } from "../../pages/util/baseURL";
import axios from "axios";
import { Segment, Divider } from "semantic-ui-react";
import { func } from "prop-types";

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
        {/* <button></button> */}
      </div>
      <div className="content">
        {clients.map((client) => {
          if (client.active) {
            return (
              <>
              {/* <Divider fitted/> */}
                <div className="person up" onClick={() => checkOut(client._id)}>
                  <h5 className="name">{client.name}</h5>
                  <h5 className="time">11:13 pm</h5>
                  <h5 className="date">3/30/2022</h5>
                </div>
                {/* <Divider fitted/> */}
                <span className="underlined"></span>
              </>
            );
          }
        })}
      </div>
    </>
  );
};

export default ActiveClients;
