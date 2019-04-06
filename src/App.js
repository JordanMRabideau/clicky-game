import React, { Component } from 'react';
import './App.css';
import Portrait from "./components/portrait/"
import characters from "./characters.json"
import Navbar from "./components/navbar"
import Jumbotron from "./components/jumbotron"

class App extends Component {
  
  state = {
    characters,
    score: 0,
    highScore: 0,
    clicked: []
  }
  
  shufflePortraits = () => {
    let newOrder = characters;
    newOrder.sort(function(a, b) {
      return 0.5 - Math.random()
    });
    this.setState({
      characters: newOrder
    });
  }

  componentDidMount = () => {
    this.shufflePortraits()
  }

  resetGame = () => {
    this.setState({
      score: 0
    });
    this.shufflePortraits()
  }


  handleClick = (event) => {
    console.log(this.state.score)
    const portraitId = event.target.alt
    if (!this.state.clicked.includes(portraitId)) {
      let oldScore = this.state.score
      let newScore = oldScore + 1
      if (this.state.highScore < newScore) {
        this.setState({
          highScore: newScore
        });
      };
      this.state.clicked.push(portraitId);
      this.shufflePortraits();
      this.setState({
        score: newScore
      })
     
    } else if (this.state.clicked.includes(portraitId)) {
      alert(`You lose, try again!\nYour score: ${this.state.score}\nYour high score: ${this.state.highScore}`)
      this.resetGame()
    } else if (this.state.score === this.state.characters.length) {
      alert("You win! Click 'OK' to play again.")
      this.resetGame()
    }
  }

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Jumbotron />
        <div className="container">
          <div className="row justify-content-center">
            {characters.map(character => (
              <Portrait
              id={character.id}
              image={character.image}
              key={character.id}
              onClick={this.handleClick}
              />
            ))}
          </div>
        </div>
        
      </div>
    )
  }
}

export default App;
