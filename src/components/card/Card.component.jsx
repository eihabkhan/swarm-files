import React from 'react'
import './Card.styles.css'

export const Card = props => {
    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${props.locust.id}?set=set2`} alt={props.locust.name}/>
            <h2>{props.locust.name}</h2>
            <p>{props.locust.email}</p>
        </div>
    )
}