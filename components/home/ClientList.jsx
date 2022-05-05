import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../pages/util/baseURL";
import ActiveClients from "./ActiveClients";
import UpcomingClients from "./UpcomingClients";

const ClientList = () => {
  const [activeVisits, setActiveVisits] = useState([]);
  const [open, setOpen] = useState(false);
  const [upcomingVisits, setUpcomingVisits] = useState([]);

  useEffect(() => {
    const getActiveVisits = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/v1/visit/active`);
        console.log(res.data);
        setActiveVisits(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getUpcomingVisits = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/v1/visit/upcoming`);
        console.log(res.data);
        setUpcomingVisits(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUpcomingVisits();
    getActiveVisits();
  }, []);

  
  const checkOut = async (checkOutInfo, setOpen) => {
    try {
      console.log(checkOutInfo);
      const res = await axios.put(`${baseURL}/api/v1/visit/checkOut`, {checkOutInfo});
      console.log(res.data);
      setActiveVisits((prev) => prev.filter((visit) => visit._id !== checkOutInfo.visitInfo._id))
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  
  
  const checkIn = async (checkInInfo, setOpen) => {
    try {
      try {
        console.log(checkInInfo);
        const res = await axios.put(`${baseURL}/api/v1/visit/checkIn`, { checkInInfo });
        console.log(res.data);
        console.log(checkInInfo.visitInfo._id);
        setUpcomingVisits((prev) => prev.filter((visit) => visit._id !== checkInInfo.visitInfo._id));
        setActiveVisits((prev) => [checkInInfo.visitInfo, ...prev]);
        setOpen(false);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="active-clients">
        <div className="header">Active Client</div>
        <div className="content">
          {activeVisits.map((visit) => {
            return (
              <>
                <ActiveClients
                  visit={visit}
                  setActiveVisits={setActiveVisits}
                  setUpcomingVisits={setUpcomingVisits}
                  activeVisits={activeVisits}
                  upcomingVisits={upcomingVisits}
                  checkOut={checkOut}
                  setOpen={setOpen}
                  open={open}
                />
                {/* <NewVisitForm open={open} setOpen={setOpen}/> */}
              </>
            );
          })}
        </div>
      </div>

      <div className="upcoming-clients">
        <div className="header">Upcoming Clients</div>
        <div className="content">
          {upcomingVisits.map((visit) => {
            return (
              <UpcomingClients
                visit={visit}
                setActiveVisits={setActiveVisits}
                setUpcomingVisits={setUpcomingVisits}
                activeVisits={activeVisits}
                upcomingVisits={upcomingVisits}
                checkIn={checkIn}
                setOpen={setOpen}
                open={open}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ClientList;

