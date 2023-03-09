
import SomeClassComponent from "./components/SomeClassComponent";
import FirstFunctionalComponent from "./components/FirstFunctionalComponent";
function App() {
  const message = "Hi I am a JavaScript string"
  const age = 25
  const animals  = [
    "leopard 🐆", "giraffe 🦒","zebra 🦓", 
    "elephant 🐘", "monkey 🐵", "lion 🦁", 
    "racoon 🦝","rabbit 🐰","hamster 🐹"
  ];
  const user = {
    name :"John",
    favFood :"🍕",
    age:45
  }
  return (
    <div className="App">
      <fieldset>
        <legend>☸☸    App.js     ☸☸</legend>
        <h4>John From App.js {JSON.stringify(user)}</h4>
      <SomeClassComponent  msg = {message} john = {user} favNumber = {7}/>
      <FirstFunctionalComponent msg = {message} john = {user} favNumber = {7}/>
      </fieldset>
      
    </div>
  );
}

export default App;
