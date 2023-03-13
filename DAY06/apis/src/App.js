import './App.css';
import { useState , useEffect} from 'react';
import axios from 'axios';
function App() {
  const [fetchSuperHerosArray, setFetchSuperHerosArray] = useState([])
  const [axiosSuperHerosArray, setAxiosSuperHerosArray] = useState([])
  const [useEffectSuperHerosArray, setUseEffectSuperHerosArray] = useState([])

  // - fetch Vanilla JS
  const fetchSuperHeros = () => {
    fetch("https://akabab.github.io/superhero-api/api/all.json").
      then(response => response.json()).
      then(response => {
        setFetchSuperHerosArray(response)
        console.log(response[0])
      }).
      catch(error => console.log(error))
  }

  //  - Axios better way 
  const axiosSuperHeros = ()=>{
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
    .then(response=> {
      setAxiosSuperHerosArray(response.data)
      console.log(response.data)
    }).catch(error=>console.log(error))
  }

  // - useEffect (callback function , dependency array)
  useEffect(()=>{
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
    .then(response=> {
      setUseEffectSuperHerosArray(response.data)
      console.log("Hi From useEffect ",response.data)
    }).catch(error=>console.log(error))
  }, [])
  
  return (
    <div className="App">
      <h1>SuperHeros API</h1>
      <button onClick={fetchSuperHeros}>fetch SuperHeros</button>
      <button onClick={axiosSuperHeros}>axios SuperHeros</button>
      {/* <p>{JSON.stringify(fetchSuperHerosArray)}</p> */}
      <h4>Fetch SuperHeros</h4>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Hero Name</th>
            <th>Full Name</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {
            fetchSuperHerosArray.map(hero => {
              return (
                <tr key={hero.id}>
                  <td><img src={hero.images.sm} alt={hero.name} /></td>
                  <td>{hero.name}</td>
                  <td>{hero.biography.fullName? hero.biography.fullName:"👀Unknown👀"}</td>
                  <td>{hero.biography.publisher}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <hr />
      <h4>Axios SuperHeros</h4>
      <table style={{backgroundColor:'silver'}}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Hero Name</th>
            <th>Full Name</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {
            axiosSuperHerosArray.map(hero => {
              return (
                <tr key={hero.id}>
                  <td><img src={hero.images.sm} alt={hero.name} /></td>
                  <td>{hero.name}</td>
                  <td>{hero.biography.fullName? hero.biography.fullName:"👀Unknown👀"}</td>
                  <td>{hero.biography.publisher}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <hr />
      <h4>useEffect SuperHeros</h4>
      <table style={{backgroundColor:'yellow'}}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Hero Name</th>
            <th>Full Name</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {
            useEffectSuperHerosArray.map(hero => {
              return (
                <tr key={hero.id}>
                  <td><img src={hero.images.sm} alt={hero.name} /></td>
                  <td>{hero.name}</td>
                  <td>{hero.biography.fullName? hero.biography.fullName:"👀Unknown👀"}</td>
                  <td>{hero.biography.publisher}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  );
}

export default App;
