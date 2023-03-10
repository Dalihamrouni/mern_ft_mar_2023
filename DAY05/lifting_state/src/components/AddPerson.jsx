import React, {useState} from 'react'

const AddPerson = (props) => {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const handleForm = (e) =>{
        e.preventDefault()
        const newPerson ={name,age}
        // console.log(newPerson);
        props.addPerson(newPerson)
        setAge(0)
        setName("")
    }
  return (
    <fieldset>
        <legend>AddPerson</legend>
        <h1>Props From App.js :  {JSON.stringify(props)} 👀</h1>
        <form onSubmit={handleForm}>
            <label >Name 👳‍♀️👶🧒👳‍♂️ : </label>
            <input onChange={(e)=>{setName(e.target.value)}}  value={name}/>
            <br />
            <label htmlFor="">Age : </label>
            <input onChange={(e)=>{setAge(e.target.value)}}  value={age}/>
            <br />
            <input type="submit" value="Add Person" />
        </form>
    </fieldset>
  )
}

export default AddPerson