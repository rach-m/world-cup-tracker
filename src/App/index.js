import React, { Component } from 'react';
import './style.css';
import Game from '../Game';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completedGames: [],
    };
  }

  componentDidMount() {
    fetch('http://worldcup.sfg.io/matches')
      .then(response => {
        return response.json();
      })
      .then(json => {
        const completedGames = json.filter(game => {
          return game.status !== 'future';
        });

        console.log(json);

        console.log(completedGames);

        this.setState({
          completedGames,
        });
      });
  }

  render() {
    return (
      <div className="app">
        <h1 className="heading">World Cup Goals</h1>
        {this.state.completedGames.map((game, index) => {
          return <Game key={index} game={game} />;
        })}
      </div>
    );
  }
}

export default App;
