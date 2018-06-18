import React, { Component } from 'react';
import './style.css';
import Game from '../Game';
import GoalTimeLine from "../GoalTimeLine";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: []
    };
  }

  componentDidMount() {

    fetch("https://world-cup-json.herokuapp.com/matches/?details=true")
      .then(response => {
        return response.json();
      })
      .then(json => {
        const games = json.filter(game => {
          return game.status !== "future";
        });

        console.log(games);

        this.setState({ games });
      });
  }


  render() {
    return (
      <div className="app">
        <h1 className="heading">World Cup Goals</h1>
        {this.state.games.map((game, index) => {
          return (
            <div className="match">
              <Game key={index} game={game} />
              <GoalTimeLine key = {game.fifa_id} game={game}  />
            </div>
          );
        })}
         <div className = 'reload'>{setTimeout('window.location.reload()', 90000)}</div>
      </div>

    );
  }
}

export default App;
