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
   let refresh = () => {
      fetch("https://world-cup-json.herokuapp.com/matches/?details=true")
        .then(response => {
          return response.json();
        })
        .then(json => {
          const games = json.filter(game => {
            return game.status !== "future";
          });

          console.log(games);
          console.log('refresh');

          this.setState({ games });
        });

    };
    refresh()
    setInterval(refresh, 90000);
    }




  render() {

    return <div className="app">


        <h1 className="heading">World Cup Goals</h1>
        <div className="copyright">
          Created by Rachel Moskowitz - TESSERACT
        </div>
        {this.state.games.reverse().map((game, index) => {
          return <div className="match">
              <Game key={index} game={game} />
              <GoalTimeLine game={game} />
            </div>;
        })}
      </div>;
  }
}

export default App;
