import "./App.css";
import Game from "./components/Game";
import RightPane from "./components/RightPane";
import Sidebar from "./components/Sidebar";

function App() {
  const best ={
    move:localStorage.getItem('move')||0,
    acc:localStorage.getItem('acc')||0
  }
  const pokemonList = [
    { id: 1, name: "Charmander" },
    { id: 2, name: "Bulbasaur" },
    { id: 3, name: "Mewtwo" },
    { id: 4, name: "Gengar" },
    { id: 5, name: "Pikachu" },
    { id: 6, name: "Meowth" },
    { id: 1, name: "Charmander" },
    { id: 2, name: "Bulbasaur" },
    { id: 3, name: "Mewtwo" },
    { id: 4, name: "Gengar" },
    { id: 5, name: "Pikachu" },
    { id: 6, name: "Meowth" },
  ].sort( () => Math.random()-0.5 );
  const onStop = (move,acc)=>{
    localStorage.setItem('move',move)
    localStorage.setItem('acc',acc)
  }
  return (
    <div className="App">
      <Sidebar/>
      <Game onStop={onStop} pokemonList={pokemonList}/>
      <RightPane best={best}/>
    </div>
  );
}

export default App;
