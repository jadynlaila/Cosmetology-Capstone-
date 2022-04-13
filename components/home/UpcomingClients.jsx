import React, { useState, useEffect } from "react";
import { Segment, Divider } from "semantic-ui-react";
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
      <div className="header">Upcoming Clients</div>
      <div className="content">
        {clients.map((client) => {
          return (
            <>
              <div className="person up">
                <h5 className="name">{client.name}</h5>
                <h5 className="time">11:13 pm</h5>
                <h5 className="date">3/30/2022</h5>
              </div>
              <span className="underlined"> &#160;</span>
              {/* <Divider fitted/> */}
            </>
          );
        })}

      </div>
    </>
  );
};

export default UpcomingClients;
