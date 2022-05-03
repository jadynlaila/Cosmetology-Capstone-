import React, { useState, useEffect } from "react";
import { baseURL } from "../../pages/util/baseURL";
import axios from "axios";
import { Segment, Divider } from "semantic-ui-react";
import CheckOut from "./CheckOut";


const ActiveClients = ({
  visit,
  checkOut,
  open,
  setOpen,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckOutInfo((prev) => ({ ...prev, [name]: value }));
  };

  const [checkOutInfo, setCheckOutInfo] = useState({
    pin: "",
    visit,
  });

  const { pin } = setCheckOutInfo;



  return (
    <>
    <CheckOut
        open={open}
        setOpen={setOpen}
        visit={visit}
        setIsActive={setIsActive}
        isActive={isActive}
        checkOut={checkOut}
      />

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
