import React, { useState, useEffect } from "react";
import { Segment, Divider } from "semantic-ui-react";
import { baseURL } from "../../pages/util/baseURL";
import axios from "axios";

const UpcomingClients = ({visit, setActiveVisits, setUpcomingVisits}) => {

  useEffect(() => {
    const getClients = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/v1/client`);
        setClients(res.data.clients);

        clients.map((client) => {
          console.log(client);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getClients();
  }, []);

  const checkIn = async (id) => {
    try {
      prompt('pin here')
      const res = await axios.put(`${baseURL}/api/v1/client/checkIn`, {id})
      console.log(id);
      setClients((prev) => prev.filter((client) => client._id !== id));

      //!need to also update the active clients somehow
      console.log(res.data);
      console.log(clients);
    } catch (error) {
      console.log(error);
    }
  };

  const isUpcoming = async () => {

  }

  return (
    <>
      <div className="person up" onClick={() => checkOut(visit)} >
        <h5 className="name">{visit.client.name}</h5>
        <h5 className="email">{visit.client.email}</h5>
        <h5 className="date">{visit.date}</h5>
      </div>
      <span className="underlined"></span>
    </>
  );
};

export default UpcomingClients;

{/* <div className="person up" onClick={() => checkIn(client._id)}>
                <h5 className="name">{client.name}</h5>
                <h5 className="time">11:13 pm</h5>
                <h5 className="date">3/30/2022</h5>
              </div>
              <span className="underlined"> &#160;</span> */}