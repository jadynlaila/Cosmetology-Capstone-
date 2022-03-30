import React, {useState} from 'react'
import { Segment } from "semantic-ui-react";

//* goes through visit model and checks for visits whose 'active' attribute are true.
//* it's gonna have to go through the client model as well (remember the visit model has a client ref) to get their name
//* displays their name, preferred stylist,time of appointment, and the date they scheduled
const UpcomingClients = () => {



  return (
    <Segment.Group horizontal>
        <Segment>{client.name}</Segment>
        <Segment.Group raised>
        <Segment>{visit.preferredStylist}</Segment>
        <Segment>{visit.time}</Segment>
        </Segment.Group>
    </Segment.Group>
  )
}

export default UpcomingClients