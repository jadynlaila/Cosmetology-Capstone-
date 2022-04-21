import React, { useState, useEffect } from "react";
import { Segment, Divider, Form } from "semantic-ui-react";
import { baseURL } from "../../pages/util/baseURL";
import axios from "axios";

const UpcomingClients = ({
  visit,
  setActiveVisits,
  setUpcomingVisits,
  activeVisits,
  upcomingVisits,
  checkIn,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(checkInInfo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="person up" onClick={() => checkIn(visit)}>
        <h5 className="name">{visit.client.name}</h5>
        <h5 className="email">{visit.client.email}</h5>
        <h5 className="date">{visit.date}</h5>
      </div>
      {isActive && (
        <>
          <Form onClick={() => setIsActive(!isActive)}>
            <Form.Field>
              <label>Pin:</label>
              <input
                onChange={handleChange}
                name="pin"
                placeholder="Pin"
                value={pin}
              />
            </Form.Field>
            <Button
              onClick={handleSubmit}
            />
          </Form>
        </>
      )}
      <span className="underlined"></span>
    </>
  );
};

export default UpcomingClients;

{
  /* <div className="person up" onClick={() => checkIn(client._id)}>
                <h5 className="name">{client.name}</h5>
                <h5 className="time">11:13 pm</h5>
                <h5 className="date">3/30/2022</h5>
              </div>
              <span className="underlined"> &#160;</span> */
}
