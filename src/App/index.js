import React, { Component } from 'react';
import './style.css';
import Game from '../Game';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [],
    };
  }

  componentDidMount() {
    fetch('http://worldcup.sfg.io/matches')
      .then(response => {
        return response.json();
      })
      .then(json => {
        const games = json.filter(game => {
          return game.status !== 'future';
        });

        console.log(games);

        this.setState({
          games,
        });
      });
  }

  render() {
    return (
      <div className="app">
        <h1 className="heading">World Cup Goals</h1>
        {this.state.games.map((game, index) => {
          return <Game key={index} game={game} />;
        })}
      </div>
    );
  }
}

export default App;
