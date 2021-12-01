import React from 'react'

export default function Card(props) {
    const text = props.doYouKnow ? "Ipoda" : "Goguma"
    return (
        <div onClick={props.handleClick}>
            <h1>{text}</h1>
        </div>
    )
}


