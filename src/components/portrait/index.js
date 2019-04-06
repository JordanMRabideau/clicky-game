import React from 'react';
import "./index.css"

function Portrait(props) {
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded" onClick={props.onClick}>
            <img src={props.image} alt={props.id}></img>
        </div>
    )
}

export default Portrait;