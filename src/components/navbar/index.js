import React from 'react';

function Navbar(props) {
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-dark bg-primary">
              <span className="navbar-brand mb-0 h1">Clicky Game!</span>
              <div className="d-flex justify-content-end">
                <h2 className="navbar-text">Score: {props.score} | High Score: {props.highScore}</h2>
              </div>
            </nav>
        </div>
    )
}

export default Navbar;