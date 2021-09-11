import React from 'react';

const Card = (props) => {
    const {length} = props.card;
    const totalPopulation = props.card.reduce((total,tp)=>total + tp.population,0)
    return (
        <div style={{padding:"4px"}}>
            <p>this is card</p>
            <p>total Country : {length}</p>
            <p>Tpopulation : {totalPopulation}</p>
        </div>
    );
};

export default Card;