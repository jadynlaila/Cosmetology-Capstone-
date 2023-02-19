import React, { useState, useEffect } from "react";
import { Segment, Divider, Form } from "semantic-ui-react";
import { baseURL } from "../../pages/util/baseURL";
import axios from "axios";
import CheckIn from "./CheckIn";

const UpcomingClients = ({
  visit,
  checkIn,
  open,
  setOpen,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckInInfo((prev) => ({ ...prev, [name]: value }));
  };

  const [checkInInfo, setCheckInInfo] = useState({
    pin: "",
    visit,
  });

  const { pin } = setCheckInInfo;



  return (
    <>
      <CheckIn
        open={open}
        setOpen={setOpen}
        visit={visit}
        setIsActive={setIsActive}
        isActive={isActive}
        checkIn={checkIn}
      />

      <span className="underlined"></span>
    </>
  );
};

export default UpcomingClients;


