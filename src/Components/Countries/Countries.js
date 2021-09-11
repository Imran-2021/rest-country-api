import React from 'react';
import "./Countires.css"
const Countries = (props) => {
    const {name,capital,flag,population}= props.x
    return (
        <div >
            <div style={{padding:"10px",borderRight:"2px solid red",borderBottom:"2px solid red"}}>
        <img style={{width: '300px', height: '200px'}} src={flag} alt="" />
          <h1>{name}</h1>
          <h3>{capital}</h3>
          <p>populations : {population}</p>
          <button onClick={()=>props.handleEvents(props.x)}>click to add</button> 
        </div>
        </div>
    );
};

export default Countries;