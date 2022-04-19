import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Dropdown, Grid, Input, List } from 'semantic-ui-react'
import { baseURL } from '../../pages/util/baseURL'

const Stylist = ({user, userId, teachers}) => {

    const [stylists, setStylists] = useState([])
    const [loading, setLoading] = useState(false)
    const [stylistLoading, setStylistLoading] = useState(false)

    useEffect(() => {
        const getStylist = async() => {
            setLoading(true)
            try {
                
                const res = await axios.get(`${baseURL}/api/v1/teacher/stylists`)
                setStylists(res.data)
            } catch (error) {
                console.log(error);
            }
            setLoading(false)
        }
      getStylist()
    }, [])
    


  return <> (
            {stylists.map(stylist => {
                return (
                    <List key={stylist._id} divided verticalAlign="middle">
                        <List.Item>
                            <List.Content floated='right'>
                                <h3>{stylist.name}</h3>
                                <h3>{stylist.email}</h3>

                                
                                <Dropdown
                                text='Enter Pin'
                                icon="arrow down"
                                floating
                                labeled
                                button
                                >

                                    <Dropdown.Menu>
                                        <Dropdown.Header content="Pin" />
                                        <Input icon="unlock" iconPosition='left' name="pin" />
                                    </Dropdown.Menu>
                                </Dropdown>

                            </List.Content>
                        </List.Item>
                    </List>
                )
            })
         }
    )
    </>  
}

export default Stylist