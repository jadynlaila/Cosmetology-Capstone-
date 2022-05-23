import React, { useState, useEffect } from "react";
import axios from 'axios';
import { baseURL } from "../../pages/util/baseURL";

// import { Accordion, Icon, Grid, Divider } from "semantic-ui-react";

const VisitDrop = ({visit, open, setOpen}) => {
  console.log(visit);
  const [visitInfo, setVisitInfo] = useState()
  useEffect(() => {
    const getVisit = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/v1/visit/${visit}`);
        console.log(res);
        setVisitInfo(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getVisit();
  }, []);
  console.log(visitInfo);


  return (
    <>{visit}</>
  )


}

export default VisitDrop

// export default class VisitDrop extends Component {
//   state = { activeIndex: 0 };

//   handleClick = (e, titleProps) => {
//     const { index } = titleProps;
//     const { activeIndex } = this.state;
//     const newIndex = activeIndex === index ? -1 : index;

//     this.setState({ activeIndex: newIndex });
//   };

//   render() {
//     const { activeIndex } = this.state;

//     return (
//       <Grid centered>
//         <Grid.Column>
//           <Accordion fluid styled style={{ padding: ".5rem", width: "100%" }}>
//             <Accordion.Title
//               active={activeIndex === 2}
//               index={2}
//               onClick={this.handleClick}
//             >
//               <Icon name="dropdown" />
//               Visit
//             </Accordion.Title>
//             <Accordion.Content active={activeIndex === 2}>
//               {visit}
//             </Accordion.Content>
//           </Accordion>
//         </Grid.Column>
//       </Grid>
//     );
//   }
// }
