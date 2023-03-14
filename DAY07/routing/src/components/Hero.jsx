import React,{useState, useEffect} from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import axios from 'axios'
const Hero = (props) => {
    const [hero, setHero] = useState(null)
    const {heroID} =useParams()
    const navigate = useNavigate()
    const goBack = () =>{
        navigate(-1)
    }
    const goNext = ()=>{
        navigate(+1)
    }
    useEffect(()=>{
        axios.get(`https://akabab.github.io/superhero-api/api/id/${heroID}.json`)
        .then(response=>{
            console.log(response.data);
            setHero(response.data)
        }).catch(error=> {
            console.log(error)
            navigate('/error')
        })
    }, [heroID, navigate])
  return (
    <fieldset>
        <legend>Hero</legend>
        {/* <h2>Hero : {JSON.stringify(hero)}</h2> */}
        <button onClick={()=>{goBack()}}>Previous</button> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        <button onClick={goNext}>Next</button>
        {hero ?
        <>
            <h3>Hero Number : {hero.id} -- Name : {hero.name}</h3>
            <div style={{
                display: 'inline-flex', border:'1px solid black',
                padding:'5px' , borderRadius:'15px'
            }}>
                <img src= {hero.images.md} alt={hero.name} style={{
                    borderRadius:'15px'
                }} />
                <div>
                    <h4>Intelligence : {hero.powerstats.intelligence}</h4>
                    <h4>Speed : {hero.powerstats.speed}</h4>
                    <h4>Combat :  {hero.powerstats.combat}</h4>
                    <h4>Durability :  {hero.powerstats.durability}</h4>
                    <h4>Power :  {hero.powerstats.power}</h4>
                    <h4>Strength :  {hero.powerstats.strength}</h4>
                </div>
            </div>
        </> : <h3>Loading ...... </h3> }

    </fieldset>
  )
}

export default Hero