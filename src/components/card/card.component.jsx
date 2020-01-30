import React from 'react';
import './card.styles.scss';

export const Card = (props) => (
    <div className="card-container">
        <img alt="cat" src={`https://robohash.org/${props.cat.id}?set=set4&size=200x200`}/>
        <h2> { props.cat.name } </h2>
        <p> { props.cat.email } </p>
    </div>
)