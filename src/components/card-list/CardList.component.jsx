import React from 'react'
import './CardList.styles.css'
import {Card} from '../card/Card.component'

export const CardList = props => {;
    return (
        <div className='card-list'>
            { props.swarm.map(locust => <Card key={locust.id} locust={locust}/>)}
        </div>
    )
}