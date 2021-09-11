import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Countries from './Components/Countries/Countries';

function App() {
  const [countries, setCountries]=useState([])
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(req=>req.json())
    .then(data=>{
      setCountries(data);
    })
    .catch(err=>console.log(err))
  },[])

  const [card, setCard]= useState([])
  const handleEvents =(dt)=>{
    const newCard = [...card,dt]
    setCard(newCard);
  }
  return (
    <div >
      <h1 style={{textAlign: 'center'}}>Countries : {countries.length}</h1>
     <div className="gridsty">
       <div>
       {
        countries.map(x=><Countries x={x} handleEvents={handleEvents}/>)
      }
       </div>
       <div style={{textAlign:"justify"}}>
       
        <Card card={card}/>
       
       </div>
     </div>
    </div>
  );
}

export default App;
