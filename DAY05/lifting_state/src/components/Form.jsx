import React, {useState}from 'react'

const Form = (props) => {
    const [newAnimal, setNewAnimal] = useState("")
    const handleForm = (e) =>{
        e.preventDefault()
        console.log(newAnimal);
        // const animalsArray = [...props.animals]
        // animalsArray.push(newAnimal)
        // props.setAnimals(animalsArray)
        props.setAnimals([...props.animals,newAnimal])
        // e.reset()
        setNewAnimal("")
    }
  return (
    <fieldset>
        <legend>Form</legend>
        <h1>Props From App.js :  {JSON.stringify(props)} 👀</h1>
        <form onSubmit={handleForm}>
            <label >Add Animal : </label>
            <input onChange={(e)=>{setNewAnimal(e.target.value)}}  value={newAnimal}/>
            <input type="submit" value="Submit" />
        </form>
    </fieldset>
  )
}

export default Form