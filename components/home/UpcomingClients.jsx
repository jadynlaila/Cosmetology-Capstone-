import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import { baseURL } from "../../pages/util/baseURL";
import axios from "axios";

//* goes through visit model and checks for visits whose 'active' attribute are true.
//* it's gonna have to go through the client model as well (remember the visit model has a client ref) to get their name
//* displays their name, preferred stylist,time of appointment, and the date they scheduled
const UpcomingClients = () => {
  const [clients, setClients] = useState([]);
  const [upcomingClients, setUpcomingClients] = useState([]);

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

  return (
    <>
      {clients.map((client) => {
        return <div>{client.active}</div>;
      })}
    </>
  );
};

export default UpcomingClients;
