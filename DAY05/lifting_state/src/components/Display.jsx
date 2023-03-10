import React from 'react'

const Display = (props) => {
  return (
    <fieldset>
        <legend>Display</legend>
        {/* <h2>Props from App.js {JSON.stringify(props)}</h2> */}
        {
            props.animals.map((animal, index)=><li key={index}>{animal}</li>)
        }
    </fieldset>
  )
}

export default Display