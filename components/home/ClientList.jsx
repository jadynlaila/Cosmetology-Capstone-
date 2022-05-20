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
        setActiveVisits(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getUpcomingVisits = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/v1/visit/upcoming`);
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
      const res = await axios.put(`${baseURL}/api/v1/visit/checkOut`, {
        checkOutInfo,
      });
      setActiveVisits((prev) =>
        prev.filter((visit) => visit._id !== checkOutInfo.visitInfo._id)
      );
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const checkIn = async (checkInInfo, setOpen) => {
    try {
      const res = await axios.put(`${baseURL}/api/v1/visit/checkIn`, {
        checkInInfo,
      });
      setUpcomingVisits((prev) =>
        prev.filter((visit) => visit._id !== checkInInfo.visitInfo._id)
      );
      setActiveVisits((prev) => [checkInInfo.visitInfo, ...prev]);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="active-clients">
        <div className="header">Active Clients</div>
        <div className="content">
          {activeVisits.map((visit) => {
            console.log( new Date(visit.date));
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
                key={visit._id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ClientList;
