import React, { useState, useEffect } from "react";
import { Segment, Divider } from "semantic-ui-react";
import { baseURL } from "../../pages/util/baseURL";
import axios from "axios";

const UpcomingClients = ({visit, setActiveVisits, setUpcomingVisits}) => {


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