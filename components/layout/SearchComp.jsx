import { useState } from 'react'
import { List, Image, Search, Item } from 'semantic-ui-react'
import axios from 'axios'
import { baseURL } from '../../pages/util/baseURL'


const SearchComp = ({ clients }) => {
    const [text, setText] = useState("")
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState([])


    const handleChange = async (e) => {
        const { value } = e.target;
        if (value === " ") return
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
        <Search
            onBlur={() => {
                results.length > 0 && setResults([])
                loading && setLoading(false)
                setText("")
            }}
            loading={loading}
            // value={text}
            resultRenderer={ResultRenderer}
            results={results || null}
            onSearchChange={handleChange}
            placeholder="Find Clients"
            minCharacters={1}
            onResultSelect=""
        />
    )
}

const ResultRenderer = ({ _id, name }) => {
    return (
        <List key={_id}>
            <List.Item>
                <Item.Content header={name} />
            </List.Item>
        </List>
    )
}

export default SearchComp