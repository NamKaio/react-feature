import React from 'react';

const inTuoi = () => {
    return Math.floor((Math.random() * 100));
}

const person = (props) => {
    return (
        <div>
            <h2>{props.hoten} - Tuoi: { props.tuoi }</h2>
            <p>{ props.children }</p>
        </div>
    )
}

export default person