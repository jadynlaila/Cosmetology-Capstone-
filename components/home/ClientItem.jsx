import React from "react";

const ClientItem = () => {
  const [activeClients, setActiveClients] = useState([]);
  const [upcomingClients, setUpcomingClients] = useState([])

  useEffect(() => {
    const getActiveClients = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/v1/`);
        console.log(res.data.clients);
        setActiveClients(res.data.clients);
      } catch (error) {
        console.log(error);
      }
    };
    
    const getUpcomingClients = async () => {
        try {
            const res = await axios.get(`${baseURL}/api/v1`);
            console.log(res.data.clients);
            setUpcomingClients(res.data.clients);
        } catch (error) {
            console.log(error);
        }
    }
    getUpcomingClients();
    getActiveClients();
  }, []);

  
  return <div>ClientItem</div>;
};

export default ClientItem;
