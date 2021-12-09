import React from 'react'

export default function Card(props) {


    const text = props.doYouKnow ? props.kor : props.eng
    return (
        <div className="card" onClick={props.handleClick}>
            <h1>{text}</h1>
        </div>
    )
}


