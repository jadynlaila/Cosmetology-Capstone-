import React, { useState, useEffect } from "react";
import { baseURL } from "../../pages/util/baseURL";
import axios from "axios";
import { Segment, Divider } from "semantic-ui-react";

const ActiveClients = ({visit}) => {

  console.log(visit);
  return (
    <>
      <div className="person up" onClick={() => checkOut(visit)}>
        {/* //!change that onclick so that instead of running the checkout function, it toggles your 'opencheckout' to be true or false */}
        <h5 className="name">{visit.name}</h5>
        <h5 className="email">{visit.email}</h5>
        {/* should be able to do visit.client. */}
        <h5 className="date">{visit.date}</h5>
      </div>
      <span className="underlined"></span>
    </>
  );
};

export default ActiveClients;

// <div className="person up" onClick={() => checkOut(client._id)}>
//                   {/* //!change that onclick so that instead of running the checkout function, it toggles your 'opencheckout' to be true or false */}
//                   <h5 className="name">{client.name}</h5>
//                   <h5 className="time">11:13 pm</h5>
//                   <h5 className="date">3/30/2022</h5>
//                 </div>
//                 <span className="underlined"></span>
