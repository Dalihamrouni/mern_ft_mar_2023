import React from 'react'

const People = (props) => {
  return (
    <fieldset>
        <legend>People</legend>
        {props.people.map((person, index)=>
        <h4 key={index}>{person.name}, is {person.age} years old ! </h4>
        )}
    </fieldset>
  )
}

export default People