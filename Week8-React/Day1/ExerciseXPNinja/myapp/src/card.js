import React from 'react';
import './card.css'

export function Cards(props) {
    const {clicon,title,description} = props.info;
    return (
        <>
        <div className='card'>
            <div className=''>
              <i></i>
            </div>
            <div className='text'>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
        </div>
        </>
    )
}