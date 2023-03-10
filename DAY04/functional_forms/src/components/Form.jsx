// rafce
import React, {useState} from 'react'
import Display from './Display'
let newUser = {
    username:"",
    email:"",
    password:""
}
const Form = (props) => {
    // ! Every input must have a State variable
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [usernameError, setUsernameError] = useState(false)
    const formHandler = (e)=>{
        e.preventDefault()
        console.log("Form Submitted 🧨🎇");
        newUser = {
            username:username,
            email:email,
            password:password
        }
        console.log(newUser);
        setUsername("")
        setEmail("")
        setPassword("")
    }
    // Username Validation 
    const handleUsername = (e)=>{
        e.preventDefault()
        setUsername(e.target.value)
        console.log("The value = ", e.target.value);
        if(e.target.value.length<3 ) { 
            console.log("Username must be more than 3 ");
            setUsernameError(true)
        }
        else{
            setUsernameError(false)
            console.log("Username is more than 3🎈 ");
        }
    }
  return (
    <fieldset>
        <legend>From.jsx</legend> 
        <p>Username : {JSON.stringify(username)}</p> 
        <p>Email : {JSON.stringify(email)}</p>
        <p>Password : {JSON.stringify(password)}</p>
        <hr />
        <form onSubmit={formHandler} >
            <div>
                <label >Username : </label>
                <input onChange={(e)=>{handleUsername(e)}} value={username} />
                {usernameError ? <p style={{color:"red"}}>Username must be more than 3 </p>:null}
            </div>
            <br />
            <div>
                <label >Email : </label>
                <input onChange={(e)=>{setEmail(e.target.value)}} value={email}/> 
                                 {/* Double binding */}
            </div>
            <br />
            <div>
                <label >Password : </label>
                <input onChange={(e)=>{setPassword(e.target.value)}} value={password}/> 
                 {/* Double binding */}
            </div>
            <br />
            <input type="submit" value="Create User" />
        </form>
        <Display user={newUser}/>
    </fieldset>
  )
}

export default Form