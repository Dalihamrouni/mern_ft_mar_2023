import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Form = (props) => {
    const navigate = useNavigate()
    const [heroID, setHeroID] = useState(1)
    const handleForm = (e)=>{
        e.preventDefault()
        console.log("Hero ID = ", heroID);
        navigate(`/hero/${heroID}`)
        // setHeroID(1)
    }
    return (
        <fieldset>
            <legend>Form</legend>
            <form onSubmit={handleForm}>
                <label> Hero ID : </label>
                <input onChange={(e)=>setHeroID(e.target.value)} value={heroID} />
                <button>Search</button>
            </form>
        </fieldset>
    )
}

export default Form