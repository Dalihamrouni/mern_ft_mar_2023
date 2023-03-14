import './App.css';
import Home from './components/Home';
import { Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import Form from './components/Form';
import Error from './components/Error';
function App() {
  return (
    <div className="App">
      <h1>Routing</h1>
      <a href="/home"> Home (a tag)</a> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
      <Link to={"/home"}>Home(Link)</Link>
      <Form/>
      <br />
      <Routes>
        {/* <Route path='/' el */}
        <Route path='/home' element = {<Home/>}/>
        <Route path='/hero/:heroID' element={<Hero/>}/>
        <Route path='/error' element={<Error/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
