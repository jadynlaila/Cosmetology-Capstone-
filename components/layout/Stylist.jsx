import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Dropdown, Grid, Input, List } from 'semantic-ui-react'
import { baseURL } from '../../pages/util/baseURL'

const Stylist = ({user, userId}) => {

    const [stylists, setStylists] = useState([])
    const [loading, setLoading] = useState(false)
    const [stylistLoading, setStylistLoading] = useState(false)

    useEffect(() => {
        const getStylist = async() => {
            setLoading(true)
            try {
                const res = await axios.get(`${baseURL}/api/v1/teacher/stylists`)
                setStylist(res.data)
            } catch (error) {
                console.log(error);
            }
            setLoading(false)
        }
      getStylist()
    }, [])
    


  return <> (
        {stylists ? (
            stylists.map(stylist => {
                return (
                    <List key={stylist._id} divided verticalAlign="middle">
                        <List.Item>
                            <List.Content floated='right'>
                                <h3>{stylist.name}</h3>
                                <h3>{stylist.email}</h3>
                                <Dropdown
                                text='Enter Pin'
                                icon="th"
                                floating
                                labeled
                                button
                                >
                                    <Dropdown.Menu>
                                        <Dropdown.Header content="Pin" />
                                        <Input icon="th" iconPosition='left' name="pin" />
                                    </Dropdown.Menu>
                                </Dropdown>

                            </List.Content>
                        </List.Item>
                    </List>
                )
            })
        ) : (
            <h2>No Stylist</h2>
        )}
    )
    </>  
}

export default Stylist