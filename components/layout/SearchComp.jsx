import { useState } from 'react'
import { List, Image, Search, Item } from 'semantic-ui-react'
import axios from 'axios'
import { baseURL } from '../../pages/util/baseURL'
import UpcomingClients from '../home/UpcomingClients'


const SearchComp = ({}) => {
    const [text, setText] = useState("")
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState([])


    const handleChange = async(e) => {
        const {value} = e.target;
        if(value === " ") return 
        setText(value)
        if (value) {
            setLoading(true)
            try {
                const res = await axios.get(`${baseURL}/api/v1/search/${value}`)

                if (res.data.length === 0) {
                    setResults([])
                    setLoading(false)
                    console.log('test1', res.data);
                }
                setResults(res.data)
                console.log("test 2", res.data);

            } catch (error) {
                console.log("Error Searching", error);
            }
        } else {
            setResults([])
        }
        setLoading(false)
    }

    
    return (
        <>
        <div>
            <label>Find Client:</label>
            <input type="text" className='search-component' onChange={(e) => handleChange(e)} />
        </div>
        <div>
            {results.map((client) => {
                return (
                    <button key={client._id} onClick={(e) => {
                        e.preventDefault()
                        return <UpcomingClients client={client} />
                    }} className="button-upcomingClients">
                        <h3 className='upcomingClient-name'>{client.name}</h3>
                    </button>
                )
            })}
        </div>
        </>
    )
}



export default SearchComp