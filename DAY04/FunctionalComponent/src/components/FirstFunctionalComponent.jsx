import React, {useState} from "react";

const FirstFunctionalComponent = (props) =>{

    // -----State Variable          function to change state            default value 
    const [favNumberStateVariable,setFavNumberStateVariable] = useState(props.favNumber)
    // 1 Create A State variable for JOHN
    const [john , setJohn] = useState(props.john)
    // console.log(props);
    const clickButton = () => {
        console.log("Button Clicked 🎈🎈🎈");
        setFavNumberStateVariable(favNumberStateVariable +5)
        setJohn({...john,age:john.age +1})
    }
    return (
        <fieldset>
            <legend>🎆 🎆FirstFunctionalComponent 🎆🎆</legend>
            <h4>Props From App.js : {JSON.stringify(props)}</h4>
            <h4>Favorite Number From State : {favNumberStateVariable}</h4>
            <h4>John From State : {JSON.stringify(john)}</h4>
            <button onClick={()=>{clickButton()}}>Happy Birthday</button>
            {/* Conditional Rendering */}
            {
                john.age >=50 ? <h4>Hey John You're Old 👳‍♂️👳‍♂️👳‍♂️👳‍♀️</h4> : <h4>You Still Young 👶🧒👶👶</h4>
            }
        </fieldset>
    )
}
export default FirstFunctionalComponent