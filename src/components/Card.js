import React from 'react'

export default function Card(props) {

    const objects = {
        id:1,
        question: "예쁘다",
        reply: "beautiful"
    }

// const chosen = objects

    const text = props.doYouKnow ? objects.question : objects.reply
    return (
        <div className="card" onClick={props.handleClick}>
            <h1>{text}</h1>
        </div>
    )
}


