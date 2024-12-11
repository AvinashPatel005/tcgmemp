import React, { useState } from "react";
import Card from "./Card";

function Game({onStop, pokemonList }) {
  const [selected,setSelected] = useState([])
  const [done, setDone] = useState([])
  const [move,setMove]= useState(0)
  const selectCount = selected.length 
  
  const onSelectChange = (index)=>{
    if (selectCount<2)  setSelected([...selected, index])  
    setMove((e) => e + 1)
  }
  if(done.length===12){
    setTimeout(onStop(Math.floor(move / 2), Math.floor(done.length / move * 100)),0)
  }
  if (selectCount > 1) {
    if (pokemonList[selected[0]].id !== pokemonList[selected[1]].id) {
      setTimeout(() => { 
        setSelected([]) 
      }, 1000)
    }
    else{
      setTimeout(() => { 
        setDone([...selected,...done])
        setSelected([])
       },0)
    }
  }
  
  return (
    <div className="game">
        <h2 className="game-heading">FIND ALL IDENTICAL PAIRS</h2>
      <div className="card-grid">
        {pokemonList.map(({ id, name },index) => (
          <Card id={id} name={name} key={index} selected={selected.indexOf(index) !== -1 || done.indexOf(index) !== -1} onSelectChange={() => onSelectChange(index)}/>
        ))}
      </div>
      <div className="game-info">
        <p>Move: {Math.floor(move/2)}</p>
        <p>Accuracy: {move ? Math.floor(done.length / move * 100):100}%</p>
      </div>
    </div>
  );
}

export default Game;
