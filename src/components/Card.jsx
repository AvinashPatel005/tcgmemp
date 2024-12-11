import React, {useEffect,useState } from "react";
import bg from '../assets/bg.png'
function Card({ id,selected,onSelectChange }) {
  const [delayedSelected, setDelayedSelected] = useState(selected)
  useEffect(()=>{
    if(!selected){
      setTimeout(() => {
        setDelayedSelected(false)
      }, 600)
    }
  },[selected])
  const handleClick = () => {
    if(!selected){
      onSelectChange()
      setDelayedSelected(true)
    }
  }

  return (
    <div className={selected ? `card selected` : `card unselected`} onClick={handleClick}>
      <div className="card-front">
        <img src={bg} alt="Back of Card 1" />
      </div>
      <div className="card-back">
        {(selected||delayedSelected) && <img src={require('../assets/img' + id + ".webp")} alt="Front of Card 1" />}
      </div>
    </div>
  );
}

export default Card;
