import './App.css';
import { useState } from 'react';
import Display from './components/Display';
import Form from './components/Form';
import AddPerson from './components/AddPerson';
import People from './components/People';
function App() {
  const [animals, setAnimals] = useState(["๐ฐ","๐ฆ", "๐น"])
  const [people, setPeople] = useState([
    {
      name:"John",
      age:39
    },
    {
      name:"Monica",
      age:56
    },
    {
      name:"bob",
      age:23
    }
  ])
  const addPerson = (newPerson)=>{
    console.log("Hi from App.js", newPerson);
    setPeople([...people,newPerson])
  }
  return ( 
    <div className="App">
      <fieldset>
        <legend>App.js</legend>
        <h1>Animals From App.js {JSON.stringify(animals)} ๐</h1>
        <hr />
        <h1>ยจPeople From App.js {JSON.stringify(people)} ๐</h1>
        <Form animals = {animals} setAnimals = {setAnimals}/>
        <hr />
        <AddPerson addPerson  = {addPerson}/>
        <Display animals = {animals}/>
        <hr />
        <People people = {people}/>
      </fieldset>
    </div>
  );
}

export default App;
