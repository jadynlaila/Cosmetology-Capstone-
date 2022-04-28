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

  
  const checkOut = async (id) => {
    try {
      // jadyn: refactor it so that when the form on CheckIn/CheckOut is submitted, it runs these functions, and the setClients(prev) thing down there will be done for both the active and upcomingClients thing
      console.log(res.data);
      console.log(clients);
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

//  {/* {activeClients.map((client) => {
//           if (client.active) {
//             return (
//               <>
//                 <div className="person up" onClick={() => checkOut(client._id)}>
//                   {/* //change that onclick so that instead of running the checkout function, it toggles your 'opencheckout' to be true or false */}
//                   <h5 className="name">{client.name}</h5>
//                   <h5 className="time">11:13 pm</h5>
//                   <h5 className="date">3/30/2022</h5>
//                 </div>
//                 <span className="underlined"></span>
//                 {/* //you can do the check for 'opencheckout' here, and then if the opencheckout is true,
//                 //it'll have a little input box that asks for the stylists pin and has a 'done' button
//                 //move the onClick={() => checkOut(client._id)} to this button so that this will run when the button is clicked
//                 //n the controller that the checkout function makes a call to, add a check that the pin is valid
//                 //then leave the rest of the controller as normal!! so it should change their active attribute to false ONLY if the pin is valid  */}
//               </>
//             );
//           }
//         })}

// {clients.map((client) => {
//     // needs check if they are upcoming or not
//     return (
//       <>
//         <div className="person up" onClick={() => checkIn(client._id)}>
//           <h5 className="name">{client.name}</h5>
//           <h5 className="time">11:13 pm</h5>
//           <h5 className="date">3/30/2022</h5>
//         </div>
//         <span className="underlined"> &#160;</span>
//         {/* <Divider fitted/> */}
//       </>
//     );
//   })}
